import { motion } from 'framer-motion'
import { FaGraduationCap, FaUsers, FaCalendarAlt, FaTrophy, FaLaptopCode, FaBook } from 'react-icons/fa'
import { MdOutlineWork, MdOutlineEvent, MdOutlineSports } from 'react-icons/md'
import '../styles/components/students.css'

const Students = () => {
  const studentLife = [
    {
      icon: <FaGraduationCap className="student-life-icon" />,
      title: "Academic Excellence",
      description: "Rigorous curriculum with industry-relevant courses and hands-on learning"
    },
    {
      icon: <FaUsers className="student-life-icon" />,
      title: "Student Clubs",
      description: "20+ technical, cultural and special interest clubs for holistic development"
    },
    {
      icon: <MdOutlineWork className="student-life-icon" />,
      title: "Placements",
      description: "90% placement record with top recruiters offering competitive packages"
    },
    {
      icon: <MdOutlineEvent className="student-life-icon" />,
      title: "Events & Workshops",
      description: "Regular technical fests, cultural events and expert workshops"
    },
    {
      icon: <MdOutlineSports className="student-life-icon" />,
      title: "Sports & Fitness",
      description: "State-of-the-art sports complex and regular inter-college tournaments"
    },
    {
      icon: <FaBook className="student-life-icon" />,
      title: "Library Resources",
      description: "Access to 50,000+ books, e-journals and digital learning resources"
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Fest 2023",
      date: "15-17 Nov 2023",
      description: "Annual technical festival with competitions, workshops and guest lectures",
      category: "Technical"
    },
    {
      id: 2,
      title: "Cultural Night",
      date: "25 Nov 2023",
      description: "An evening of music, dance and drama performances by students",
      category: "Cultural"
    },
    {
      id: 3,
      title: "Placement Workshop",
      date: "5 Dec 2023",
      description: "Pre-placement training on resume building and interview skills",
      category: "Career"
    },
    {
      id: 4,
      title: "Sports Tournament",
      date: "10-12 Dec 2023",
      description: "Inter-department cricket, football and basketball competitions",
      category: "Sports"
    }
  ]

  const placementStats = [
    { year: "2023", placed: "92%", highest: "18 LPA", average: "6.5 LPA", companies: "85+" },
    { year: "2022", placed: "90%", highest: "16 LPA", average: "6.2 LPA", companies: "80+" },
    { year: "2021", placed: "88%", highest: "15 LPA", average: "6.0 LPA", companies: "75+" },
    { year: "2020", placed: "85%", highest: "14 LPA", average: "5.8 LPA", companies: "70+" }
  ]

  const topRecruiters = [
    { name: "TCS", logo: "https://imgs.search.brave.com/v4CnDEMT88rhzu-13UVRNSOqti4obr3okcvPAtJDZxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNkLzY2/L2Y0LzNkNjZmNGEy/ZGI3MTUyZDQ3NTQy/MTQ4NGYyNzRiYWVl/LmpwZw" },
    { name: "Infosys", logo: "https://imgs.search.brave.com/LP9NJU59-FUtQNlABUBv40SNz93_xRVZJrk4q3xtDYM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDIwLzE5/MC80NzYvbm9uXzJ4/L2luZm9zeXMtbG9n/by1pbmZvc3lzLWlj/b24tZnJlZS1mcmVl/LXZlY3Rvci5qcGc" },
    { name: "Wipro", logo: "https://imgs.search.brave.com/HN0xNy8Z9ksIICx61tWAJfEt-LED1UlYBsMZR0uFkAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA1/L1dpcHJvLWxvZ28t/NTAweDM1OC5qcGc" },
    { name: "Tech Mahindra", logo: "https://imgs.search.brave.com/FWNitrshZKZJ71EG7fu_yaAIg2qrZGTaTK8ctZMRP6Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMwLzEvdGVjaC1t/YWhpbmRyYS1sb2dv/LXBuZ19zZWVrbG9n/by0zMDQxNDcucG5n" },
    { name: "Amazon", logo: "https://imgs.search.brave.com/CbbkOVrTwMPhTAmRuE6IATHZ7H5KCIT96MFductjQrY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb21hZ2ljaWFu/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjQvMDEvVGhl/LVNtaWxlLWFuZC1B/cnJvdy1Mb2dvLWZy/b20tMjAwMC10aWxs/LVByZXNlbnQud2Vi/cA" },
    { name: "Microsoft", logo: "https://imgs.search.brave.com/9xxMqzabm3mL95ChOBsi8cDmqj01SPVSco-n7pYRT7I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/NzMwNjEyL2NvbnZl/cnNpb25zL01JQ1JP/U09GVC1MT0dPLURF/U0lHTi1TVkctZGVz/a3RvcC5qcGc" },
    { name: "L&T", logo: "https://imgs.search.brave.com/m7OTKIejU8EOGI4XLEgyB5968zTgoahw9ecQMPADefM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzIxLzEvbGFyc2Vu/LXRvdWJyby1sdC1s/b2dvLXBuZ19zZWVr/bG9nby0yMTE0NjAu/cG5n" },
    { name: "TATA Motors", logo: "https://imgs.search.brave.com/T-q-YjFuPAX-0HRfGmq6qIZCwwcVUKSz_EOmcADZaOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQwNDYw/MjQucG5n" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  }

  return (
    <div className="students-page">
      {/* Hero Section */}
      <section className="students-hero">
        <div className="students-hero-overlay"></div>
        <img 
          src="/students-hero.jpg" 
          alt="Students on campus" 
          className="students-hero-image"
        />
        <div className="students-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="students-hero-title">Student Life</h1>
            <p className="students-hero-subtitle">
              A vibrant campus life that nurtures academic excellence and personal growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="student-life-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Student Experience
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              We provide a holistic environment that fosters learning, innovation and personal development
            </motion.p>
          </motion.div>

          <div className="student-life-grid">
            {studentLife.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="student-life-card"
              >
                <div className="student-life-icon-container">
                  {item.icon}
                </div>
                <h3 className="student-life-card-title">{item.title}</h3>
                <p className="student-life-card-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Organizations Section */}
      <section className="student-orgs-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Student Organizations
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Get involved in various clubs and organizations to enhance your skills and network
            </motion.p>
          </motion.div>

          <div className="orgs-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="org-card"
            >
              <div className="org-icon tech">
                <FaLaptopCode />
              </div>
              <h3 className="org-card-title">Tech Clubs</h3>
              <ul className="org-list">
                <li>• Coding Club</li>
                <li>• Robotics Club</li>
                <li>• AI & ML Club</li>
                <li>• Cyber Security Club</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="org-card"
            >
              <div className="org-icon cultural">
                <FaUsers />
              </div>
              <h3 className="org-card-title">Cultural Clubs</h3>
              <ul className="org-list">
                <li>• Music Club</li>
                <li>• Dance Club</li>
                <li>• Drama Club</li>
                <li>• Photography Club</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="org-card"
            >
              <div className="org-icon sports">
                <FaTrophy />
              </div>
              <h3 className="org-card-title">Sports Clubs</h3>
              <ul className="org-list">
                <li>• Cricket Club</li>
                <li>• Football Club</li>
                <li>• Basketball Club</li>
                <li>• Athletics Club</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="org-card"
            >
              <div className="org-icon other">
                <FaBook />
              </div>
              <h3 className="org-card-title">Other Clubs</h3>
              <ul className="org-list">
                <li>• Entrepreneurship Cell</li>
                <li>• Literary Club</li>
                <li>• Eco Club</li>
                <li>• Social Service Club</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Upcoming Events
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Participate in our exciting events and showcase your talents
            </motion.p>
          </motion.div>

          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="event-card"
              >
                <div className={`event-color-bar ${event.category.toLowerCase()}`}></div>
                <div className="event-content">
                  <div className="event-date">
                    <FaCalendarAlt />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  <span className={`event-badge ${event.category.toLowerCase()}`}>
                    {event.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="events-cta"
          >
            <a href="/events" className="cta-button">
              View All Events
            </a>
          </motion.div>
        </div>
      </section>

      {/* Placements Section */}
      <section className="placements-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Placement Highlights
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Our students get placed in top companies with attractive packages
            </motion.p>
          </motion.div>

          <div className="placement-content-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="placement-stats-card"
            >
              <h3 className="placement-card-title">Placement Statistics</h3>
              <div className="stats-table-container">
                <table className="stats-table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Placed</th>
                      <th>Highest</th>
                      <th>Average</th>
                      <th>Companies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placementStats.map((stat, index) => (
                      <tr key={index}>
                        <td className="stat-year">{stat.year}</td>
                        <td>{stat.placed}</td>
                        <td>{stat.highest}</td>
                        <td>{stat.average}</td>
                        <td>{stat.companies}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="placement-process-card"
            >
              <h3 className="placement-card-title">Placement Process</h3>
              <ol className="process-list">
                <li className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4 className="step-title">Registration</h4>
                    <p className="step-description">Students register with the placement cell at the beginning of final year</p>
                  </div>
                </li>
                <li className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4 className="step-title">Training</h4>
                    <p className="step-description">Pre-placement training on aptitude, technical skills and interview preparation</p>
                  </div>
                </li>
                <li className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4 className="step-title">Company Visits</h4>
                    <p className="step-description">Companies conduct pre-placement talks and recruitment drives</p>
                  </div>
                </li>
                <li className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4 className="step-title">Placement</h4>
                    <p className="step-description">Students participate in interviews and receive offer letters</p>
                  </div>
                </li>
              </ol>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="recruiters-section"
          >
            <motion.h3 variants={itemVariants} className="recruiters-title">
              Our Top Recruiters
            </motion.h3>
          </motion.div>

          <div className="recruiters-grid">
            {topRecruiters.map((recruiter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="recruiter-card"
              >
                <img 
                  src={recruiter.logo} 
                  alt={recruiter.name} 
                  className="recruiter-logo"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="placement-cta"
          >
            <a href="/placements" className="cta-button">
              Learn More About Placements
            </a>
          </motion.div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Student Testimonials
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Hear from our students about their experiences at Anjuman College
            </motion.p>
          </motion.div>

          <div className="testimonials-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <div className="testimonial-header">
                <img 
                  src="/testimonials/1.jpg" 
                  alt="Rahul Sharma" 
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Rahul Sharma</h4>
                  <p className="testimonial-degree">B.Tech CSE, 2022</p>
                </div>
              </div>
              <p className="testimonial-text">
                "The faculty and facilities at Anjuman College provided me with the perfect environment to grow both academically and personally. The placement training helped me secure my dream job at Amazon."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <div className="testimonial-header">
                <img 
                  src="/testimonials/2.jpg" 
                  alt="Priya Patel" 
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Priya Patel</h4>
                  <p className="testimonial-degree">M.Tech ME, 2021</p>
                </div>
              </div>
              <p className="testimonial-text">
                "The research opportunities and industry collaborations helped me develop practical skills. The supportive faculty guided me through my research projects and publications."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="testimonial-card"
            >
              <div className="testimonial-header">
                <img 
                  src="/testimonials/3.jpg" 
                  alt="Amit Deshmukh" 
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">Amit Deshmukh</h4>
                  <p className="testimonial-degree">B.Tech ECE, 2020</p>
                </div>
              </div>
              <p className="testimonial-text">
                "The practical approach to learning and emphasis on innovation gave me the confidence to start my own tech startup. The entrepreneurship cell provided great mentorship."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Students
