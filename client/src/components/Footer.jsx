import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code, Heart } from 'lucide-react'
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
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-light/30 border border-glass-border text-text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
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
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mt-24 border-t border-glass-border bg-background/50 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-gradient font-display">
                {personalInfo.name}
              </h3>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {personalInfo.bio.short}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-text-primary font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-text-secondary hover:text-primary text-sm transition-colors w-fit"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-text-secondary hover:text-primary text-sm transition-colors w-fit"
              >
                Experience
              </a>
              <a
                href="#services"
                className="text-text-secondary hover:text-primary text-sm transition-colors w-fit"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-text-secondary hover:text-primary text-sm transition-colors w-fit"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-text-primary font-semibold text-sm uppercase tracking-wider">
              Connect
            </h4>
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
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-text-secondary hover:text-primary text-sm transition-colors inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs flex items-center gap-2">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-text-muted text-xs flex items-center gap-2">
            Built with <Heart className="w-3 h-3 text-primary fill-primary" /> using React & Express
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
