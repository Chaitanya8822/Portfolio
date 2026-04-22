import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCpu, FiCode, FiDatabase, FiZap } from 'react-icons/fi'

const highlights = [
  {
    icon: FiCpu,
    title: 'AI/ML',
    desc: 'Specializing in machine learning algorithms, model training & evaluation',
    color: 'from-indigo-500/20 to-indigo-500/5',
    border: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
  },
  {
    icon: FiCode,
    title: 'Deep Learning',
    desc: 'Building neural networks with TensorFlow & PyTorch for complex problems',
    color: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: FiDatabase,
    title: 'NLP & Data',
    desc: 'Text processing, language models, and data analysis with Python',
    color: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: FiZap,
    title: 'Problem Solver',
    desc: 'Turning real-world challenges into intelligent, data-driven solutions',
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 relative">
      {/* Background decoration */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            Get to know me
          </p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar card */}
            <div className="relative">
              <div className="w-56 h-56 rounded-3xl glass-card overflow-hidden flex items-center justify-center relative">
                <div className="absolute inset-0 gradient-bg opacity-20" />
                <div className="relative z-10 text-center">
                  <div className="w-28 h-28 rounded-full gradient-bg mx-auto mb-3 flex items-center justify-center text-5xl font-black text-white shadow-2xl shadow-indigo-500/30">
                    CK
                  </div>
                  <p className="text-white font-semibold text-sm">Chaitanya Krishna</p>
                  <p className="text-indigo-300 text-xs font-mono">AI/ML Engineer</p>
                </div>
              </div>
              {/* Pulse rings */}
              <div className="absolute -inset-2 rounded-3xl border border-indigo-500/20 animate-ping opacity-30" />
              <div className="absolute -inset-4 rounded-3xl border border-cyan-500/10 animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full">
              {[
                  { value: '0+', label: 'Years Learning' },
                  { value: '2', label: 'Projects Built' },
                  { value: '5+', label: 'Certifications' },
                ].map(({ value, label }) => (
                <div key={label} className="glass-card p-4 text-center">
                  <div className="text-2xl font-black gradient-text">{value}</div>
                  <div className="text-gray-500 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm <span className="text-white font-semibold">Kotari Chaitanya Krishna</span>, an
                aspiring <span className="gradient-text font-semibold">AI/ML Engineer</span> currently
                pursuing MCA (Master of Computer Applications) at BVC College of Engineering, Rajamundry.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey in AI began with a curiosity about how machines can learn and make
                decisions. That curiosity has grown into a deep passion for building intelligent
                systems that solve real-world problems using data-driven approaches.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I work with Python, TensorFlow, PyTorch, and various data science tools to
                implement models ranging from classical ML algorithms to advanced deep learning
                architectures and NLP pipelines.
              </p>
            </div>

            {/* Contact info pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: 'BVC College of Engineering', color: 'indigo' },
                { label: 'AI/ML', color: 'purple' },
                { label: 'MCA Student', color: 'cyan' },
                { label: 'Rajamundry,Andhra Pradesh, India', color: 'emerald' },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                    color === 'indigo'
                      ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
                      : color === 'purple'
                      ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                      : color === 'cyan'
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                      : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {highlights.map(({ icon: Icon, title, desc, color, border, iconColor }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card p-6 bg-gradient-to-br ${color} border ${border} cursor-default`}
            >
              <div className={`${iconColor} mb-4`}>
                <Icon size={28} />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}