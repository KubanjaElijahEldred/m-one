import {
  AudioLines,
  CalendarDays,
  ChevronDown,
  Frame,
  Globe2,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  MonitorPlay,
  Send,
  UsersRound,
} from 'lucide-react'
import { EMAIL, EVENT_CARDS, IMAGES, PHONE, PRODUCTION_TOOLS, WHATSAPP_URL } from '../data/constants'

const toolIcons = { AudioLines, Frame, Lightbulb, MonitorPlay }
const eventIcons = { CalendarDays, UsersRound }

export default function Contact() {
  const services = [
    ...PRODUCTION_TOOLS.map((item) => ({
      ...item,
      text:
        item.label === 'Sound'
          ? 'Crystal clear sound for every moment.'
          : item.label === 'Stage'
            ? 'Staging solutions built to impress.'
            : item.label === 'Lights'
              ? 'Lighting that sets the perfect mood.'
              : 'LED screens for stunning visual experiences.',
    })),
    ...EVENT_CARDS.slice(0, 2).map((item) => ({
      label: item.title,
      icon: item.icon,
      text: item.text,
    })),
  ]

  return (
    <section id="contact" className="contact-page">
      <div className="contact-hero">
        <img src={IMAGES.stageWide} alt="M-ONE Entertainment concert stage" />
        <div className="contact-hero-copy">
          <span>Contact</span>
          <h1>
            <strong>M-ONE</strong>
            Entertainment
          </h1>
          <p className="font-script">Let&apos;s Make Your Event Unforgettable.</p>
          <small>
            We&apos;re here to bring your vision to life. Reach out to us and let&apos;s create something extraordinary
            together.
          </small>
        </div>
      </div>

      <div className="contact-page-shell">
        <div className="contact-info-strip">
          <a href={WHATSAPP_URL}>
            <span className="whatsapp">
              <MessageCircle className="h-7 w-7" />
            </span>
            <div>
              <small>Phone / WhatsApp</small>
              <strong>{PHONE}</strong>
              <em>Available 24/7</em>
            </div>
          </a>
          <a href={`mailto:${EMAIL}`}>
            <span>
              <Mail className="h-7 w-7" />
            </span>
            <div>
              <small>Email</small>
              <strong>{EMAIL}</strong>
              <em>We reply within 24hrs</em>
            </div>
          </a>
          <a href="https://moneevents.com">
            <span>
              <Globe2 className="h-7 w-7" />
            </span>
            <div>
              <small>Website</small>
              <strong>moneevents.com</strong>
              <em>Visit our website</em>
            </div>
          </a>
          <a href="#contact-location">
            <span>
              <MapPin className="h-7 w-7" />
            </span>
            <div>
              <small>Location</small>
              <strong>Kampala, Uganda</strong>
              <em>We&apos;d love to meet you</em>
            </div>
          </a>
        </div>

        <div className="contact-main-grid">
          <form className="contact-message-card" onSubmit={(event) => event.preventDefault()}>
            <h2>Send Us A Message</h2>
            <p>Fill in the form below and our team will get back to you.</p>
            <div>
              <input type="text" placeholder="Full Name" aria-label="Full Name" />
              <input type="email" placeholder="Email Address" aria-label="Email Address" />
              <input type="tel" placeholder="Phone Number" aria-label="Phone Number" />
              <label>
                <select aria-label="Event Type" defaultValue="">
                  <option value="" disabled>
                    Event Type
                  </option>
                  <option>Corporate Event</option>
                  <option>Private Party</option>
                  <option>Live Show</option>
                  <option>Brand Activation</option>
                </select>
                <ChevronDown className="h-5 w-5" />
              </label>
              <textarea placeholder="Message" aria-label="Message" />
            </div>
            <button type="submit">
              Send Message
              <Send className="h-5 w-5" />
            </button>
          </form>

          <aside className="contact-services-card">
            <img src={IMAGES.stageWide} alt="" />
            <div>
              <h2>Our Services</h2>
              {services.map((service) => {
                const Icon = toolIcons[service.icon] || eventIcons[service.icon]

                return (
                  <article key={service.label}>
                    <span>{Icon && <Icon className="h-6 w-6" />}</span>
                    <div>
                      <h3>{service.label}</h3>
                      <p>{service.text}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </aside>
        </div>

        <div id="contact-location" className="contact-location-panel">
          <div>
            <h2>Visit Our Location</h2>
            <p>We are based in the heart of Kampala, ready to serve you.</p>
            <strong>
              <MapPin className="h-5 w-5" />
              Kampala, Uganda
            </strong>
            <small>Open: Mon - Sat | 8:00 AM - 6:00 PM</small>
          </div>
          <div className="contact-map">
            <span className="map-pin">
              M
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
