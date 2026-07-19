# Majini Landing Page

A responsive, static landing page for Majini — a Galway-based alternative rock band. The site showcases the band, members, music, videos, and includes a contact form with Netlify form submission support.

## Features

- Fully responsive landing page using Bootstrap 5
- Band hero section with call-to-action buttons
- About section with band overview
- Responsive band member carousel and desktop grid
- Music section with embedded audio tracks and Spotify players
- Video section with YouTube embeds
- Contact form configured for Netlify form handling
- Dark rock-inspired design with custom CSS

## Project Structure

- `index.html` — main landing page markup
- `styles/styles.css` — custom styles for the page
- `carousel.js` — dynamic member carousel and grid rendering
- `main.js` — contact form submission handler
- `audio/` — local audio files included for music playback
- `images/` — logo, band member photos, and other visuals

## Usage

1. Open `index.html` in a browser to view the site locally.
2. Ensure your browser can access the external CDN assets: Bootstrap, Font Awesome, and Google Fonts.

## Deployment

This is a static site and can be deployed to any static hosting service.

Recommended options:

- Netlify
- GitHub Pages
- Vercel
- Firebase Hosting

### Netlify Notes

The contact form is configured with Netlify form support.

- The form uses `method="POST"` and includes `netlify` attribute.
- `main.js` intercepts the submit event and sends form data as `application/x-www-form-urlencoded`.

## Customization

You can update the site by:

- Editing `index.html` for section content and embedded media
- Updating `styles/styles.css` for layout and design changes
- Adding or replacing audio files in `audio/`
- Editing `carousel.js` to change the band members list and carousel behavior

## Notes

- The site relies on external CDNs for Bootstrap and Font Awesome.
- If you want to use the page offline, replace CDN links with local assets.

## License

This project contains original visuals and audio assets for Majini.
