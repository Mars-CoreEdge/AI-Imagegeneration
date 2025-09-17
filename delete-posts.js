import mongoose from 'mongoose'
import Post from './models/Post.js'

const MONGO_URI = 'mongodb+srv://Ai-image-generation:Core%4012345@ai-image-generation.dy3jxjw.mongodb.net/aiimages?retryWrites=true&w=majority&appName=Ai-Image-generation'

async function deletePosts() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Connected to MongoDB')
    
    // List all posts first
    const posts = await Post.find()
    console.log('Current posts:', posts.length)
    posts.forEach(post => {
      console.log(`ID: ${post._id}, Author: ${post.author}, Prompt: ${post.prompt}`)
    })
    
    // Delete all posts
    const result = await Post.deleteMany({})
    console.log(`Deleted ${result.deletedCount} posts`)
    
    // Or delete specific post by ID
    // const specificId = 'YOUR_POST_ID_HERE'
    // const result = await Post.findByIdAndDelete(specificId)
    // console.log('Deleted specific post:', result)
    
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}

deletePosts()
