import { motion } from 'framer-motion'
import DepartmentCard from '../components/DepartmentCard'
import { FaGraduationCap, FaBook, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'
import '../styles/components/academics.css'

const Academics = () => {
  const departments = [
    {
      id: 1,
      name: 'Computer Science & Engineering',
      slug: 'cse',
      description: 'The department offers cutting-edge programs in computer science with specializations in AI, ML and Data Science.',
      programs: ['B.Tech', 'M.Tech', 'PhD'],
      facultyCount: 25,
      icon: '/icons/cse.png',
      color: 'blue-bg'
    },
    {
      id: 2,
      name: 'Mechanical Engineering',
      slug: 'me',
      description: 'Focusing on design, analysis and manufacturing with state-of-the-art labs and workshops.',
      programs: ['B.Tech', 'M.Tech', 'PhD'],
      facultyCount: 20,
      icon: '/icons/me.png',
      color: 'red-bg'
    },
    {
      id: 3,
      name: 'Electronics & Communication',
      slug: 'ece',
      description: 'Specializing in VLSI, Embedded Systems and Communication Engineering with industry collaborations.',
      programs: ['B.Tech', 'M.Tech', 'PhD'],
      facultyCount: 18,
      icon: '/icons/ece.png',
      color: 'green-bg'
    },
    {
      id: 4,
      name: 'Civil Engineering',
      slug: 'ce',
      description: 'Providing comprehensive education in structural engineering, construction technology and environmental engineering.',
      programs: ['B.Tech', 'M.Tech', 'PhD'],
      facultyCount: 15,
      icon: '/icons/ce.png',
      color: 'yellow-bg'
    },
    {
      id: 5,
      name: 'Electrical Engineering',
      slug: 'ee',
      description: 'Focusing on power systems, control systems and renewable energy technologies.',
      programs: ['B.Tech', 'M.Tech', 'PhD'],
      facultyCount: 16,
      icon: '/icons/ee.png',
      color: 'purple-bg'
    },
    {
      id: 6,
      name: 'Artificial Intelligence & Data Science',
      slug: 'aids',
      description: 'Cutting-edge program focusing on AI, Machine Learning and Big Data Analytics.',
      programs: ['B.Tech', 'M.Tech'],
      facultyCount: 12,
      icon: '/icons/aids.png',
      color: 'pink-bg'
    }
  ]

  const academicStats = [
    { icon: <FaGraduationCap className="stats-icon" />, value: '20+', label: 'Programs Offered' },
    { icon: <FaBook className="stats-icon" />, value: '500+', label: 'Courses Available' },
    { icon: <FaUserGraduate className="stats-icon" />, value: '2000+', label: 'Students Enrolled' },
    { icon: <FaChalkboardTeacher className="stats-icon" />, value: '150+', label: 'Faculty Members' },
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
    <div className="academics-container">
      {/* Hero Section */}
      <section className="academics-hero">
        <div className="hero-overlay"></div>
        <img 
          src="/academics-hero.jpg" 
          alt="Academic Building" 
          className="hero-image"
        />
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Academic Programs</h1>
            <p className="hero-subtitle">
              Explore our diverse range of undergraduate, postgraduate and doctoral programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {academicStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="stats-card"
              >
                <div className="stats-icon-container">{stat.icon}</div>
                <h3 className="stats-value">{stat.value}</h3>
                <p className="stats-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="academics-section white-bg">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Our Departments
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Explore our diverse engineering departments offering cutting-edge programs and research opportunities.
            </motion.p>
          </motion.div>

          <div className="departments-grid">
            {departments.map((department) => (
              <motion.div
                key={department.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <DepartmentCard department={department} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="academics-section gray-bg">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Academic Programs
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="programs-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="program-card"
            >
              <h3 className="program-card-title">
                Undergraduate Programs
              </h3>
              <ul className="program-list">
                <li className="program-item">
                  <div className="program-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="program-name">B.Tech in Computer Science & Engineering</h4>
                    <p className="program-details">Duration: 4 Years | Intake: 120</p>
                  </div>
                </li>
                <li className="program-item">
                  <div className="program-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="program-name">B.Tech in Mechanical Engineering</h4>
                    <p className="program-details">Duration: 4 Years | Intake: 60</p>
                  </div>
                </li>
                <li className="program-item">
                  <div className="program-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="program-name">B.Tech in Electronics & Communication Engineering</h4>
                    <p className="program-details">Duration: 4 Years | Intake: 60</p>
                  </div>
                </li>
                <li className="program-item">
                  <div className="program-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="program-name">B.Tech in Civil Engineering</h4>
                    <p className="program-details">Duration: 4 Years | Intake: 60</p>
                  </div>
                </li>
                <li className="program-item">
                  <div className="program-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="program-name">B.Tech in Artificial Intelligence & Data Science</h4>
                    <p className="program-details">Duration: 4 Years | Intake: 60</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="program-card"
            >
              <h3 className="program-card-title">
                Postgraduate & Doctoral Programs
              </h3>
              <ul className="program-list">
                <li className="program-item">
                  <div className="program-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="program-name">M.Tech in Computer Science & Engineering</h4>
                    <p className="program-details">Duration: 2 Years | Specializations: AI, Data Science</p>
                  </div>
                </li>
                <li className="program-item">
                  <div className="program-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="program-name">M.Tech in Mechanical Engineering</h4>
                    <p className="program-details">Duration: 2 Years | Specialization: Thermal Engineering</p>
                  </div>
                </li>
                <li className="program-item">
                  <div className="program-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="program-name">M.Tech in VLSI Design</h4>
                    <p className="program-details">Duration: 2 Years | Intake: 18</p>
                  </div>
                </li>
                <li className="program-item">
                  <div className="program-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="program-name">PhD in Engineering</h4>
                    <p className="program-details">Duration: 3-6 Years | Multiple Specializations</p>
                  </div>
                </li>
                <li className="program-item">
                  <div className="program-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="program-name">MBA in Technology Management</h4>
                    <p className="program-details">Duration: 2 Years | Intake: 60</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section className="academics-section white-bg">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Academic Calendar
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="calendar-container"
          >
            <div className="calendar-grid">
              <div className="calendar-column">
                <h3 className="calendar-title">Odd Semester 2023-24</h3>
                <ul className="calendar-list">
                  <li className="calendar-item">
                    <span className="calendar-event">Semester Begins</span>
                    <span className="calendar-date">01 Aug 2023</span>
                  </li>
                  <li className="calendar-item">
                    <span className="calendar-event">Mid-Term Exams</span>
                    <span className="calendar-date">15-20 Sep 2023</span>
                  </li>
                  <li className="calendar-item">
                    <span className="calendar-event">End-Term Exams</span>
                    <span className="calendar-date">15-30 Nov 2023</span>
                  </li>
                  <li className="calendar-item">
                    <span className="calendar-event">Winter Break</span>
                    <span className="calendar-date">25 Dec - 01 Jan</span>
                  </li>
                </ul>
              </div>
              <div className="calendar-column">
                <h3 className="calendar-title">Even Semester 2023-24</h3>
                <ul className="calendar-list">
                  <li className="calendar-item">
                    <span className="calendar-event">Semester Begins</span>
                    <span className="calendar-date">15 Jan 2024</span>
                  </li>
                  <li className="calendar-item">
                    <span className="calendar-event">Mid-Term Exams</span>
                    <span className="calendar-date">01-06 Mar 2024</span>
                  </li>
                  <li className="calendar-item">
                    <span className="calendar-event">End-Term Exams</span>
                    <span className="calendar-date">01-15 May 2024</span>
                  </li>
                  <li className="calendar-item">
                    <span className="calendar-event">Summer Vacation</span>
                    <span className="calendar-date">20 May - 15 Jul</span>
                  </li>
                </ul>
              </div>
              <div className="calendar-column">
                <h3 className="calendar-title">Important Dates</h3>
                <ul className="calendar-list">
                  <li className="calendar-item">
                    <span className="calendar-event">Last Date for Registration</span>
                    <span className="calendar-date">10 Aug 2023</span>
                  </li>
                  <li className="calendar-item">
                    <span className="calendar-event">Project Submission</span>
                    <span className="calendar-date">30 Apr 2024</span>
                  </li>
                  <li className="calendar-item">
                    <span className="calendar-event">Convocation</span>
                    <span className="calendar-date">15 Jul 2024</span>
                  </li>
                  <li className="calendar-item">
                    <span className="calendar-event">Result Declaration</span>
                    <span className="calendar-date">Within 30 days of exams</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="download-section"
          >
            <a 
              href="/downloads/academic-calendar.pdf" 
              download
              className="download-button"
            >
              <svg className="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Full Calendar
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Academics