# Abyss Studios - Game Development Studio Website

A modern, responsive website for Abyss Studios, showcasing our game development projects, team, and career opportunities.

## 🎮 Features

- **Modern Design**: Sleek, techno-aesthetic with crimson color scheme
- **Responsive Layout**: Optimized for all devices
- **Interactive Elements**:
  - Dynamic particle background
  - Smooth scrolling
  - Animated transitions
  - Interactive game cards
  - Modern form designs
- **Career Portal**:
  - Job listings
  - Interactive application form
  - Resume upload functionality
- **Contact System**:
  - Email integration
  - Form validation
  - Success/error handling

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Nodemailer
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18.0 or later
- npm or yarn
- SMTP server credentials

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abyss-studios/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   SMTP_HOST=your-smtp-host
   SMTP_PORT=your-smtp-port
   SMTP_USER=your-smtp-username
   SMTP_PASSWORD=your-smtp-password
   CONTACT_EMAIL=your-contact-email
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
abyss/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── careers/        # Careers pages
│   │   ├── contact/        # Contact page
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   └── styles/            # Global styles
├── public/                 # Static assets
└── package.json           # Project dependencies
```

## 📧 Email Configuration

The website uses Nodemailer for sending emails. Configure your SMTP settings in the `.env.local` file with your preferred email service provider.

## 🎨 Customization

### Colors
The main color scheme uses crimson (`#DC143C`) as the primary color. You can modify the colors in:
- `tailwind.config.js` for global color definitions
- `globals.css` for specific component styles

### Content
Update the content in:
- `src/app/page.tsx` for the home page
- `src/app/careers/page.tsx` for job listings
- `src/components/` for reusable components

## 🚀 Deployment

The site is configured for deployment on Vercel:

1. Push your code to the repository
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

## 📝 License

Copyright © 2024 Abyss Studios. All rights reserved.

This project is proprietary and confidential. Unauthorized copying, distribution, or use of this project, via any medium, is strictly prohibited.
