import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code } from 'lucide-react'
import useMagnetic from '../hooks/useMagnetic'
import personalInfo from '../config/personalInfo'

const SocialIconWithMagnetic = ({ Icon, href, label }) => {
  const magnetic = useMagnetic(0.2, 80)
  return (
    <motion.a
      ref={magnetic.ref}
      style={magnetic.style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-text-secondary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded p-1"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  )
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    ...(personalInfo.social.codepen ? [{ icon: Code, href: personalInfo.social.codepen, label: 'CodePen' }] : []),
  ].filter(Boolean)

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-nav mt-16 mb-8"
    >
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            <p className="text-text-secondary text-sm">
              © {currentYear} {personalInfo.name}. Built with React & Express
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <SocialIconWithMagnetic
                  key={index}
                  Icon={Icon}
                  href={link.href}
                  label={link.label}
                />
              )
            })}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
