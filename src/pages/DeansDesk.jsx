import { motion } from 'framer-motion'
import '../styles/components/about.css'

const DeansDesk = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="about-hero-title">Dean's Desk</h1>
            <p className="about-hero-subtitle">
              Academic Leadership and Excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="principal-message-content">
        <div className="container">
          <div className="message-layout">
            <motion.div 
              className="principal-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="principal-image">
                <img 
                  src="https://anjumanengg.edu.in/UserData/uploads/pages/1013/dean-anjuman.jpg" 
                  alt="Dean Academics" 
                />
              </div>
              <div className="principal-details">
                <h3>Dr. M.S. Khatib</h3>
                <p className="designation">Dean - Academic Affairs</p>
                <p className="qualification"></p>
                <div className="contact-info">
                  <p>Email: dean@anjumanengg.edu.in</p>
                  <p>Phone: +91-712-2582749</p>
                  <p>Office Hours: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="message-content"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="message-text">
                <p className="opening-quote">
                  "Education is the foundation upon which we build our future."
                </p>
                
                <p>
                  Dear Students, Faculty, and Academic Community,
                </p>

                <p>
                  The major challenge for today's engineering educational institutions is to accommodate 
                  the ever varying aspirations of the younger generation because of increasingly changing 
                  demand and development in industries.[2] We constantly put efforts to accommodate these aspirations 
                  by fine tuning the academics of college with innovative and practical oriented teaching - 
                  learning practices along with other developmental activities.
                </p>

                <p>
                  Our goal is to impart value education and human values. It is what motivates the work 
                  of everyone at the Anjuman College of Engineering and Technology — from faculty and staff, 
                  to students and alumni.[2] It inspires our teaching and research. It is this goal which fuels 
                  the faculty to excel.
                </p>

                <p>
                  We focus on our students by providing them with a world-class outcome based education 
                  and hands-on experience through teaching-learning process, research, training and 
                  student forum activities etc.[2] The success of our undergraduate, postgraduate & research 
                  programs is supervised by our eminent faculty, who continue to set the standard for excellence.
                </p>

                <p>
                  To keep abreast with the latest knowledge, we encourage the faculty members to organize 
                  or to participate in faculty development programs, conferences, workshops etc.[2] There is 
                  continuous check on the implementation of planned academic activities because we believe 
                  that with designed measures and timely execution, we will be able to come out with desired 
                  results in grooming our future generation for employment and for higher studies in India and abroad.
                </p>

                <p>
                  A research culture has taken shape in the institute through enhanced R & D activities.[2] 
                  We believe in continuous development and strive to carry on the best efforts and endeavors 
                  towards the benefit of the students.
                </p>

                <p>
                  Our University results and placement speaks about our excellence with many of our students 
                  bringing laurel to the college by getting highest ranking in university exams and huge 
                  number of students are placed in national & multinational companies, moreover our students' 
                  creativity and determination is evident by this continuous success in various fields.[2]
                </p>

                <div className="signature">
                  <p><strong>Dr. M.S. Khatib</strong></p>
                  <p>Dean - Academic Affairs</p>
                  <p>Anjuman College of Engineering & Technology</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="achievements-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2>Academic Initiatives & Focus Areas</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <h4>Outcome-Based Education</h4>
                <p>Implementation of OBE framework across all academic programs</p>
              </div>
              <div className="achievement-item">
                <h4>Faculty Development</h4>
                <p>Regular FDPs, workshops, and conferences for continuous learning</p>
              </div>
              <div className="achievement-item">
                <h4>Research Culture</h4>
                <p>Enhanced R&D activities and research-oriented learning environment</p>
              </div>
              <div className="achievement-item">
                <h4>Industry Integration</h4>
                <p>Practical-oriented teaching with industry collaboration</p>
              </div>
              <div className="achievement-item">
                <h4>Student Excellence</h4>
                <p>Continuous monitoring and support for academic achievements</p>
              </div>
              <div className="achievement-item">
                <h4>Quality Assurance</h4>
                <p>Systematic implementation and monitoring of academic activities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DeansDesk
