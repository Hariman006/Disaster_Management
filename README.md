# DisasterAware - Disaster Management Awareness Platform

DisasterAware is a public safety awareness web platform designed to educate communities on preparing for, surviving, and recovering from natural disasters.

## Features
- **Disaster Profiles**: In-depth guidelines for 10 natural disasters (Earthquakes, Floods, Cyclones, Landslides, Tsunamis, Droughts, Wildfires, Heatwaves, Thunderstorms, Volcanoes).
- **Emergency Action Center**: Instant top-3 survival actions with 1-click access to full disaster guides.
- **Interactive Emergency Kit Checklist**: Track your essential preparation supplies with a real-time readiness meter.
- **Survival Timeline**: Step-by-step instructions for before, during, and after emergencies.
- **DOs and DON'Ts**: Clear, accessible survival rules.
- **Preparedness Quiz**: Test your disaster readiness score with instant explanations.
- **Emergency SOS & Contacts**: Quick access to national emergency hotlines.

---

## Local Development

Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To test the production static build locally:

```bash
npm run build
```

This compiles a static export to the `./out` directory.

---

## Hosting on GitHub Pages

This project is configured for static export to **GitHub Pages** using GitHub Actions CI/CD.

### Setup Instructions

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Configure for GitHub Pages hosting"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **Enable GitHub Pages via GitHub Actions**:
   - Go to your repository on GitHub.
   - Click on **Settings** (top tab).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions** from the dropdown.

3. **Automatic Deployment**:
   - Once selected, the included workflow (`.github/workflows/deploy.yml`) will automatically run whenever you push changes to `main` (or `master`).
   - The workflow detects your repository name and sets the proper `basePath` automatically.
   - Once completed, your live site URL will be displayed in the Actions tab and under Settings > Pages (typically `https://<username>.github.io/<repo-name>/`).
