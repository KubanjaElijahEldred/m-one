import { motion } from 'framer-motion'
import { Users, Smile, Trophy, Headphones } from 'lucide-react'
import { STATS } from '../data/constants'

const iconMap = { Users, Smile, Trophy, Headphones }

export default function Stats() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="glitter-field absolute inset-0" />
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <p className="section-label mb-2">Why Us</p>
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            Trusted production support for events that cannot afford guesswork.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((stat, i) => {
          const Icon = iconMap[stat.icon]
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="chrome-panel shine-sweep rounded-lg p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white shadow-lg shadow-teal-light/25">
                <Icon className="h-7 w-7" />
              </div>
              <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-muted">{stat.label}</p>
            </motion.div>
          )
        })}
        </div>
      </div>
    </section>
  )
}
