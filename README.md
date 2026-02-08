# Modern Developer Portfolio

A fully responsive, production-ready personal portfolio website built with React, Tailwind CSS, and Framer Motion. This template is designed for developers, designers, and creatives to showcase their work, skills, and industry experience.

## Features

- **💡 Clean & Modern Design**: A professional layout with a focus on typography and high-quality visuals.
- **📱 Fully Responsive**: Optimized for all devices—mobiles, tablets, and desktops.
- **✨ Smooth Animations**: Reveal-on-scroll animations and interactive UI elements using Framer Motion.
- **🎯 Dynamic Data**: Projects and Skills are centralized in data files for easy management.
- **🏗️ Component-Based Architecture**: Modular React components (Navbar, Hero, Projects, Skills, Contact).
- **✉️ Functional Contact Form**: Clean form UI with basic validation and success state handling.
- **🎨 Tailwind CSS**: Utility-first styling with a custom color palette for a professional brand.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation Steps

1.  **Clone the project**
2.  **Navigate to the project directory**:
    `cd portfolio-website`

3.  **Install dependencies**:
    `npm install`

4.  **Start the development server**:
    `npm run dev`

5.  **Build for production**:
    `npm run build`

The local development server will typically be available at `http://localhost:5173`.

## Configuration

- **Personalize Content**: Edit `src/data/projects.js` to add your projects and `src/data/skills.js` to update your technical stack.
- **Change Assets**: Replace Unsplash URLs in `src/data/projects.js` and `src/components/About.jsx` with your personal photos.
- **Social Links**: Update social media links in `src/components/Footer.jsx` and `src/components/Navbar.jsx`.
- **Primary Color**: Modify `tailwind.config.js` to change the `primary` color theme to match your personal brand.

## Project Structure

- `src/components/`: Reusable UI components.
- `src/data/`: Content files for easy data management.
- `src/App.jsx`: Main entry point orchestrating the sections.
- `tailwind.config.js`: Custom theme and Tailwind configuration.

## Troubleshooting

- **Tailwind Styles Not Applying**: Ensure `npm run dev` is running and `src/index.css` is correctly importing `@tailwind` directives.
- **Scroll Margin**: If the Navbar overlaps sections when clicking links, ensure `scroll-padding-top` is set in CSS (already included in `index.html` via `scroll-smooth` and handled by the design).
- **Images Not Loading**: Ensure you are using valid URLs or local relative paths in the `src/assets` folder.
