# Personal Developer Portfolio Website

A sleek, responsive, and accessible personal portfolio website built with modern web standards (HTML5, Modern CSS with native dark/light theme switching, and vanilla ES6 modules).

## 🚀 Key Features

- **Centralized Data Configuration (`js/portfolio-data.js`)**: All personal info, projects, skills, career timeline, and contact information live in a single, well-documented JavaScript file. You can change your name, title, bio, and projects in minutes without editing complicated HTML.
- **Native Dark & Light Mode**: Seamlessly respects the user's OS `prefers-color-scheme`, includes a manual toggle button, and persists the setting in `localStorage` without any flash of unstyled content (FOUC).
- **Interactive Project Filtering**: Instant categorization across Full Stack, Web Apps, Developer Tools, and Cloud.
- **Accessible Project Modals (`<dialog>`)**: Deep-dive project dialogs with keyboard accessibility (`Esc` dismiss), focus management, and click-outside dismissal.
- **Responsive Navigation & Mobile Drawer**: Glassmorphic sticky header with smooth-scrolling links and slide-in drawer on mobile viewports.
- **Interactive Contact Form & Toast Notifications**: Working client-side validation and simulated message dispatch with feedback toasts.
- **Modern Typography**: Integrated `text-wrap: balance` on headings and `text-wrap: pretty` on body copy.
- **Progressive Scroll Animations**: High-performance CSS scroll-driven animations with automatic fallback to `IntersectionObserver`.

---

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML markup and semantic layout
├── css/
│   ├── style.css           # Design tokens, responsive grid, light/dark themes
│   └── animations.css      # Smooth transitions, hover effects, view animations
├── js/
│   ├── portfolio-data.js   # ⭐ Central config file for your personal content
│   └── main.js             # Theme toggle, filters, dialog modals, interactive logic
├── assets/
│   └── images/             # Vector SVGs for avatar, project cards, testimonials
└── README.md               # Documentation and deployment guide
```

---

## ✏️ How to Customize for Yourself

Open `js/portfolio-data.js` in your editor and update the fields:

1. **Personal Information**: Change `name`, `role`, `tagline`, `location`, `email`, `phone`, and statistics.
2. **Socials**: Update your GitHub, LinkedIn, Twitter/X, and email links.
3. **About Me**: Update your bio paragraphs and architectural highlights.
4. **Skills**: Add or modify categories, technologies, and proficiency percentages.
5. **Projects**: Add your own real projects, summaries, key features, tech stacks, and live demo / GitHub URLs.
6. **Experience & Education**: Update your work history, companies, dates, and achievements.

---

## 💻 Local Preview

You can open `index.html` directly in any web browser, or serve it using Node's built-in tools or Python:

```bash
# Using npx serve (recommended)
npx serve .

# Or using Node directly
node -e "require('http').createServer((req, res) => require('fs').createReadStream(req.url === '/' ? 'index.html' : req.url.slice(1)).pipe(res)).listen(3000, () => console.log('Serving on http://localhost:3000'))"
```

Then visit `http://localhost:3000`.

---

## 🌐 Free One-Click Deployment

### Option 1: GitHub Pages
1. Push this folder to a GitHub repository (e.g. `yourusername/portfolio`).
2. Go to repository **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save** — your site is live at `https://<username>.github.io/<repo>/`!

### Option 2: Vercel or Netlify
- Drag and drop this folder directly into the [Vercel](https://vercel.com) or [Netlify](https://netlify.com) dashboard for an instant HTTPS URL with global edge CDN caching.
