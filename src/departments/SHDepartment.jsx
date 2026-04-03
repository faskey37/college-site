import { motion } from 'framer-motion'
import { FaUser, FaFlask, FaGraduationCap, FaBook, FaMicroscope } from 'react-icons/fa'
import '../styles/components/department.css'

const ScienceHumanitiesDepartment = () => {
  const facultyMembers = [
    {
      name: "Dr. R. S. Deshmukh",
      designation: "Professor & HOD (Physics)",
      qualification: "M.Sc., Ph.D",
      email: "rsdeshmukh@anjumanengg.edu.in"
    },
    {
      name: "Dr. S. T. Khan",
      designation: "Associate Professor (Chemistry)",
      qualification: "M.Sc., Ph.D",
      email: "stkhan@anjumanengg.edu.in"
    },
    {
      name: "Prof. A. R. Shaikh",
      designation: "Assistant Professor (Mathematics)",
      qualification: "M.Sc., M.Phil",
      email: "arshaikh@anjumanengg.edu.in"
    }
  ]

  const laboratories = [
    {
      name: "Physics Laboratory",
      area: "100 Sq. m",
      equipment: "Laser kits, optics bench, electronics equipment"
    },
    {
      name: "Chemistry Laboratory",
      area: "120 Sq. m",
      equipment: "Spectrophotometers, pH meters, calorimeters"
    },
    {
      name: "Language Lab",
      area: "80 Sq. m",
      equipment: "Computer systems with language learning software"
    }
  ]

  return (
    <div className="department-page">
      {/* Hero Section */}
      <section className="department-hero science-hero">
        <div className="department-hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="department-hero-title">Science & Humanities</h1>
            <p className="department-hero-subtitle">
              Building strong foundations in basic sciences and communication skills
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
                The Department of Science & Humanities plays a vital role in laying the foundation 
                for engineering education. We provide strong theoretical and practical knowledge in 
                Physics, Chemistry, Mathematics, and English to support the core engineering branches.
              </p>
              <p className="about-text">
                Our department emphasizes developing analytical skills, problem-solving abilities, 
                and effective communication - essential competencies for future engineers.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Faculty Members</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>First Year Coverage</p>
                </div>
                <div className="stat-item">
                  <h3>4+</h3>
                  <p>Laboratories</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://anjumanengg.edu.in/UserData/uploads/pages/1345/HOD-first-year-b.tech.jpg" alt="Science & Humanities Department" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <h2 className="section-title">Courses Offered</h2>
          <div className="programs-grid">
            <div className="program-card">
              <FaBook className="program-icon" />
              <h3>Engineering Physics</h3>
              <p>Fundamentals of physics with engineering applications</p>
            </div>
            <div className="program-card">
              <FaFlask className="program-icon" />
              <h3>Engineering Chemistry</h3>
              <p>Chemical principles for engineering applications</p>
            </div>
            <div className="program-card">
              <FaMicroscope className="program-icon" />
              <h3>Engineering Mathematics</h3>
              <p>Mathematical tools for engineering problem solving</p>
            </div>
            <div className="program-card">
              <FaUser className="program-icon" />
              <h3>Professional Communication</h3>
              <p>Developing effective technical communication skills</p>
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

export default ScienceHumanitiesDepartment