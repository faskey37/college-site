import { motion } from 'framer-motion';
import { FaBook, FaSearch, FaUserGraduate, FaClock, FaLaptop, FaDatabase } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/components/library.css';

const Library = () => {
  // Library images for slider
  const libraryImages = [
    { id: 1, image: '/library/reading-area.jpg', caption: 'Reading Area' },
    { id: 2, image: '/library/book-stacks.jpg', caption: 'Book Collection' },
    { id: 3, image: '/library/digital-section.jpg', caption: 'Digital Section' },
    { id: 4, image: '/library/reference-section.jpg', caption: 'Reference Section' },
    { id: 5, image: '/library/periodicals.jpg', caption: 'Periodicals Section' }
  ];

  // Library services
  const services = [
    { icon: <FaSearch className="service-icon" />, title: 'OPAC Search', description: 'Online Public Access Catalog for easy book searching' },
    { icon: <FaBook className="service-icon" />, title: 'Book Bank', description: 'Special collection for economically weaker students' },
    { icon: <FaLaptop className="service-icon" />, title: 'E-Resources', description: 'Access to IEEE, Springer, ScienceDirect and more' },
    { icon: <FaUserGraduate className="service-icon" />, title: 'Reference Service', description: 'Assistance from qualified librarians' },
    { icon: <FaDatabase className="service-icon" />, title: 'Digital Library', description: 'Access to thousands of e-books and journals' },
    { icon: <FaClock className="service-icon" />, title: 'Extended Hours', description: 'Open till late during examination periods' }
  ];

  // Library timings
  const timings = [
    { day: 'Monday - Friday', time: '8:30 AM - 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 4:00 PM (During Exams)' }
  ];

  // Library statistics
  const stats = [
    { value: '50,000+', label: 'Books' },
    { value: '200+', label: 'Print Journals' },
    { value: '10,000+', label: 'E-Books' },
    { value: '50+', label: 'E-Journals' },
    { value: '300', label: 'Seating Capacity' },
    { value: '10,000', label: 'Sq.Ft Area' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="library-container">
      {/* Hero Section */}
      <section className="library-hero">
        <div className="library-hero-overlay"></div>
        <img 
          src="/library/hero.jpg" 
          alt="Anjuman College Library" 
          className="library-hero-image"
        />
        <div className="library-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="library-hero-title">Central Library</h1>
            <p className="library-hero-subtitle">
              Knowledge Resource Center with modern facilities and vast collection
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Library Section */}
     {/* About Library Section */}
<section className="library-about-section">
  <div className="container">
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      className="section-header"
    >
      <motion.h2 variants={itemVariants} className="section-title">
        About The Library
      </motion.h2>
      <motion.div variants={itemVariants} className="section-divider"></motion.div>
    </motion.div>

    <div className="library-about-grid">
      {/* Image Slider */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="library-slider-container"
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
          className="library-swiper"
        >
          {libraryImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="library-slide">
                <img 
                  src={image.image} 
                  alt={image.caption} 
                  className="library-slide-image"
                />
                <div className="library-slide-caption">
                  <h3>{image.caption}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Description Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="library-description-container"
      >
        <h3 className="library-description-title">Knowledge Hub of ACE</h3>
        <p className="library-description-text">
          The Central Library at Anjuman College of Engineering is spread over 10,000 sq.ft with a seating capacity of 300 students. 
          It serves as the academic backbone of the institution, supporting teaching, learning and research activities.
        </p>
        <p className="library-description-text">
          Our library follows an open access system and has adopted modern technologies like RFID for efficient management. 
          The collection includes textbooks, reference books, technical reports, standards, and competitive exam materials.
        </p>
        <div className="library-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h4 className="stat-value">{stat.value}</h4>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section className="library-services-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Library Services
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="service-card"
              >
                <div className="service-icon-container">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="library-resources-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Digital Resources
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="resources-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="resources-description"
            >
              <h3 className="resources-title">E-Resources Portal</h3>
              <p className="resources-text">
                The library provides access to numerous digital resources including:
              </p>
              <ul className="resources-list">
                <li>IEEE Xplore Digital Library</li>
                <li>SpringerLink Journals</li>
                <li>ScienceDirect (Elsevier)</li>
                <li>McGraw-Hill Access Engineering</li>
                <li>ASCE Journals</li>
                <li>DELNET Membership</li>
              </ul>
              <p className="resources-text">
                Students can access these resources through the college intranet or via remote login.
              </p>
              <a href="/library/e-resources" className="resources-button">
                Access E-Resources
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="resources-image-container"
            >
              <img 
                src="https://imgs.search.brave.com/5QjCN0pJlISlePdIFS2z073k9s6JiAmUKbWu9lswTc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzkzLzcxLzE3/LzM2MF9GXzEyOTM3/MTE3NjBfUU96dVN1/WkZKc1hHSkN6UjRK/eDlKMFFUejZ4UGc2/Y3cuanBn" 
                alt="Digital Resources" 
                className="resources-image"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timings & Rules Section */}
      <section className="library-info-section">
        <div className="container">
          <div className="info-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="timings-card"
            >
              <h3 className="info-title">Library Timings</h3>
              <ul className="timings-list">
                {timings.map((time, index) => (
                  <li key={index} className="timing-item">
                    <span className="timing-day">{time.day}</span>
                    <span className="timing-time">{time.time}</span>
                  </li>
                ))}
              </ul>
              <div className="timings-note">
                <p>* Timings may vary during holidays and vacations</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rules-card"
            >
              <h3 className="info-title">Library Rules</h3>
              <ul className="rules-list">
                <li>Students must carry their ID cards to enter the library</li>
                <li>Silence must be maintained in the library premises</li>
                <li>Books are issued for 14 days with possible renewal</li>
                <li>Reference books and periodicals are not for loan</li>
                <li>Eating and drinking is strictly prohibited</li>
                <li>Mobile phones must be kept on silent mode</li>
              </ul>
              <a href="/library/rules" className="rules-link">
                View Complete Rules →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="library-contact-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Contact Library
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
          </motion.div>

          <div className="contact-content">
            <motion.div
              variants={itemVariants}
              className="contact-card"
            >
              <h3 className="contact-title">Library Staff</h3>
              <div className="contact-details">
                <p><strong>Librarian:</strong> Dr. Mohammed Ali Khan</p>
                <p><strong>Email:</strong> library@anjumanengg.edu.in</p>
                <p><strong>Phone:</strong> +91 712 1234567 (Ext. 123)</p>
                <p><strong>Location:</strong> Ground Floor, Main Academic Block</p>
              </div>
              <a href="/contact/library" className="contact-button">
                Send Inquiry
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;