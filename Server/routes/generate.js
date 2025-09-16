import 'dotenv/config'
import express from 'express'
import OpenAI from 'openai'
import { v2 as cloudinary } from 'cloudinary'

const router = express.Router()
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Generate an image from a prompt and upload to Cloudinary
router.post('/', async (req, res) => {
  try {
    const { prompt } = req.body
    if (!prompt) return res.status(400).json({ error: 'prompt required' })

    // Using OpenAI Images API
    const result = await openai.images.generate({ model: 'gpt-image-1', prompt, size: '1024x1024' })
    const b64 = result.data[0].b64_json
    const dataUrl = `data:image/png;base64,${b64}`

    const upload = await cloudinary.uploader.upload(dataUrl, { folder: 'aiimages' })
    res.json({ url: upload.secure_url, publicId: upload.public_id })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'failed to generate image' })
  }
})

export default router


