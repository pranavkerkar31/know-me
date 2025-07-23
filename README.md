# 💼 Pranav Kerkar - Portfolio Website

Welcome to my personal developer portfolio built using **Next.js**, **Tailwind CSS**, **TypeScript**.

This website includes:
- Hero section with intro and social links
- Education and Skills
- Projects with GSAP animation
- Curriculum (certifications, events, achievements)
- Experience
- Contact form

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **TypeScript**
- **Icons**: [FontAwesome](https://fontawesome.com/)
- **Fonts**: [Geist](https://vercel.com/fonts/geist)

---

## 📁 Folder Structure

myapp/
├── app/ # All route components (App Router)
├── components/ # Reusable UI components
├── public/ # Static files like images, profile picture
├── styles/ # (optional)
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio/myapp
2. Install Dependencies
Make sure you have Node.js ≥ 18 installed.


npm install
Or, if you're using Yarn:

yarn install
3. ⚠ Warning: Multiple Lockfiles?
You might see:

makefile

Warning: Found multiple lockfiles...
Fix: Delete the unnecessary one:


rm ../package-lock.json
Only keep myapp/package-lock.json or yarn.lock in the root folder.

4. Run Dev Server

npm run dev
Visit: http://localhost:3000

📦 Production Build

npm run build