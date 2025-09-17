import { v2 as cloudinary } from 'cloudinary'
import { connectToDatabase } from '../../../lib/db'
import Post from '../../../models/Post'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function GET() {
  try {
    await connectToDatabase()
  } catch (e) {
    return new Response(JSON.stringify({ error: 'db_connect_failed', message: e.message }), { status: 500 })
  }
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).lean()
    return Response.json(posts)
  } catch (e) {
    return new Response(JSON.stringify({ error: 'db_query_failed', message: e.message }), { status: 500 })
  }
}

export async function POST(request) {
  try {
    await connectToDatabase()
    const { author, prompt, image } = await request.json()
    if (!author || !prompt || !image) return new Response(JSON.stringify({ error: 'author, prompt, image required' }), { status: 400 })

    let imageUrl = image
    let publicId
    if (image.startsWith('data:')) {
      const upload = await cloudinary.uploader.upload(image, { folder: 'aiimages' })
      imageUrl = upload.secure_url
      publicId = upload.public_id
    }

    const post = await Post.create({ author, prompt, imageUrl, cloudinaryId: publicId })
    return new Response(JSON.stringify(post), { status: 201 })
  } catch (e) {
    console.error(e)
    return new Response(JSON.stringify({ error: 'failed_to_create_post', message: e.message }), { status: 500 })
  }
}
