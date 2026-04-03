import { motion } from 'framer-motion'
import '../styles/components/about.css'

const PrincipalMessage = () => {
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
            <h1 className="about-hero-title">Principal's Message</h1>
            <p className="about-hero-subtitle">
              A word from our academic leader
            </p>
          </motion.div>
        </div>
      </section>

      <section className="principal-message-content">
        <div className="container">
          <div className="message-layout">
            <motion.div 
              className="principal-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="principal-image">
                <img 
                  src="https://anjumanengg.edu.in/UserData/uploads/pages/1011/principle-new-img.jpeg" 
                  alt="Dr. Principal Name" 
                />
              </div>
              <div className="principal-details">
                <h3>Prof. DR. K. S. ZAKIUDDIN</h3>
                <p className="designation">Principal (Officiating)</p>
                <p className="qualification">B.E., M.TECH., Ph.D(MECH)</p>
                <div className="contact-info">
                  <p>Email: principal@anjumanengg.edu.in</p>
                  <p>Phone: +91-712-xxxxxxx</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="message-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="message-text">
                <p className="opening-quote">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
                
                <p>
                  Dear Students, Faculty, and Stakeholders,
                </p>

                <p>
                  It gives me immense pleasure to welcome you to Anjuman College of Engineering & Technology (ACET). 
                  As the Principal of this esteemed institution, I am proud to lead a college that has been at the 
                  forefront of technical education for over two decades.
                </p>

                <p>
                  At ACET, we believe that education is not just about imparting knowledge but about shaping 
                  future leaders who can contribute meaningfully to society. Our mission is to provide 
                  quality technical education that combines academic excellence with practical skills, 
                  ethical values, and social responsibility.
                </p>

                <p>
                  Our dedicated faculty members, state-of-the-art infrastructure, and industry partnerships 
                  create an environment where students can thrive and reach their full potential. We encourage 
                  innovation, creativity, and critical thinking, preparing our graduates to meet the challenges 
                  of an ever-evolving technological landscape.
                </p>

                <p>
                  We are committed to:
                </p>
                <ul>
                  <li>Providing quality education through innovative teaching methodologies</li>
                  <li>Fostering research and development activities</li>
                  <li>Building strong industry-academia partnerships</li>
                  <li>Developing ethical and socially responsible engineers</li>
                  <li>Ensuring inclusive education for all sections of society</li>
                </ul>

                <p>
                  As we move forward, we remain committed to our vision of becoming a center of excellence 
                  in technical education. I invite you to be part of our journey as we continue to innovate, 
                  inspire, and transform lives through education.
                </p>

                <p>
                  Together, let us build a brighter future for our students and contribute to the nation's 
                  technological advancement.
                </p>

                <div className="signature">
                  <p><strong>Prof. DR. K. S. ZAKIUDDIN</strong></p>
                  <p>Principal (Officiating)</p>
                  <p>Anjuman College of Engineering & Technology</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="achievements-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Principal's Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <h4>Academic Excellence</h4>
                <p>Over 20 years of experience in engineering education and research</p>
              </div>
              <div className="achievement-item">
                <h4>Research Contributions</h4>
                <p>Published numerous research papers in international journals and conferences</p>
              </div>
              <div className="achievement-item">
                <h4>Industry Collaboration</h4>
                <p>Established partnerships with leading industries for student development</p>
              </div>
              <div className="achievement-item">
                <h4>Educational Leadership</h4>
                <p>Led various academic initiatives and curriculum development programs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PrincipalMessage
