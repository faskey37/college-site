// src/components/DepartmentCard.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const DepartmentCard = ({ department }) => {
  const getDepartmentRoute = (slug) => {
    const routeMap = {
      'cse': '/department/computer-science',
      'me': '/department/mechanical',
      'ece': '/department/electronics-telecommunication',
      'ce': '/department/civil',
      'ee': '/department/electrical',
      'aids': '/department/ai-data-science',
      'sh': '/departments/science-humanities'  // Added Science & Humanities route
    }
    return routeMap[slug] || `/departments/${slug}`
  }

  // Department icons/emojis for all 6 departments
  const getDepartmentIcon = (slug) => {
    const iconMap = {
      'cse': <img src='https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true' alt="Computer Science" />,
      'me': <img src='https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true' alt="Mechanical Engineering" />,
      'ece': <img src='https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true' alt="Electronics & Communication" />,
      'ce': <img src='https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true' alt="Civil Engineering" />,
      'ee': <img src='https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true' alt="Electrical Engineering" />,
      'aids': <img src='https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true' alt="AI & Data Science" />,
      'sh': <img src='https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true' alt="Science & Humanities" />             // Science & Humanities
    }
    return iconMap[slug] || '🎓'
  }

  return (
  
      <motion.div 
        className="card"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="card-badge">
          {department.programs.length} Programs
        </div>
        
        <div className="card-header">
          <div className="card-icon">{getDepartmentIcon(department.slug)}</div>
          <h3 className="card-title">{department.name}</h3>
        </div>
        
        <p className="card-description">{department.description}</p>
        
        <div className="card-features">
          <div className="feature-item">
            <span className="checkmark">✅</span>
            <span className="feature-text">{department.facultyCount} Faculty Members</span>
          </div>
          <div className="feature-item">
            <span className="checkmark">✅</span>
            <span className="feature-text">{department.programs.length} Programs Offered</span>
          </div>
          <div className="feature-item">
            <span className="checkmark">✅</span>
            <span className="feature-text">Modern Labs & Infrastructure</span>
          </div>
        </div>
        
        <Link to={getDepartmentRoute(department.slug)} className="card-button">
          Explore Department <span className="arrow">→</span>
        </Link>
      </motion.div>
    
  )
}


 
export default DepartmentCard