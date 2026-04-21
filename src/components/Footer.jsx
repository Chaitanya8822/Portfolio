import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Education', to: 'education' },
  { name: 'Contact', to: 'contact' },
]

const socialLinks = [
  {
    icon: FiGithub,
    href: 'https://github.com/Chaitanya8822',
    label: 'GitHub',
  },
  {
    icon: FiLinkedin,
    href: 'http://www.linkedin.com/in/kotari-chaitanyakrishna-317229270',
    label: 'LinkedIn',
  },
  {
    icon: FiMail,
    href: 'mailto:chaitanyakrishnakotari@gmail.com',
    label: 'Email',
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 pt-16 pb-8 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center font-black text-white text-lg shadow-lg shadow-indigo-500/30">
                C
              </div>
              <div>
                <p className="text-white font-bold">Chaitanya Krishna</p>
                <p className="text-gray-600 text-xs font-mono">AI/ML Engineer</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Passionate about building intelligent systems that solve real-world problems using machine
              learning and deep learning.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg glass border border-gray-700/50 hover:border-indigo-500/40 flex items-center justify-center text-gray-500 hover:text-indigo-400 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-64}
                  className="text-gray-600 hover:text-indigo-400 text-sm transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact quick */}
          <div>
            <p className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </p>
            <div className="space-y-3">
              <a
                href="mailto:chaitanyakrishnakotari@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-400 text-sm transition-colors duration-200 group"
              >
                <FiMail size={14} className="group-hover:text-indigo-400" />
                chaitanyakrishnakotari@gmail.com
              </a>
              <a
                href="tel:+918179308822"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-400 text-sm transition-colors duration-200 group"
              >
                <span className="text-xs">📞</span>
                +91 8179308822
              </a>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <span className="text-xs">📍</span>
                Andhra Pradesh, India
              </div>
            </div>

            {/* Available badge */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400"
              />
              <span className="text-emerald-400 text-xs font-medium">Open to opportunities</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-xs flex items-center gap-1.5">
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiHeart className="text-rose-500" size={12} />
            </motion.span>{' '}
            by{' '}
            <span className="gradient-text font-semibold">Chaitanya Krishna</span>
            {' '}· {new Date().getFullYear()} · Built with React & Tailwind CSS
          </p>

          {/* Back to top */}
          <Link to="hero" smooth duration={800}>
            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-gray-600 hover:text-indigo-400 text-xs transition-colors duration-200 cursor-pointer border border-gray-800 hover:border-indigo-500/30 px-3 py-1.5 rounded-lg"
            >
              <FiArrowUp size={12} />
              Back to top
            </motion.button>
          </Link>
        </div>
      </div>
    </footer>
  )
}