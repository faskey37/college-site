import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import NewsTicker from '../components/NewsTicker'
import EventCard from '../components/EventCard'
import DepartmentCard from '../components/DepartmentCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/components/home.css'

const Home = () => {
  const departments = [
    {
      id: 1,
      name: 'Computer Science & Engineering',
      slug: 'cse',
      description: 'The department offers cutting-edge programs in computer science with specializations in AI, ML and Data Science.',
      programs: ['B.Tech', 'M.Tech', 'PhD'],
      facultyCount: 25,
      icon: '/icons/cse.png',
      color: 'bg-blue-100'
    },
    {
      id: 2,
      name: 'Mechanical Engineering',
      slug: 'me',
      description: 'Focusing on design, analysis and manufacturing with state-of-the-art labs and workshops.',
      programs: ['B.Tech', 'M.Tech', 'PhD'],
      facultyCount: 20,
      icon: '/icons/me.png',
      color: 'bg-red-100'
    },
    {
      id: 3,
      name: 'Electronics & Communication',
      slug: 'ece',
      description: 'Specializing in VLSI, Embedded Systems and Communication Engineering with industry collaborations.',
      programs: ['B.Tech', 'M.Tech', 'PhD'],
      facultyCount: 18,
      icon: 'https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true',
      color: 'bg-green-100'
    },
    {
      id: 4,
      name: 'Civil Engineering',
      slug: 'ce',
      description: 'Providing comprehensive education in structural engineering, construction technology and environmental engineering.',
      programs: ['B.Tech', 'M.Tech', 'PhD'],
      facultyCount: 15,
      icon: '/icons/ce.png',
      color: 'bg-yellow-100'
    }
  ]

  const events = [
    {
      id: 1,
      title: 'Tech Fest 2023',
      description: 'Annual technical festival showcasing student projects, workshops and competitions.',
      date: '15-17 Nov 2023',
      time: '9:00 AM - 5:00 PM',
      location: 'College Campus',
      image: 'https://imgs.search.brave.com/SO5cllVCFHJcczn2Lc44v4Wf_ZsSWkyOQWjKftIkAAY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXZl/LWNzdS1ub3J0aHJp/ZGdlLnBhbnRoZW9u/c2l0ZS5pby9zaXRl/cy9kZWZhdWx0L2Zp/bGVzLzIwMjUtMDEv/VGVjaF9GZXN0X0V2/ZW50cy0yMDQ4eDEz/NjUucG5n',
      category: 'Technical',
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Alumni Meet',
      description: 'Reunion of alumni to reconnect and share their professional experiences with current students.',
      date: '25 Nov 2023',
      time: '10:00 AM - 4:00 PM',
      location: 'Auditorium',
      image: 'https://imgs.search.brave.com/3DBNAo_GdLuHZ2z_7bfmKeVf7u9WSDFEZtlgM4U5NXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFlLzRk/L2I4LzFlNGRiODlh/N2U3MDEyZDIyMjZh/YjkwMmMwMzMzMGQ3/LmpwZw',
      category: 'Networking',
      status: 'Upcoming'
    },
    {
      id: 3,
      title: 'Workshop on AI',
      description: 'Hands-on workshop covering fundamentals of Artificial Intelligence and Machine Learning.',
      date: '5 Dec 2023',
      time: '2:00 PM - 5:00 PM',
      location: 'CSE Department',
      image: 'https://imgs.search.brave.com/1yNfoH3jTnKh1oHR79xh-98-uHGdw4rrVMGovFWPls4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Z3JhZGllbnQtYWkt/dGVtcGxhdGUtZGVz/aWduXzIzLTIxNTAz/ODAwMzUuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA',
      category: 'Workshop',
      status: 'Registration Open'
    }
  ]

  const galleryImages = [
    {
      id: 1,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/25/Image.jpg',
    },
    {
      id: 2,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/21/Image.jpeg',
    },
    {
      id: 3,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/22/Image.jpg',
    },
    {
      id: 4,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/20/Image.jpg',
    },
    {
      id: 5,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/19/Image.jpeg',
    },
    {
      id: 6,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/18/Image.jpg',
    },
    {
      id: 7,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/15/Image.jpg',
    },
    {
      id: 8,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/14/Image.jpg',
    },
    {
      id: 9,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/13/Image.jpg',
    },
    {
      id: 10,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/11/Image.jpeg',
    },
    {
      id: 11,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/24/Image.jpg',
    },
    {
      id: 12,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/23/Image.jpg',
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Vibhay Kumar Bayya',
      role: 'B.Tech CSE, 2022',
      text: 'The faculty and facilities at Anjuman College provided me with the perfect environment to grow academically and personally.',
      image: 'https://anjumanengg.edu.in/UserData/uploads/alumni_details/2/student2.jpg'
    },
    {
      id: 2,
      name: 'Satyajit Biswal',
      role: 'M.Tech ME, 2021',
      text: 'The research opportunities and industry collaborations helped me secure my dream job at a leading automotive company.',
      image: 'https://anjumanengg.edu.in/UserData/uploads/alumni_details/3/student3.jpg'
    },
    {
      id: 3,
      name: 'Sadiya Zehra',
      role: 'B.Tech ECE, 2020',
      text: 'The practical approach to learning and emphasis on innovation gave me the confidence to start my own tech startup.',
      image: 'https://anjumanengg.edu.in/UserData/uploads/alumni_details/4/student4.jpg'
    },
    {
      id: 4,
      name: 'Faiz syed Naushad Ali',
      role: 'B.Tech ECE, 2020',
      text: 'The emphasis on innovation and practical learning helped me grow both personally and professionally.',
      image: 'https://anjumanengg.edu.in/UserData/uploads/alumni_details/1/Image.jpg'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1
      } 
    }
  }

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.4
      } 
    }
  }

  return (
    <div className="home-page">
      <NewsTicker />
      <Hero /> {/* Hero slider is working fine - it's a separate component */}
      
      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Welcome to Anjuman College of Engineering
            </motion.h2>
            <motion.p variants={itemVariants} className="section-description">
              Established in 2007, we are committed to providing quality technical education and fostering innovation, research and entrepreneurship among our students.
            </motion.p>
          </motion.div>

          <div className="about-grid">
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="about-card"
            >
              <div className="about-card-icon vision">👁️</div>
              <h3 className="about-card-title">Our Vision</h3>
              <p className="about-card-text">
                To be a center of excellence in technical education that produces globally competent engineers and innovators.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="about-card"
            >
              <div className="about-card-icon mission">🎯</div>
              <h3 className="about-card-title">Our Mission</h3>
              <p className="about-card-text">
                To provide quality education through innovative teaching, research and industry collaboration for societal development.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="about-card"
            >
              <div className="about-card-icon values">✨</div>
              <h3 className="about-card-title">Our Values</h3>
              <p className="about-card-text">
                Excellence, Integrity, Innovation, Inclusivity and Social Responsibility form the core of our institutional values.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Our Departments
            </motion.h2>
            <motion.p variants={itemVariants} className="section-description">
              Explore our diverse engineering departments offering cutting-edge programs and research opportunities.
            </motion.p>
          </motion.div>

          <div className="departments-grid">
            {departments.map((department) => (
              <motion.div
                key={department.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <DepartmentCard department={department} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-button"
          >
            <a href="/academics" className="primary-button">
              View All Departments
            </a>
          </motion.div>
        </div>
      </section>

      {/* Campus Gallery Slider */}
      <section className="gallery-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Campus Gallery
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="gallery-slider-container"
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="gallery-slider"
            >
              {galleryImages.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="gallery-item">
                    <img 
                      src={item.image} 
                      alt="Campus"
                      className="gallery-image"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-button"
          >
            <a href="/gallery" className="primary-button">
              View Complete Gallery
            </a>
          </motion.div>
        </div>
      </section>

      {/* Single Image Section */}
      <section className="single-image-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              SAMAVESH 2023
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="single-image-container"
          >
            <img 
              src="https://anjumanengg.edu.in/UserData/uploads/slider2/7/Image.jpg" 
              alt="SAMAVESH 2023"
              className="single-image"
              loading="lazy"
            />
            <p className="image-caption">
              ACET proudly felicitated 60 corporate leaders at our mega event SAMAVESH-2023 on 21st May 2023, celebrating strong industry-academia collaboration.
            </p>
          </motion.div>
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
            <motion.p variants={itemVariants} className="section-description">
              Stay updated with our latest events and activities
            </motion.p>
          </motion.div>

          <div className="events-grid">
            {events.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="section-button"
          >
            <a href="/events" className="secondary-button">
              View All Events
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Slider */}
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="testimonials-slider-container"
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="testimonials-slider"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-content">
                      <p className="testimonial-text">"{testimonial.text}"</p>
                    </div>
                    <div className="testimonial-footer">
                      <h4 className="testimonial-name">{testimonial.name}</h4>
                      <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Faculty</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Courses</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div className="stat-label">Recruiters</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home