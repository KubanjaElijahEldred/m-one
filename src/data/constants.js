export const LOGO_SRC = '/logo.png'
export const PHONE = '+256 708 142 618'
export const PHONE_RAW = '+256708142618'
export const WHATSAPP_URL = 'https://wa.me/256708142618'
export const EMAIL = 'info@m-oneent.com'
export const VIDEO_SRC = '/WhatsApp Video 2026-06-03 at 12.39.07.mp4'

export const IMAGES = {
  mixerPortrait: '/1.png',
  crew: '/2.png',
  console: '/3.png',
  stageConsole: '/4.png',
  stageWide: '/5.png',
  brand: '/favicon.png',
}

export const NAV_LINKS = [
  { label: 'HOME', page: 'home' },
  { label: 'SERVICES', page: 'services' },
  { label: 'GALLERY', page: 'gallery' },
  { label: 'PACKAGES', page: 'packages' },
  { label: 'CONTACT', page: 'contact' },
]

export const EVENT_CARDS = [
  {
    title: 'Corporate Events',
    text: 'Professional events that impress and deliver results.',
    icon: 'CalendarDays',
  },
  {
    title: 'Private Parties',
    text: "Celebrate life's special moments in style.",
    icon: 'UsersRound',
  },
  {
    title: 'Live Shows',
    text: 'Unforgettable performances that entertain and engage.',
    icon: 'Mic2',
  },
  {
    title: 'Brand Activations',
    text: 'Bring your brand to life with creative experiences.',
    icon: 'Star',
  },
]

export const PRODUCTION_TOOLS = [
  { label: 'Sound', icon: 'AudioLines' },
  { label: 'Stage', icon: 'Frame' },
  { label: 'Lights', icon: 'Lightbulb' },
  { label: 'Screen', icon: 'MonitorPlay' },
]

export const GALLERY_IMAGES = [
  { src: IMAGES.stageWide, alt: 'Outdoor stage and audience' },
  { src: IMAGES.stageConsole, alt: 'Sound console facing a stage' },
  { src: IMAGES.mixerPortrait, alt: 'M-ONE crew mixing live sound' },
  { src: IMAGES.crew, alt: 'M-ONE crew at production desk' },
  { src: IMAGES.console, alt: 'Digital audio rack during a live event' },
]

export const STATS = [
  { value: '250+', label: 'Events Completed', icon: 'BadgeCheck' },
  { value: '150+', label: 'Happy Clients', icon: 'Handshake' },
  { value: '10+', label: 'Years Experience', icon: 'Trophy' },
]

export const PROMISES = [
  'Creative & Innovative Concepts',
  'Professional & Experienced Team',
  'High Quality Equipment & Production',
  'End-to-End Event Management',
]

export const PRELOAD_IMAGES = [
  LOGO_SRC,
  ...Object.values(IMAGES),
  ...GALLERY_IMAGES.map((image) => image.src),
]

export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', icon: 'Facebook' },
  { label: 'Instagram', href: '#', icon: 'Instagram' },
  { label: 'TikTok', href: '#', icon: 'Music2' },
  { label: 'YouTube', href: '#', icon: 'Youtube' },
]
