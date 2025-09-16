import { useMemo, useState } from 'react'
import Gallery from '../components/Gallery'

function Home() {
  const [searchText, setSearchText] = useState('')

  // Placeholder data for now
  const images = useMemo(
    () => [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
        prompt: 'A modern bridge captured at dusk',
        author: 'Rishav',
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop',
        prompt: 'A long empty road towards the horizon',
        author: 'Alex',
      },
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop',
        prompt: 'A hand holding a phone recording the scene',
        author: 'Sam',
      },
      {
        id: '4',
        url: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop',
        prompt: 'Minimalist architecture and lines',
        author: 'Taylor',
      },
      {
        id: '5',
        url: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800&auto=format&fit=crop',
        prompt: 'The blue hour cityscape',
        author: 'Jordan',
      },
      {
        id: '6',
        url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop',
        prompt: 'Perspective shot near a bridge',
        author: 'Rishav',
      },
    ],
    []
  )

  const filtered = useMemo(() => {
    const q = searchText.toLowerCase().trim()
    if (!q) return images
    return images.filter((i) => i.prompt.toLowerCase().includes(q) || i.author.toLowerCase().includes(q))
  }, [images, searchText])

  return (
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
  )
}

export default Home


