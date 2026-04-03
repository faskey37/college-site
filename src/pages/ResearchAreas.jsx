import { motion } from 'framer-motion'
import '../styles/components/research.css'

const ResearchAreas = () => {
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Deep learning, neural networks, computer vision, and natural language processing",
      faculty: 8,
      projects: 15
    },
    {
      title: "Internet of Things (IoT)",
      description: "Smart cities, industrial IoT, sensor networks, and edge computing",
      faculty: 6,
      projects: 12
    },
    {
      title: "Robotics & Automation",
      description: "Industrial automation, autonomous systems, and robotic process automation",
      faculty: 5,
      projects: 8
    },
    {
      title: "Renewable Energy Systems",
      description: "Solar energy, wind power, energy storage, and smart grid technologies",
      faculty: 7,
      projects: 10
    },
    {
      title: "Data Science & Analytics",
      description: "Big data processing, predictive analytics, and business intelligence",
      faculty: 6,
      projects: 11
    },
    {
      title: "Cybersecurity",
      description: "Network security, cryptography, blockchain, and information security",
      faculty: 4,
      projects: 9
    }
  ]

  return (
    <div className="research-page">
      <section className="research-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Research Areas</h1>
            <p>Cutting-edge research driving innovation and technological advancement</p>
          </motion.div>
        </div>
      </section>

      <section className="research-content">
        <div className="container">
          <div className="research-grid">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                className="research-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <div className="research-stats">
                  <span>{area.faculty} Faculty</span>
                  <span>{area.projects} Active Projects</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="research-facilities">
        <div className="container">
          <h2>Research Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <h3>Advanced Computing Lab</h3>
              <p>High-performance computing systems for AI/ML research</p>
            </div>
            <div className="facility-card">
              <h3>IoT Research Center</h3>
              <p>Dedicated space for IoT prototyping and testing</p>
            </div>
            <div className="facility-card">
              <h3>Renewable Energy Lab</h3>
              <p>Solar panels, wind turbines, and energy storage systems</p>
            </div>
            <div className="facility-card">
              <h3>Robotics Workshop</h3>
              <p>Industrial robots and automation equipment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ResearchAreas
