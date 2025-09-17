"use client"
import { useEffect, useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'
import { listPosts } from '../lib/api'

export default function HomePage() {
  const [searchText, setSearchText] = useState('')
  const [images, setImages] = useState([])

  useEffect(() => {
    listPosts()
      .then((data) => {
        const mapped = data.map((p) => ({ id: p._id, url: p.imageUrl, prompt: p.prompt, author: p.author }))
        setImages(mapped)
      })
      .catch(() => {})
  }, [])

  const filtered = useMemo(() => {
    const q = searchText.toLowerCase().trim()
    if (!q) return images
    return images.filter((i) => i.prompt.toLowerCase().includes(q) || i.author.toLowerCase().includes(q))
  }, [images, searchText])

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pb-12">
        <header className="mt-8 mb-6 text-center">
          <h1 className="mb-2 text-3xl font-extrabold">Explore popular posts in the Community!</h1>
          <p className="mx-auto mb-5 inline-block rounded-full border border-violet-400/40 bg-violet-600/10 px-3 py-1 text-sm font-semibold text-violet-300">
            Generated with AI
          </p>
          <div className="mx-auto flex max-w-xl items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-4 py-2">
            <span className="opacity-70" aria-hidden>🔎</span>
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              placeholder="Search with prompt or name..."
            />
          </div>
        </header>
        <Gallery items={filtered} />
      </main>
    </>
  )
}


