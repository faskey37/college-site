import { motion } from 'framer-motion'
import '../styles/components/about.css'

const Management = () => {
  const managementTeam = [
    {
      name: "Dr. Abdul Kalam Azad",
      position: "Chairman",
      qualification: "Ph.D, M.A",
      experience: "25+ years in Educational Administration",
      image: "/management/chairman.jpg",
      description: "Leading the institution with visionary leadership and strategic planning."
    },
    {
      name: "Prof. Mohammad Rasheed",
      position: "Secretary",
      qualification: "M.Tech, MBA",
      experience: "20+ years in Management",
      image: "/management/secretary.jpg",
      description: "Overseeing administrative operations and policy implementation."
    },
    {
      name: "Dr. Mohammad Sohail Pervez",
      position: "Principal (Officiating)",
      qualification: "M.E, Ph.D",
      experience: "18+ years in Academia",
      image: "/management/principal.jpg",
      description: "Academic leadership and institutional development."
    },
    {
      name: "Prof. Hakimuddin Hussain",
      position: "Vice Principal",
      qualification: "M.Tech",
      experience: "15+ years in Education",
      image: "/management/vice-principal.jpg",
      description: "Supporting academic administration and student affairs."
    }
  ]

  const trustees = [
    "Mr. Mohd. Yusuf Khan",
    "Dr. Syed Najmul Hasan Zaidi",
    "Mr. Mohd. Arshad Khan",
    "Prof. Syed Mohammad Ali",
    "Mr. Athar Ali Khan",
    "Dr. Ahmed Sajjad Khan"
  ]

  const departments = [
    {
      name: "Academic Affairs",
      head: "Dr. Ruhina Quazi",
      responsibilities: ["Curriculum Development", "Academic Planning", "Quality Assurance"]
    },
    {
      name: "Administration",
      head: "Mr. Mohd. Ameenuddin",
      responsibilities: ["HR Management", "Infrastructure", "Financial Planning"]
    },
    {
      name: "Student Affairs",
      head: "Prof. Nazish Khan",
      responsibilities: ["Student Welfare", "Counseling", "Extracurricular Activities"]
    },
    {
      name: "Training & Placements",
      head: "Prof. Ritesh Shrivastava",
      responsibilities: ["Industry Relations", "Career Guidance", "Placement Activities"]
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
            <h1 className="about-hero-title">Management</h1>
            <p className="about-hero-subtitle">
              Leadership committed to educational excellence and institutional growth
            </p>
          </motion.div>
        </div>
      </section>

      <section className="management-content">
        <div className="container">
          {/* Leadership Team */}
          <motion.div 
            className="leadership-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Leadership Team</h2>
            <p className="section-intro">
              Our experienced leadership team guides the institution with vision, 
              dedication, and a commitment to academic excellence.
            </p>
            
            <div className="leadership-grid">
              {managementTeam.map((member, index) => (
                <motion.div
                  key={index}
                  className="leadership-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="position">{member.position}</p>
                    <p className="qualification">{member.qualification}</p>
                    <p className="experience">{member.experience}</p>
                    <p className="description">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Board of Trustees */}
          <motion.div 
            className="trustees-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Board of Trustees</h2>
            <p className="section-intro">
              Distinguished members who provide strategic guidance and governance oversight.
            </p>
            <div className="trustees-grid">
              {trustees.map((trustee, index) => (
                <motion.div
                  key={index}
                  className="trustee-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4>{trustee}</h4>
                  <p>Trustee</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Administrative Departments */}
          <motion.div 
            className="departments-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Administrative Departments</h2>
            <p className="section-intro">
              Key administrative units ensuring smooth functioning of the institution.
            </p>
            <div className="departments-grid">
              {departments.map((dept, index) => (
                <motion.div
                  key={index}
                  className="department-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3>{dept.name}</h3>
                  <p className="dept-head">Head: {dept.head}</p>
                  <div className="responsibilities">
                    <h4>Key Responsibilities:</h4>
                    <ul>
                      {dept.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Organizational Structure */}
          <motion.div 
            className="org-structure"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2>Organizational Structure</h2>
            <div className="structure-chart">
              <div className="structure-level">
                <div className="structure-box chairman">Chairman</div>
              </div>
              <div className="structure-level">
                <div className="structure-box secretary">Secretary</div>
              </div>
              <div className="structure-level">
                <div className="structure-box principal">Principal</div>
              </div>
              <div className="structure-level departments-level">
                <div className="structure-box dept">Academic Affairs</div>
                <div className="structure-box dept">Administration</div>
                <div className="structure-box dept">Student Affairs</div>
                <div className="structure-box dept">T&P</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Management
