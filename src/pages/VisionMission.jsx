import { motion } from 'framer-motion'
import '../styles/components/about.css'

const VisionMission = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-hero-title">Vision & Mission</h1>
            <p className="about-hero-subtitle">
              Guiding Principles for Excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="vision-mission-content">
        <div className="container">
          <div className="vm-grid">
            <motion.div 
              className="vision-card"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="vm-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <h2>Our Vision</h2>
              <p>
                To be a center of excellence in technical education that produces globally 
                competent engineers and innovators who contribute to the technological 
                advancement of society while maintaining the highest standards of ethics 
                and social responsibility.
              </p>
            </motion.div>

            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="vm-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h2>Our Mission</h2>
              <ul>
                <li>Provide quality technical education through innovative teaching methodologies</li>
                <li>Foster research and development activities that address real-world challenges</li>
                <li>Develop industry-academia partnerships for practical learning experiences</li>
                <li>Cultivate ethical values and social responsibility among students</li>
                <li>Promote entrepreneurship and innovation</li>
                <li>Ensure inclusive education for all sections of society</li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="objectives-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Our Objectives</h2>
            <div className="objectives-grid">
              <div className="objective-item">
                <h3>Academic Excellence</h3>
                <p>Maintain high standards of teaching and learning</p>
              </div>
              <div className="objective-item">
                <h3>Industry Readiness</h3>
                <p>Prepare students for successful careers in industry</p>
              </div>
              <div className="objective-item">
                <h3>Research Focus</h3>
                <p>Encourage research and innovation among faculty and students</p>
              </div>
              <div className="objective-item">
                <h3>Social Impact</h3>
                <p>Contribute to society through technological solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default VisionMission
