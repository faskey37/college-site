import { motion } from 'framer-motion'
import '../styles/components/governance.css'

const GovernanceBody = () => {
  const governingMembers = [
    {
      id: "1",
      name: "Dr. Ab. Shakeel Ab. Sattar",
      designation: "Chairman, Governing Body, ACET, Nagpur",
      category: "Chairman"
    },
    {
      id: "2",
      name: "Mr. Anees Ahmad",
      designation: "Offg. Chief Executive Officer, Anjuman Hami-E-Islam & Member, Governing Body, ACET, Nagpur (Management Nominee)",
      category: "Management"
    },
    {
      id: "3",
      name: "Mr. Ahmad Sayeed",
      designation: "Advisor (General Administration), Anjuman Hami-E-Islam & Member, Governing Body, ACET, Nagpur (Management Nominee)",
      category: "Management"
    },
    {
      id: "4",
      name: "Dr. Salim Chavan",
      designation: "Principal, Govindrao Wanjari College of Engg & Technology & Member, Governing Body, ACET, Nagpur (Management Nominee- Educationalist)",
      category: "Educationalist"
    },
    {
      id: "5",
      name: "Dr. Neeraj Khaty",
      designation: "Professor, Department of Chemistry, LIT & Member, Governing Body, ACET, Nagpur (Management Nominee- University)",
      category: "University Representative"
    },
    {
      id: "6",
      name: "Dr. Gajanan K. Awari",
      designation: "HOD, Automobile Engg Deptt., Govt Polytechnic & Member, Governing Body, ACET, Nagpur (Management Nominee- State Government)",
      category: "Government Representative"
    },
    {
      id: "7",
      name: "Mr. Hifzurrehman Abdul Rehman Sheikh",
      designation: "Director, A R Comm Televenture Pvt. Ltd. & Member, Governing Body, ACET, Nagpur (Management Nominee- Industrialist)",
      category: "Industry Representative"
    },
    {
      id: "8",
      name: "Dr. Mohammad Nasiruddin",
      designation: "Associate Professor, ETC, ACET & Member, Governing Body, ACET (Faculty Representative)",
      category: "Faculty Representative"
    },
    {
      id: "9",
      name: "Dr. Namrata V. Lotia",
      designation: "HOD, Deptt. of Mechanical Engineering, ACET & Member, Governing Body, ACET(Faculty Representative)",
      category: "Faculty Representative"
    },
    {
      id: "10",
      name: "Prof.(Dr.) K. S. Zakiuddin",
      designation: "Principal & Member Secretary, Governing Body, ACET",
      category: "Member Secretary"
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Chairman': '#dc2626',
      'Management': '#2563eb',
      'Educationalist': '#16a34a',
      'University Representative': '#7c3aed',
      'Government Representative': '#ea580c',
      'Industry Representative': '#0891b2',
      'Faculty Representative': '#059669',
      'Member Secretary': '#4338ca'
    }
    return colors[category] || '#6b7280'
  }

  return (
    <div className="governance-page">
      <section className="governance-hero">
        <div className="governance-hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="governance-hero-title">Governing Body</h1>
            <p className="governance-hero-subtitle">
              Distinguished Leaders Guiding Our Institution
            </p>
          </motion.div>
        </div>
      </section>

      <section className="governance-content">
        <div className="container">
          <motion.div 
            className="intro-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>About the Governing Body</h2>
            <p>
              The Governing Body of Anjuman College of Engineering & Technology comprises distinguished 
              members from various sectors including education, industry, government, and academia. 
              This diverse composition ensures comprehensive governance and strategic decision-making 
              for the institution's growth and development.[3]
            </p>
          </motion.div>

          <div className="governing-members">
            <h2>Members of the Governing Body</h2>
            <div className="members-grid">
              {governingMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  className="member-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="member-header">
                    <div 
                      className="member-number"
                      style={{ backgroundColor: getCategoryColor(member.category) }}
                    >
                      {member.id}
                    </div>
                    <div 
                      className="member-category"
                      style={{ color: getCategoryColor(member.category) }}
                    >
                      {member.category}
                    </div>
                  </div>
                  
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-designation">{member.designation}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="governance-structure"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2>Governance Structure</h2>
            <div className="structure-overview">
              <div className="structure-item">
                <h3>Leadership</h3>
                <p>Chairman and Management Representatives provide strategic direction and oversight</p>
                <div className="count">3 Members</div>
              </div>
              
              <div className="structure-item">
                <h3>External Experts</h3>
                <p>Representatives from University, Government, and Industry bring diverse perspectives</p>
                <div className="count">3 Members</div>
              </div>
              
              <div className="structure-item">
                <h3>Academic Leadership</h3>
                <p>Faculty representatives and Principal ensure academic excellence</p>
                <div className="count">3 Members</div>
              </div>
              
              <div className="structure-item">
                <h3>Educational Expert</h3>
                <p>Educationalist representative provides specialized educational insights</p>
                <div className="count">1 Member</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="responsibilities-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2>Key Responsibilities</h2>
            <div className="responsibilities-grid">
              <div className="responsibility-item">
                <h4>Strategic Planning</h4>
                <p>Formulating long-term strategies for institutional growth and development</p>
              </div>
              
              <div className="responsibility-item">
                <h4>Academic Oversight</h4>
                <p>Ensuring academic quality, curriculum relevance, and educational standards</p>
              </div>
              
              <div className="responsibility-item">
                <h4>Financial Management</h4>
                <p>Overseeing budget allocation, financial planning, and resource management</p>
              </div>
              
              <div className="responsibility-item">
                <h4>Policy Formulation</h4>
                <p>Developing institutional policies and governance frameworks</p>
              </div>
              
              <div className="responsibility-item">
                <h4>Quality Assurance</h4>
                <p>Monitoring institutional performance and ensuring compliance with standards</p>
              </div>
              
              <div className="responsibility-item">
                <h4>Stakeholder Relations</h4>
                <p>Managing relationships with industry, government, and academic partners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GovernanceBody
