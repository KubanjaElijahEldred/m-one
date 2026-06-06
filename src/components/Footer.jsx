import { Award, BadgeCheck, Camera, Handshake, Music2, Send, ShieldCheck, Video } from 'lucide-react'
import { EMAIL, LOGO_SRC, SOCIAL_LINKS } from '../data/constants'

function SocialMark({ icon }) {
  if (icon === 'Instagram') {
    return <Camera className="h-5 w-5" />
  }

  if (icon === 'Music2') {
    return <Music2 className="h-5 w-5" />
  }

  if (icon === 'Youtube') {
    return <Video className="h-5 w-5" />
  }

  return <span className="text-lg font-black leading-none">f</span>
}

const TRUST_BADGES = [
  { label: 'Verified Team', icon: BadgeCheck },
  { label: 'Safe Booking', icon: ShieldCheck },
  { label: 'Trusted Events', icon: Handshake },
  { label: 'Pro Quality', icon: Award },
]

export default function Footer({ onNavigate }) {
  const goTo = (page) => {
    onNavigate(page)
  }

  return (
    <footer className="footer-panel">
      <div className="section-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={LOGO_SRC} alt="M-ONE Entertainment" />
          </div>

          <div>
            <h3>Quick Links</h3>
            <div className="footer-links">
              <button type="button" onClick={() => goTo('home')}>Home</button>
              <button type="button" onClick={() => goTo('services')}>Services</button>
              <button type="button" onClick={() => goTo('gallery')}>Gallery</button>
              <button type="button" onClick={() => goTo('packages')}>Packages</button>
              <button type="button" onClick={() => goTo('contact')}>Contact Us</button>
            </div>
          </div>

          <div>
            <h3>Our Services</h3>
            <div className="footer-links">
              <button type="button" onClick={() => goTo('services')}>Corporate Events</button>
              <button type="button" onClick={() => goTo('services')}>Private Parties</button>
              <button type="button" onClick={() => goTo('services')}>Live Shows</button>
              <button type="button" onClick={() => goTo('services')}>Brand Activations</button>
            </div>
          </div>

          <div>
            <h3>Newsletter</h3>
            <p className="mb-4 text-sm text-white/80">
              Stay updated with our latest events and offers.
            </p>
            <form className="footer-form">
              <input type="email" placeholder="Your email address" aria-label="Newsletter email" />
              <button type="submit" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </button>
            </form>
            <a className="mt-3 block text-sm text-white/80" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 M-One Entertainment. All Rights Reserved.</p>
          <div className="trust-badges" aria-label="M-ONE trust badges">
            {TRUST_BADGES.map((badge) => {
              const Icon = badge.icon

              return (
                <span key={badge.label}>
                  <Icon className="h-4 w-4" />
                  {badge.label}
                </span>
              )
            })}
          </div>
          <div className="social-badges">
            {SOCIAL_LINKS.map((social) => {
              return (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <SocialMark icon={social.icon} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
