import { connectToDatabase } from '../../../../lib/db'
import Post from '../../../../models/Post'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase()
    const { id } = params
    
    if (!id) {
      return new Response(JSON.stringify({ error: 'Post ID is required' }), { status: 400 })
    }

    // Find the post first
    const post = await Post.findById(id)
    if (!post) {
      return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 })
    }

    // Delete from Cloudinary if cloudinaryId exists
    if (post.cloudinaryId) {
      try {
        await cloudinary.uploader.destroy(post.cloudinaryId)
        console.log(`Deleted image from Cloudinary: ${post.cloudinaryId}`)
      } catch (cloudinaryError) {
        console.warn('Failed to delete from Cloudinary:', cloudinaryError.message)
        // Continue with database deletion even if Cloudinary fails
      }
    }

    // Delete from database
    await Post.findByIdAndDelete(id)
    
    return Response.json({ message: 'Post deleted successfully' })
  } catch (e) {
    console.error('Delete post error:', e)
    return new Response(JSON.stringify({ error: 'Failed to delete post', message: e.message }), { status: 500 })
  }
}
