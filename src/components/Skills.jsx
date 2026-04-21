import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiPython, SiTensorflow, SiPytorch, SiPandas, SiNumpy,
  SiGit, SiGithub, SiScikitlearn, SiKeras,
} from 'react-icons/si'
import { FiCloud, FiCpu, FiActivity, FiMessageSquare, FiLayers, FiCode, FiTerminal } from 'react-icons/fi'

const skillCategories = [
  {
    title: 'Programming',
    color: 'indigo',
    skills: [
      { name: 'Python', level: 85, icon: SiPython },
    ],
  },
  {
    title: 'Machine Learning',
    color: 'purple',
    skills: [
      { name: 'ML Algorithms', level: 80, icon: FiCpu },
      { name: 'Model Training', level: 78, icon: FiActivity },
      { name: 'Model Evaluation', level: 75, icon: FiActivity },
    ],
  },
  {
    title: 'Deep Learning & NLP',
    color: 'cyan',
    skills: [
      { name: 'Neural Networks', level: 72, icon: FiLayers },
      { name: 'NLP & Text Processing', level: 70, icon: FiMessageSquare },
      { name: 'Language Models', level: 65, icon: FiMessageSquare },
    ],
  },
  {
    title: 'Frameworks & Tools',
    color: 'emerald',
    skills: [
      { name: 'TensorFlow', level: 70, icon: SiTensorflow },
      { name: 'PyTorch', level: 65, icon: SiPytorch },
      { name: 'Pandas', level: 82, icon: SiPandas },
      { name: 'NumPy', level: 80, icon: SiNumpy },
    ],
  },
]

const techIcons = [
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
  { icon: SiPytorch, name: 'PyTorch', color: '#EE4C2C' },
  { icon: SiPandas, name: 'Pandas', color: '#150458' },
  { icon: SiNumpy, name: 'NumPy', color: '#4DABCF' },
  { icon: SiScikitlearn, name: 'Scikit-learn', color: '#F7931E' },
  { icon: SiKeras, name: 'Keras', color: '#D00000' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiGithub, name: 'GitHub', color: '#f0f0f0' },
  { icon: FiCode, name: 'VS Code', color: '#007ACC' },
  { icon: FiTerminal, name: 'Jupyter', color: '#F37626' },
  { icon: FiCloud, name: 'Cloud', color: '#06b6d4' },
]

const colorMap = {
  indigo: {
    bar: 'from-indigo-500 to-indigo-400',
    text: 'text-indigo-400',
    border: 'border-indigo-500/20',
    bg: 'bg-indigo-500/5',
    glow: 'shadow-indigo-500/20',
  },
  purple: {
    bar: 'from-purple-500 to-purple-400',
    text: 'text-purple-400',
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/5',
    glow: 'shadow-purple-500/20',
  },
  cyan: {
    bar: 'from-cyan-500 to-cyan-400',
    text: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    glow: 'shadow-cyan-500/20',
  },
  emerald: {
    bar: 'from-emerald-500 to-emerald-400',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    glow: 'shadow-emerald-500/20',
  },
}

function SkillBar({ name, level, color, icon: Icon, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const c = colorMap[color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {Icon && <Icon className={`${c.text} text-sm`} />}
          <span className="text-gray-300 text-sm font-medium">{name}</span>
        </div>
        <span className={`${c.text} text-xs font-mono font-bold`}>{level}%</span>
      </div>
      <div className="h-2 bg-gray-800/60 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${c.bar} progress-bar relative`}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 relative">
      <div
        className="absolute right-0 top-1/4 w-80 h-80 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            My Expertise
          </p>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((cat, ci) => {
            const c = colorMap[cat.color]
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: ci * 0.15 }}
                className={`glass-card p-6 border ${c.border} ${c.bg} shadow-lg ${c.glow}`}
              >
                <h3 className={`${c.text} font-bold text-sm uppercase tracking-wider mb-5 font-mono`}>
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      color={cat.color}
                      index={si}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8"
        >
          <h3 className="text-center text-gray-400 text-sm uppercase tracking-widest font-mono mb-8">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techIcons.map(({ icon: Icon, name, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6, scale: 1.15 }}
                className="flex flex-col items-center gap-2 group cursor-default"
              >
                <div className="w-14 h-14 rounded-xl glass flex items-center justify-center border border-gray-700/50 group-hover:border-indigo-500/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-indigo-500/10">
                  <Icon size={28} style={{ color }} />
                </div>
                <span className="text-gray-600 text-xs group-hover:text-gray-400 transition-colors">
                  {name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}