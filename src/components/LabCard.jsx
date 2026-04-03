// components/LabCard.jsx
import { motion } from 'framer-motion';

const LabCard = ({ lab, index }) => {
  return (
    <motion.div
      className="lab-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="lab-image">
        <img src={lab.image} alt={lab.name} />
      </div>
      <div className="lab-content">
        <h3>{lab.name}</h3>
        <p className="lab-department">{lab.department}</p>
        <div className="lab-details">
          <div className="lab-specs">
            <div className="spec-item">
              <span className="spec-label">Area:</span>
              <span>{lab.area}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Capacity:</span>
              <span>{lab.capacity}</span>
            </div>
          </div>
          <div className="lab-equipment">
            <h4>Major Equipment:</h4>
            <ul>
              {lab.equipment.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LabCard;