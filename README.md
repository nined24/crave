# CRAVÉ - Gourmet Cakes & Cookies Website

A beautiful, modern website for a gourmet bakery featuring cakes and cookies.

## Setup Instructions

### 1. Background Image
Place your background image file in the project root directory and name it `background.jpg`. The image should be the one you uploaded showing the baked goods on a wooden table.

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

If your image has a different name or format, update the `background-image` property in `styles.css` (line ~95):

```css
background-image: url('your-image-name.jpg');
```

### 2. Running the Website

Simply open `index.html` in your web browser, or use a local server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js (http-server):**
```bash
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Search Functionality**: Search modal to find products
- **Interactive Elements**: Hover effects and animations
- **Modern UI**: Clean, elegant design inspired by gourmet bakery aesthetics

## Customization

- **Colors**: Edit CSS variables in `styles.css` (`:root` section)
- **Products**: Update the products array in `script.js`
- **Content**: Modify text in `index.html`

## Future Database Integration

The website is ready for database integration. You can add:
- Product data from database
- User authentication
- Shopping cart functionality
- Order management
- Customer reviews

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

