import { motion } from 'framer-motion'
import { FaUser, FaFlask, FaGraduationCap } from 'react-icons/fa'
import '../styles/components/department.css'

const ETDepartment = () => {
  const facultyMembers = [
    {
      name: "Dr. Ruhina Quazi",
      designation: "Assistant Professor & HOD(ETC)",
      qualification: "Ph.D(EC), M.Tech.(ETC), B.E.(ETC)",
      email: "rquazi@anjumanengg.edu.in"
    },
    {
      name: "Dr. Ahmed Sajjad Khan",
      designation: "Professor & Vice Principal",
      qualification: "Ph.D (ICE), M.Tech (EN), B.E.(EN)",
      email: "askhan@anjumanengg.edu.in"
    },
    {
      name: "Dr. Syed Mohammad Ali",
      designation: "Professor",
      qualification: "Ph.D (Electronics), M.Tech (EN), B.E.(EN)",
      email: "smali@anjumanengg.edu.in"
    }
  ]

  const laboratories = [
    {
      name: "Microprocessor and Interfacing Lab",
      incharge: "Prof. M. Nasiruddin",
      area: "80 Sq. m"
    },
    {
      name: "Communication Lab",
      incharge: "Dr. Ruhina Quazi",
      area: "75 Sq. m"
    },
    {
      name: "VLSI Lab",
      incharge: "Dr. Rahil Khan",
      area: "70 Sq. m"
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
            <h1 className="department-hero-title">Electronics & Telecommunication Engineering</h1>
            <p className="department-hero-subtitle">
              To become excellent in Electronics & Telecommunication Engineering with moral & social ethics and to be globally competent
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
                The Department of Electronics & Telecommunication Engineering was established since inception 
                of the college in 1999 with the present annual intake of 60 students. The department possesses 
                experienced and qualified teaching faculties with specializations in Wireless Communication, 
                VLSI and Embedded Systems, Communication Networks, and Signal Coding.
              </p>
              <div className="mission-vision">
                <h3>Vision</h3>
                <p>To become excellent in Electronics & Telecommunication Engineering with moral & social ethics and to be globally competent.</p>
                
                <h3>Mission</h3>
                <p>To provide value based technical education and to mould the character of the younger generations, through synthesis of science and engineering.</p>
              </div>
            </div>
            <div className="about-image">
              <img src="https://anjumanengg.edu.in/UserData/uploads/pages/1101/ImageMain.jpeg" alt="ETC Department" />
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
              <h3>B.Tech (ETC)</h3>
              <p>4-year undergraduate program with intake of 60 students</p>
            </div>
            <div className="program-card">
              <FaGraduationCap className="program-icon" />
              <h3>M.Tech (ECE)</h3>
              <p>2-year postgraduate program started from 2014</p>
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
                <p><strong>Lab Incharge:</strong> {lab.incharge}</p>
                <p><strong>Area:</strong> {lab.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ETDepartment
