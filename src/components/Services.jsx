import { motion } from 'framer-motion'
import { CalendarDays, Mic2, Star, UsersRound } from 'lucide-react'
import { EVENT_CARDS } from '../data/constants'

const iconMap = { CalendarDays, UsersRound, Mic2, Star }

export default function Services() {
  return (
    <section id="services" className="relative z-20 -mt-6 bg-[#f7fcff] pb-8 pt-14">
      <div className="section-shell">
        <div className="mb-7 text-center">
          <p className="section-kicker mx-auto mb-2">What We Do</p>
          <h2 className="text-[clamp(1.7rem,4vw,2.7rem)] font-black uppercase tracking-[0.12em] text-[#071b22]">
            Events That Leave A{' '}
            <span className="text-[#007fa5]">Lasting Impact</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="service-ribbon"
        >
          {EVENT_CARDS.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <article key={item.title} className="service-tile">
                <div className="service-icon">
                  <Icon className="h-9 w-9" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
