import { motion } from 'framer-motion'
import { FaShieldAlt, FaUsers, FaBookOpen, FaHeartbeat, FaUserGraduate, FaGavel } from 'react-icons/fa'
import '../styles/components/cells.css'

const VariousCells = () => {
  const cells = [
    {
      name: "Anti-Ragging Cell",
      icon: <FaShieldAlt />,
      coordinator: "Dr. Mohammad Nasiruddin",
      description: "Ensuring a safe and harassment-free environment for all students",
      activities: [
        "Anti-ragging awareness programs",
        "24/7 helpline for reporting incidents",
        "Regular monitoring of campus activities",
        "Counseling support for affected students"
      ],
      contact: "antiragging@anjumanengg.edu.in"
    },
    {
      name: "Grievance Redressal Cell",
      icon: <FaGavel />,
      coordinator: "Prof. Hakimuddin Hussain",
      description: "Addressing student and staff grievances in a timely and fair manner",
      activities: [
        "Student complaint management",
        "Faculty grievance resolution",
        "Regular grievance review meetings",
        "Transparent resolution process"
      ],
      contact: "grievance@anjumanengg.edu.in"
    },
    {
      name: "Internal Complaints Committee",
      icon: <FaUsers />,
      coordinator: "Dr. Ruhina Quazi",
      description: "Prevention and redressal of sexual harassment at workplace",
      activities: [
        "Sexual harassment prevention programs",
        "Awareness workshops on workplace ethics",
        "Confidential complaint handling",
        "Support and counseling services"
      ],
      contact: "icc@anjumanengg.edu.in"
    },
    {
      name: "Student Welfare Cell",
      icon: <FaUserGraduate />,
      coordinator: "Prof. Nazish Khan",
      description: "Promoting overall welfare and development of students",
      activities: [
        "Student counseling services",
        "Financial assistance programs",
        "Health and wellness initiatives",
        "Career guidance and mentoring"
      ],
      contact: "studentwelfare@anjumanengg.edu.in"
    },
    {
      name: "Medical Cell",
      icon: <FaHeartbeat />,
      coordinator: "Dr. Medical Officer",
      description: "Providing healthcare services and emergency medical support",
      activities: [
        "First aid and emergency care",
        "Regular health checkups",
        "Health awareness programs",
        "Medical insurance assistance"
      ],
      contact: "medical@anjumanengg.edu.in"
    },
    {
      name: "Library Committee",
      icon: <FaBookOpen />,
      coordinator: "Mrs. Chief Librarian",
      description: "Managing library resources and promoting reading culture",
      activities: [
        "Book procurement and cataloging",
        "Digital library services",
        "Research support services",
        "Reading promotion programs"
      ],
      contact: "library@anjumanengg.edu.in"
    }
  ]

  return (
    <div className="cells-page">
      <section className="cells-hero">
        <div className="cells-hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="cells-hero-title">Various Cells & Committees</h1>
            <p className="cells-hero-subtitle">
              Supporting Student Welfare and Institutional Development
            </p>
          </motion.div>
        </div>
      </section>

      <section className="cells-content">
        <div className="container">
          <motion.div 
            className="intro-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Commitment to Student Welfare</h2>
            <p>
              Our various cells and committees work tirelessly to ensure a safe, supportive, 
              and conducive learning environment for all students and staff members. Each cell 
              operates with specific objectives to address different aspects of institutional life.
            </p>
          </motion.div>

          <div className="cells-grid">
            {cells.map((cell, index) => (
              <motion.div
                key={index}
                className="cell-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="cell-header">
                  <div className="cell-icon">
                    {cell.icon}
                  </div>
                  <h3>{cell.name}</h3>
                </div>
                
                <div className="cell-coordinator">
                  <p><strong>Coordinator:</strong> {cell.coordinator}</p>
                </div>
                
                <p className="cell-description">{cell.description}</p>
                
                <div className="cell-activities">
                  <h4>Key Activities:</h4>
                  <ul>
                    {cell.activities.map((activity, actIndex) => (
                      <li key={actIndex}>{activity}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="cell-contact">
                  <p><strong>Contact:</strong> {cell.contact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="reporting-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2>How to Report or Seek Help</h2>
            <div className="reporting-grid">
              <div className="reporting-method">
                <h3>Online Portal</h3>
                <p>Visit our online grievance portal to submit complaints anonymously or with your identity.</p>
                <a href="/grievance-portal" className="reporting-link">Access Portal</a>
              </div>
              
              <div className="reporting-method">
                <h3>Direct Contact</h3>
                <p>Contact the respective cell coordinators directly via email or phone for immediate assistance.</p>
                <p><strong>Emergency Helpline:</strong> +91-712-2582749</p>
              </div>
              
              <div className="reporting-method">
                <h3>Drop Box</h3>
                <p>Anonymous complaint boxes are placed at strategic locations across the campus.</p>
                <p><strong>Locations:</strong> Main Office, Library, Canteen</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default VariousCells
