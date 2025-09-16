import express from 'express'
import { v2 as cloudinary } from 'cloudinary'
import Post from '../models/Post.js'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const router = express.Router()

// Create a post with an already-generated image (base64 or URL)
router.post('/', async (req, res) => {
  try {
    const { author, prompt, image } = req.body
    if (!author || !prompt || !image) return res.status(400).json({ error: 'author, prompt, image required' })

    // If client sends base64, upload to Cloudinary
    let imageUrl = image
    let publicId
    if (image.startsWith('data:')) {
      const upload = await cloudinary.uploader.upload(image, { folder: 'aiimages' })
      imageUrl = upload.secure_url
      publicId = upload.public_id
    }

    const post = await Post.create({ author, prompt, imageUrl, cloudinaryId: publicId })
    res.status(201).json(post)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'failed to create post' })
  }
})

// List posts
router.get('/', async (_req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).lean()
  res.json(posts)
})

export default router


