# Blog image list — you will supply the images

**No image or video was included in this ZIP.** Please add your own legally usable pictures (from your source files) to `public/images/blog/cls-reference/`. These paths are used automatically for Blog cards, Article Details, sidebar and related posts.

Recommended: 1200 × 675 px, landscape 16:9, **AVIF**. If your download is PNG/JPG, convert it to `.avif` or change the `image` property in `src/data/blog-posts.js` to the actual extension.

## Page 1 — 12 posts

1. **AI Cameras in Modern Video Surveillance: What Can Smart Analytics Do?** — `ai-cameras-modern-surveillance.avif`
2. **IP vs. HDCVI Cameras: Which Technology Fits Your Project?** — `ip-vs-hdcvi-cameras.avif`
3. **Video Guide: Setting Up an NVR Recorder and Planning Storage** — `video-guide-nvr-recorder-setup.avif` — video thumbnail
4. **Business Burglary Protection: Five Important Security Measures** — `business-burglary-protection.avif`
5. **4K Ultra HD Surveillance: Is the Upgrade Worth It?** — `4k-ultra-hd-video-surveillance.avif`
6. **Wireless vs. Wired Alarm Systems: A Practical Comparison** — `wireless-vs-wired-alarm-systems.avif`
7. **Video Guide: Connecting a Video Door Intercom to Your Phone** — `video-guide-door-intercom-app.avif` — video thumbnail
8. **CCTV and Privacy: Planning Responsible Video Monitoring** — `responsible-cctv-privacy.avif`
9. **Power over Ethernet (PoE) for CCTV: Explained Simply** — `poe-technology-explained.avif`
10. **Full-Color Night Vision vs. Infrared: What Changes?** — `full-color-vs-infrared-night-vision.avif`
11. **Security Funding in Germany: Understanding KfW Support for Burglary Protection** — `german-kfw-security-funding.avif`
12. **Video Guide: Testing AI Person and Vehicle Detection** — `video-guide-ai-person-vehicle-detection.avif` — video thumbnail

## Page 2 — 12 posts

13. **Electronic Access Control: RFID, PIN Codes or Biometrics?** — `electronic-access-rfid-pin-biometrics.avif`
14. **Holiday Security Checklist: Protecting Your Home While Away** — `holiday-home-security-checklist.avif`
15. **Long-Range Wireless Links for CCTV: Connecting Distant Buildings** — `long-range-wireless-links-cctv.avif`
16. **Thermal Security Cameras: Seeing Temperature Differences** — `thermal-security-cameras.avif`
17. **Video Guide: Pairing Wireless Alarm Sensors and Configuring Zones** — `video-guide-pair-wireless-alarm-sensors.avif` — video thumbnail
18. **Two-Wire Bus vs. IP Networking for Video Door Intercoms** — `two-wire-vs-ip-video-intercom.avif`
19. **Cybersecurity for CCTV: Protecting Cameras and Recorders** — `cctv-cyber-security-checklist.avif`
20. **Commercial Perimeter Protection: Barriers, Sensors and Video** — `commercial-perimeter-security.avif`
21. **Mechanical vs. Electronic Burglary Protection: Why Both Matter** — `mechanical-vs-electronic-burglary-protection.avif`
22. **Video Guide: Installing an NVR Hard Drive and Planning RAID Storage** — `video-guide-install-nvr-hard-drive.avif` — video thumbnail
23. **License Plate Recognition (LPR / ANPR): How Security Cameras Read Plates** — `lpr-anpr-number-plate-recognition.avif`
24. **Smoke Detector Requirements in Germany: Understanding DIN 14676** — `german-din-14676-smoke-detector-guide.avif`

## Video posts

The red YouTube badge on a thumbnail identifies video posts. They are also available under the **Video Guides** filter. To make the video play on its detail page, add its real 11-character YouTube ID to the article's `youtubeId` in `src/data/blog-posts.js`. No YouTube IDs were guessed or fabricated. Without the ID, the detail page shows the provided image, not a fake player.

## Installation

Replace ONLY these files in your existing GCTL project:

- `public/components/blog.html`
- `public/components/blog-details.html`
- `src/blog.css`
- `src/blog-page.js`
- `src/blog-details-page.js`
- `src/data/blog-posts.js`

Add this README and the `public/images/blog/cls-reference/` folder. **Do not replace navbar, footer or any other shared files.** This assumes the previous blog patch (including `blog.html`, `blog-details.html`, and Blog nav link) is already installed.

View `/blog.html`, `/blog.html?category=Video%20Guides`, and `/blog-details.html?slug=ip-vs-hdcvi-cameras`.

Article text and dates are English demo text, based on the order and topics of the reference listings, NOT copied full articles or verified GCTL publications. Review content and publication dates before public deployment. The German funding/DIN articles contain explicit regional qualification.

Test note: JS parsing and desktop/mobile page interactions passed in a browser test fixture; a full Vite production build was not available without the project's npm dependencies.
