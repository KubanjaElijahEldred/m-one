import { motion } from 'framer-motion'
import {
  AudioLines,
  CalendarDays,
  Camera,
  Frame,
  Globe2,
  Lightbulb,
  MessageCircle,
  Mic2,
  MonitorPlay,
  Phone,
  Star,
  UsersRound,
} from 'lucide-react'
import {
  EVENT_CARDS,
  IMAGES,
  PHONE,
  PHONE_RAW,
  PRODUCTION_TOOLS,
  WHATSAPP_URL,
} from '../data/constants'

const iconMap = {
  AudioLines,
  CalendarDays,
  Frame,
  Lightbulb,
  Mic2,
  MonitorPlay,
  Star,
  UsersRound,
}

const posterImages = [
  { src: IMAGES.stageWide, alt: 'Concert stage lighting and crowd', className: 'poster-crop poster-crop-top-left' },
  { src: IMAGES.stageConsole, alt: 'M-ONE event camera and production view', className: 'poster-crop poster-crop-top-right' },
  { src: IMAGES.crew, alt: 'Elegant event setup with blue lighting', className: 'poster-crop poster-strip-one' },
  { src: IMAGES.stageWide, alt: 'Live show crowd under stage lights', className: 'poster-crop poster-strip-two' },
  { src: IMAGES.mixerPortrait, alt: 'M-ONE technician operating a live mixer', className: 'poster-crop poster-strip-three' },
]

export default function Hero() {
  return (
    <section id="home" className="poster-hero relative overflow-hidden bg-[#eefaff] pt-28">
      <div className="poster-silver-grid absolute inset-0" />
      <div className="glitter-field absolute inset-0" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-shell relative z-10 pb-16"
      >
        <div className="poster-board shine-sweep">
          <div className="poster-dot-field poster-dot-field-one" />
          <div className="poster-dot-field poster-dot-field-two" />
          <span className="sparkle poster-sparkle-one">
            <span />
          </span>
          <span className="sparkle poster-sparkle-two">
            <span />
          </span>

          {posterImages.map((image) => (
            <div key={`${image.src}-${image.className}`} className={image.className}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}

          <div className="poster-promise">
            <strong>
              We Plan.
              <br />
              We Execute.
              <br />
              You Celebrate.
            </strong>
            <p>From concept to completion, we turn your vision into moments that leave a lasting impact.</p>
          </div>

          <div className="poster-production">
            {PRODUCTION_TOOLS.map((tool) => {
              const Icon = iconMap[tool.icon]

              return (
                <div key={tool.label} className="poster-production-item">
                  <span>{Icon && <Icon className="h-6 w-6" strokeWidth={2.2} />}</span>
                  <strong>{tool.label}</strong>
                </div>
              )
            })}
          </div>

          <div className="poster-center">
            <div className="poster-logo-ring">
              <img src={IMAGES.brand} alt="M-ONE Entertainment" />
            </div>
            <h1>
              <span className="poster-title metallic-text">M-ONE</span>
              <span className="poster-subtitle">Entertainment</span>
            </h1>
            <p className="font-script poster-script">&ldquo;We Prioritise Excellence.&rdquo;</p>
            <p className="poster-line">
              Creating extraordinary experiences that <strong>connect, inspire</strong> and <strong>last.</strong>
            </p>
          </div>

          <div className="poster-services">
            {EVENT_CARDS.map((card) => {
              const Icon = iconMap[card.icon]

              return (
                <article key={card.title} className="poster-service">
                  <span>{Icon && <Icon className="h-8 w-8" strokeWidth={2.1} />}</span>
                  <h2>{card.title}</h2>
                  <p>{card.text}</p>
                </article>
              )
            })}
          </div>

          <div className="poster-contact-pill">
            <a href={WHATSAPP_URL} aria-label="Chat with M-ONE on WhatsApp">
              <MessageCircle className="h-8 w-8" />
            </a>
            <a href={`tel:${PHONE_RAW}`} aria-label="Call M-ONE">
              <Phone className="h-7 w-7" />
            </a>
            <strong>{PHONE}</strong>
          </div>

          <div className="poster-bottom">
            <img src={IMAGES.console} alt="M-ONE sound equipment" className="poster-equipment poster-equipment-left" />
            <div className="poster-bottom-copy">
              <span>Let&apos;s Make It</span>
              <strong className="font-script">Unforgettable!</strong>
            </div>
            <img src={IMAGES.stageConsole} alt="M-ONE stage lighting" className="poster-equipment poster-equipment-right" />
          </div>

          <div className="poster-footer">
            <a href="https://moneevents.com" aria-label="Visit moneevents.com">
              <Globe2 className="h-6 w-6" />
              <span>moneevents.com</span>
            </a>
            <div>
              <strong>Follow Us</strong>
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                <Camera className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X">
                X
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
