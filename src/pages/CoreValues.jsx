import { motion } from 'framer-motion'
import '../styles/components/about.css'

const CoreValues = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in all aspects of education, research, and service to maintain the highest standards of quality.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our actions and decisions, fostering trust and transparency.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We encourage creative thinking, embrace new technologies, and foster an environment of continuous learning and improvement.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
        </svg>
      )
    },
    {
      title: "Inclusivity",
      description: "We believe in providing equal opportunities to all students regardless of their background, promoting diversity and inclusion.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.999 1.999 0 0 0 18 7c-.8 0-1.54.5-1.85 1.26l-1.92 5.63c-.24.69.18 1.44.9 1.68.34.11.7.04 1-.15L18 14v8h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2.5 16v-7H9.5l-.68-2.04C8.54 12.36 8 12 7.39 12c-.8 0-1.54.5-1.85 1.26l-1.92 5.63c-.24.69.18 1.44.9 1.68.34.11.7.04 1-.15L7.39 19H8v3h2z"/>
        </svg>
      )
    },
    {
      title: "Social Responsibility",
      description: "We are committed to contributing to society through community service, sustainable practices, and ethical leadership.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We foster teamwork, partnerships with industry, and collaborative learning to achieve shared goals and success.",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.5-1.5-1.5-2.37-3.46-2.37-.8 0-1.57.32-2.13.89L12 9.25l-2.37-2.36C9.07 6.32 8.3 6 7.5 6c-1.96 0-2.96.87-3.46 2.37L1.5 16H4v6h2v-6h1.5l1.1-3.3 1.9 1.9v7.4h2V9.65l1.9-1.9L15.5 10H17v6h2z"/>
        </svg>
      )
    }
  ]

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
            <h1 className="about-hero-title">Core Values</h1>
            <p className="about-hero-subtitle">
              The principles that guide our educational philosophy and institutional culture
            </p>
          </motion.div>
        </div>
      </section>

      <section className="core-values-content">
        <div className="container">
          <motion.div 
            className="intro-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Guiding Principles</h2>
            <p>
              At Anjuman College of Engineering & Technology, our core values serve as the 
              foundation for everything we do. These principles guide our decisions, shape our 
              culture, and define our commitment to academic excellence and social responsibility.
            </p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="values-impact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2>Living Our Values</h2>
            <div className="impact-grid">
              <div className="impact-item">
                <h4>In Education</h4>
                <p>We integrate these values into our curriculum, teaching methodologies, and student assessment practices.</p>
              </div>
              <div className="impact-item">
                <h4>In Research</h4>
                <p>Our research initiatives are guided by ethical standards and focus on solving real-world problems.</p>
              </div>
              <div className="impact-item">
                <h4>In Community Service</h4>
                <p>We encourage students and faculty to engage in community outreach and social service activities.</p>
              </div>
              <div className="impact-item">
                <h4>In Industry Relations</h4>
                <p>We build partnerships based on mutual respect, transparency, and shared commitment to excellence.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CoreValues
