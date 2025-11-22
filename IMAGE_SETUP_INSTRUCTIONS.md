# Image Setup Instructions

## Required Image Files

To complete the website updates, please save the following images to the specified locations:

### 1. Emily Portrait Image (About Page)
**Location:** `public/ebc-cake-images/emily-portrait.jpg`
**Source:** The image you provided showing Emily in her bakery (image #4 from your attachments)
**Recommended Size:** 800x1000px or similar portrait orientation
**Format:** JPG

**To add this image:**
1. Save the Emily portrait photo as `emily-portrait.jpg`
2. Place it in the `public/ebc-cake-images/` folder
3. The About page will automatically display it in the Our Story section

### 2. Hero Image (Home Page)
**Location:** `public/ebc-cake-images/hero-cake.jpg`
**Source:** Use your best hero/banner image (the chocolate cake with berries - image #3)
**Recommended Size:** 1920x1080px or larger
**Format:** JPG

**To add this image:**
1. Save your hero banner image as `hero-cake.jpg`
2. Place it in the `public/ebc-cake-images/` folder
3. The home page hero section will automatically use it as the background

## Current Status

✅ **CSS Updates:** All styling has been updated and is ready
✅ **HTML Updates:** The About page structure has been modernized
✅ **FAQ Section:** Completely redesigned with modern card layout
✅ **Our Story Layout:** Now uses a two-column responsive grid

⚠️ **Pending:** You need to manually save the two images above to complete the setup

## Quick Setup

If using PowerShell, you can verify the images are in place:
```powershell
Get-ChildItem "C:\Users\adere\Desktop\EBCWIP\public\ebc-cake-images\" | Where-Object { $_.Name -match "emily-portrait|hero-cake" }
```

Once both images are in place, refresh your browser to see all updates live!
