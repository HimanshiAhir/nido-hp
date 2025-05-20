# Installer Page Implementation

This folder contains components for the Installer page.

## Required Image Files

For the installer page to display correctly, please add the following image files to your assets directory:

1. `Header_HeatPump.png` - This is the background image for the banner section in desktop view (used in CSS)
2. `Header_HeatPump-mobile.png` - This is the image used in mobile view when the background image is hidden

These files should be placed in:
- `/Users/mohit-15993/mohit/dev/react/nido-hp/public/assets/media/`

## Components 

- `InstallerBanner.jsx` - Banner component for the Installer page
- `InstallerProcess.jsx` - Process section showing the three-step workflow
- `InstallerPage.jsx` - Main container component that includes the header, banner, process section and footer

## Access

The Installer page is accessible at the `/installer` URL route.
