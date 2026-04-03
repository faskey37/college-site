import { motion } from 'framer-motion'
import { FaUsers, FaCog } from 'react-icons/fa'
import '../styles/components/organization.css'

const OrganizationChart = () => {
  const organizationStructure = {
    departments: [
      {
        name: "Computer Science & Engineering",
        hod: "Prof. Nazish Khan",
        faculty: 25,
        students: 500
      },
      {
        name: "Electronics & Telecommunication",
        hod: "Dr. Ruhina Quazi",
        faculty: 18,
        students: 300
      },
      {
        name: "Mechanical Engineering",
        hod: "Dr. Namrata V. Lotia",
        faculty: 20,
        students: 360
      },
      {
        name: "Civil Engineering",
        hod: "Dr. Rashmi Bade",
        faculty: 15,
        students: 180
      },
      {
        name: "Electrical Engineering",
        hod: "Dr. Ruhi Uzma Sheikh",
        faculty: 18,
        students: 270
      },
      {
        name: "AI & Data Science",
        hod: "Dr. M. T. Hasan",
        faculty: 10,
        students: 210
      }
    ],
    administration: [
      { department: "Academic Affairs", head: "Dr. Ruhina Quazi" },
      { department: "Student Affairs", head: "Prof. Nazish Khan" },
      { department: "Training & Placement", head: "Dr. Khwaja Ramizuddin" },
      { department: "Examination", head: "Prof. Mohammad Ameenuddin" },
      { department: "IQAC", head: "Dr. Ahmed Sajjad Khan" },
      { department: "Library", head: "Mrs. Librarian Name" },
      { department: "Accounts", head: "Mr. Account Officer" }
    ]
  }

  return (
    <div className="organization-page">
      {/* Organization Structure Image Section */}
      <section className="organization-image-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="image-container"
          >
            <h1 className="organization-title">Organization Structure</h1>
            <img 
              src="https://anjumanengg.edu.in/UserData/uploads/pages/1264/org-structure1.png"
              alt="Anjuman College Organization Structure"
              className="organization-structure-image"
            />
          </motion.div>
        </div>
      </section>

      <section className="organization-content">
        <div className="container">
          {/* Academic Departments */}
          <motion.div 
            className="org-level"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Academic Departments</h2>
            <div className="departments-level">
              {organizationStructure.departments.map((dept, index) => (
                <div key={index} className="org-box department">
                  <FaUsers className="org-icon" />
                  <h4>{dept.name}</h4>
                  <p className="hod-name">HOD: {dept.hod}</p>
                  <div className="dept-stats">
                    <span>{dept.faculty} Faculty</span>
                    <span>{dept.students} Students</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Administrative Departments */}
          <motion.div 
            className="org-level"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Administrative Departments</h2>
            <div className="admin-departments">
              {organizationStructure.administration.map((admin, index) => (
                <div key={index} className="org-box admin-dept">
                  <FaCog className="org-icon" />
                  <h4>{admin.department}</h4>
                  <p>Head: {admin.head}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OrganizationChart
