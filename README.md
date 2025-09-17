# AI Image Generation - Next.js

A full-stack Next.js application for AI image generation and community sharing.

## Features

- **AI Image Generation**: Generate images using OpenAI or Hugging Face
- **Community Gallery**: Browse and search generated images
- **Image Sharing**: Post generated images to the community
- **Responsive Design**: Modern dark theme with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Image Storage**: Cloudinary
- **AI Services**: OpenAI, Hugging Face (optional)

## Environment Variables

Create a `.env.local` file with:

```env
MONGO_URI=your-mongodb-connection-string
OPENAI_API_KEY=your-openai-api-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
HF_TOKEN=your-huggingface-token (optional)
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.local` and add your credentials

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## API Endpoints

- `POST /api/generate` - Generate AI image
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── generate/
│   │   └── posts/
│   ├── create/
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
├── components/
│   ├── Gallery.jsx
│   ├── ImageCard.jsx
│   └── Navbar.jsx
├── lib/
│   ├── api.js
│   └── db.js
├── models/
│   └── Post.js
└── vercel.json
```
