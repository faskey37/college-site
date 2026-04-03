import { motion } from 'framer-motion'
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import '../styles/components/eventcard.css'

const EventCard = ({ event, section }) => {
  // Determine the image based on the section
  const getSectionImage = () => {
    switch(section) {
      case 'academic':
        return '/events/academic-default.jpg';
      case 'cultural':
        return '/events/cultural-default.jpg';
      case 'sports':
        return '/events/sports-default.jpg';
      case 'workshop':
        return '/events/workshop-default.jpg';
      default:
        return event.image || '/events/default.jpg';
    }
  };

  // Determine the category color based on section
  const getCategoryColor = () => {
    switch(section) {
      case 'academic':
        return 'academic-badge';
      case 'cultural':
        return 'cultural-badge';
      case 'sports':
        return 'sports-badge';
      case 'workshop':
        return 'workshop-badge';
      default:
        return '';
    }
  };

  return (
    <motion.div 
      className="event-card"
      whileHover={{ y: -5 }}
    >
      <div className="event-image-container">
        <img 
          src={event.image || getSectionImage()} 
          alt={event.title} 
          className="event-image"
        />
        <div className={`event-category-badge ${getCategoryColor()}`}>
          {event.category || section.charAt(0).toUpperCase() + section.slice(1)}
        </div>
      </div>
      
      <div className="event-content">
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>
        
        <div className="event-details">
          <div className="event-detail-item">
            <FaCalendarAlt className="event-detail-icon" />
            <span className="event-detail-text">{event.date}</span>
          </div>
          <div className="event-detail-item">
            <FaClock className="event-detail-icon" />
            <span className="event-detail-text">{event.time}</span>
          </div>
          <div className="event-detail-item">
            <FaMapMarkerAlt className="event-detail-icon" />
            <span className="event-detail-text">{event.location}</span>
          </div>
        </div>

        <div className="event-footer">
          <span className={`event-status ${event.status.toLowerCase()}`}>
            {event.status}
          </span>
          <motion.a
            href={`/events/${event.id}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="event-details-button"
          >
            View Details
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default EventCard