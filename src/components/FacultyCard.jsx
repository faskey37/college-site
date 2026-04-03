import { motion } from 'framer-motion'
import { FaGraduationCap, FaBook, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import '../styles/components/facultycard.css'

const FacultyCard = ({ faculty }) => {
  return (
    <motion.div 
      className="faculty-card"
      whileHover={{ y: -5 }}
    >
      <div className="faculty-image-container">
        <img 
          src={faculty.image} 
          alt={faculty.name} 
          className="faculty-image"
        />
        {faculty.isHOD && (
          <div className="hod-badge">
            HOD
          </div>
        )}
      </div>
      
      <div className="faculty-content">
        <h3 className="faculty-name">{faculty.name}</h3>
        <p className="faculty-designation">{faculty.designation}</p>
        
        <div className="faculty-info-item">
          <FaGraduationCap className="faculty-info-icon" />
          <span className="faculty-info-text">{faculty.qualification}</span>
        </div>
        
        <div className="faculty-info-item">
          <FaBook className="faculty-info-icon" />
          <span className="faculty-info-text">{faculty.specialization}</span>
        </div>
        
        <div className="faculty-actions">
          <a 
            href={`mailto:${faculty.email}`}
            className="faculty-action-link"
            aria-label="Email"
          >
            <MdEmail size={20} />
          </a>
          
          {faculty.linkedin && (
            <a 
              href={faculty.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="faculty-action-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          )}
          
          <a 
            href={`/faculty/${faculty.id}`}
            className="faculty-profile-button"
          >
            Profile
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default FacultyCard
