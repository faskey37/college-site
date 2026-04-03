import { motion } from 'framer-motion'
import '../styles/components/about.css'

const About = () => {
  const milestones = [
    { year: '2007', event: 'College Established' },
    { year: '2010', event: 'First NAAC Accreditation' },
    { year: '2012', event: 'PG Programs Introduced' },
    { year: '2015', event: 'Research Center Recognized' },
    { year: '2018', event: 'NBA Accreditation' },
    { year: '2020', event: 'AICTE Innovation Cell' },
    { year: '2022', event: 'NAAC A+ Grade' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <img 
          src="/about-hero.jpg" 
          alt="College Campus" 
          className="hero-image"
        />
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">About Our Institution</h1>
            <p className="hero-subtitle">
              Learn about our rich heritage, visionary leadership and commitment to excellence in technical education.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Overview
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="overview-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overview-image-container"
            >
              <img 
                src="https://github.com/faskey37/college-website/blob/main/college2.jpg?raw=true" 
                alt="College Campus" 
                className="overview-image"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overview-content"
            >
              <h3 className="content-title">Our Journey</h3>
              <p className="content-text">
                Established in 2007, Anjuman College of Engineering and Technology has grown to become one of the premier technical institutions in Central India. 
                Affiliated to Rashtrasant Tukadoji Maharaj Nagpur University and approved by AICTE, we are committed to providing quality education.
              </p>
              <p className="content-text">
                Spread over 15 acres of lush green campus, we offer state-of-the-art infrastructure, well-equipped laboratories, and a conducive learning environment. 
                Our NAAC A+ accreditation stands testament to our commitment to excellence.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <h4 className="stat-number">15 Acres</h4>
                  <p className="stat-label">Campus Area</p>
                </div>
                <div className="stat-card">
                  <h4 className="stat-number">50+ Labs</h4>
                  <p className="stat-label">Modern Facilities</p>
                </div>
                <div className="stat-card">
                  <h4 className="stat-number">2000+</h4>
                  <p className="stat-label">Students</p>
                </div>
                <div className="stat-card">
                  <h4 className="stat-number">150+</h4>
                  <p className="stat-label">Faculty</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="principles-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Our Guiding Principles
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="principles-grid">
            <motion.div 
              variants={itemVariants}
              className="principle-card"
            >
              <div className="principle-header">
                <div className="principle-icon vision-icon">
                  <span className="icon-text">🏆</span>
                </div>
                <h3 className="principle-title">Vision</h3>
              </div>
              <p className="principle-text">
                To be a center of excellence in technical education that produces globally competent engineers and innovators, 
                capable of addressing societal challenges through technological solutions while upholding ethical values.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="principle-card"
            >
              <div className="principle-header">
                <div className="principle-icon mission-icon">
                  <span className="icon-text">📚</span>
                </div>
                <h3 className="principle-title">Mission</h3>
              </div>
              <p className="principle-text">
                To provide quality technical education through innovative teaching-learning processes, 
                foster research and innovation, develop industry-academia collaborations, and nurture 
                entrepreneurial skills while promoting inclusivity and social responsibility.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="principle-card"
            >
              <div className="principle-header">
                <div className="principle-icon quality-icon">
                  <span className="icon-text">📈</span>
                </div>
                <h3 className="principle-title">Quality Policy</h3>
              </div>
              <p className="principle-text">
                We are committed to continuous improvement in all academic and administrative processes 
                to meet global standards of technical education, ensuring student success through 
                outcome-based education and industry-relevant curriculum.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="principle-card"
            >
              <div className="principle-header">
                <div className="principle-icon values-icon">
                  <span className="icon-text">🎓</span>
                </div>
                <h3 className="principle-title">Core Values</h3>
              </div>
              <ul className="values-list">
                <li>Excellence in Education and Research</li>
                <li>Integrity and Ethical Practices</li>
                <li>Innovation and Creativity</li>
                <li>Inclusivity and Diversity</li>
                <li>Social Responsibility</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="milestones-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Our Milestones
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              A journey of excellence and continuous growth since our inception
            </motion.p>
          </motion.div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <div className="timeline-items">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                >
                  <div className={`milestone-card ${index % 2 === 0 ? 'milestone-primary' : 'milestone-secondary'}`}>
                    <div className="timeline-dot"></div>
                    <h3 className="milestone-year">{milestone.year}</h3>
                    <p className="milestone-event">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="accreditation-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title white-title">
              Accreditations & Affiliations
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider white-divider"></motion.div>
          </motion.div>

          <div className="accreditation-grid">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="accreditation-card"
            >
              <img src="https://anjumanengg.edu.in/app_theme/img/Naac_Logo.png" alt="NAAC" className="accreditation-logo" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="accreditation-card"
            >
              <img src="https://imgs.search.brave.com/mOTzzvmqDFRAqapONy0W6BtI7Rtw3kbtyi1E2S2YAZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmRpbWRlbGhpLm9y/Zy93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8xMC9BbGxfSW5k/aWFfQ291bmNpbF9m/b3JfVGVjaG5pY2Fs/X0VkdWNhdGlvbl9s/b2dvLnBuZw" alt="AICTE" className="accreditation-logo" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="accreditation-card"
            >
              <img src="/logos/nba.png" alt="NBA" className="accreditation-logo" />
            </motion.div>
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="accreditation-card"
            >
              <img src="https://imgs.search.brave.com/n_-hYODKj4uPMaxR9AacS-pU8nYi9MgPqA96q_bcaoc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uYWdw/dXJ1bml2ZXJzaXR5/LmFjLmluL2ltYWdl/cy9ydG1udS1sb2dv/LnBuZw" alt="RTMNU" className="accreditation-logo" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About