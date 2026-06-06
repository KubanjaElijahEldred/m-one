import { Search } from 'lucide-react'
import { LOGO_SRC } from '../data/constants'

export default function Navbar({ onNavigate, searchQuery, onSearchChange }) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="top-brand-bar mx-auto flex w-full items-center justify-between gap-3 px-4 py-4 lg:px-7">
        <button type="button" onClick={() => onNavigate('home')} className="flex shrink-0 items-center">
          <img
            src={LOGO_SRC}
            alt="M-ONE Entertainment"
            className="h-16 w-28 object-contain sm:h-20 sm:w-36"
          />
        </button>

        <label className="site-search">
          <Search className="h-4 w-4" />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search"
            aria-label="Search pages"
          />
        </label>
      </nav>
    </header>
  )
}
