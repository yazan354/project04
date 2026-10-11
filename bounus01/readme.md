# Chapter V — Bounce 01: Profile Photo Switcher

## Overview
An interactive avatar customization feature that dynamically switches the profile photo using JavaScript DOM manipulation.

## Directory & File Requirements
- **Directory**: `bounce01/`
- **Files**: `index.html`, `style.css`, `script.js`, `assets/`
- **Authorized Features**: DOM manipulation, `element.src`, `element.alt`

## Key Technical Specifications
- **No Page Reload**: Profile image updates instantly without refreshing the document.
- **Dynamic Attribute Updates**: JavaScript directly modifies `.src` and `.alt` image attributes.
- **CSS Transitions**: Opacity fade effects ensure smooth visual feedback during element changes.

## Implementation Logic
```javascript
// Dynamic DOM attribute update example
profileImg.src = 'assets/profile.jpg';
profileImg.alt = 'Profile Photo';
