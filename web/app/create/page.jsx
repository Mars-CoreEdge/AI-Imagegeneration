"use client"
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import { generateImage, createPost } from '../../lib/api'

export default function CreatePage() {
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
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-12">
        <div className="grid gap-8 py-8 lg:grid-cols-2">
          <section>
            <h1 className="mb-2 text-3xl font-extrabold text-left">Generate Image with prompt</h1>
            <p className="mb-6 text-sm text-slate-400 text-left">Write your prompt according to the image you want to generate!</p>

            <div className="space-y-4">
              <div className="text-left">
                <label className="mb-1 block text-sm text-slate-300">Author</label>
                <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter your name.." className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 outline-none placeholder:text-slate-500" />
              </div>

              <div className="text-left">
                <label className="mb-1 block text-sm text-slate-300">Image Prompt</label>
                <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={8} placeholder="Describe the image you want..." className="w-full resize-none rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 outline-none placeholder:text-slate-500" />
              </div>

              <p className="text-xs text-slate-500">** You can post the AI Generated Image to the Community **</p>

              <div className="flex items-center justify-center gap-3">
                <button onClick={onGenerate} disabled={loadingGen} aria-busy={loadingGen} className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500 disabled:opacity-60">
                  {loadingGen && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"></span>}
                  <span>{loadingGen ? 'Generating...' : 'Generate Image'}</span>
                </button>
                <button onClick={onPost} disabled={!previewUrl || loadingPost} aria-busy={loadingPost} className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 disabled:opacity-60">
                  {loadingPost && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"></span>}
                  <span>{loadingPost ? 'Posting...' : 'Post Image'}</span>
                </button>
              </div>
            </div>
          </section>

          <aside>
            <div className="rounded-2xl border-2 border-dashed border-yellow-400/50 bg-slate-900 p-4">
              <div className="relative h-[420px] w-full overflow-hidden rounded-xl bg-slate-800 sm:h-[520px] lg:h-[560px]">
                {previewUrl ? (
                  <img alt="Preview" className="h-full w-full object-cover" src={previewUrl} />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">No image yet</div>
                )}
                {loadingGen && (
                  <div className="absolute inset-0 grid place-items-center bg-black/30">
                    <span className="h-10 w-10 animate-spin rounded-full border-4 border-white/70 border-t-transparent"></span>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}


