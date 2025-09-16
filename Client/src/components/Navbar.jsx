import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const onCreatePage = location.pathname === '/create'

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          aria-current={!onCreatePage ? 'page' : undefined}
          className="text-xl font-extrabold tracking-wide text-white"
        >
          ImageAi
        </Link>

        {onCreatePage ? (
          <Link
            to="/"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-500"
          >
            Explore Posts
          </Link>
        ) : (
          <Link
            to="/create"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-500"
          >
            Create new post
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar


