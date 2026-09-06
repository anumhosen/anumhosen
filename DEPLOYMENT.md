# Vercel Deployment Guide

This guide outlines how to deploy the **Anum Hosen Shawon Portfolio** (`anumhosen.vercel.app`) to Vercel with zero friction.

---

## Prerequisites

1. Node.js (v18 or higher recommended)
2. npm, yarn, or pnpm
3. A free [Vercel Account](https://vercel.com/signup)

---

## Method 1: Deploying via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI Globally
```bash
npm install -g vercel
```

### Step 2: Authenticate with Vercel
```bash
vercel login
```
*Follow the on-screen browser prompt to link your Vercel account.*

### Step 3: Deploy Preview Build
Run this inside the project root directory:
```bash
vercel
```
You will be prompted with a few setup questions:
- **Set up and deploy?**: `y`
- **Which scope do you want to deploy to?**: Select your account
- **Link to existing project?**: `N`
- **What's your project's name?**: `anumhosen`
- **In which directory is your code located?**: `./`
- **Want to modify settings?**: `N`

### Step 4: Deploy to Production
To deploy directly to production (`https://anumhosen.vercel.app`):
```bash
vercel --prod
```

---

## Method 2: Deploying via Vercel Web Dashboard (Git Integration)

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern portfolio website"
   git push origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `anumhosen` GitHub repository.
4. Framework Preset will automatically be detected as **Vite**.
5. Build Settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**.

---

## SPA Routing & `vercel.json`
The project includes a pre-configured `vercel.json` file in the root:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
This ensures that deep-linked routes (such as `/projects`, `/skills`, `/about`, `/research`, etc.) load correctly on page refresh without throwing 404 errors.
