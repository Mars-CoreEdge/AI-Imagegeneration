import OpenAI from 'openai'
import { v2 as cloudinary } from 'cloudinary'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request) {
  try {
    const { prompt } = await request.json()
    if (!prompt) return new Response(JSON.stringify({ error: 'prompt required' }), { status: 400 })

    let dataUrl
    if (process.env.HF_TOKEN) {
      const r = await fetch('https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell', {
        method: 'POST',
        headers: { Authorization: `Bearer ${process.env.HF_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputs: prompt, options: { wait_for_model: true } }),
      })
      if (!r.ok) throw new Error('HF generation failed')
      const buf = Buffer.from(await r.arrayBuffer())
      dataUrl = `data:image/png;base64,${buf.toString('base64')}`
    } else {
      const result = await openai.images.generate({ model: 'gpt-image-1', prompt, size: '1024x1024' })
      const b64 = result.data[0].b64_json
      dataUrl = `data:image/png;base64,${b64}`
    }

    const upload = await cloudinary.uploader.upload(dataUrl, { folder: 'aiimages' })
    return Response.json({ url: upload.secure_url, publicId: upload.public_id })
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ error: 'failed to generate image' }), { status: 500 })
  }
}
