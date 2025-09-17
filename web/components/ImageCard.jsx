function downloadBlob(url, filename) {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = blobUrl
      a.download = filename
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(blobUrl)
    })
    .catch(() => {})
}

export default function ImageCard({ image }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <img src={image.url} alt={image.prompt} loading="lazy" className="h-64 w-full object-cover transition duration-200 group-hover:blur-[2px] group-hover:brightness-90" />
      <div className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-b from-transparent to-black/60 p-3 opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="max-w-[calc(100%-48px)]">
          <p className="line-clamp-2 text-sm font-semibold text-white" title={image.prompt}>{image.prompt}</p>
          <span className="text-xs text-slate-300">{image.author}</span>
        </div>
        <button
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
          aria-label="Download image"
          onClick={() => downloadBlob(image.url, `image-${image.id}.jpg`)}
        >
          ⬇
        </button>
      </div>
    </article>
  )
}


