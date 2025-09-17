import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || ''

let isConnected = false

export async function connectToDatabase() {
  if (isConnected) return
  if (!MONGO_URI || !MONGO_URI.startsWith('mongodb')) {
    console.warn('Mongo URI missing/invalid. Set MONGO_URI. Proceeding without DB connection.')
    return
  }
  if (mongoose.connection.readyState >= 1) {
    isConnected = true
    return
  }
  await mongoose.connect(MONGO_URI)
  isConnected = true
}
