import { motion } from 'framer-motion'
import '../styles/components/about.css'

const AboutTrust = () => {
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
            <h1 className="about-hero-title">About Anjuman Trust</h1>
            <p className="about-hero-subtitle">
              Dedicated to Educational Excellence and Social Service
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-text">
            <h2>Anjuman Hami-E-Islam</h2>
            <p>
              Anjuman-I-Islam is a prestigious educational trust that has been serving the 
              community for over a century. Founded with the noble mission of promoting 
              education and social welfare, the trust has established numerous educational 
              institutions across Maharashtra.
            </p>

            <h3>Our Legacy</h3>
            <p>
              The trust has a rich history of contributing to education and social development. 
              From primary schools to professional colleges, Anjuman institutions have been 
              centers of learning that promote both academic excellence and moral values.
            </p>

            <h3>Educational Philosophy</h3>
            <p>
              Our educational philosophy is based on the principles of holistic development, 
              combining modern scientific education with moral and ethical values. We believe 
              in creating not just successful professionals but responsible citizens.
            </p>

            <h3>Institutions Under Anjuman</h3>
            <ul>
              <li>Anjuman College of Engineering & Technology</li>
              <li>Various Schools and Colleges</li>
              <li>Professional Training Centers</li>
              <li>Community Development Programs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutTrust
