# Personal Portfolio Website — Ian Van Lawrence Castones

A modern, responsive, and accessible personal portfolio website showcasing UI/UX design, engineering projects, and project management capabilities. Built with semantic HTML5, modern CSS (with native light/dark theme toggling), and vanilla JavaScript.

---

## 🚀 Key Features

- **Centralized Content Configuration (`js/portfolio-data.js`)**: All personal information, skills, project showcases, seminar history, and contact details live in a single JavaScript file for fast updates.
- **Native Light & Dark Mode**: Respects OS `prefers-color-scheme`, features an interactive toggle button, and persists user preferences in `localStorage`.
- **Interactive Project Showcase**: Dynamic rendering of featured projects complete with architectural highlights, key metrics, and direct links to GitHub repositories.
- **Accessible Project Detail Dialogs (`<dialog>`)**: Deep-dive project modals supporting keyboard navigation (`Esc` close) and click-outside dismissal.
- **Responsive Navigation**: Glassmorphic sticky header with smooth-scrolling links and a dedicated mobile drawer.
- **Direct Contact Layout**: Centered contact cards for quick direct email outreach.

---

## 🌟 Featured Projects

* **Agapay** — Cross-Platform Physical Therapy Healthcare Matching App (*React Native, ASP.NET Core, WSM Matching Engine*)
* **DoubleK** — Web-Based POS & Inventory Management System (*Laravel 12, Bootstrap, DomPDF, MySQL*)
* **Crispy Crowns** — POS Desktop Management System (*Python, Tkinter, OOP, MySQL*)
* **MediWatch** — Web-Based Medicine Monitoring & Inventory Management System (*Laravel, PHP, Tailwind CSS, JavaScript, MySQL*)
* **Sending Messages / Announcements** — Web-Based Messaging & Announcement System (*HTML, Tailwind CSS, PHP, Laravel Blade, JavaScript*)

---

## 📁 Project Structure

```text
MyPortfolio/
├── index.html           # Main semantic HTML markup layout
├── css/
│   ├── style.css        # Design tokens, responsive grids, and theme variables
│   └── animations.css   # Keyframe animations, transitions, and hover effects
├── js/
│   ├── portfolio-data.js # Centralized configuration file for personal details & projects
│   └── main.js          # Interactive logic, theme toggle, modals, and event listeners
├── assets/
│   ├── images/          # Project logos, user avatar, and seminar media
│   └── resume.pdf       # Professional resume
└── README.md            # Repository documentation