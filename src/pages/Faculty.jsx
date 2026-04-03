import { motion } from 'framer-motion'
import FacultyCard from '../components/FacultyCard'
import { FaSearch, FaFilter, FaUniversity, FaChalkboardTeacher } from 'react-icons/fa'
import '../styles/components/faculty.css'

const Faculty = () => {
  // Organized by department
  const departments = [
    {
      id: 1,
      name: 'First Year B.Tech (Science & Humanities)',
      faculty: [
        {
          id: 1,
          name: 'Dr. Rajesh Sharma',
          designation: 'Professor & HOD',
          qualification: 'PhD (Computer Science), M.Tech',
          specialization: 'Artificial Intelligence, Machine Learning',
          experience: '18 Years',
          email: 'rajesh.sharma@anjumanengg.edu.in',
          linkedin: 'https://linkedin.com/in/rajesh-sharma',
          image: '/faculty/1.jpg',
          isHOD: true
        },
        {
          id: 2,
          name: 'Prof. Priya Patel',
          designation: 'Associate Professor',
          qualification: 'PhD (Electronics), M.Tech',
          specialization: 'VLSI Design, Embedded Systems',
          experience: '12 Years',
          email: 'priya.patel@anjumanengg.edu.in',
          linkedin: 'https://linkedin.com/in/priya-patel',
          image: '/faculty/2.jpg',
          isHOD: false
        }
      ]
    },
    {
      id: 2,
      name: 'Artificial Intelligence & Data Science',
      faculty: [
        {
          id: 3,
          name: 'Dr. Amit Deshmukh',
          designation: 'Professor',
          qualification: 'PhD (Thermal Engineering), M.Tech',
          specialization: 'Heat Transfer, Renewable Energy',
          experience: '15 Years',
          email: 'amit.deshmukh@anjumanengg.edu.in',
          linkedin: 'https://linkedin.com/in/amit-deshmukh',
          image: '/faculty/3.jpg',
          isHOD: false
        },
        {
          id: 4,
          name: 'Prof. Neha Gupta',
          designation: 'Assistant Professor',
          qualification: 'M.Tech (Structural Engineering)',
          specialization: 'Concrete Technology, Earthquake Engineering',
          experience: '8 Years',
          email: 'neha.gupta@anjumanengg.edu.in',
          linkedin: 'https://linkedin.com/in/neha-gupta',
          image: '/faculty/4.jpg',
          isHOD: false
        }
      ]
    },
    {
      id: 3,
      name: 'Computer Science & Engineering',
      faculty: [
        {
          id: 5,
          name: 'Dr. Sanjay Kumar',
          designation: 'Professor & HOD',
          qualification: 'PhD (Power Systems), M.Tech',
          specialization: 'Power Electronics, Smart Grid',
          experience: '20 Years',
          email: 'sanjay.kumar@anjumanengg.edu.in',
          linkedin: 'https://linkedin.com/in/sanjay-kumar',
          image: '/faculty/5.jpg',
          isHOD: true
        },
        {
          id: 6,
          name: 'Prof. Anjali Singh',
          designation: 'Assistant Professor',
          qualification: 'M.Tech (Data Science)',
          specialization: 'Big Data Analytics, Cloud Computing',
          experience: '5 Years',
          email: 'anjali.singh@anjumanengg.edu.in',
          linkedin: 'https://linkedin.com/in/anjali-singh',
          image: '/faculty/6.jpg',
          isHOD: false
        }
      ]
    },
    {
      id: 4,
      name: 'Electronics and Telecommunication Engineering',
      faculty: [
        {
          id: 7,
          name: 'Dr. Vikram Joshi',
          designation: 'Associate Professor',
          qualification: 'PhD (Manufacturing), M.Tech',
          specialization: 'CAD/CAM, Robotics',
          experience: '10 Years',
          email: 'vikram.joshi@anjumanengg.edu.in',
          linkedin: 'https://linkedin.com/in/vikram-joshi',
          image: '/faculty/7.jpg',
          isHOD: false
        },
        {
          id: 8,
          name: 'Prof. Meena Iyer',
          designation: 'Assistant Professor',
          qualification: 'M.Tech (Communication Systems)',
          specialization: 'Wireless Communication, IoT',
          experience: '6 Years',
          email: 'meena.iyer@anjumanengg.edu.in',
          linkedin: 'https://linkedin.com/in/meena-iyer',
          image: '/faculty/8.jpg',
          isHOD: false
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  }

  return (
    <div className="faculty-page">
      {/* Hero Section */}
      <section className="faculty-hero">
        <div className="faculty-hero-overlay"></div>
        <img 
          src="/faculty-hero.jpg" 
          alt="Faculty Members" 
          className="faculty-hero-image"
        />
        <div className="faculty-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="faculty-hero-title">Our Faculty</h1>
            <p className="faculty-hero-subtitle">
              Meet our distinguished faculty members organized by department
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty by Department Section */}
      <section className="faculty-departments-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Faculty by Department
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          {/* Department Faculty Listing */}
          {departments.map((department) => (
            <div key={department.id} className="department-faculty-group">
              <motion.h3 
                className="department-heading"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {department.name}
              </motion.h3>
              
              <div className="faculty-grid">
                {department.faculty.map((faculty, index) => (
                  <motion.div
                    key={faculty.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="faculty-card-wrapper"
                  >
                    <FacultyCard faculty={faculty} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Faculty