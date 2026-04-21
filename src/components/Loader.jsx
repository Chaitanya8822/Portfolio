import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#0a0a0f] flex flex-col items-center justify-center z-50">
      {/* Animated logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative mb-8"
      >
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: '#6366f1',
            borderRightColor: '#8b5cf6',
          }}
        />
        {/* Inner ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: '#06b6d4',
            borderLeftColor: '#06b6d4',
          }}
        />
        {/* Center dot */}
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400" />
        </motion.div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl font-bold gradient-text mb-2"
      >
        Chaitanya Krishna
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-gray-500 text-sm font-mono tracking-widest uppercase"
      >
        AI/ML Engineer
      </motion.p>

      {/* Loading dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-2 mt-8"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
            className="w-2 h-2 rounded-full bg-indigo-500"
          />
        ))}
      </motion.div>
    </div>
  )
}