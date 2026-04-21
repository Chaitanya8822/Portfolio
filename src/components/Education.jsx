import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

const educationData = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    specialization: 'Artificial Intelligence & Machine Learning',
    institution: 'BVC College of Engineering',
    location: 'Andhra Pradesh, India',
    period: '2025 – 2027',
    status: 'Pursuing',
    score: null,
    color: 'indigo',
    icon: '🎓',
    highlights: ['AI/ML Specialization', 'Deep Learning', 'NLP', 'Research Projects'],
  },
  {
    id: 2,
    degree: 'Bachelor of Science (B.Sc)',
    specialization: null,
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: '2021 – 2025',
    status: 'Completed',
    score: '67%',
    color: 'purple',
    icon: '🏛️',
    highlights: ['Programming Fundamentals', 'Data Structures', 'Algorithms', 'Database Systems'],
  },
  {
    id: 3,
    degree: 'Diploma',
    specialization: 'Agricultural Sciences',
    institution: 'Nova Agricultural Polytechnic',
    location: 'Andhra Pradesh, India',
    period: '2017 – 2020',
    status: 'Completed',
    score: '73%',
    color: 'emerald',
    icon: '📋',
    highlights: ['Agricultural Technology', 'Sciences', 'Practical Training'],
  },
  {
    id: 4,
    degree: 'Secondary School Certificate (SSC)',
    specialization: 'General Studies',
    institution: 'Triveni School',
    location: 'Andhra Pradesh, India',
    period: '2016 – 2017',
    status: 'Completed',
    score: '85%',
    color: 'cyan',
    icon: '🏫',
    highlights: ['Mathematics', 'Science', 'English', 'Social Studies'],
  },
]

const colorMap = {
  indigo: {
    dot: 'bg-indigo-500',
    ring: 'border-indigo-500/40',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    border: 'border-indigo-500/20 hover:border-indigo-500/50',
    gradient: 'from-indigo-600/10 to-transparent',
    tag: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/15',
    score: 'text-indigo-300',
    glow: 'group-hover:shadow-indigo-500/10',
  },
  purple: {
    dot: 'bg-purple-500',
    ring: 'border-purple-500/40',
    badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    border: 'border-purple-500/20 hover:border-purple-500/50',
    gradient: 'from-purple-600/10 to-transparent',
    tag: 'bg-purple-500/10 text-purple-400 border-purple-500/15',
    score: 'text-purple-300',
    glow: 'group-hover:shadow-purple-500/10',
  },
  emerald: {
    dot: 'bg-emerald-500',
    ring: 'border-emerald-500/40',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    border: 'border-emerald-500/20 hover:border-emerald-500/50',
    gradient: 'from-emerald-600/10 to-transparent',
    tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/15',
    score: 'text-emerald-300',
    glow: 'group-hover:shadow-emerald-500/10',
  },
  cyan: {
    dot: 'bg-cyan-500',
    ring: 'border-cyan-500/40',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    border: 'border-cyan-500/20 hover:border-cyan-500/50',
    gradient: 'from-cyan-600/10 to-transparent',
    tag: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/15',
    score: 'text-cyan-300',
    glow: 'group-hover:shadow-cyan-500/10',
  },
}

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-24 relative">
      <div
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm uppercase tracking-widest mb-3">
            Academic Journey
          </p>
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line on md+ */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-transparent transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {educationData.map((edu, i) => {
              const c = colorMap[edu.color]
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-0`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 z-10 hidden md:flex items-center justify-center">
                    <div className={`w-full h-full rounded-full ${c.dot} shadow-lg flex items-center justify-center`}>
                      <div className="w-2 h-2 rounded-full bg-white/80" />
                    </div>
                    <div className={`absolute inset-0 rounded-full border-2 ${c.ring} animate-ping opacity-40`} />
                  </div>

                  {/* Card — 45% width offset from center */}
                  <div className={`w-full md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`glass-card group relative overflow-hidden border ${c.border} bg-gradient-to-br ${c.gradient} shadow-lg ${c.glow} transition-all duration-300`}
                    >
                      <div className="p-6">
                        {/* Top row */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-3xl">{edu.icon}</div>
                          <div className="flex flex-col items-end gap-2">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${c.badge}`}>
                              {edu.status}
                            </span>
                            {edu.score && (
                              <span className={`text-lg font-black ${c.score} font-mono`}>
                                {edu.score}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Degree */}
                        <h3 className="text-white font-bold text-base mb-1 leading-tight">
                          {edu.degree}
                        </h3>
                        {edu.specialization && (
                          <p className="text-gray-400 text-sm font-medium mb-3">{edu.specialization}</p>
                        )}

                        {/* Institution info */}
                        <div className="space-y-1.5 mb-4 mt-2">
                          <div className="flex items-center gap-2 text-gray-500 text-xs">
                            <FiBook size={11} className="flex-shrink-0" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 text-xs">
                            <FiMapPin size={11} className="flex-shrink-0" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 text-xs">
                            <FiCalendar size={11} className="flex-shrink-0" />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/50">
                          {edu.highlights.map((h) => (
                            <span
                              key={h}
                              className={`px-2 py-0.5 rounded text-xs border ${c.tag}`}
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}