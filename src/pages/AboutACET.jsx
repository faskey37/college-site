import { motion } from 'framer-motion'
import '../styles/components/about.css'

const AboutACET = () => {
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
            <h1 className="about-hero-title">About ACET</h1>
            <p className="about-hero-subtitle">
              Excellence in Engineering Education Since 1999
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Anjuman College of Engineering & Technology</h2>
              <p>
                Established in 1999, Anjuman College of Engineering & Technology (ACET) has been 
                a beacon of excellence in technical education in Nagpur. Affiliated to Rashtrasant 
                Tukadoji Maharaj Nagpur University (RTMNU), our institution is committed to providing 
                quality education and fostering innovation among students.
              </p>
              
              <h3>Our Journey</h3>
              <p>
                Over the years, ACET has evolved into a premier engineering institution, producing 
                thousands of skilled engineers who have made their mark in various industries across 
                the globe. Our commitment to academic excellence and holistic development has earned 
                us recognition as one of the leading engineering colleges in the region.
              </p>

              <h3>Academic Excellence</h3>
              <p>
                We offer undergraduate and postgraduate programs in various engineering disciplines 
                including Computer Science, Mechanical, Electronics & Telecommunication, Civil, 
                Electrical Engineering, and the newly introduced AI & Data Science program.
              </p>
            </div>
            
            <div className="about-stats">
              <div className="stat-card">
                <h3>25+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat-card">
                <h3>2000+</h3>
                <p>Alumni</p>
              </div>
              <div className="stat-card">
                <h3>150+</h3>
                <p>Faculty Members</p>
              </div>
              <div className="stat-card">
                <h3>6</h3>
                <p>Engineering Departments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutACET
