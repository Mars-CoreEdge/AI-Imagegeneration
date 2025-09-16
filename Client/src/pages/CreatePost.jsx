import { useState } from 'react'
import { generateImage, createPost } from '../lib/api'

function CreatePost() {
  const [author, setAuthor] = useState('')
  const [prompt, setPrompt] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')
  const [loadingGen, setLoadingGen] = useState(false)
  const [loadingPost, setLoadingPost] = useState(false)

  async function onGenerate() {
    if (!prompt.trim()) return
    try {
      setLoadingGen(true)
      const res = await generateImage(prompt.trim())
      setPreviewUrl(res.url)
    } catch (e) {
      alert('Failed to generate image')
    } finally {
      setLoadingGen(false)
    }
  }

  async function onPost() {
    if (!author.trim() || !prompt.trim() || !previewUrl) return
    try {
      setLoadingPost(true)
      await createPost({ author: author.trim(), prompt: prompt.trim(), image: previewUrl })
      alert('Posted! Go to Home to see it.')
      setAuthor('')
      setPrompt('')
    } catch (e) {
      alert('Failed to post image')
    } finally {
      setLoadingPost(false)
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-4 pb-12">
      <div className="grid gap-8 py-8 lg:grid-cols-2">
        <section>
          <h1 className="mb-2 text-3xl font-extrabold">Generate Image with prompt</h1>
          <p className="mb-6 text-sm text-slate-400">Write your prompt according to the image you want to generate!</p>

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-slate-300">Author</label>
              <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter your name.." className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 outline-none placeholder:text-slate-500" />
            </div>

            <div>
              <label className="mb-1 block text-sm text-slate-300">Image Prompt</label>
              <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={6} placeholder="Describe the image you want..." className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 outline-none placeholder:text-slate-500" />
            </div>

            <p className="text-xs text-slate-500">** You can post the AI Generated Image to the Community **</p>

            <div className="flex gap-3">
              <button onClick={onGenerate} disabled={loadingGen} className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 disabled:opacity-60">
                {loadingGen ? 'Generating...' : 'Generate Image'}
              </button>
              <button onClick={onPost} disabled={!previewUrl || loadingPost} className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 disabled:opacity-60">
                {loadingPost ? 'Posting...' : 'Post Image'}
              </button>
            </div>
          </div>
        </section>

        <aside>
          <div className="rounded-2xl border-2 border-dashed border-yellow-400/50 bg-slate-900 p-4">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-800">
              {previewUrl ? (
                <img alt="Preview" className="h-full w-full object-cover" src={previewUrl} />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">No image yet</div>
              )}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default CreatePost


