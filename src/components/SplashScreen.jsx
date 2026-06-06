import { motion } from 'framer-motion'
import { LOGO_SRC } from '../data/constants'

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-white text-ink"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="chrome-panel shine-sweep relative flex flex-col items-center rounded-lg px-8 py-10"
      >
        <span className="sparkle -right-5 -top-5"><span /></span>
        <motion.img
          src={LOGO_SRC}
          alt="M-ONE Entertainment"
          className="h-auto w-48 max-w-[70vw] rounded-lg object-contain sm:w-56"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-slate-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full rounded-full bg-teal-light"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.8, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.p
          className="mt-4 font-script text-2xl text-ink"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          We Prioritise Excellence
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
