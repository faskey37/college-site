import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaArrowUp } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../styles/components/footer.css'
import '../styles/style.css'
import '../styles/global.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const location = useLocation()

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Academics', path: '/academics' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Facilities', path: '/facilities' },
      ]
    },
    {
      title: 'Important Links',
      links: [
        { name: 'RTMNU Website', url: 'https://nagpuruniversity.ac.in', external: true },
        { name: 'AICTE', url: 'https://www.aicte-india.org', external: true },
        { name: 'DTE Maharashtra', url: 'https://www.dtemaharashtra.gov.in', external: true },
        { name: 'NAAC', url: 'https://www.naac.gov.in', external: true },
        { name: 'NIRF', url: 'https://www.nirfindia.org', external: true },
      ]
    },
    {
      title: 'Student Corner',
      links: [
        { name: 'Examination', path: '/examcell' },
        { name: 'Downloads', path: '/downloads' },
        { name: 'Student Council', path: '/students', hash: '#council' },
        { name: 'Events', path: '/students', hash: '#events' },
        { name: 'Placements', path: '/students', hash: '#placements' },
      ]
    }
  ]

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com/anjumanengg', label: 'Facebook', color: '#1877f2' },
    { icon: <FaTwitter />, url: 'https://twitter.com/anjumanengg', label: 'Twitter', color: '#1da1f2' },
    { icon: <FaInstagram />, url: 'https://instagram.com/anjumanengg', label: 'Instagram', color: '#e4405f' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/school/anjumanengg', label: 'LinkedIn', color: '#0077b5' },
    { icon: <FaYoutube />, url: 'https://youtube.com/anjumanengg', label: 'YouTube', color: '#ff0000' },
  ]

  const contactInfo = {
    address: 'Sadar, Nagpur - 440001, Maharashtra, India',
    phone: '+91 712 1234567',
    email: 'principal@anjumanengg.edu.in',
    workingHours: 'Mon-Sat: 9:00 AM - 5:00 PM'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Handle hash links
  const handleHashLink = (path, hash) => {
    if (location.pathname === path) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="footer-grid"
        >
          {/* College Info */}
          <motion.div variants={itemVariants} className="footer-college-info">
            <div className="footer-logo">
              <h3>Anjuman College of <span>Engineering</span></h3>
            </div>
            <p className="footer-description">
              Affiliated to Rashtrasant Tukadoji Maharaj Nagpur University, 
              Approved by AICTE, New Delhi. Committed to excellence in technical education since inception.
            </p>
            <div className="footer-social-links" aria-label="Social media links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-icon"
                  aria-label={social.label}
                  style={{ '--social-color': social.color }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemVariants} className="footer-link-section">
              <h3 className="footer-section-title">{section.title}</h3>
              <ul className="footer-links-list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.path ? (
                      link.hash ? (
                        <a
                          href={`${link.path}${link.hash}`}
                          onClick={(e) => {
                            e.preventDefault()
                            handleHashLink(link.path, link.hash)
                          }}
                          className="footer-link"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link to={link.path} className="footer-link">
                          {link.name}
                        </Link>
                      )
                    ) : (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link external-link"
                      >
                        {link.name}
                        {link.external && <span className="external-link-icon">↗</span>}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="footer-contact-info">
            <h3 className="footer-section-title">Get in Touch</h3>
            <ul className="footer-contact-list">
              <li>
                <FaMapMarkerAlt className="contact-icon" aria-hidden="true" />
                <div className="contact-text">
                  <strong>Address:</strong>
                  <span>{contactInfo.address}</span>
                </div>
              </li>
              <li>
                <FaPhone className="contact-icon" aria-hidden="true" />
                <div className="contact-text">
                  <strong>Phone:</strong>
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="contact-link">
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              <li>
                <FaEnvelope className="contact-icon" aria-hidden="true" />
                <div className="contact-text">
                  <strong>Email:</strong>
                  <a href={`mailto:${contactInfo.email}`} className="contact-link">
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li>
                <FaClock className="contact-icon" aria-hidden="true" />
                <div className="contact-text">
                  <strong>Working Hours:</strong>
                  <span>{contactInfo.workingHours}</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          className="footer-newsletter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="newsletter-content">
            <h4>Subscribe to Our Newsletter</h4>
            <p>Stay updated with the latest news, events, and announcements from our college.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="newsletter-input-group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                aria-label="Email for newsletter"
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} Anjuman College of Engineering and Technology. 
              All Rights Reserved.
            </p>
            <div className="footer-legal-links">
              <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
              <span className="legal-separator">|</span>
              <Link to="/terms" className="legal-link">Terms of Use</Link>
              <span className="legal-separator">|</span>
              <Link to="/sitemap" className="legal-link">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer