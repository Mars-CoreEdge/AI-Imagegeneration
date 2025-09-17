import { connectToDatabase } from '../../../lib/db'

export async function GET() {
  try {
    await connectToDatabase()
    return Response.json({ ok: true })
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 500 })
  }
}


