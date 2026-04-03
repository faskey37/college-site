import { motion } from 'framer-motion'
import { FaCalendarAlt, FaFileAlt, FaUniversity, FaClipboardList, FaRegClock } from 'react-icons/fa'
import { MdOutlineAssignment, MdOutlineAnnouncement } from 'react-icons/md'
import '../styles/components/examcell.css'

const ExamCell = () => {
  const examSchedules = [
    { exam: "Odd Semester Exams", date: "15 Nov - 30 Nov 2023", status: "Upcoming" },
    { exam: "Even Semester Exams", date: "01 May - 15 May 2024", status: "Scheduled" },
    { exam: "Backlog Exams", date: "10 Jan - 20 Jan 2024", status: "Scheduled" },
    { exam: "Summer Term Exams", date: "01 Jul - 10 Jul 2024", status: "Scheduled" }
  ]

  const importantDates = [
    { event: "Last Date for Exam Form Submission", date: "30 Oct 2023", highlight: true },
    { event: "Hall Ticket Release Date", date: "10 Nov 2023", highlight: true },
    { event: "Practical Exam Schedule", date: "05 Nov - 10 Nov 2023", highlight: false },
    { event: "Theory Exam Schedule", date: "15 Nov - 30 Nov 2023", highlight: false },
    { event: "Result Declaration", date: "15 Dec 2023", highlight: true }
  ]

  const examNotices = [
    { id: 1, title: "Instructions for Semester Examinations", date: "25 Oct 2023", category: "Notice" },
    { id: 2, title: "Guidelines for Online Exam Form Submission", date: "20 Oct 2023", category: "Guidelines" },
    { id: 3, title: "Revised Exam Pattern for Odd Semester", date: "15 Oct 2023", category: "Update" },
    { id: 4, title: "List of Exam Centers for Backlog Exams", date: "10 Oct 2023", category: "Notice" }
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
    <div className="examcell-page">
      {/* Hero Section */}
      <section className="examcell-hero">
        <div className="examcell-hero-overlay"></div>
        <img 
          src="/exam-hero.jpg" 
          alt="Exam Hall" 
          className="examcell-hero-image"
        />
        <div className="examcell-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="examcell-hero-title">Examination Cell</h1>
            <p className="examcell-hero-subtitle">
              Information about examinations, results and academic regulations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exam Schedule Section */}
      <section className="exam-schedule-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Examination Schedule
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Important dates and schedules for various examinations
            </motion.p>
          </motion.div>

          <div className="schedule-grid">
            {examSchedules.map((schedule, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="schedule-card"
              >
                <div className="schedule-header">
                  <div className="schedule-icon">
                    <FaCalendarAlt />
                  </div>
                  <h3 className="schedule-title">{schedule.exam}</h3>
                </div>
                <div className="schedule-date">
                  <FaRegClock />
                  <span>{schedule.date}</span>
                </div>
                <div className={`schedule-status ${schedule.status.toLowerCase()}`}>
                  {schedule.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="important-dates-section">
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
            className="dates-card"
          >
            <div className="dates-list">
              {importantDates.map((date, index) => (
                <div 
                  key={index} 
                  className={`date-item ${date.highlight ? 'highlighted' : ''}`}
                >
                  <div className="date-content">
                    <MdOutlineAnnouncement className="date-icon" />
                    <span className="date-event">{date.event}</span>
                  </div>
                  <span className="date-value">{date.date}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exam Notices Section */}
      <section className="exam-notices-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Exam Notices & Updates
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="notices-grid">
            {examNotices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="notice-card"
              >
                <div className="notice-header">
                  <h3 className="notice-title">{notice.title}</h3>
                  <span className="notice-category">{notice.category}</span>
                </div>
                <div className="notice-date">
                  <FaCalendarAlt />
                  <span>{notice.date}</span>
                </div>
                <a href="#" className="notice-link">View Details →</a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="notices-cta"
          >
            <a href="/notices" className="cta-button">
              View All Notices
            </a>
          </motion.div>
        </div>
      </section>

      {/* Exam Resources Section */}
      <section className="exam-resources-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Exam Resources
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="resources-grid">
            <motion.div
              variants={itemVariants}
              className="resource-card"
            >
              <div className="resource-header">
                <div className="resource-icon forms">
                  <FaFileAlt />
                </div>
                <h3 className="resource-title">Exam Forms</h3>
              </div>
              <p className="resource-description">
                Download examination forms and find instructions for submission
              </p>
              <div className="resource-links">
                <a href="#" className="resource-link">Semester Exam Form</a>
                <a href="#" className="resource-link">Backlog Exam Form</a>
                <a href="#" className="resource-link">Improvement Exam Form</a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="resource-card"
            >
              <div className="resource-header">
                <div className="resource-icon guidelines">
                  <FaUniversity />
                </div>
                <h3 className="resource-title">University Guidelines</h3>
              </div>
              <p className="resource-description">
                Important guidelines and regulations from RTMNU
              </p>
              <div className="resource-links">
                <a href="#" className="resource-link">Exam Regulations</a>
                <a href="#" className="resource-link">Grading System</a>
                <a href="#" className="resource-link">Academic Calendar</a>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="resource-card"
            >
              <div className="resource-header">
                <div className="resource-icon papers">
                  <FaClipboardList />
                </div>
                <h3 className="resource-title">Previous Papers</h3>
              </div>
              <p className="resource-description">
                Access previous year question papers for exam preparation
              </p>
              <div className="resource-links">
                <a href="#" className="resource-link">Odd Semester Papers</a>
                <a href="#" className="resource-link">Even Semester Papers</a>
                <a href="#" className="resource-link">Model Answer Papers</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Results
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="results-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="result-check-card"
            >
              <h3 className="result-card-title">Check Your Results</h3>
              <div className="input-group">
                <label htmlFor="rollno" className="input-label">
                  Enter Roll Number
                </label>
                <input
                  type="text"
                  id="rollno"
                  className="roll-input"
                  placeholder="e.g. 2023CS123"
                />
              </div>
              <button className="result-button">View Result</button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="recent-results-card"
            >
              <h3 className="result-card-title">Recent Results</h3>
              <ul className="results-list">
                <li className="result-item">
                  <span className="result-name">Odd Semester 2023</span>
                  <a href="#" className="result-link">View</a>
                </li>
                <li className="result-item">
                  <span className="result-name">Backlog Exams Jan 2023</span>
                  <a href="#" className="result-link">View</a>
                </li>
                <li className="result-item">
                  <span className="result-name">Even Semester 2022</span>
                  <a href="#" className="result-link">View</a>
                </li>
                <li className="result-item">
                  <span className="result-name">Summer Term 2022</span>
                  <a href="#" className="result-link">View</a>
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
              Contact Exam Cell
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
                <h3 className="contact-title">Exam Cell Office</h3>
                <p className="contact-detail">
                  <span className="contact-label">Controller of Examinations:</span><br />
                  Dr. R. Sharma
                </p>
                <p className="contact-detail">
                  <span className="contact-label">Email:</span> examcell@anjumanengg.edu.in
                </p>
                <p className="contact-detail">
                  <span className="contact-label">Phone:</span> +91 712 1234567 (Ext. 456)
                </p>
              </div>
              
              <div className="contact-info">
                <h3 className="contact-title">Working Hours</h3>
                <p className="contact-detail">
                  <span className="contact-label">Monday to Friday:</span> 10:00 AM - 5:00 PM
                </p>
                <p className="contact-detail">
                  <span className="contact-label">Saturday:</span> 10:00 AM - 2:00 PM<br />
                  (Closed on Sundays and Public Holidays)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ExamCell
