# Muhammad Junaid Zafar Portfolio

A modern, responsive developer portfolio built with React, Vite, and Tailwind CSS. The portfolio presents Muhammad Junaid Zafar's full-stack development experience, technical skills, services, projects, education, testimonials, and contact information through a dark interface with warm orange accents.

## Features

- Responsive layouts for mobile, tablet, laptop, and desktop screens
- Hero section with animated role rotation and local profile imagery
- Technical Skills section with technology icons, brand colors, and responsive cards
- About, Services, Experience, Education, Testimonials, and Contact sections
- Featured projects displayed on the homepage
- Dedicated `/projects` page showing the complete project collection
- Project detail modal with technology tags, features, GitHub links, and live demos
- Local project image assets instead of remote image dependencies
- Smooth navigation with responsive mobile menu
- Viewport-triggered section reveal animations
- Contact form connected to the Express backend with a graceful fallback state
- Warm `#ff751f` visual theme with dark surfaces and cream typography

## Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS v4
- Lucide React
- React Icons
- Canvas Confetti

### Backend

- Node.js
- Express 5
- CORS

## Project Structure

```text
MERN Portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── data/portfolioData.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Getting Started

### 1. Install frontend dependencies

```bash
cd frontend
npm install
```

### 2. Start the frontend

In the frontend terminal:

```bash
cd frontend
npm run dev
```

Vite will provide the local development URL in the terminal.

## Available Commands

Run these commands from `frontend/`:

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```


## Customizing Portfolio Content

Most portfolio content is maintained in:

```text
frontend/src/data/portfolioData.js
```

Update personal information, skills, experience, projects, education, and testimonials there. Project images are stored in:

```text
frontend/src/assets/
```

## Contact Form

The contact form submits to the backend endpoint:

```text
POST /api/contact
```

The backend currently stores submissions in memory for demonstration purposes. For production use, connect the endpoint to a persistent database and deploy the backend over HTTPS.

## Production Notes

- Build the frontend with `npm run build` from `frontend/`.
- Deploy the generated `frontend/dist` output to a static hosting provider.
- Deploy the backend separately on a Node-compatible hosting provider.
- Use HTTPS for both the frontend and backend in production.
- Configure the production frontend API URL according to the hosting environment.

## Author

**Muhammad Junaid Zafar**

- Email: junaidzafar434@gmail.com
- LinkedIn: https://linkedin.com/in/junaid-zafar70
- GitHub: https://github.com/MuhammadJunaidZafar12
