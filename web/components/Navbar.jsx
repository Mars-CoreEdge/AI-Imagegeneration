import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const onCreatePage = pathname === '/create'

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="flex w-full items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <Link
          href="/"
          aria-current={!onCreatePage ? 'page' : undefined}
          className="text-xl font-extrabold tracking-wide text-white"
        >
          ImageAi
        </Link>

        {onCreatePage ? (
          <Link
            href="/"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-500"
          >
            Explore Posts
          </Link>
        ) : (
          <Link
            href="/create"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-500"
          >
            Create new post
          </Link>
        )}
      </div>
    </nav>
  )
}


