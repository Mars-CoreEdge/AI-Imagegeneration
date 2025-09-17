import { v2 as cloudinary } from 'cloudinary'
import { connectToDatabase } from '../../../lib/db'
import Post from '../../../models/Post'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function GET() {
  await connectToDatabase()
  const posts = await Post.find().sort({ createdAt: -1 }).lean()
  return Response.json(posts)
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
    return new Response(JSON.stringify({ error: 'failed to create post' }), { status: 500 })
  }
}
