import OpenAI from 'openai'
import { v2 as cloudinary } from 'cloudinary'

// Initialize OpenAI only when needed to avoid build-time errors
function getOpenAI() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is not set')
  }
  return new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
}

// Initialize Cloudinary only when needed
function getCloudinary() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    throw new Error('Cloudinary environment variables are not set')
  }
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })
  return cloudinary
}

export async function POST(request) {
  try {
    const { prompt } = await request.json()
    if (!prompt) return new Response(JSON.stringify({ error: 'prompt required' }), { status: 400 })

    let dataUrl
    
    // Initialize services
    const openai = getOpenAI()
    const cloudinary = getCloudinary()

    // PRIMARY: DALL-E 3 (Most Accurate & High Quality)
    try {
      const result = await openai.images.generate({ 
        model: 'dall-e-3',
        prompt: prompt,
        size: '1024x1024',
        quality: 'hd',
        response_format: 'b64_json'
      })
      const b64 = result.data[0].b64_json
      dataUrl = `data:image/png;base64,${b64}`
    } catch (dalleError) {
      console.log('DALL-E 3 failed, trying fallback:', dalleError.message)
      
      // FALLBACK 1: Hugging Face FLUX.1-schnell (Fast & Good Quality)
      if (process.env.HF_TOKEN) {
        try {
          const r = await fetch('https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell', {
            method: 'POST',
            headers: { Authorization: `Bearer ${process.env.HF_TOKEN}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ inputs: prompt, options: { wait_for_model: true } }),
          })
          if (r.ok) {
            const buf = Buffer.from(await r.arrayBuffer())
            dataUrl = `data:image/png;base64,${buf.toString('base64')}`
          } else {
            throw new Error('HF generation failed')
          }
        } catch (hfError) {
          console.log('Hugging Face failed, trying DALL-E 2:', hfError.message)
          
          // FALLBACK 2: DALL-E 2 (Reliable Backup)
          const result = await openai.images.generate({ 
            model: 'dall-e-2', 
            prompt: prompt, 
            size: '1024x1024',
            response_format: 'b64_json'
          })
          const b64 = result.data[0].b64_json
          dataUrl = `data:image/png;base64,${b64}`
        }
      } else {
        // FALLBACK 2: DALL-E 2 (No HF Token)
        const result = await openai.images.generate({ 
          model: 'dall-e-2', 
          prompt: prompt, 
          size: '1024x1024',
          response_format: 'b64_json'
        })
        const b64 = result.data[0].b64_json
        dataUrl = `data:image/png;base64,${b64}`
      }
    }

    /* 
    // ALTERNATIVE: Original Code (Uncomment to switch back)
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
      const result = await openai.images.generate({ model: 'dall-e-2', prompt, size: '1024x1024', response_format: 'b64_json' })
      const b64 = result.data[0].b64_json
      dataUrl = `data:image/png;base64,${b64}`
    }
    */

    const upload = await cloudinary.uploader.upload(dataUrl, { folder: 'aiimages' })
    return Response.json({ url: upload.secure_url, publicId: upload.public_id })
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ error: 'failed to generate image' }), { status: 500 })
  }
}
