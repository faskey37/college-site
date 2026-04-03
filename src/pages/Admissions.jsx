import { motion } from 'framer-motion'
import { FaGraduationCap, FaFileAlt, FaRupeeSign, FaUniversity, FaCalendarAlt } from 'react-icons/fa'
import { MdOutlinePayment, MdContactPhone } from 'react-icons/md'
import '../styles/components/admission.css'

const Admissions = () => {
  const admissionProcess = [
    {
      step: 1,
      title: 'Check Eligibility',
      description: 'Verify that you meet the minimum eligibility criteria for the program.',
      icon: <FaGraduationCap className="admission-process-icon" />
    },
    {
      step: 2,
      title: 'Fill Application',
      description: 'Complete the online application form with all required details.',
      icon: <FaFileAlt className="admission-process-icon" />
    },
    {
      step: 3,
      title: 'Pay Fees',
      description: 'Pay the application fee through available payment methods.',
      icon: <FaRupeeSign className="admission-process-icon" />
    },
    {
      step: 4,
      title: 'Submit Documents',
      description: 'Upload required documents for verification.',
      icon: <FaFileAlt className="admission-process-icon" />
    },
    {
      step: 5,
      title: 'Entrance Exam',
      description: 'Appear for the entrance examination (if applicable).',
      icon: <FaUniversity className="admission-process-icon" />
    },
    {
      step: 6,
      title: 'Admission Offer',
      description: 'Receive admission offer based on merit.',
      icon: <FaGraduationCap className="admission-process-icon" />
    }
  ]

  const importantDates = [
    { event: 'Application Start Date', date: '01 March 2023', highlight: true },
    { event: 'Last Date for Application', date: '30 April 2023', highlight: true },
    { event: 'Entrance Exam Date', date: '15 May 2023', highlight: false },
    { event: 'First Merit List', date: '01 June 2023', highlight: false },
    { event: 'Second Merit List', date: '15 June 2023', highlight: false },
    { event: 'Third Merit List', date: '30 June 2023', highlight: false },
    { event: 'Commencement of Classes', date: '01 August 2023', highlight: true },
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
    <div className="admissions-container">
      {/* Hero Section */}
      <section className="admissions-hero">
        <div className="admissions-hero-overlay"></div>
        <img 
          src="/admissions-hero.jpg" 
          alt="Students on campus" 
          className="admissions-hero-image"
        />
        <div className="admissions-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="admissions-hero-title">Admissions</h1>
            <p className="admissions-hero-subtitle">
              Begin your journey towards a rewarding engineering career with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="admissions-section section-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Admission Process
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Follow these simple steps to secure your seat in our prestigious programs
            </motion.p>
          </motion.div>

          <div className="process-grid">
            {admissionProcess.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="process-card"
              >
                <div className="process-card-header">
                  <div className="process-icon-container">
                    {step.icon}
                  </div>
                  <div className="process-step-number">
                    {step.step}
                  </div>
                </div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="admissions-section section-gray">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Eligibility Criteria
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="eligibility-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="eligibility-card"
            >
              <h3 className="eligibility-card-title">
                Undergraduate Programs (B.Tech)
              </h3>
              <ul className="eligibility-list">
                <li className="eligibility-item">
                  <div className="eligibility-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="eligibility-text">Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with Chemistry/Biotechnology/Biology/Technical Vocational subject</p>
                  </div>
                </li>
                <li className="eligibility-item">
                  <div className="eligibility-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="eligibility-text">Obtained at least 45% marks (40% in case of reserved category) in the above subjects taken together</p>
                  </div>
                </li>
                <li className="eligibility-item">
                  <div className="eligibility-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="eligibility-text">Valid score in JEE Main/MHT-CET or equivalent state entrance exam</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="eligibility-card"
            >
              <h3 className="eligibility-card-title">
                Postgraduate Programs (M.Tech)
              </h3>
              <ul className="eligibility-list">
                <li className="eligibility-item">
                  <div className="eligibility-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="eligibility-text">Bachelor's degree in Engineering/Technology in relevant discipline with at least 50% marks (45% for reserved category)</p>
                  </div>
                </li>
                <li className="eligibility-item">
                  <div className="eligibility-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="eligibility-text">Valid GATE score (preferred) or college entrance test</p>
                  </div>
                </li>
                <li className="eligibility-item">
                  <div className="eligibility-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="eligibility-text">Work experience in relevant field may be considered for sponsored candidates</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="admissions-section section-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Important Dates
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="dates-container"
          >
            <div className="dates-grid">
              {importantDates.map((date, index) => (
                <div 
                  key={index} 
                  className={`date-item ${date.highlight ? 'date-item-highlight' : ''}`}
                >
                  <div className="date-event">
                    <FaCalendarAlt className="date-icon" />
                    <span>{date.event}</span>
                  </div>
                  <span className="date-value">{date.date}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="admissions-section section-gray">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Fee Structure
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="fee-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fee-card"
            >
              <h3 className="fee-card-title">
                Undergraduate Programs (Per Semester)
              </h3>
              <div className="table-container">
                <table className="fee-table">
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Tuition Fee</th>
                      <th>Other Fees</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>B.Tech (CSE)</td>
                      <td>₹45,000</td>
                      <td>₹10,000</td>
                      <td className="fee-total">₹55,000</td>
                    </tr>
                    <tr>
                      <td>B.Tech (ME)</td>
                      <td>₹40,000</td>
                      <td>₹10,000</td>
                      <td className="fee-total">₹50,000</td>
                    </tr>
                    <tr>
                      <td>B.Tech (ECE)</td>
                      <td>₹42,000</td>
                      <td>₹10,000</td>
                      <td className="fee-total">₹52,000</td>
                    </tr>
                    <tr>
                      <td>B.Tech (CE)</td>
                      <td>₹38,000</td>
                      <td>₹10,000</td>
                      <td className="fee-total">₹48,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="fee-card"
            >
              <h3 className="fee-card-title">
                Postgraduate Programs (Per Semester)
              </h3>
              <div className="table-container">
                <table className="fee-table">
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Tuition Fee</th>
                      <th>Other Fees</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>M.Tech (CSE)</td>
                      <td>₹35,000</td>
                      <td>₹8,000</td>
                      <td className="fee-total">₹43,000</td>
                    </tr>
                    <tr>
                      <td>M.Tech (ME)</td>
                      <td>₹32,000</td>
                      <td>₹8,000</td>
                      <td className="fee-total">₹40,000</td>
                    </tr>
                    <tr>
                      <td>M.Tech (VLSI)</td>
                      <td>₹38,000</td>
                      <td>₹8,000</td>
                      <td className="fee-total">₹46,000</td>
                    </tr>
                    <tr>
                      <td>MBA</td>
                      <td>₹40,000</td>
                      <td>₹10,000</td>
                      <td className="fee-total">₹50,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="payment-info"
          >
            <h3 className="payment-title">
              <MdOutlinePayment /> Payment Information
            </h3>
            <div className="payment-grid">
              <div>
                <h4 className="payment-subtitle">Payment Methods</h4>
                <ul className="payment-methods">
                  <li className="payment-method">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Online Payment (Credit/Debit Card, Net Banking)
                  </li>
                  <li className="payment-method">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    UPI Payment
                  </li>
                  <li className="payment-method">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Demand Draft in favor of "Anjuman College of Engineering"
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="payment-subtitle">Scholarships</h4>
                <p className="payment-description">
                  Various scholarships available for meritorious and economically weaker students. 
                  Government scholarships (EBC, OBC, SC/ST) also applicable.
                </p>
                <a href="/scholarships" className="scholarship-link">Learn more about scholarships →</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Admission Section */}
      <section className="admissions-section section-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Admission Help Desk
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Our admission counselors are ready to assist you with any queries
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-container"
          >
            <div className="contact-grid">
              <div>
                <h3 className="contact-info-title">
                  <MdContactPhone /> Contact Information
                </h3>
                <ul className="contact-list">
                  <li className="contact-item">
                    <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="contact-label">Admission Helpline</p>
                      <p className="contact-value">+91 712 1234567</p>
                    </div>
                  </li>
                  <li className="contact-item">
                    <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="contact-label">Email</p>
                      <p className="contact-value">admissions@anjumanengg.edu.in</p>
                    </div>
                  </li>
                  <li className="contact-item">
                    <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <div>
                      <p className="contact-label">Working Hours</p>
                      <p className="contact-value">Mon-Sat: 9:00 AM - 5:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="apply-title">Apply Now</h3>
                <p className="apply-description">
                  Ready to begin your journey with us? Start your application today.
                </p>
                <div className="apply-buttons">
                  <a href="/apply" className="apply-button apply-primary">
                    Online Application
                  </a>
                  <a href="/downloads/admission-form.pdf" download className="apply-button apply-secondary">
                    Download Application Form
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Admissions