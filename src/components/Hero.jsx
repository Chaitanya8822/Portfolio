import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi'

const socialLinks = [
  {
    icon: FiGithub,
    href: 'https://github.com/Chaitanya8822',
    label: 'GitHub',
    color: 'hover:text-white',
  },
  {
    icon: FiLinkedin,
    href: 'http://www.linkedin.com/in/kotari-chaitanyakrishna-317229270',
    label: 'LinkedIn',
    color: 'hover:text-blue-400',
  },
  {
    icon: FiMail,
    href: 'mailto:chaitanyakrishnakotari@gmail.com',
    label: 'Email',
    color: 'hover:text-cyan-400',
  },
]

const floatingOrbs = [
  { size: 300, top: '10%', left: '5%', color: 'from-indigo-600/20', delay: 0 },
  { size: 250, bottom: '15%', right: '8%', color: 'from-cyan-500/15', delay: 1 },
  { size: 200, top: '50%', right: '20%', color: 'from-purple-600/10', delay: 2 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
          className={`absolute rounded-full bg-gradient-radial ${orb.color} to-transparent blur-3xl pointer-events-none`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            bottom: orb.bottom,
            right: orb.right,
            background: `radial-gradient(circle, ${
              orb.color.includes('indigo')
                ? 'rgba(99,102,241,0.2)'
                : orb.color.includes('cyan')
                ? 'rgba(6,182,212,0.15)'
                : 'rgba(139,92,246,0.12)'
            } 0%, transparent 70%)`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-indigo-300 mb-8 border border-indigo-500/20"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-400"
          />
          Available for opportunities
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-gray-400 text-lg font-mono mb-2 tracking-widest uppercase">
            Hello, I'm
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
            <span className="gradient-text text-shadow-glow">Chaitanya</span>
            <br />
            <span className="text-white">Krishna</span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10"
        >
          <TypeAnimation
            sequence={[
              'AI/ML Engineer',
              2000,
              'Deep Learning Enthusiast',
              2000,
              'NLP Practitioner',
              2000,
              'Python Developer',
              2000,
              'Data Science Explorer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text font-bold"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about building intelligent systems using{' '}
          <span className="text-indigo-400 font-semibold">Machine Learning</span>,{' '}
          <span className="text-purple-400 font-semibold">Deep Learning</span>, and{' '}
          <span className="text-cyan-400 font-semibold">NLP</span> to solve real-world problems.
          Currently pursuing MCA at BVC College of Engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link to="projects" smooth duration={500} offset={-64}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glow-btn px-8 py-3.5 rounded-xl font-semibold text-white text-base w-full sm:w-auto"
            >
              View My Work
            </motion.button>
          </Link>
          <motion.a
            href="/Portfolio/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-indigo-300 border border-indigo-500/30 hover:border-indigo-500/60 hover:bg-indigo-500/10 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <FiDownload size={16} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {socialLinks.map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className={`text-gray-500 ${color} transition-all duration-300`}
              aria-label={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-600 text-xs font-mono uppercase tracking-widest">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-indigo-500"
          >
            <FiArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </section>
  )
}