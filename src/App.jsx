import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarDays,
  CheckCircle2,
  ContactRound,
  GalleryHorizontal,
  House,
  Newspaper,
  PackageCheck,
  Settings2,
} from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { EVENT_CARDS, NAV_LINKS, PHONE } from './data/constants'

const searchPages = [
  ...NAV_LINKS,
  { label: 'BLOG', page: 'blog' },
]
const allPageIds = searchPages.map((link) => link.page)
const tabIcons = {
  home: House,
  services: Settings2,
  gallery: GalleryHorizontal,
  packages: PackageCheck,
  contact: ContactRound,
}

function getInitialPage() {
  const page = new URLSearchParams(window.location.search).get('page')

  return allPageIds.includes(page) ? page : 'home'
}

function PageFrame({ eyebrow, title, children }) {
  return (
    <section className="page-screen bg-[#f7fcff] pb-14 pt-32">
      <div className="section-shell">
        <div className="mb-8 text-center">
          <p className="section-kicker mx-auto mb-3">{eyebrow}</p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-[0.08em] text-[#071b22]">
            {title}
          </h1>
        </div>
        {children}
      </div>
    </section>
  )
}

function Packages({ onNavigate }) {
  return (
    <PageFrame eyebrow="Event Packages" title="Choose Your Experience">
      <div className="package-grid">
        {EVENT_CARDS.map((item, index) => (
          <article key={item.title} className="chrome-panel package-card">
            <PackageCheck className="h-10 w-10 text-[#008eae]" />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <strong>{index === 0 ? 'Starter' : index === 1 ? 'Signature' : index === 2 ? 'Premium' : 'Custom'}</strong>
          </article>
        ))}
      </div>
      <div className="page-access-row">
        <button type="button" onClick={() => onNavigate('blog')} className="btn-teal">
          Event Planning Blog
          <Newspaper className="h-4 w-4" />
        </button>
      </div>
    </PageFrame>
  )
}

function Blog() {
  const posts = [
    'How to plan a smooth corporate event',
    'Lighting ideas that transform a venue',
    'What to prepare before booking sound and stage',
  ]

  return (
    <PageFrame eyebrow="Latest Notes" title="Event Planning Blog">
      <div className="blog-grid">
        {posts.map((post) => (
          <article key={post} className="chrome-panel blog-card">
            <Newspaper className="h-10 w-10 text-[#008eae]" />
            <h2>{post}</h2>
            <p>
              Practical ideas from the M-ONE team for creating organized, memorable and polished event experiences.
            </p>
            <span>
              <CalendarDays className="h-4 w-4" />
              M-ONE Insights
            </span>
          </article>
        ))}
      </div>
    </PageFrame>
  )
}

function SearchResults({ query, onNavigate }) {
  const matches = useMemo(() => {
    const value = query.trim().toLowerCase()

    if (!value) return []

    return searchPages.filter((link) => link.label.toLowerCase().includes(value))
  }, [query])

  if (!query.trim()) return null

  return (
    <PageFrame eyebrow="Search" title={`Results For "${query}"`}>
      {matches.length > 0 ? (
        <div className="search-results">
          {matches.map((match) => (
            <button key={match.page} type="button" onClick={() => onNavigate(match.page)} className="chrome-panel search-card">
              <CheckCircle2 className="h-8 w-8 text-[#008eae]" />
              <span>{match.label}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="chrome-panel mx-auto max-w-3xl p-8 text-center">
          <p className="text-lg font-bold text-[#071b22]">
            No matching page found. Try Home, Services, Gallery, Packages, Contact, About or Blog.
          </p>
        </div>
      )}
    </PageFrame>
  )
}

function TabDock({ activePage, onNavigate }) {
  return (
    <nav className="screen-tab-dock" aria-label="Screen tabs">
      {NAV_LINKS.map((link) => {
        const Icon = tabIcons[link.page]

        return (
          <button
            key={link.page}
            type="button"
            onClick={() => onNavigate(link.page)}
            className={activePage === link.page ? 'is-active' : ''}
          >
            {Icon && <Icon className="h-5 w-5" />}
            <span>{link.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage)
  const [searchQuery, setSearchQuery] = useState('')

  const handleNavigate = (page) => {
    setActivePage(page)
    setSearchQuery('')
    window.history.pushState({}, '', `?page=${page}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const screen = searchQuery.trim() ? (
    <SearchResults query={searchQuery} onNavigate={handleNavigate} />
  ) : activePage === 'home' ? (
    <Hero onNavigate={handleNavigate} />
  ) : activePage === 'services' ? (
    <Services onNavigate={handleNavigate} />
  ) : activePage === 'gallery' ? (
    <Gallery onNavigate={handleNavigate} />
  ) : activePage === 'about' ? (
    <About onNavigate={handleNavigate} />
  ) : activePage === 'contact' ? (
    <Contact />
  ) : activePage === 'packages' ? (
    <Packages onNavigate={handleNavigate} />
  ) : (
    <Blog />
  )

  return (
    <div className="min-h-screen overflow-hidden bg-[#f7fcff] text-ink">
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={searchQuery.trim() ? `search-${searchQuery}` : activePage}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
          >
            {screen}
          </motion.div>
        </AnimatePresence>
      </main>
      <TabDock activePage={activePage} onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
      <div className="fixed bottom-24 right-4 z-40 hidden rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#007797] shadow-xl shadow-cyan-950/10 md:block">
        {PHONE}
      </div>
    </div>
  )
}
