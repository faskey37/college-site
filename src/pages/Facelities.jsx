import { motion } from 'framer-motion'
import { FaBook, FaFlask, FaLaptopCode, FaWifi, FaBus, FaUtensils, FaFirstAid, FaRunning } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import '../styles/components/facilities.css'

const Facilities = () => {
  // Missing data arrays
  const facilities = [
    {
      id: 1,
      title: "Central Library",
      description: "50,000+ books, digital resources, and research materials available 24/7",
      icon: <FaBook className="text-blue-600 text-2xl" />
    },
    {
      id: 2,
      title: "Modern Laboratories",
      description: "50+ well-equipped labs with latest equipment for hands-on learning",
      icon: <FaFlask className="text-green-600 text-2xl" />
    },
    {
      id: 3,
      title: "Computer Centers",
      description: "High-speed internet, latest software, and computing resources",
      icon: <FaLaptopCode className="text-purple-600 text-2xl" />
    },
    {
      id: 4,
      title: "Campus Wi-Fi",
      description: "High-speed wireless internet connectivity across the entire campus",
      icon: <FaWifi className="text-indigo-600 text-2xl" />
    },
    {
      id: 5,
      title: "Transportation",
      description: "College bus service connecting major routes in the city",
      icon: <FaBus className="text-yellow-600 text-2xl" />
    },
    {
      id: 6,
      title: "Cafeteria",
      description: "Hygienic food court serving nutritious meals and snacks",
      icon: <FaUtensils className="text-red-600 text-2xl" />
    },
    {
      id: 7,
      title: "Medical Center",
      description: "On-campus medical facility with qualified staff for emergencies",
      icon: <FaFirstAid className="text-pink-600 text-2xl" />
    },
    {
      id: 8,
      title: "Sports Complex",
      description: "Gymnasium, playground, and facilities for various indoor/outdoor sports",
      icon: <FaRunning className="text-orange-600 text-2xl" />
    }
  ]

  const labImages = [
    {
      id: 1,
      image: "https://anjumanengg.edu.in/UserData/uploads/pages/1086/lab1.png",
      caption: "Computer Science Laboratory"
    },
    {
      id: 2,
      image: "https://anjumanengg.edu.in/UserData/uploads/pages/1107/Microprocessor%20and%20Microcontroller%20Lab.JPG", 
      caption: "Electronics & Communication Lab"
    },
    {
      id: 3,
      image: "https://anjumanengg.edu.in/UserData/uploads/pages/1119/l7.jpg",
      caption: "Mechanical Engineering Lab"
    },
    {
      id: 4,
      image: "https://anjumanengg.edu.in/UserData/uploads/pages/1076/ce1.jpg",
      caption: "Civil Engineering Lab"
    },
    {
      id: 5,
      image: "https://anjumanengg.edu.in/UserData/uploads/pages/1350/P1.jpg",
      caption: "Physics Laboratory"
    },
    {
      id: 6,
      image: "https://anjumanengg.edu.in/UserData/uploads/pages/1350/C1.jpg",
      caption: "Chemistry Laboratory"
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="facilities-container">
      {/* Hero Section */}
      <section className="facilities-hero">
        <div className="facilities-hero-overlay"></div>
        <img 
          src="/facilities-hero.jpg" 
          alt="College Facilities" 
          className="facilities-hero-image"
        />
        <div className="facilities-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="facilities-hero-title">Our Facilities</h1>
            <p className="facilities-hero-subtitle">
              World-class infrastructure to support learning, research and overall development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Overview Section */}
      <section className="facilities-section section-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Campus Facilities
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Our 15-acre campus is equipped with modern infrastructure to provide students with the best learning environment
            </motion.p>
          </motion.div>

          <div className="facilities-grid">
            {facilities.map((facility) => (
              <motion.div
                key={facility.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="facility-card"
              >
                <div className="facility-icon">
                  {facility.icon}
                </div>
                <h3 className="facility-title">{facility.title}</h3>
                <p className="facility-description">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="facilities-section section-gray">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Central Library
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="library-section">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/library.jpg" 
                alt="College Library" 
                className="library-image"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="library-content-title">Knowledge Resource Center</h3>
              <p className="library-content-description">
                Our central library spans over 10,000 sq.ft with a seating capacity of 300 students. 
                It houses a rich collection of over 50,000 volumes of books, 200+ print journals, 
                and provides access to numerous e-resources including IEEE, Springer, and ScienceDirect.
              </p>

              <div className="stats-grid">
                <div className="stat-card">
                  <h4 className="stat-value">50,000+</h4>
                  <p className="stat-label">Books</p>
                </div>
                <div className="stat-card">
                  <h4 className="stat-value">200+</h4>
                  <p className="stat-label">Journals</p>
                </div>
                <div className="stat-card">
                  <h4 className="stat-value">10,000+</h4>
                  <p className="stat-label">E-books</p>
                </div>
                <div className="stat-card">
                  <h4 className="stat-value">24/7</h4>
                  <p className="stat-label">Digital Access</p>
                </div>
              </div>

              <a href="/library" className="explore-button">
                Explore Library
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Laboratories Section */}
      <section className="facilities-section section-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Laboratories
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Well-equipped labs with modern equipment to facilitate hands-on learning and research
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lab-swiper-container"
          >
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="lab-swiper"
            >
              {labImages.map((lab) => (
                <SwiperSlide key={lab.id}>
                  <div className="lab-slide">
                    <img 
                      src={lab.image} 
                      alt={lab.caption} 
                      className="lab-slide-image"
                    />
                    <div className="lab-slide-caption">
                      <h3 className="lab-slide-title">{lab.caption}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <div className="lab-details-grid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="lab-details-title">Departmental Labs</h3>
              <p className="lab-details-description">
                Each department has specialized laboratories catering to their specific needs:
              </p>
              <ul className="lab-features-list">
                <li className="lab-feature-item">
                  <svg className="lab-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="lab-feature-text">CSE: AI Lab, Data Science Lab, Networking Lab</span>
                </li>
                <li className="lab-feature-item">
                  <svg className="lab-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="lab-feature-text">ECE: VLSI Lab, Communication Lab, Signal Processing Lab</span>
                </li>
                <li className="lab-feature-item">
                  <svg className="lab-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="lab-feature-text">Mechanical: CAD Lab, Manufacturing Lab, Thermal Lab</span>
                </li>
                <li className="lab-feature-item">
                  <svg className="lab-feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="lab-feature-text">Civil: Concrete Lab, Surveying Lab, Environmental Lab</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Auditorium & Other Facilities */}
      <section className="facilities-section section-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Other Facilities
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="other-facilities-grid">
            <motion.div
              variants={itemVariants}
              className="other-facility-card"
            >
              <h3 className="other-facility-title">Auditorium</h3>
              <p className="other-facility-description">
                500-seat air-conditioned auditorium with modern audio-visual equipment for seminars, 
                conferences and cultural events.
              </p>
              <div className="other-facility-meta">
                <svg className="other-facility-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Booking through Admin Office</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="other-facility-card"
            >
              <h3 className="other-facility-title">Canteen</h3>
              <p className="other-facility-description">
                Spacious canteen serving hygienic and nutritious food with variety of options 
                for breakfast, lunch and snacks.
              </p>
              <div className="other-facility-meta">
                <svg className="other-facility-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
                </svg>
                <span>Open 7:00 AM - 7:00 PM</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="other-facility-card"
            >
              <h3 className="other-facility-title">Medical Center</h3>
              <p className="other-facility-description">
                On-campus medical facility with qualified medical officer and first aid 
                facility available during college hours.
              </p>
              <div className="other-facility-meta">
                <svg className="other-facility-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Emergency Care Available</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Facilities
