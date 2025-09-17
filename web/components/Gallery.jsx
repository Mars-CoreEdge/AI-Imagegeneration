import ImageCard from './ImageCard'

export default function Gallery({ items }) {
  if (!items?.length) {
    return <p className="text-slate-400">No posts found.</p>
  }

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <ImageCard key={item.id} image={item} />
      ))}
    </section>
  )
}


