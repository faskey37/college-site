import { motion } from 'framer-motion'
import { FaChalkboardTeacher, FaChartLine, FaFileAlt, FaAward } from 'react-icons/fa'
import '../styles/components/IQAC.css'

const IQAC = () => {
  const objectives = [
    {
      icon: <FaChalkboardTeacher className="objective-icon" />,
      title: "Quality Education",
      description: "To ensure continuous improvement in the teaching-learning process"
    },
    {
      icon: <FaChartLine className="objective-icon" />,
      title: "Academic Excellence",
      description: "To promote research culture and innovation among faculty and students"
    },
    {
      icon: <FaFileAlt className="objective-icon" />,
      title: "Documentation",
      description: "To maintain proper documentation of all academic and administrative activities"
    },
    {
      icon: <FaAward className="objective-icon" />,
      title: "Accreditation",
      description: "To prepare the institution for various accreditation and quality assessment processes"
    }
  ]

  const functions = [
    "Development and application of quality benchmarks for various academic and administrative activities",
    "Facilitating the creation of a learner-centric environment conducive to quality education",
    "Collection and analysis of feedback from all stakeholders for quality improvement",
    "Organization of workshops and seminars on quality related themes",
    "Documentation of various programs and activities leading to quality improvement",
    "Preparation of Annual Quality Assurance Report (AQAR) for submission to NAAC"
  ]

  const benefits = [
    "Ensures continuous improvement in all academic and administrative activities",
    "Provides a sound basis for decision-making to improve institutional functioning",
    "Acts as a change agent in the institution for quality enhancement",
    "Inculcates quality culture among all stakeholders",
    "Gives institutions a new sense of direction and identity",
    "Provides enhanced stakeholder confidence in the institution"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  }

  return (
    <div className="iqac-page">
      {/* Hero Section */}
      <section className="iqac-hero">
        <div className="iqac-hero-overlay"></div>
        <img 
          src="/iqac-hero.jpg" 
          alt="IQAC Meeting" 
          className="iqac-hero-image"
        />
        <div className="iqac-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="iqac-hero-title">Internal Quality Assurance Cell (IQAC)</h1>
            <p className="iqac-hero-subtitle">
              Ensuring continuous improvement in all academic and administrative activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* About IQAC Section */}
      <section className="about-iqac-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              About IQAC
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="about-content-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="about-text"
            >
              <h3 className="about-subtitle">Introduction</h3>
              <p className="about-description">
                The Internal Quality Assurance Cell (IQAC) was established at Anjuman College of Engineering 
                as a post-accreditation quality sustenance measure to ensure continuous improvement in all 
                academic and administrative activities of the institution.
              </p>
              <p className="about-description">
                As per the guidelines of the National Assessment and Accreditation Council (NAAC), 
                the IQAC plays a vital role in developing a system for conscious, consistent and catalytic 
                improvement in the overall performance of the institution.
              </p>
              <p className="about-description">
                The IQAC at Anjuman College has been instrumental in maintaining and enhancing the quality 
                standards of the institution since its establishment in 2015.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="about-image-container"
            >
              <img 
                src="https://imgs.search.brave.com/_hjroFyI9PqEGTVdomlQk00yhYkAhIS2vpggR8V7itI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z211bml2ZXJzaXR5/LmFjLmluL2ltYWdl/cy9pcWFjLXBob3Rv/cy8yMC5qcGc" 
                alt="IQAC Meeting" 
                className="about-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="objectives-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Objectives
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="objectives-grid">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="objective-card"
              >
                <div className="objective-icon-container">
                  {objective.icon}
                </div>
                <h3 className="objective-title">{objective.title}</h3>
                <p className="objective-description">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section className="functions-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Functions
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="functions-card"
          >
            <ul className="functions-list">
              {functions.map((func, index) => (
                <li key={index} className="function-item">
                  <svg className="function-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="function-text">{func}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Benefits
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="benefits-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="benefits-card"
            >
              <h3 className="benefits-card-title">Institutional Benefits</h3>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <svg className="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="benefit-text">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="benefits-card"
            >
              <h3 className="benefits-card-title">Operational Strategy</h3>
              <p className="strategy-description">
                IQAC shall evolve mechanisms and procedures for ensuring timely, efficient and progressive 
                performance of academic, administrative and financial tasks.
              </p>
              <p className="strategy-description">
                The IQAC will facilitate the integration of various activities of the institution and 
                institutionalize many good practices.
              </p>
              <p className="strategy-description">
                It will act as a nodal agency of the institution for coordinating quality-related activities, 
                including adoption and dissemination of best practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Composition Section */}
      <section className="composition-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              IQAC Composition
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="composition-card"
          >
            <div className="table-container">
              <table className="composition-table">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Name</th>
                    <th>Designation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="role-cell">Chairperson</td>
                    <td>Dr. A. Rahman</td>
                    <td>Principal</td>
                  </tr>
                  <tr>
                    <td className="role-cell">Coordinator</td>
                    <td>Dr. S. Khan</td>
                    <td>Vice Principal</td>
                  </tr>
                  <tr>
                    <td className="role-cell">Administrative Officer</td>
                    <td>Mr. R. Patel</td>
                    <td>Registrar</td>
                  </tr>
                  <tr>
                    <td className="role-cell">Faculty Representatives</td>
                    <td>Dr. R. Sharma, Prof. P. Patel</td>
                    <td>Senior Faculty</td>
                  </tr>
                  <tr>
                    <td className="role-cell">Management Representative</td>
                    <td>Mr. J. Mehta</td>
                    <td>Trustee</td>
                  </tr>
                  <tr>
                    <td className="role-cell">Industry Expert</td>
                    <td>Mr. S. Desai</td>
                    <td>CEO, Tech Solutions</td>
                  </tr>
                  <tr>
                    <td className="role-cell">Alumni Representative</td>
                    <td>Ms. P. Gupta</td>
                    <td>Alumni (2018 Batch)</td>
                  </tr>
                  <tr>
                    <td className="role-cell">Student Representative</td>
                    <td>Mr. R. Verma</td>
                    <td>Student Council President</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="reports-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Reports & Documents
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="reports-grid">
            <motion.div
              variants={itemVariants}
              className="report-card"
            >
              <h3 className="report-card-title">Annual Quality Assurance Reports (AQAR)</h3>
              <ul className="report-list">
                <li className="report-item">
                  <span className="report-name">AQAR 2022-23</span>
                  <a href="#" className="report-link">Download</a>
                </li>
                <li className="report-item">
                  <span className="report-name">AQAR 2021-22</span>
                  <a href="#" className="report-link">Download</a>
                </li>
                <li className="report-item">
                  <span className="report-name">AQAR 2020-21</span>
                  <a href="#" className="report-link">Download</a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="report-card"
            >
              <h3 className="report-card-title">NAAC Documentation</h3>
              <ul className="report-list">
                <li className="report-item">
                  <span className="report-name">SSR 2022</span>
                  <a href="#" className="report-link">Download</a>
                </li>
                <li className="report-item">
                  <span className="report-name">NAAC Peer Team Report</span>
                  <a href="#" className="report-link">Download</a>
                </li>
                <li className="report-item">
                  <span className="report-name">Institutional Data</span>
                  <a href="#" className="report-link">Download</a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="report-card"
            >
              <h3 className="report-card-title">Other Reports</h3>
              <ul className="report-list">
                <li className="report-item">
                  <span className="report-name">Academic Audit Report</span>
                  <a href="#" className="report-link">Download</a>
                </li>
                <li className="report-item">
                  <span className="report-name">Feedback Analysis</span>
                  <a href="#" className="report-link">Download</a>
                </li>
                <li className="report-item">
                  <span className="report-name">Best Practices</span>
                  <a href="#" className="report-link">Download</a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Contact IQAC
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-card"
          >
            <div className="contact-grid">
              <div className="contact-info">
                <h3 className="contact-title">IQAC Coordinator</h3>
                <p className="coordinator-info">
                  <span className="coordinator-name">Dr. S. Khan</span><br />
                  Vice Principal, Anjuman College of Engineering
                </p>
                <p className="contact-detail">
                  <span className="contact-label">Email:</span> iqac@anjumanengg.edu.in
                </p>
                <p className="contact-detail">
                  <span className="contact-label">Phone:</span> +91 712 1234567 (Ext. 123)
                </p>
              </div>
              
              <div className="contact-info">
                <h3 className="contact-title">Office Address</h3>
                <p className="address-info">
                  Internal Quality Assurance Cell<br />
                  Anjuman College of Engineering<br />
                  Sadar, Nagpur - 440001<br />
                  Maharashtra, India
                </p>
                <p className="contact-detail">
                  <span className="contact-label">Working Hours:</span> Mon-Sat, 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default IQAC
