import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    prompt: { type: String, required: true },
    imageUrl: { type: String, required: true },
    cloudinaryId: { type: String },
  },
  { timestamps: true }
)

export default mongoose.models.Post || mongoose.model('Post', PostSchema)


