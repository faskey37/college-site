// components/Hero.jsx
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/components/hero.css'

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: 'Excellence in Engineering Education',
      subtitle: 'Shaping future engineers and innovators since 1999',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2086&q=80',
      cta: 'Explore Programs',
      link: '/academics'
    },
    {
      id: 2,
      title: 'Admissions Open 2025-26',
      subtitle: 'B.Tech, M.Tech & Ph.D Programs',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      cta: 'Apply Now',
      link: '/admissions'
    },
    {
      id: 3,
      title: 'State-of-the-Art Infrastructure',
      subtitle: 'Modern labs, library & sports complex',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80',
      cta: 'View Facilities',
      link: '/facilities'
    },
    {
      id: 4,
      title: '90% Placement Record',
      subtitle: 'Infosys, Wipro, TCS, Capgemini & more',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      cta: 'View Placements',
      link: '/placements'
    }
  ]

  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              <div className="hero-image-wrapper">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="hero-image"
                />
                <div className="hero-overlay"></div>
              </div>

              <div className="hero-content">
                <div className="hero-container">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-text"
                  >
                    <h1 className="hero-title">{slide.title}</h1>
                    <p className="hero-subtitle">{slide.subtitle}</p>
                    <Link to={slide.link} className="hero-button">
                      {slide.cta} <FaArrowRight />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Hero