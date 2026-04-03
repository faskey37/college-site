import { motion } from 'framer-motion'
import { FaUser, FaFlask, FaGraduationCap } from 'react-icons/fa'
import '../styles/components/department.css'

const AIDSCDepartment = () => {
  const facultyMembers = [
    {
      name: "Dr. M. T. Hasan",
      designation: "HOD, Artificial Intelligence & Data Science",
      qualification: "Ph.D, M.Tech",
      email: "mthasan@anjumanengg.edu.in"
    }
  ]

  const laboratories = [
    {
      name: "AI & Machine Learning Lab",
      area: "90 Sq. m",
      equipment: "High-end computers, GPU workstations"
    },
    {
      name: "Data Science Lab",
      area: "85 Sq. m",
      equipment: "Analytics software, cloud computing setup"
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
            <h1 className="department-hero-title">Artificial Intelligence & Data Science</h1>
            <p className="department-hero-subtitle">
              Leading the future with AI innovations and data-driven solutions
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
                The Department of Artificial Intelligence & Data Science is one of the newest additions 
                to our college, focusing on cutting-edge technologies like machine learning, deep learning, 
                natural language processing, and big data analytics.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Faculty Members</p>
                </div>
                <div className="stat-item">
                  <h3>120+</h3>
                  <p>Students</p>
                </div>
                <div className="stat-item">
                  <h3>4+</h3>
                  <p>Laboratories</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://anjumanengg.edu.in/UserData/uploads/pages/1124/Dr-Tahseen-ul-Hasan.JPG" alt="AI&DSC Department" />
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
              <h3>B.Tech (AI&DS)</h3>
              <p>4-year undergraduate program in AI and Data Science</p>
            </div>
            <div className="program-card">
              <FaGraduationCap className="program-icon" />
              <h3>M.Tech (AI&DS)</h3>
              <p>2-year postgraduate program with research focus</p>
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

export default AIDSCDepartment
