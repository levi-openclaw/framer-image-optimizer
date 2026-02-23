# 🖼️ Framer Image Optimizer Plugin

> Compress and optimize images for your Framer projects. Reduce file sizes without losing quality.

[![Framer Plugin](https://img.shields.io/badge/Plugin-View-blue)](https://www.framer.com/marketplace/)

## The Problem

Images are the #1 cause of slow websites:

- Large image files slow down page loads
- Poor performance hurts SEO rankings
- Mobile users waste bandwidth
- Hosting costs increase with file sizes

You've probably experienced it: a beautiful Framer site that takes forever to load because of unoptimized images.

## The Solution

**Framer Image Optimizer** compresses images directly in Framer, so you get:

- **Smaller file sizes** — 30-80% reduction
- **Faster load times** — Improve Core Web Vitals
- **Better SEO** — Google rewards fast sites
- **Lower costs** — Less bandwidth = savings

## Who It's For

| User | Use Case |
|------|----------|
| **Photographers** | Portfolios with high-res images |
| **E-commerce** | Product galleries |
| **Bloggers** | Content-heavy sites |
| **Agencies** | Client projects needing speed |

## Installation

### Step 1: Download
Download `plugin.zip` from this repository.

### Step 2: Upload to Framer
1. Go to [Framer Marketplace Dashboard](https://www.framer.com/marketplace/dashboard/plugins/)
2. Click **Add Plugin**
3. Select `plugin.zip`
4. Wait for upload

### Step 3: Use
1. Open your Framer project
2. Click **+** in plugins panel
3. Search "Image Optimizer"

## User Guide

### Adding Images

**Option 1: Drag & Drop**
1. Open the plugin
2. Drag images from your computer onto the drop zone
3. Release to add

**Option 2: Click to Browse**
1. Click the drop zone
2. Select images from your computer
3. Open

**Supported formats:**
- 📷 JPEG/JPG
- 🖼️ PNG
- 🌐 WebP
- 📽️ GIF

### Configuring Settings

Before optimizing, configure your settings:

#### Quality (10-100%)
Lower = smaller files, higher risk of artifacts

| Quality | Typical Reduction | Use Case |
|---------|-------------------|----------|
| 90-100% | 20-40% | High-quality photos |
| 70-85% | 40-60% | Balanced (recommended) |
| 50-65% | 60-80% | Thumbnails, icons |

**Recommendation:** Start with **80%** quality

#### Max Width
Resize images larger than this dimension:

| Setting | Best For |
|---------|----------|
| 800px | Thumbnails, mobile |
| 1200px | Standard web images |
| 1920px | Full-width hero images |
| 2560px | Large displays, 4K |

**Recommendation:** **1920px** for most web use

#### Output Format

| Format | Compression | Transparency | Best For |
|--------|-------------|--------------|----------|
| WebP | Best | ✅ Yes | All-around (recommended) |
| JPEG | Great | ❌ No | Photos |
| PNG | Good | ✅ Yes | Logos, graphics |
| Original | None | — | Keep source format |

**Recommendation:** **WebP** — best compression with quality maintained

### Optimizing Images

**Individual:**
1. Click **Optimize** on a single image
2. Watch progress indicator
3. See before/after sizes

**Batch:**
1. Add multiple images
2. Click **Optimize All**
3. All images compress in sequence
4. Review savings

### Reviewing Results

After optimization, see:

- **Original size** — Before compression
- **Optimized size** — After compression  
- **Savings** — Bytes saved & percentage
- **Total saved** — Across all images

```
Example:
📦 Original: 2.4 MB
📦 Optimized: 680 KB
💾 Saved: 1.72 MB (72%)
```

### Downloading

After optimization, download optimized images:

1. Click the download button on each image
2. Or use "Download All" for batch

## Features

### Core Features
- ✅ **Drag & Drop** — Easy image upload
- ✅ **Batch Processing** — Optimize multiple at once
- ✅ **Quality Control** — Slider from 10-100%
- ✅ **Format Conversion** — Convert to WebP, JPEG, PNG
- ✅ **Resize** — Set max dimensions
- ✅ **Before/After** — See actual file sizes
- ✅ **Savings Tracker** — Total bytes saved

### UI Features
- ✅ **Progress Indicators** — Visual feedback
- ✅ **Dark/Light Theme** — Matches Framer
- ✅ **Keyboard Navigation** — Faster workflow
- ✅ **Responsive Layout** — Works on any screen

## Why Optimize?

### Performance Impact

| Image Type | Before | After (WebP 80%) | Savings |
|------------|--------|------------------|---------|
| Hero Photo | 2.4 MB | 680 KB | 72% |
| Blog Banner | 1.2 MB | 340 KB | 72% |
| Thumbnail | 450 KB | 120 KB | 73% |
| Product Photo | 890 KB | 210 KB | 76% |

### SEO Benefits

Google PageSpeed Insights rewards:
- ✅ **Faster LCP** (Largest Contentful Paint)
- ✅ **Lower FCP** (First Contentful Paint)
- ✅ **Better FID** (First Input Delay)

Optimized images = faster site = higher rankings

### Cost Savings

Less bandwidth = lower hosting bills:
- Netlify: Reduced bandwidth
- Vercel: Lower usage
- Cloudflare: Less transfer

## Troubleshooting

### "Images look blurry"

Increase quality setting:
1. Go to settings
2. Raise quality to 85-90%
3. Re-optimize

### "File size didn't change much"

- Already compressed? Try WebP format
- PNG with transparency? Some loss is expected
- Very small images? Minimum size limits apply

### "Supported formats not working"

Ensure you're using:
- Valid file extensions (.jpg, .png, .webp, .gif)
- Standard color spaces (RGB, sRGB)
- Under 50MB per file

### "Upload failed"

- Check file size (max 50MB)
- Try fewer images at once
- Refresh the plugin

## Technical Details

- **Processing:** Client-side (images never leave your browser)
- **No External API:** Works completely offline
- **Format Support:** JPEG, PNG, WebP, GIF
- **Privacy:** Your images stay on your device

## Roadmap

Planning to add:

- 📦 **Bulk Export** — Download all at once as ZIP
- 🔄 **Auto-Replace** — Update images in Framer automatically  
- 📊 **History** — Track optimization over time
- 🎯 **Preset Profiles** — Save settings for different use cases

## Support

- **Bugs:** Open a GitHub issue
- **Questions:** Use GitHub Discussions
- **Features:** Suggest on GitHub

---

**Version:** 0.1.0  
**Author:** [Levi Tijerina](https://github.com/levi-openclaw)  
**License:** MIT

---

*Make the web faster, one image at a time 🖼️*
