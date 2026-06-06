import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { IMAGES, PROMISES, VIDEO_SRC } from '../data/constants'

export default function About({ onNavigate }) {
  return (
    <section id="about" className="relative bg-[#f7fcff] py-12">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.38fr_0.62fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label mb-3">Why Choose M-ONE</p>
          <h2 className="mb-5 text-[clamp(2rem,4vw,3.2rem)] font-black leading-tight text-black">
            We Plan. We Execute.
            <br />
            You{' '}
            <span className="font-script text-[1.18em] font-normal text-[#008eae]">
              Celebrate.
            </span>
          </h2>
          <p className="mb-5 max-w-md text-base font-medium leading-relaxed text-[#17252b]">
            At M-One Entertainment, we blend creativity, precision and passion to
            deliver seamless events that exceed expectations. Your vision is our
            mission.
          </p>
          <ul className="mb-7 space-y-2">
            {PROMISES.map((promise) => (
              <li key={promise} className="flex items-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="h-5 w-5 fill-[#008eae] text-white" />
                {promise}
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => onNavigate('contact')} className="btn-teal">
            About Us
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="feature-collage"
        >
          <div className="main-media-card">
            <video
              src={VIDEO_SRC}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={IMAGES.stageConsole}
            />
            <div className="promise-card">
              <div className="service-icon !h-14 !w-14">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <div>
                <strong>Our Promise</strong>
                <p>Quality | Creativity | Excellence Your Event, Our Priority.</p>
              </div>
            </div>
          </div>
          <div className="side-stack">
            <img src={IMAGES.stageWide} alt="Stage lighting at event" />
            <img src={IMAGES.crew} alt="M-ONE crew" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
