import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Check, Mail, MessageCircle, Mic2, Phone, Star, UsersRound } from 'lucide-react'
import { EMAIL, EVENT_CARDS, IMAGES, LOGO_SRC, PHONE, PHONE_RAW, PROMISES, WHATSAPP_URL } from '../data/constants'

const iconMap = { CalendarDays, UsersRound, Mic2, Star }

export default function About({ onNavigate }) {
  return (
    <section id="about" className="about-poster bg-[#e9faff] pt-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="about-poster-board"
      >
        <div className="about-dot-field" />
        <div className="about-brand">
          <img src={LOGO_SRC} alt="M-ONE Entertainment" />
          <p className="font-script">&ldquo;We Prioritise Excellence.&rdquo;</p>
        </div>

        <div className="about-copy">
          <p className="section-label">Why Choose M-ONE</p>
          <h1>
            We Plan.
            <br />
            We Execute.
            <br />
            You <span className="font-script">Celebrate.</span>
          </h1>
          <p>
            At M-One Entertainment, we blend creativity, precision and passion to deliver seamless events that exceed
            expectations. <strong>Your vision is our mission.</strong>
          </p>
          <ul>
            {PROMISES.map((promise) => (
              <li key={promise}>
                <span>
                  <Check className="h-5 w-5" />
                </span>
                {promise}
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => onNavigate('contact')} className="btn-teal">
            About Us
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="about-media about-media-main">
          <img src={IMAGES.stageWide} alt="M-ONE live stage event" />
        </div>
        <div className="about-media about-media-mid">
          <img src={IMAGES.stageConsole} alt="Stage setup and production equipment" />
        </div>
        <div className="about-media about-media-low">
          <img src={IMAGES.mixerPortrait} alt="M-ONE technician mixing sound" />
        </div>

        <div className="about-services">
          <p className="section-kicker">What We Do</p>
          <h2>
            Events That Leave A <span>Lasting Impact</span>
          </h2>
          <div>
            {EVENT_CARDS.map((card) => {
              const Icon = iconMap[card.icon]

              return (
                <article key={card.title}>
                  <span>{Icon && <Icon className="h-8 w-8" />}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="about-phone-pill">
          <a href={WHATSAPP_URL} aria-label="Chat with M-ONE on WhatsApp">
            <MessageCircle className="h-7 w-7" />
          </a>
          <a href={`tel:${PHONE_RAW}`} aria-label="Call M-ONE">
            <Phone className="h-6 w-6" />
          </a>
          <strong>{PHONE}</strong>
        </div>

        <div className="about-contact-strip">
          <a href="https://moneevents.com">
            <span>Visit Our Website</span>
            <strong>moneevents.com</strong>
          </a>
          <a href={`mailto:${EMAIL}`}>
            <Mail className="h-7 w-7" />
            <span>Email Us</span>
            <strong>{EMAIL}</strong>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
