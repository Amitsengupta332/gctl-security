/**
 * Optional migration helper for media you're permitted to reuse.
 * Downloads original CLS article images, maps them to the 24 existing GCTL
 * article records in their current chronological order, and saves AVIFs.
 * Never inserts invented/stock imagery and never overwrites a local photo.
 * Usage: node scripts/download-cls-blog-images.mjs [--dry-run]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { BLOG_POSTS } from '../src/data/blog-posts.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/images/blog/cls-reference');
const site = 'https://cls-security.de';
const dryRun = process.argv.includes('--dry-run');
const decode = (value) => String(value || '')
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/&#x2F;/gi, '/').replace(/&#x3A;/gi, ':').replace(/\\u0026/g, '&');
const absolute = (value, base = site) => {
  if (!value || /^data:|^blob:|^javascript:/i.test(value)) return '';
  try {
    const uri = new URL(decode(value), base);
    if (uri.pathname === '/_next/image' && uri.searchParams.get('url')) {
      return absolute(uri.searchParams.get('url'), site);
    }
    return uri.protocol === 'https:' || uri.protocol === 'http:' ? uri.toString() : '';
  } catch { return ''; }
};

async function get(url, binary = false) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 22000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36',
        'Accept': binary ? 'image/avif,image/webp,image/*,*/*;q=0.8' : 'text/html,application/xhtml+xml',
        'Referer': site + '/blog'
      }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
    return binary ? { bytes: Buffer.from(await response.arrayBuffer()), mime: response.headers.get('content-type') || '' }
      : await response.text();
  } finally { clearTimeout(timeout); }
}

function articleLinks(html) {
  const found = new Set();
  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)) {
    const u = absolute(match[1]);
    if (!u) continue;
    const pathName = new URL(u).pathname;
    // Only article paths, never tags, navigation or blog category views.
    if (new URL(u).hostname === 'cls-security.de' && /^\/blog\/[a-z0-9-]+\/?$/i.test(pathName)) found.add(u.split('?')[0]);
  }
  return [...found];
}

function getMeta(html, attribute, name) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = match[0];
    const prop = tag.match(new RegExp('\\b' + attribute + '=["\']([^"\']+)["\']', 'i'))?.[1];
    if (prop !== name) continue;
    const content = tag.match(/\bcontent=["']([^"']+)["']/i)?.[1];
    if (content) return decode(content);
  }
  return '';
}

function imageCandidates(html) {
  const candidates = [];
  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    const alt = decode(tag.match(/\balt=["']([^"']*)["']/i)?.[1] || '');
    const sources = [tag.match(/\b(?:src|data-src)=["']([^"']+)["']/i)?.[1]];
    const set = tag.match(/\b(?:srcset|data-srcset)=["']([^"']+)["']/i)?.[1];
    if (set) sources.push(...decode(set).split(',').reverse().map(x => x.trim().split(/\s+/)[0]));
    for (const source of sources) {
      const url = absolute(source);
      if (url && !/favicon|logo|icon|avatar|payment|social|captcha|placeholder|\.svg(?:\?|$)/i.test(url) && !/captcha|logo/i.test(alt)) candidates.push({ url, alt });
    }
  }
  return candidates;
}

// Prefer the OpenGraph article photo, then matching full-size main article images.
function findArticleImage(html) {
  const meta = getMeta(html, 'property', 'og:image') || getMeta(html, 'name', 'twitter:image');
  const all = imageCandidates(html);
  const pageTitle = getMeta(html, 'property', 'og:title') || html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, ' ') || '';
  const words = pageTitle.toLocaleLowerCase().split(/\W+/).filter(x => x.length > 4);
  const rated = all.map((x, index) => ({ ...x, score: words.filter(word => x.alt.toLocaleLowerCase().includes(word)).length * 4 - index / 100 }));
  rated.sort((a,b) => b.score - a.score);
  if (rated.length && rated[0].score >= 4) return rated[0].url;
  const metaUrl = absolute(meta);
  if (metaUrl && !/logo|fallback/i.test(metaUrl)) return metaUrl;
  return ''; // No confident match -> leave the file empty.
}

async function main() {
  console.log('CLS Blog photo importer — source attribution and reuse rights remain your responsibility.');
  await fs.mkdir(outDir, {recursive: true});
  const first = await get(`${site}/blog`);
  const second = await get(`${site}/blog?p=2`);
  const page1 = articleLinks(first);
  const page2 = articleLinks(second);
  const urls = [...page1.slice(0, 12), ...page2.slice(0, 12)];
  if (page1.length < 12 || page2.length < 12) {
    throw new Error(`Could not reliably identify the 24 articles. Found ${page1.length} on page 1, ${page2.length} on page 2. No files written; source site markup may have changed.`);
  }
  let downloaded = 0, skipped = 0, missing = 0;
  for (const [index, post] of BLOG_POSTS.entries()) {
    const dest = path.join(root, 'public', post.image.replace(/^\//,''));
    try {
      await fs.access(dest);
      console.log(`EXISTS  ${path.basename(dest)}`); skipped++; continue;
    } catch {}
    const articleUrl = urls[index];
    try {
      const html = await get(articleUrl);
      const imageUrl = findArticleImage(html);
      if (!imageUrl) { console.warn(`MISSING ${post.slug} — couldn't find an unmistakable article photo: ${articleUrl}`); missing++; continue; }
      if (dryRun) { console.log(`MATCH ${post.slug} <- ${imageUrl}`); continue; }
      const {bytes,mime} = await get(imageUrl,true);
      if (!mime.startsWith('image/') || mime.includes('svg') || bytes.length < 3500) throw new Error(`Invalid image (${mime}, ${bytes.length} bytes)`);
      const meta = await sharp(bytes).metadata();
      if (!meta.width || meta.width < 300 || meta.height < 180) throw new Error(`Suspicious image dimensions: ${meta.width}x${meta.height}`);
      await sharp(bytes).rotate().avif({quality: 75, effort: 4}).toFile(dest);
      downloaded++;
      console.log(`SAVED   ${path.basename(dest)} (${meta.width}x${meta.height}) <- ${imageUrl}`);
    } catch (error) {
      missing++; console.warn(`FAILED  ${post.slug}: ${error.message}`);
    }
  }
  console.log(`Finished: ${downloaded} downloaded, ${skipped} already existed, ${missing} missing. ${dryRun ? '(DRY RUN)' : ''}`);
  if (missing) process.exitCode = 2;
}

main().catch(error => { console.error('Stopped:', error.message); process.exitCode = 1; });
