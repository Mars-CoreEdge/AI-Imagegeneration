# AI Image Generation (Next.js)

Single Next.js app with API routes and UI.

## Env Vars
- `MONGO_URI`
- `OPENAI_API_KEY`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `HF_TOKEN` (optional)

## Run locally
```
npm install
npm run dev
```

## Deploy to Render
- New Web Service
  - Root Directory: `web`
  - Dockerfile Path: `Dockerfile`
  - Environment Variables: add the vars above
  - Port: Render auto-detects 3000


