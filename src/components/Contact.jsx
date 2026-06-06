import { Mail, MessageCircle, Phone, Send } from 'lucide-react'
import { EMAIL, PHONE, PHONE_RAW, WHATSAPP_URL } from '../data/constants'

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 bg-[#f7fcff] pb-0 pt-8">
      <div className="section-shell">
        <div className="contact-bar">
          <a href={`tel:${PHONE_RAW}`} className="contact-method">
            <span><Phone className="h-6 w-6" /></span>
            <div>
              <small>Call Us</small>
              <strong>{PHONE}</strong>
            </div>
          </a>
          <a href={WHATSAPP_URL} className="contact-method">
            <span className="whatsapp"><MessageCircle className="h-6 w-6" /></span>
            <div>
              <small>WhatsApp</small>
              <strong>{PHONE}</strong>
            </div>
          </a>
          <a href={`mailto:${EMAIL}`} className="contact-method">
            <span><Mail className="h-6 w-6" /></span>
            <div>
              <small>Email Us</small>
              <strong>{EMAIL}</strong>
            </div>
          </a>
          <form className="newsletter-mini">
            <input type="email" placeholder="Your email address" aria-label="Your email address" />
            <button type="submit" aria-label="Send newsletter request">
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
