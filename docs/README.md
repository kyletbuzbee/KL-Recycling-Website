# K&L Recycling Static Website

A complete static HTML/CSS/JavaScript website for K&L Recycling, a family-owned scrap metal recycling company serving East Texas since 1956.

## 🏗️ Project Structure

```
groq/index/groq/
├── index.html              # Homepage
├── about.html              # About Us page
├── services.html           # Services overview
├── community.html          # Community involvement
├── contact.html            # Contact information
├── quote.html              # Quote request form
├── resources.html          # Resources hub
├── materials-we-buy.html   # Materials catalog
├── sustainability.html     # Environmental impact
├── compliance-certifications.html # Certifications & compliance
├── careers.html            # Career opportunities
├── services/               # Service detail pages
│   ├── roll-off.html
│   ├── oilfield-demolition.html
│   ├── mobile-crushing.html
│   └── public-services.html
├── assets/                 # Image assets (placeholder structure)
├── styles.css              # Complete Tailwind CSS framework
├── scripts.js              # Interactive JavaScript
└── README.md               # This file
```

## 🎯 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Interactive Elements**: JavaScript-powered mobile menu, service tabs, rotating banner
- **SEO Optimized**: Proper meta tags, canonical URLs, semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Performance**: CDN-hosted Tailwind CSS, optimized fonts, minimal JavaScript

## 🛠️ Technical Stack

- **HTML5**: Semantic markup with accessibility considerations
- **Tailwind CSS 3.4.3**: Custom utility classes and responsive design
- **Vanilla JavaScript**: No frameworks, lightweight interactions
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Lato font family for typography

## 🚀 Deploying to GitHub Pages

1. **Create Repository**: Push all files to the root of a public GitHub repository
2. **Enable Pages**: Go to repository Settings → Pages
3. **Configure Source**: Select "Deploy from a branch" → Main branch → "/root" folder
4. **Deploy**: Automatic deployment within 2-3 minutes
5. **Access**: Visit `https://[username].github.io/[repository-name]/`

## 🎨 Design System

- **Primary Colors**: Royal Blue (`#0b3d91`), Electric Blue (`#3b82f6`), Slate Gray (`#4a4a4a`)
- **Typography**: Lato font family (weights: 100-900)
- **Spacing**: Consistent container padding and section margins
- **Shadows**: Layered shadow system for depth
- **Buttons**: Rounded corners with hover animations

## 📱 Responsive Breakpoints

- **Mobile**: Up to 475px
- **Small**: 640px and up
- **Medium**: 768px and up
- **Large**: 1024px and up
- **Extra Large**: 1280px and up
- **2XL**: 1536px and up

## 🔧 Customization

### Colors
Edit the Tailwind config in the `<head>` section of each HTML file:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "royal-blue": {
          50: "#e6eef7", 100: "#cce0ef", // ...custom palette
        }
      }
    }
  }
}
```

### Content
Update text, links, and asset paths directly in the HTML files. All content is pulled from the original K&L Recycling data sources.

### Services
Add new service detail pages by creating `services/new-service.html` and linking from `services.html`.

## 📊 Content Sources

- **Company Data**: `src/data/services.ts`, `src/data/locations.ts`
- **Content**: Based on K&L_Recycling_Complete_Website_Prompt.md
- **Package Info**: `package.json` metadata
- **Assets**: Placeholder structure requires actual image/video files

## 🔗 Navigation Structure

- **Header**: Fixed navigation with mobile hamburger menu
- **Footer**: 4-column layout with quick links
- **Dropdowns**: Hover-activated navigation for Materials and Resources
- **Interlinking**: All pages connect via consistent navigation

## 📈 SEO Features

- Canonical URLs for each page
- Meta descriptions and keyword optimization
- Semantic HTML structure
- Alt text for all images
- Open Graph ready (add og:image for social sharing)

## 🧪 Testing

- **Local Development**: Open `index.html` in any modern browser
- **Responsive Testing**: Resize browser or use developer tools
- **Cross-browser**: Tested in Chrome, Firefox, Safari, Edge
- **Mobile Testing**: Test on actual devices for best results

## 📝 License

© 2024 K&L Recycling. All Rights Reserved.

This website was generated as part of the K&L Recycling Complete Website Prompt project.
