import { motion } from 'framer-motion'
import { FaUser, FaFlask, FaGraduationCap } from 'react-icons/fa'
import '../styles/components/department.css'

const CSEDepartment = () => {
  const facultyMembers = [
    {
      name: "Prof. Nazish Khan",
      designation: "HOD, Computer Science & Engineering",
      qualification: "M.Tech, Ph.D (Pursuing)",
      email: "nazishkhan@anjumanengg.edu.in"
    },
    {
      name: "Prof. Ritesh Shrivastava",
      designation: "Professor",
      qualification: "M.Tech, Ph.D",
      email: "rgshrivastava@anjumanengg.edu.in"
    },
    {
      name: "Prof. Mohammad Tahir",
      designation: "Associate Professor",
      qualification: "M.Tech",
      email: "mtahir@anjumanengg.edu.in"
    }
  ]

  const laboratories = [
    {
      name: "Object Oriented Programming Lab",
      area: "68 Sq. m",
      investment: "₹13,15,406"
    },
    {
      name: "Computer Workshop Lab",
      area: "80 Sq. m",
      investment: "₹15,00,000"
    },
    {
      name: "Data Structure Lab",
      area: "75 Sq. m",
      investment: "₹12,50,000"
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
            <h1 className="department-hero-title">Computer Science & Engineering</h1>
            <p className="department-hero-subtitle">
              Shaping the future of technology through innovation and excellence
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
                The Computer Science & Engineering department offers cutting-edge programs with 
                specializations in AI, ML, and Data Science. Our curriculum is designed to meet 
                industry requirements and prepare students for successful careers in technology.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>25+</h3>
                  <p>Faculty Members</p>
                </div>
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Students</p>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Laboratories</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://anjumanengg.edu.in/UserData/uploads/pages/1081/hod-cs-dept.jpeg" alt="CSE Department" />
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
              <h3>B.Tech (CSE)</h3>
              <p>4-year undergraduate program with specializations in AI & ML</p>
            </div>
            <div className="program-card">
              <FaGraduationCap className="program-icon" />
              <h3>M.Tech (CSE)</h3>
              <p>2-year postgraduate program focusing on advanced computing</p>
            </div>
            <div className="program-card">
              <FaGraduationCap className="program-icon" />
              <h3>Ph.D</h3>
              <p>Research program in various areas of computer science</p>
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
                <p><strong>Investment:</strong> {lab.investment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CSEDepartment
