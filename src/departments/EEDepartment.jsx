import { motion } from 'framer-motion'
import { FaUser, FaFlask, FaGraduationCap } from 'react-icons/fa'
import '../styles/components/department.css'

const EEDepartment = () => {
  const facultyMembers = [
    {
      name: "Dr. Ruhi Uzma Sheikh",
      designation: "HOD, Electrical Engineering",
      qualification: "Ph.D, M.Tech",
      email: "rusheikh@anjumanengg.edu.in"
    },
    {
      name: "Prof. Nawaz Sheikh",
      designation: "Professor",
      qualification: "M.Tech",
      email: "nsheikh@anjumanengg.edu.in"
    },
    {
      name: "Prof. Safique Memon",
      designation: "Associate Professor",
      qualification: "M.Tech",
      email: "smemon@anjumanengg.edu.in"
    }
  ]

  const laboratories = [
    {
      name: "Electrical Computer Laboratory",
      area: "150.88 Sq. m",
      incharge: "Dr. Ruhi Uzma Sheikh"
    },
    {
      name: "Electrical Machine Lab",
      area: "100 Sq. m",
      equipment: "DC machines, AC machines, transformers"
    },
    {
      name: "Control System Lab",
      area: "85 Sq. m",
      equipment: "Control system trainers, servo systems"
    },
    {
      name: "High Voltage Engineering Lab",
      area: "120 Sq. m",
      equipment: "High voltage generators, insulation testing"
    }
  ]

  return (
    <div className="department-page">
      {/* Hero Section */}
      <section className="department-hero">
        <div className="department-hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="department-hero-title">Electrical Engineering</h1>
            <p className="department-hero-subtitle">
              Powering the future through innovation in electrical systems and power electronics
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="department-about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">About the Department</h2>
              <p className="about-text">
                The Electrical Engineering department focuses on power systems, control systems, 
                and electrical machines. Our faculty members have expertise in power electronics, 
                smart grid technology, and renewable energy systems.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>18+</h3>
                  <p>Faculty Members</p>
                </div>
                <div className="stat-item">
                  <h3>300+</h3>
                  <p>Students</p>
                </div>
                <div className="stat-item">
                  <h3>7+</h3>
                  <p>Laboratories</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://anjumanengg.edu.in/UserData/uploads/pages/1091/DR.RUHI_UZMA_SHEIKH.jpg" alt="EE Department" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">Programs Offered</h2>
          <div className="programs-grid">
            <div className="program-card">
              <FaGraduationCap className="program-icon" />
              <h3>B.Tech (EE)</h3>
              <p>4-year undergraduate program in electrical engineering</p>
            </div>
            <div className="program-card">
              <FaGraduationCap className="program-icon" />
              <h3>M.Tech (EE)</h3>
              <p>2-year postgraduate program with power systems focus</p>
            </div>
            <div className="program-card">
              <FaGraduationCap className="program-icon" />
              <h3>Ph.D</h3>
              <p>Research program in electrical engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="faculty-section">
        <div className="container">
          <h2 className="section-title">Faculty Members</h2>
          <div className="faculty-grid">
            {facultyMembers.map((faculty, index) => (
              <div key={index} className="faculty-card">
                <FaUser className="faculty-icon" />
                <h3>{faculty.name}</h3>
                <p className="faculty-designation">{faculty.designation}</p>
                <p className="faculty-qualification">{faculty.qualification}</p>
                <p className="faculty-email">{faculty.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section className="labs-section">
        <div className="container">
          <h2 className="section-title">Laboratories</h2>
          <div className="labs-grid">
            {laboratories.map((lab, index) => (
              <div key={index} className="lab-card">
                <FaFlask className="lab-icon" />
                <h3>{lab.name}</h3>
                <p><strong>Area:</strong> {lab.area}</p>
                {lab.incharge && <p><strong>Lab Incharge:</strong> {lab.incharge}</p>}
                {lab.equipment && <p><strong>Equipment:</strong> {lab.equipment}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default EEDepartment
