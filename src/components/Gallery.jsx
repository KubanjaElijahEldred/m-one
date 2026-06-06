import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, ChevronLeft, Handshake, Trophy } from 'lucide-react'
import { GALLERY_IMAGES, STATS } from '../data/constants'

const iconMap = { BadgeCheck, Handshake, Trophy }

const captions = [
  {
    number: '01',
    title: 'Live Production',
    text: 'Stage, sound and crowd energy captured in full event flow.',
  },
  {
    number: '02',
    title: 'Behind The Desk',
    text: 'Technical control, crew focus and seamless production support.',
  },
  {
    number: '03',
    title: 'Shareable Moments',
    text: 'Brand-ready scenes, polished setups and guest experiences.',
  },
  {
    number: '04',
    title: 'Event Atmosphere',
    text: 'Lighting, screens and audio shaped into memorable spaces.',
  },
]

export default function Gallery({ onNavigate }) {
  const spreadImages = [
    GALLERY_IMAGES[0],
    GALLERY_IMAGES[3],
    GALLERY_IMAGES[1],
    GALLERY_IMAGES[2],
  ]

  return (
    <section id="gallery" className="magazine-gallery bg-[#d9d9d9] pb-16 pt-28">
      <div className="magazine-shell">
        <aside className="magazine-thumbs" aria-label="Gallery previews">
          {GALLERY_IMAGES.map((image, index) => (
            <button key={image.src} type="button" className={index === 1 ? 'is-active' : ''} aria-label={`Preview ${index + 1}`}>
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
        </aside>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="magazine-stage"
        >
          <button type="button" className="magazine-arrow" aria-label="Previous gallery page">
            <ChevronLeft className="h-8 w-8" />
          </button>

          <div className="magazine-grid">
            <article className="magazine-cover magazine-page">
              <img src={spreadImages[0].src} alt={spreadImages[0].alt} />
              <div>
                <span>01</span>
                <strong>M-ONE Events</strong>
              </div>
              <h1>
                Moments
                <br />
                We Create
              </h1>
            </article>

            <article className="magazine-page magazine-index">
              <div className="magazine-index-grid">
                {captions.map((caption, index) => (
                  <div key={caption.number}>
                    <img src={GALLERY_IMAGES[index + 1]?.src || GALLERY_IMAGES[0].src} alt="" />
                    <span>{caption.number}</span>
                    <h2>{caption.title}</h2>
                    <p>{caption.text}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="magazine-page magazine-editorial">
              <div>
                <span>B</span>
                <p>
                  Every production begins with a clear event vision. Our team coordinates sound, lighting, screens,
                  staging and crew movement so each celebration feels organized, polished and memorable.
                </p>
              </div>
              <img src={spreadImages[1].src} alt={spreadImages[1].alt} />
              <p>
                From concept to completion, M-ONE Entertainment builds experiences that connect people and keep the
                atmosphere alive.
              </p>
            </article>

            <article className="magazine-page magazine-dark">
              <h2>
                Shareable
                <br />
                Experience
              </h2>
              <img src={spreadImages[2].src} alt={spreadImages[2].alt} />
              <p>
                We shape every detail for guests, cameras and brands: clear sound, clean lighting, strong visuals and
                confident on-site execution.
              </p>
            </article>

            <article className="magazine-page magazine-photo-story">
              <img src={spreadImages[3].src} alt={spreadImages[3].alt} />
              <div>
                <span>N</span>
                <h2>New Event Energy</h2>
                <p>
                  Live shows, corporate events, private parties and activations all receive the same careful production
                  eye.
                </p>
              </div>
            </article>

            <article className="magazine-page magazine-stats">
              <h2>Our Work Speaks</h2>
              <div>
                {STATS.map((stat) => {
                  const Icon = iconMap[stat.icon]

                  return (
                    <span key={stat.label}>
                      <Icon className="h-8 w-8" />
                      <strong>{stat.value}</strong>
                      <small>{stat.label}</small>
                    </span>
                  )
                })}
              </div>
              <button type="button" onClick={() => onNavigate('contact')} className="gallery-button">
                Book The Team
                <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
