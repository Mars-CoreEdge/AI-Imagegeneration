import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || ''

// Cache the connection across hot reloads/serverless invocations
let cached = global._mongoose
if (!cached) {
  cached = global._mongoose = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (!MONGO_URI || !MONGO_URI.startsWith('mongodb')) {
    throw new Error('MONGO_URI is missing or invalid')
  }
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    mongoose.set('strictQuery', true)
    cached.promise = mongoose
      .connect(MONGO_URI)
      .then((m) => m)
  }
  cached.conn = await cached.promise
  return cached.conn
}
