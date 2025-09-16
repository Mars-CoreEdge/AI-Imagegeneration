import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import postsRouter from './routes/posts.js'
import generateRouter from './routes/generate.js'


const app = express()
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use('/api/posts', postsRouter)
app.use('/api/generate', generateRouter)

const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI || ''
const port = process.env.PORT || 8080

async function start() {
  try {
    if (!mongoUri || !mongoUri.startsWith('mongodb')) {
      console.warn('Mongo URI missing/invalid. Set MONGO_URI in Server/.env. Skipping DB connect...')
    } else {
      await mongoose.connect(mongoUri)
      console.log('MongoDB connected')
    }

    app.get('/health', (_req, res) => res.json({ ok: true }))

    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`)
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()


