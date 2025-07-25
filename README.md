# 🛰 GlobalEye Drones  
*Vision Beyond Imagination*
- For more Detail visit: [Globaleye Drones](https://docs.google.com/document/d/10t7SslvsuMNOTY0cg9A-hN-ME_h2e2zEJNKVW0cjKiw/edit?usp=sharing)
## 🌐 Overview  
GlobalEye Drones is a modern website showcasing intelligent drone technology for industries like agriculture, surveillance, delivery, and environmental monitoring. The platform highlights our fleet, use cases, case studies, and contact options.

## 🚀 Tech Stack
- *Next.js* – React framework for fast static & dynamic pages
- *Tailwind CSS* – Utility-first CSS for modern UI
- *Lucide* – Clean icons for features and industries

## 🧩 Pages Breakdown

### 🔹 Home
- Hero with tagline and CTA
- Intro to GlobalEye
- Features
- Solutions grid (agriculture, delivery, etc.)
- CTA: “Book a Demo”

### 🔹 About
- Company mission & vision
- Intro to AI + Drone tech
- Team Intro

### 🔹 Fleet
- Cards for drones
- Features: range, battery, sensors
- "Enquire" button

### 🔹 Solutions
- 4–5 industries with icons & brief use cases

### 🔹 Case Studies
- Challenge → Solution → Result → Testimonial → CTA
- Real-world drone deployments

### 🔹 Contact
- Contact form
- Email, phone
- Social media links

## 🎯 Features
- Responsive layout (mobile-first)
- SEO-optimized
- Form validation
- Clean animations & transitions
- Accessibility ready (ARIA, contrast)

## 📦 Setup Instructions

```bash
# Clone this repo
git clone https://github.com/harshitabisht05/globaleyedrones.git

# Install dependencies
npm install
npm install framer-motion
npm install react-icons

# Run locally
npm run dev
```
---

# ✅ GlobalEye Drones – Development Checklist

## ⚙ Setup
- [X] Create Next.js project  
- [X] Add Tailwind CSS  
- [X] Configure favicon, fonts (title, meta, etc.)  
- [X] Set up routing and global layout
- [X] Add public assets (logo, images, icons)  

---

## 📄 Pages
- [X] / Home Page  
- [ ] /about About Page  
- [ ] /fleet Fleet Page  
- [ ] /solutions Solutions Page  
- [X] /case-studies Case Studies Page  
- [ ] /contact Contact Page  

---

## 🧩 Components
- [ ] AboutIntro.jsx  
- [X] CaseStudyCard  
- [ ] ContactForm 
- [X] CTASection
- [X] DarkModeToggle
- [ ] DroneCard
- [X] FeaturesSection
- [ ] Footer  
- [X] HeroSection  
- [X] IndustriesSection 
- [ ] InnovationSection 
- [ ] MissionSection  
- [ ] Navbar  
- [ ] SolutionCard  
- [ ] TeamSection  
- [X] ThemeProvider
---
| *Member*   | *Pages*                   | *Components*                                                                                                                                                                  | *Responsibilities*                                                                                                                                     |
| ------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *Harshita* | / (Home), /case-studies |- All home page components<br>- SolutionsGrid.jsx<br>- DroneCard.jsx<br>- CaseStudyCard.jsx<br>- TestimonialCard.jsx<br>- DarkModeToggle.jsx| - Build full homepage layout<br>- Create Case Studies page with structure:<br>Challenge → Solution → Result → Testimonial<br>- Ensure layout consistency |
| *Paridhi*  | /contact, /solution           |- SolutionCard.jsx<br>- Navbar.jsx<br>- TeamSection.jsx<br>- ContactForm.jsx<br>- SocialLinks.jsx  jsx                                                                                         | - Maintain visual consistency<br>- Build contact form with validation<br>- Add social links                         |
| *Ojaswee*  | /fleet, /about        |- AboutIntro.jsx<br>- MissionSection.jsx<br>- InnovationSection.jsx<br> - DroneCard.jsx<br>- Footer.jsx                                                                           | - About page layout + team intro<br>- Fleet page with drone details<br>                                      |
---

## 🧩 Project Structure

```
app/
├── page.jsx                  # Home Page
├── layout.jsx               # Root layout (includes Navbar and Footer)
├── globals.css              # Tailwind Global Styles

├── about/
│   └── page.jsx             # About Page

├── case-studies/
│   └── page.jsx             # Case Studies Page

├── contact/
│   └── page.jsx             # Contact Page

├── fleet/
│   └── page.jsx             # Fleet Page

├── solutions/
│   └── page.jsx             # Solutions Page

components/
├── AboutIntro.jsx
├── CaseStudyCard.jsx
├── ContactForm.jsx
├── CTASection.jsx
├── DarkModeToggle.jsx
├── DroneCard.jsx
├── FeaturesSection.jsx
├── Footer.jsx
├── HeroSection.jsx
├── IndustriesSection.jsx
├── InnovationSection.jsx
├── MissionSection.jsx
├── Navbar.jsx
├── SolutionCard.jsx
├── TeamSection.jsx
├── ThemeProvider.jsx


public/
├── bg-drones/                 
└── images/                  

```
## Styling
### Font
 - For Heading
```bash
<h1
  className="text-5xl font-bold text-gray-900"
  style={{ fontFamily: 'var(--font-heading)' }}
>
  AI-powered drone solutions
</h1>
```
- For Body
```bash
<p className="text-gray-700 mt-4" style={{ fontFamily: 'var(--font-body)' }}>
  Real-time video intelligence for agriculture, infrastructure, and beyond.
</p>
```
### BG
- Use a gradient bg:
```bash
className="relative h-screen flex items-center justify-center overflow-hidden px-4 bg-gradient-to-br from-white via-blue-100 to-blue-300 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-500"
```
## 🙌 Contribution
Each intern will be assigned a specific folder. Submit your progress via Pull Requests to the main branch.

## 📄 License
All rights reserved by Sentienta QualityAI. This project is part of an internal research initiative. Do not redistribute without permission.

## Next Projects
- UniNow (Completed)
- GlobalEye AI (Completed)
- GlobalEye Drones (Ongoing)
