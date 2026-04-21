import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiClock, FiCode } from 'react-icons/fi'

const placeholderProjects = [
  {
    id: 1,
    title: 'Coming Soon',
    subtitle: 'AI/ML Project',
    desc: 'An exciting machine learning project is currently in development. Stay tuned for updates!',
    tags: ['Python', 'TensorFlow', 'ML'],
    color: 'indigo',
  },
  {
    id: 2,
    title: 'Coming Soon',
    subtitle: 'Deep Learning Project',
    desc: 'A deep learning application leveraging neural networks to solve complex real-world problems.',
    tags: ['PyTorch', 'Deep Learning', 'CNN'],
    color: 'purple',
  },
  {
    id: 3,
    title: 'Coming Soon',
    subtitle: 'NLP Project',
    desc: 'A natural language processing project focused on text understanding and language generation.',
    tags: ['NLP', 'BERT', 'Python'],
    color: 'cyan',
  },
  {
    id: 4,
    title: 'Coming Soon',
    subtitle: 'Data Science Project',
    desc: 'A comprehensive data analysis and visualization project uncovering insights from large datasets.',
    tags: ['Pandas', 'NumPy', 'Data Analysis'],
    color: 'emerald',
  },
  {
    id: 5,
    title: 'Coming Soon',
    subtitle: 'Computer Vision',
    desc: 'A computer vision project enabling machines to interpret and understand visual information.',
    tags: ['OpenCV', 'CNN', 'Image Processing'],
    color: 'rose',
  },
  {
    id: 6,
    title: 'Coming Soon',
    subtitle: 'Reinforcement Learning',
    desc: 'An RL project where an agent learns optimal strategies through interaction with an environment.',
    tags: ['RL', 'Q-Learning', 'Gym'],
    color: 'amber',
  },
]

const colorMap = {
  indigo: {
    gradient: 'from-indigo-600/20 to-indigo-600/5',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    icon: 'text-indigo-400',
    title: 'text-indigo-300',
    glow: 'group-hover:shadow-indigo-500/10',
  },
  purple: {
    gradient: 'from-purple-600/20 to-purple-600/5',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    icon: 'text-purple-400',
    title: 'text-purple-300',
    glow: 'group-hover:shadow-purple-500/10',
  },
  cyan: {
    gradient: 'from-cyan-600/20 to-cyan-600/5',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    icon: 'text-cyan-400',
    title: 'text-cyan-300',
    glow: 'group-hover:shadow-cyan-500/10',
  },
  emerald: {
    gradient: 'from-emerald-600/20 to-emerald-600/5',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    icon: 'text-emerald-400',
    title: 'text-emerald-300',
    glow: 'group-hover:shadow-emerald-500/10',
  },
  rose: {
    gradient: 'from-rose-600/20 to-rose-600/5',
    border: 'border-rose-500/20 hover:border-rose-500/50',
    badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    icon: 'text-rose-400',
    title: 'text-rose-300',
    glow: 'group-hover:shadow-rose-500/10',
  },
  amber: {
    gradient: 'from-amber-600/20 to-amber-600/5',
    border: 'border-amber-500/20 hover:border-amber-500/50',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    icon: 'text-amber-400',
    title: 'text-amber-300',
    glow: 'group-hover:shadow-amber-500/10',
  },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 relative">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
            What I've Built
          </p>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-6" />
        </motion.div>

        {/* Coming Soon banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-4 text-center mb-10 border border-indigo-500/20 bg-indigo-500/5"
        >
          <div className="flex items-center justify-center gap-3">
            <FiClock className="text-indigo-400" size={18} />
            <p className="text-gray-300 text-sm">
              <span className="text-indigo-300 font-semibold">Projects Coming Soon</span> — Currently
              in development. Check back for exciting AI/ML projects!
            </p>
            <FiCode className="text-cyan-400" size={18} />
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.map((project, i) => {
            const c = colorMap[project.color]
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`glass-card group relative overflow-hidden border ${c.border} bg-gradient-to-br ${c.gradient} cursor-default transition-all duration-300 shadow-lg ${c.glow}`}
              >
                {/* Top shimmer bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6">
                  {/* Icon + Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center ${c.icon}`}>
                      <FiCode size={22} />
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-800/60 border border-gray-700/50">
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-amber-400"
                      />
                      <span className="text-gray-400 text-xs">In Progress</span>
                    </div>
                  </div>

                  {/* Title */}
                  <p className={`text-xs font-mono uppercase tracking-wider ${c.title} mb-1`}>
                    {project.subtitle}
                  </p>
                  <h3 className="text-white font-bold text-xl mb-3">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium border ${c.badge}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Ghost buttons */}
                  <div className="flex gap-3 opacity-40">
                    <button
                      disabled
                      className="flex items-center gap-1.5 text-gray-500 text-xs border border-gray-700/50 px-3 py-1.5 rounded-lg cursor-not-allowed"
                    >
                      <FiGithub size={12} />
                      GitHub
                    </button>
                    <button
                      disabled
                      className="flex items-center gap-1.5 text-gray-500 text-xs border border-gray-700/50 px-3 py-1.5 rounded-lg cursor-not-allowed"
                    >
                      <FiExternalLink size={12} />
                      Live Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Chaitanya8822"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl border border-indigo-500/30 text-indigo-300 hover:border-indigo-500/60 hover:bg-indigo-500/10 transition-all duration-300 font-semibold"
            >
              <FiGithub size={18} />
              View GitHub Profile
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}