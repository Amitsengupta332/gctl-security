import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const tasks = [
  {
    dir: "public/images/hero/mobile",
    backup: "public/images/hero/mobile-original-backup",
    width: 720,
    height: 1260,
    quality: 45,
  },
  {
    dir: "public/images/products/banners",
    backup: "public/images/products/banners-original-backup",
    width: 900,
    height: 300,
    quality: 45,
  },
];

function kb(bytes) {
  return `${Math.round(bytes / 1024)} KB`;
}

for (const task of tasks) {
  const inputDir = path.resolve(task.dir);
  const backupDir = path.resolve(task.backup);

  try {
    await fs.access(backupDir);
    console.log("Backup already exists:", task.backup);
  } catch {
    await fs.cp(inputDir, backupDir, { recursive: true });
    console.log("Backup created:", task.backup);
  }

  const files = await fs.readdir(inputDir);

  for (const file of files) {
    if (!/\.(avif|webp|jpg|jpeg|png)$/i.test(file)) continue;

    const inputPath = path.join(inputDir, file);
    const parsed = path.parse(file);

    const tempPath = path.join(inputDir, `${parsed.name}.tmp.avif`);
    const finalPath = path.join(inputDir, `${parsed.name}.avif`);

    const oldSize = (await fs.stat(inputPath)).size;

    await sharp(inputPath)
      .resize({
        width: task.width,
        height: task.height,
        fit: "cover",
        position: "center",
        withoutEnlargement: true,
      })
      .avif({
        quality: task.quality,
        effort: 6,
      })
      .toFile(tempPath);

    const newSize = (await fs.stat(tempPath)).size;

    await fs.rename(tempPath, finalPath);

    console.log(`${task.dir}/${file}: ${kb(oldSize)} -> ${kb(newSize)}`);
  }
}

console.log("Security project images optimized successfully.");