import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Calendar, MessageSquare } from 'lucide-react'
import Section from '../ui/Section'
import ContactForm from '../ui/ContactForm'
import GlassCard from '../ui/GlassCard'
import useMagnetic from '../../hooks/useMagnetic'
import personalInfo from '../../config/personalInfo'

const Contact = () => {
  const getSocialDisplayText = (url, type) => {
    if (!url) return ''
    try {
      const urlObj = new URL(url)
      if (type === 'email') return personalInfo.email
      return urlObj.hostname + urlObj.pathname
    } catch {
      return url.replace(/^https?:\/\//, '').replace(/^mailto:/, '')
    }
  }

  const socialLinks = [
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email', text: personalInfo.email },
    { icon: Github, href: personalInfo.social.github, label: 'GitHub', text: getSocialDisplayText(personalInfo.social.github, 'github') },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', text: getSocialDisplayText(personalInfo.social.linkedin, 'linkedin') },
  ].filter(link => link.href && link.href !== 'mailto:' && link.href !== 'https://')

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's Work Together"
      className="bg-surface-dark/20"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>

        {/* Right Side - Calendly & Social Links */}
        <div className="space-y-6">
          {/* Calendly Embed Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-text-primary">Schedule a Call</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Book a time slot that works for you. Let's discuss your project and how I can help.
              </p>
              <div className="bg-surface-light/50 border border-glass-border rounded-lg p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4 opacity-50" />
                  <p className="text-text-secondary text-sm">
                    Calendly embed placeholder
                  </p>
                  <p className="text-text-muted text-xs mt-2">
                    Replace with your Calendly embed code
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <GlassCard>
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-text-primary">Connect With Me</h3>
              </div>
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 bg-surface-light/30 rounded-lg border border-glass-border hover:border-primary/50 transition-all group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-text-primary font-medium text-sm">{link.label}</p>
                        <p className="text-text-secondary text-xs">{link.text}</p>
                      </div>
                    </motion.a>
                  )
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* Email Icon Row */}
          <EmailButtonWithMagnetic />
        </div>
      </div>
    </Section>
  )
}

const EmailButtonWithMagnetic = () => {
  const magnetic = useMagnetic(0.25, 120)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex items-center justify-center gap-4 pt-4"
    >
      <motion.a
        ref={magnetic.ref}
        style={magnetic.style}
        href={`mailto:${personalInfo.email}`}
        className="flex items-center gap-2 px-6 py-3 glass-button focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Mail className="w-5 h-5" />
        <span className="font-semibold">Quick Email</span>
      </motion.a>
    </motion.div>
  )
}

export default Contact
