import { motion } from 'framer-motion'
import { FaUser, FaFlask, FaGraduationCap } from 'react-icons/fa'
import '../styles/components/department.css'

const CEDepartment = () => {
  const facultyMembers = [
    {
      name: "Dr. Rashmi Bade",
      designation: "HOD, Civil Engineering",
      qualification: "Ph.D, M.Tech",
      email: "rbade@anjumanengg.edu.in"
    },
    {
      name: "Prof. Mohammad Azaz",
      designation: "Professor",
      qualification: "M.Tech",
      email: "mazaz@anjumanengg.edu.in"
    },
    {
      name: "Prof. Mohammad Ameenuddin",
      designation: "Associate Professor",
      qualification: "M.Tech",
      email: "mameenuddin@anjumanengg.edu.in"
    }
  ]

  const laboratories = [
    {
      name: "Geo-technical Engineering Lab",
      area: "75 Sq. m",
      equipment: "Soil testing equipment, CBR apparatus"
    },
    {
      name: "Environmental Engineering Lab",
      area: "80 Sq. m",
      equipment: "Water quality testing, BOD apparatus"
    },
    {
      name: "Transportation Engineering Lab",
      area: "70 Sq. m",
      equipment: "Marshall stability test, aggregate testing"
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
            <h1 className="department-hero-title">Civil Engineering</h1>
            <p className="department-hero-subtitle">
              Providing comprehensive education in structural engineering, construction technology and environmental engineering
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
                The Department of Civil Engineering was established in the year 2010 with an intake of 60. 
                Now the intake is changed from 60 to 30. The department is well equipped with modern 
                laboratories and experienced faculty members specializing in various areas of civil engineering.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Faculty Members</p>
                </div>
                <div className="stat-item">
                  <h3>120</h3>
                  <p>Students</p>
                </div>
                <div className="stat-item">
                  <h3>6+</h3>
                  <p>Laboratories</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://anjumanengg.edu.in/UserData/uploads/pages/1071/Dr.%20Mrs.%20Rashmi%20G.Bade.jpg" alt="CE Department" />
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
              <h3>B.Tech (CE)</h3>
              <p>4-year undergraduate program with intake of 30 students</p>
            </div>
            <div className="program-card">
              <FaGraduationCap className="program-icon" />
              <h3>M.Tech (CE)</h3>
              <p>2-year postgraduate program in civil engineering</p>
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
                <p><strong>Equipment:</strong> {lab.equipment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CEDepartment
