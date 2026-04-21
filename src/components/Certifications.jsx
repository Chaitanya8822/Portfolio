import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiPlus, FiCalendar, FiExternalLink } from 'react-icons/fi'

const placeholderCerts = [
  {
    id: 1,
    title: 'To Be Added',
    issuer: 'Certification Authority',
    date: 'Coming Soon',
    category: 'Machine Learning',
    color: 'indigo',
  },
  {
    id: 2,
    title: 'To Be Added',
    issuer: 'Certification Authority',
    date: 'Coming Soon',
    category: 'Deep Learning',
    color: 'purple',
  },
  {
    id: 3,
    title: 'To Be Added',
    issuer: 'Certification Authority',
    date: 'Coming Soon',
    category: 'NLP',
    color: 'cyan',
  },
  {
    id: 4,
    title: 'To Be Added',
    issuer: 'Certification Authority',
    date: 'Coming Soon',
    category: 'Data Science',
    color: 'emerald',
  },
  {
    id: 5,
    title: 'To Be Added',
    issuer: 'Certification Authority',
    date: 'Coming Soon',
    category: 'Python',
    color: 'rose',
  },
  {
    id: 6,
    title: 'To Be Added',
    issuer: 'Certification Authority',
    date: 'Coming Soon',
    category: 'Cloud AI',
    color: 'amber',
  },
]

const colorMap = {
  indigo: {
    gradient: 'from-indigo-600/15 to-transparent',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    icon: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
  },
  purple: {
    gradient: 'from-purple-600/15 to-transparent',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    icon: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
  },
  cyan: {
    gradient: 'from-cyan-600/15 to-transparent',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    icon: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
  },
  emerald: {
    gradient: 'from-emerald-600/15 to-transparent',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    icon: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
  },
  rose: {
    gradient: 'from-rose-600/15 to-transparent',
    border: 'border-rose-500/20 hover:border-rose-500/50',
    badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    icon: 'text-rose-400',
    iconBg: 'bg-rose-500/10',
  },
  amber: {
    gradient: 'from-amber-600/15 to-transparent',
    border: 'border-amber-500/20 hover:border-amber-500/50',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    icon: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
  },
}

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="py-24 relative">
      <div
        className="absolute right-0 bottom-0 w-80 h-80 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            My Achievements
          </p>
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-6" />
        </motion.div>

        {/* Notice banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-4 text-center mb-10 border border-amber-500/20 bg-amber-500/5"
        >
          <div className="flex items-center justify-center gap-3">
            <FiAward className="text-amber-400" size={18} />
            <p className="text-gray-300 text-sm">
              <span className="text-amber-300 font-semibold">Certifications Coming Soon</span> — Currently
              pursuing various AI/ML certifications. Will be updated shortly!
            </p>
            <FiPlus className="text-amber-400" size={18} />
          </div>
        </motion.div>

        {/* Cert Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderCerts.map((cert, i) => {
            const c = colorMap[cert.color]
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-card group relative overflow-hidden border ${c.border} bg-gradient-to-br ${c.gradient} cursor-default transition-all duration-300`}
              >
                <div className="p-6">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center ${c.icon} border ${c.badge.split(' ').find(cls => cls.startsWith('border'))}`}>
                      <FiAward size={22} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${c.badge}`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-gray-300 font-bold text-lg mb-1">{cert.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{cert.issuer}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <div className="flex items-center gap-1.5 text-gray-600 text-xs">
                      <FiCalendar size={11} />
                      <span>{cert.date}</span>
                    </div>
                    <button
                      disabled
                      className="flex items-center gap-1 text-gray-600 text-xs opacity-40 cursor-not-allowed"
                    >
                      <FiExternalLink size={11} />
                      View
                    </button>
                  </div>

                  {/* Placeholder pulse */}
                  <div className="mt-4 h-1.5 bg-gray-800/60 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className={`h-full w-1/3 rounded-full ${c.iconBg} opacity-60`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}