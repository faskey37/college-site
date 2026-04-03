// src/components/DepartmentCardSimple.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/components/departmentcard.css'

const DepartmentCardSimple = ({ department }) => {
  const departmentIcons = {
    'cse': '💻',
    'me': '⚙️', 
    'ece': '📡',
    'ce': '🏗️',
    'ee': '⚡',
    'aids': '🤖',
    'sh': '🔬'
  }

  return (
    <motion.div 
      className="dept-card"
      whileHover={{ y: -5 }}
    >
      <Link to={`/departments/${department.slug}`} className="dept-card-link">
        <div className="dept-card-icon">{departmentIcons[department.slug] || '🎓'}</div>
        <h3 className="dept-card-title">{department.name}</h3>
        <p className="dept-card-desc">{department.description.substring(0, 60)}...</p>
        <div className="dept-card-meta">
          <span>{department.facultyCount} Faculty</span>
          <span>{department.programs.length} Programs</span>
        </div>
        <div className="dept-card-btn">
          Explore <span>→</span>
        </div>
      </Link>
    </motion.div>
  )
}

export default DepartmentCardSimple