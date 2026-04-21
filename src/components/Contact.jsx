import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub,
  FiSend, FiCheckCircle, FiAlertCircle, FiLoader,
} from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'chaitanyakrishnakotari@gmail.com',
    href: 'mailto:chaitanyakrishnakotari@gmail.com',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 8179308822',
    href: 'tel:+918179308822',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'kotari-chaitanyakrishna',
    href: 'http://www.linkedin.com/in/kotari-chaitanyakrishna-317229270',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'Chaitanya8822',
    href: 'https://github.com/Chaitanya8822',
    color: 'text-gray-300',
    bg: 'bg-gray-500/10',
    border: 'border-gray-500/20',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Andhra Pradesh, India',
    href: null,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('sending')
    try {
      // Replace with your EmailJS credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      setStatus('success')
      setForm(initialForm)
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputClass = (field) =>
    `w-full bg-gray-900/60 border ${
      errors[field] ? 'border-red-500/60' : 'border-gray-700/50 focus:border-indigo-500/60'
    } rounded-xl px-4 py-3 text-gray-200 text-sm placeholder-gray-600 focus:outline-none focus:ring-2 ${
      errors[field] ? 'focus:ring-red-500/20' : 'focus:ring-indigo-500/20'
    } transition-all duration-200 backdrop-blur-sm`

  return (
    <section id="contact" className="py-24 relative">
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          filter: 'blur(70px)',
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
            Let's Connect
          </p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            I'm always open to discussing AI/ML opportunities, collaborations, or just having a conversation
            about technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Contact Information</h3>
              <p className="text-gray-500 text-sm">
                Reach out through any of these channels and I'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color, bg, border }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-4 glass-card border ${border} group cursor-default`}
                >
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center ${color} flex-shrink-0 border ${border}`}>
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-gray-600 text-xs mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={`${color} text-sm font-medium hover:underline truncate block`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <div className="glass-card p-5 border border-emerald-500/20 bg-emerald-500/5">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-emerald-400 flex-shrink-0"
                />
                <div>
                  <p className="text-emerald-300 font-semibold text-sm">Available for Opportunities</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    Open to internships, research collaborations & AI/ML projects
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-500 text-xs mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass('name')}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <FiAlertCircle size={11} /> {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-gray-500 text-xs mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass('email')}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <FiAlertCircle size={11} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-gray-500 text-xs mb-1.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Collaboration / Opportunity / Query"
                  className={inputClass('subject')}
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-500 text-xs mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass('message')} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <FiAlertCircle size={11} /> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                className={`w-full py-3.5 rounded-xl font-semibold text-white text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-emerald-500'
                    : status === 'error'
                    ? 'bg-red-500'
                    : 'glow-btn'
                }`}
              >
                {status === 'idle' && (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <FiLoader size={16} />
                    </motion.div>
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <FiCheckCircle size={16} />
                    Message Sent!
                  </>
                )}
                {status === 'error' && (
                  <>
                    <FiAlertCircle size={16} />
                    Failed — Try Again
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}