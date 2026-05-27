# Calena Network — Engagement Console (Demo)

Internal demo for showing Calena Network's H.R. 1 community engagement platform to MCO partners. Sample data only; no real PHI.

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Import the repo on Vercel — it auto-detects Vite
3. No environment variables needed
4. Point calenanetwork.com (or a subdomain like demo.calenanetwork.com) at the deployment in Vercel's domain settings

## Stack

- React 18
- Vite
- Recharts (charts)

No backend, no auth, no database. All data is inline in `src/App.jsx`.
