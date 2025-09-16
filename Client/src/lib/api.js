const API_BASE = import.meta.env.VITE_API_BASE || ''

async function http(path, { method = 'GET', body } = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const errText = await res.text().catch(() => '')
    throw new Error(errText || `Request failed: ${res.status}`)
  }
  return res.json()
}

export function generateImage(prompt) {
  return http('/api/generate', { method: 'POST', body: { prompt } })
}

export function createPost({ author, prompt, image }) {
  return http('/api/posts', { method: 'POST', body: { author, prompt, image } })
}

export function listPosts() {
  return http('/api/posts')
}

export default { generateImage, createPost, listPosts }


