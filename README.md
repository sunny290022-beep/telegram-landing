# Telegram Landing Page

Simple HTML/CSS/JavaScript landing page for Telegram group promotion.

## Features

- ✅ 18 Telegram group links (rotating)
- ✅ Click anywhere on page to open link
- ✅ Yellow button with shake animation
- ✅ Pointing hand icon directing to button
- ✅ Decorative icons in 4 corners with bounce animation
- ✅ Responsive design (mobile & desktop)
- ✅ Khmer language support
- ✅ Link state saved in localStorage

## How it works

1. User clicks anywhere on the page or the button
2. Opens a Telegram group link in a new tab
3. Next click opens the next link in rotation
4. After 18 clicks, it cycles back to the first link
5. Link index is saved in localStorage

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and animations
- `script.js` - JavaScript functionality
- `README.md` - This file

## Deployment

### Vercel
1. Upload this folder to GitHub
2. Connect to Vercel
3. Deploy
4. Add custom domain

### Manual
1. Upload files to any web hosting
2. Ensure all files are in the same directory
3. Access via web browser

## Customization

To change Telegram links, edit the `TELEGRAM_LINKS` array in `script.js`.

## Browser Support

- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers

## License

MIT
