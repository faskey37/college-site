import { motion } from 'framer-motion'
import '../styles/components/placements.css'

const PlacementStatistics = () => {
  const yearlyData = [
    { year: '2023', placed: 285, percentage: '92%', avgPackage: '6.5 LPA', highestPackage: '25 LPA' },
    { year: '2022', placed: 267, percentage: '89%', avgPackage: '5.8 LPA', highestPackage: '22 LPA' },
    { year: '2021', placed: 245, percentage: '87%', avgPackage: '5.2 LPA', highestPackage: '18 LPA' },
    { year: '2020', placed: 198, percentage: '82%', avgPackage: '4.8 LPA', highestPackage: '15 LPA' },
  ]

  const departmentData = [
    { dept: 'Computer Science', placed: 95, total: 100, percentage: '95%' },
    { dept: 'Electronics & Telecom', placed: 52, total: 60, percentage: '87%' },
    { dept: 'Mechanical', placed: 48, total: 60, percentage: '80%' },
    { dept: 'Civil', placed: 22, total: 30, percentage: '73%' },
    { dept: 'Electrical', placed: 35, total: 45, percentage: '78%' },
    { dept: 'AI & Data Science', placed: 33, total: 35, percentage: '94%' }
  ]

  return (
    <div className="placements-page">
      <section className="placements-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Placement Statistics</h1>
            <p>Outstanding placement records reflecting our commitment to student success</p>
          </motion.div>
        </div>
      </section>

      <section className="stats-overview">
        <div className="container">
          <div className="stats-cards">
            <div className="stat-card highlight">
              <h3>92%</h3>
              <p>Placement Rate 2023</p>
            </div>
            <div className="stat-card">
              <h3>285</h3>
              <p>Students Placed</p>
            </div>
            <div className="stat-card">
              <h3>6.5 LPA</h3>
              <p>Average Package</p>
            </div>
            <div className="stat-card">
              <h3>25 LPA</h3>
              <p>Highest Package</p>
            </div>
          </div>
        </div>
      </section>

      <section className="yearly-stats">
        <div className="container">
          <h2>Year-wise Placement Statistics</h2>
          <div className="stats-table">
            <table>
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Students Placed</th>
                  <th>Placement %</th>
                  <th>Average Package</th>
                  <th>Highest Package</th>
                </tr>
              </thead>
              <tbody>
                {yearlyData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.year}</td>
                    <td>{data.placed}</td>
                    <td>{data.percentage}</td>
                    <td>{data.avgPackage}</td>
                    <td>{data.highestPackage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="department-stats">
        <div className="container">
          <h2>Department-wise Placement Statistics (2023)</h2>
          <div className="dept-stats-grid">
            {departmentData.map((dept, index) => (
              <div key={index} className="dept-stat-card">
                <h3>{dept.dept}</h3>
                <div className="stat-bar">
                  <div 
                    className="stat-fill" 
                    style={{ width: dept.percentage }}
                  ></div>
                </div>
                <p>{dept.placed}/{dept.total} placed ({dept.percentage})</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PlacementStatistics
