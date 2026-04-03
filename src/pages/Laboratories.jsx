// pages/Laboratories.jsx
import { motion } from 'framer-motion';
import LabCard from '../components/LabCard';
import '../pages/components/laboratories.css';

const Laboratories = () => {
  // Science and Humanities Labs
  const scienceLabs = [
    {
      name: "Physics Laboratory",
      department: "Science & Humanities",
      area: "90 sq.m",
      capacity: "30 students",
      equipment: [
        "Laser equipment",
        "Spectrometers",
        "Electronics test benches",
        "Optical benches"
      ],
      image: "/labs/physics-lab.jpg"
    },
    {
      name: "Chemistry Laboratory",
      department: "Science & Humanities",
      area: "100 sq.m",
      capacity: "30 students",
      equipment: [
        "UV-Vis Spectrophotometer",
        "pH Meters",
        "Conductivity Meters",
        "Chemical fume hoods"
      ],
      image: "/labs/chemistry-lab.jpg"
    },
    {
      name: "Language Lab",
      department: "Science & Humanities",
      area: "80 sq.m",
      capacity: "40 students",
      equipment: [
        "Computer systems with headsets",
        "Language learning software",
        "Interactive whiteboard",
        "Audio-visual equipment"
      ],
      image: "/labs/language-lab.jpg"
    }
  ];

  // Engineering Department Labs
  const engineeringLabs = [
    {
      name: "Computer Programming Lab",
      department: "Computer Science & Engineering",
      area: "120 sq.m",
      capacity: "60 students",
      equipment: [
        "High-end computers",
        "Programming software",
        "Development tools",
        "Networking equipment"
      ],
      image: "/labs/programming-lab.jpg"
    },
    {
      name: "Electronics Lab",
      department: "Electronics & Telecommunication",
      area: "100 sq.m",
      capacity: "40 students",
      equipment: [
        "Digital storage oscilloscopes",
        "Function generators",
        "Digital multimeters",
        "Microcontroller kits"
      ],
      image: "/labs/electronics-lab.jpg"
    },
    {
      name: "Mechanical Workshop",
      department: "Mechanical Engineering",
      area: "150 sq.m",
      capacity: "30 students",
      equipment: [
        "Lathe machines",
        "Milling machines",
        "CNC machines",
        "Welding equipment"
      ],
      image: "/labs/mechanical-lab.jpg"
    },
    {
      name: "Surveying Lab",
      department: "Civil Engineering",
      area: "120 sq.m",
      capacity: "35 students",
      equipment: [
        "Total stations",
        "Theodolites",
        "Auto levels",
        "GPS equipment"
      ],
      image: "/labs/surveying-lab.jpg"
    }
  ];

  return (
    <div className="laboratories-page">
      {/* Hero Section */}
      <section className="labs-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Laboratories</h1>
            <p>State-of-the-art facilities for practical learning and research</p>
          </motion.div>
        </div>
      </section>

      {/* Science & Humanities Labs */}
      <section className="department-labs">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Science & Humanities Department</h2>
            <div className="section-divider"></div>
            <p>Well-equipped laboratories supporting fundamental sciences and communication skills</p>
          </motion.div>

          <div className="labs-grid">
            {scienceLabs.map((lab, index) => (
              <LabCard key={index} lab={lab} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Labs */}
      <section className="department-labs engineering">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2>Engineering Departments</h2>
            <div className="section-divider"></div>
            <p>Specialized laboratories for technical education and hands-on training</p>
          </motion.div>

          <div className="labs-grid">
            {engineeringLabs.map((lab, index) => (
              <LabCard key={index} lab={lab} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laboratories;