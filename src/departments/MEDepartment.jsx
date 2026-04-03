import { motion } from 'framer-motion'
import { FaUser, FaFlask, FaGraduationCap } from 'react-icons/fa'
import '../styles/components/department.css'

const MEDepartment = () => {
  const facultyMembers = [
    {
      name: "Prof. Hakimuddin A. Hussain",
      designation: "Assistant Professor & HOD(Mechanical Engg.)",
      qualification: "M.Tech., Ph.D (Registered)",
      email: "hhussain@anjumanengg.edu.in"
    },
    {
      name: "Dr. Akash M Langde",
      designation: "Professor",
      qualification: "B.E. (Mech.) M.Tech. (HPE) Ph.D (Fluidization)",
      email: "alangde@anjumanengg.edu.in"
    },
    {
      name: "Dr. M. Sohail Pervez",
      designation: "Associate Professor & Principal(Offg.)",
      qualification: "M.E, Ph.D",
      email: "mspervez@anjumanengg.edu.in"
    }
  ]

  const laboratories = [
    {
      name: "Heat Transfer Lab",
      area: "85 Sq. m",
      equipment: "Heat exchangers, thermal conductivity apparatus"
    },
    {
      name: "Theory of Machine Lab",
      area: "90 Sq. m",
      equipment: "Governors, gyroscopes, vibration apparatus"
    },
    {
      name: "Production Technology Lab",
      area: "120 Sq. m",
      equipment: "Lathes, milling machines, CNC machines"
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
            <h1 className="department-hero-title">Mechanical Engineering</h1>
            <p className="department-hero-subtitle">
              Focusing on design, analysis and manufacturing with state-of-the-art labs and workshops
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
                The Mechanical Engineering department focuses on design, analysis and manufacturing 
                with state-of-the-art laboratories and workshops. Our faculty members have extensive 
                experience in thermal engineering, manufacturing, and mechanical design.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>20+</h3>
                  <p>Faculty Members</p>
                </div>
                <div className="stat-item">
                  <h3>240</h3>
                  <p>Students</p>
                </div>
                <div className="stat-item">
                  <h3>8+</h3>
                  <p>Laboratories</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://anjumanengg.edu.in/UserData/uploads/pages/1112/Image.jpeg" alt="ME Department" />
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
              <h3>B.Tech (ME)</h3>
              <p>4-year undergraduate program in mechanical engineering</p>
            </div>
            <div className="program-card">
              <FaGraduationCap className="program-icon" />
              <h3>M.Tech (ME)</h3>
              <p>2-year postgraduate program with specializations</p>
            </div>
            <div className="program-card">
              <FaGraduationCap className="program-icon" />
              <h3>Ph.D</h3>
              <p>Research program in mechanical engineering</p>
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

export default MEDepartment
