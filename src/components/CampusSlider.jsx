import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/components/campusslider.css'

const CampusSlider = () => {
  const slides = [
    {
      id: 1,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/22/Image.jpg',
      title: 'College Campus',
      description: 'Beautiful campus view with modern infrastructure'
    },
    {
      id: 2,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/21/Image.jpeg',
      title: 'Central Library',
      description: 'State-of-the-art library with extensive collection'
    },
    {
      id: 3,
      image: 'https://anjumanengg.edu.in/UserData/uploads/gallery/3/lab1.jpg',
      title: 'Computer Lab',
      description: 'Modern computer laboratory with latest equipment'
    },
    {
      id: 4,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/20/Image.jpg',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrations'
    },
    {
      id: 5,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/19/Image.jpeg',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrations'
    },
    {
      id: 6,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/18/Image.jpg',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrations'
    },
    {
      id: 7,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/15/Image.jpg',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrations'
    },
    {
      id: 8,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/14/Image.jpg',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrations'
    },
    {
      id: 9,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/13/Image.jpg',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrations'
    },
    {
      id: 10,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/11/Image.jpeg',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrations'
    },
    {
      id: 11,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/26/Image.jpeg',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrations'
    },
    {
      id: 12,
      image: 'https://anjumanengg.edu.in/UserData/uploads/slider/26/Image.jpeg',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrations'
    },
    {
      id: 13,
      image: 'https://anjumanengg.edu.in/UserData/uploads/gallery/13/graduation1.jpg',
      title: 'Graduation Ceremony',
      description: 'Annual graduation ceremony celebrations'
    },
  ];

  return (
    <section className="campus-slider-section">
      <div className="container">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="campus-slider"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slider-content">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="slider-image"
                />
                <div className="slider-overlay">
                  <div className="slider-text">
                    <h3 className="slider-title">{slide.title}</h3>
                    <p className="slider-description">{slide.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CampusSlider;