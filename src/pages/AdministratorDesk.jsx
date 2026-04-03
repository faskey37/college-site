import { motion } from 'framer-motion'
import '../styles/components/about.css'

const AdministratorDesk = () => {
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
            <h1 className="about-hero-title">Administrator's Desk</h1>
            <p className="about-hero-subtitle">
              Administrative Excellence in Educational Leadership
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
                  src="https://anjumanengg.edu.in/UserData/uploads/pages/1010/ImageMain.jpg" 
                  alt="Justice(Retired) Z.A. HAQ" 
                />
              </div>
              <div className="principal-details">
                <h3>Justice(Retired) Z.A. HAQ</h3>
                <p className="designation">Administrator</p>
                <p className="qualification"></p>
                <div className="contact-info">
                  <p>Email: secretary@anjumanengg.edu.in</p>
                  <p>Phone: +91-712-2582749</p>
                  <p>Mobile: +91-98xxxx xxxx</p>
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
                  "Excellence in administration is the foundation of exceptional education."
                </p>
                
                <p>
                  Dear Students, Faculty, and Esteemed Stakeholders,
                </p>

                <p>
                  It is with great pleasure that I welcome you to Anjuman College of Engineering & Technology. 
                  As the Secretary and Administrator of this prestigious institution, I am honored to be part 
                  of an organization that has been shaping engineering minds for over two decades.
                </p>

                <p>
                  At ACET, we understand that exceptional education requires not just academic excellence but 
                  also robust administrative support. Our administrative framework is designed to create an 
                  environment where students can focus on learning while faculty can concentrate on teaching 
                  and research without administrative hurdles.
                </p>

                <p>
                  Our commitment to administrative excellence encompasses several key areas:
                </p>

                <ul>
                  <li><strong>Student Services:</strong> Streamlined admission processes, academic record management, and comprehensive student support services</li>
                  <li><strong>Faculty Support:</strong> Efficient resource allocation, research facilitation, and professional development opportunities</li>
                  <li><strong>Infrastructure Management:</strong> Maintenance of state-of-the-art facilities, laboratories, and campus infrastructure</li>
                  <li><strong>Financial Management:</strong> Transparent financial practices, efficient resource utilization, and sustainable growth strategies</li>
                  <li><strong>Quality Assurance:</strong> Continuous monitoring of academic standards and institutional processes</li>
                  <li><strong>Industry Relations:</strong> Building and maintaining partnerships with leading companies for student placements and internships</li>
                </ul>

                <p>
                  We believe in transparency, accountability, and continuous improvement in all our administrative 
                  processes. Our dedicated administrative team works tirelessly to ensure that every aspect of 
                  the college operations runs smoothly, from admissions to graduations and beyond.
                </p>

                <p>
                  The trust placed in us by students and their families is sacred, and we strive to honor that 
                  trust through our unwavering commitment to providing the best possible educational experience. 
                  We maintain an open-door policy and encourage feedback from all stakeholders to help us improve 
                  our services continuously.
                </p>

                <p>
                  As we move forward, we remain committed to embracing new technologies and innovative practices 
                  that enhance our administrative efficiency while maintaining the personal touch that makes 
                  ACET special. Our goal is to create an environment where every student can achieve their full 
                  potential and every faculty member can excel in their academic pursuits.
                </p>

                <p>
                  I invite all members of the ACET community to work together in building an even stronger 
                  institution that will continue to be a source of pride for generations to come.
                </p>

                <div className="signature">
                  <p><strong>Justice(Retired) Z.A. HAQ</strong></p>
                  <p>Administrator</p>
                  <p>Anjuman Hami-E-Islam</p>
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
            <h2>Administrative Initiatives & Achievements</h2>
            <div className="achievements-grid">
              <div className="achievement-item">
                <h4>Digital Transformation</h4>
                <p>Implemented comprehensive ERP systems for academic and administrative processes</p>
              </div>
              <div className="achievement-item">
                <h4>Infrastructure Development</h4>
                <p>Overseen expansion of campus facilities and modernization of laboratories</p>
              </div>
              <div className="achievement-item">
                <h4>Quality Certification</h4>
                <p>Achieved various quality certifications and accreditations for the institution</p>
              </div>
              <div className="achievement-item">
                <h4>Student Services Enhancement</h4>
                <p>Streamlined student services including online fee payment, result portal, and grievance system</p>
              </div>
              <div className="achievement-item">
                <h4>Financial Management</h4>
                <p>Maintained transparent financial practices and achieved sustainable growth</p>
              </div>
              <div className="achievement-item">
                <h4>Industry Partnerships</h4>
                <p>Established strong relationships with 100+ companies for placements and collaborations</p>
              </div>
            </div>
          </motion.div>

          {/* Administrative Services Section */}
          <motion.div 
            className="services-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2>Administrative Services</h2>
            <div className="services-grid">
              <div className="service-category">
                <h3>Academic Administration</h3>
                <ul>
                  <li>Admission Process Management</li>
                  <li>Academic Record Maintenance</li>
                  <li>Examination Management</li>
                  <li>Curriculum Administration</li>
                  <li>Faculty Recruitment & Development</li>
                </ul>
              </div>
              
              <div className="service-category">
                <h3>Student Services</h3>
                <ul>
                  <li>Student Registration & Enrollment</li>
                  <li>Fee Collection & Management</li>
                  <li>Scholarship Administration</li>
                  <li>Hostel & Transportation Services</li>
                  <li>Student Grievance Redressal</li>
                </ul>
              </div>
              
              <div className="service-category">
                <h3>Infrastructure & Facilities</h3>
                <ul>
                  <li>Campus Maintenance & Development</li>
                  <li>Laboratory Management</li>
                  <li>Library Services</li>
                  <li>IT Infrastructure Management</li>
                  <li>Safety & Security Systems</li>
                </ul>
              </div>
              
              <div className="service-category">
                <h3>External Relations</h3>
                <ul>
                  <li>Industry Partnership Development</li>
                  <li>Alumni Relations Management</li>
                  <li>Government Liaison</li>
                  <li>Media & Public Relations</li>
                  <li>International Collaborations</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="admin-contact-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2>Administrative Contact Information</h2>
            <div className="contact-departments">
              <div className="contact-dept">
                <h4>Admissions Office</h4>
                <p>Email: admissions@anjumanengg.edu.in</p>
                <p>Phone: +91-712-2582749 Ext: 101</p>
                <p>Timing: 9:00 AM - 5:00 PM (Mon-Sat)</p>
              </div>
              
              <div className="contact-dept">
                <h4>Academic Office</h4>
                <p>Email: academics@anjumanengg.edu.in</p>
                <p>Phone: +91-712-2582749 Ext: 102</p>
                <p>Timing: 9:00 AM - 5:00 PM (Mon-Sat)</p>
              </div>
              
              <div className="contact-dept">
                <h4>Accounts Department</h4>
                <p>Email: accounts@anjumanengg.edu.in</p>
                <p>Phone: +91-712-2582749 Ext: 103</p>
                <p>Timing: 9:00 AM - 4:00 PM (Mon-Sat)</p>
              </div>
              
              <div className="contact-dept">
                <h4>Student Affairs</h4>
                <p>Email: studentaffairs@anjumanengg.edu.in</p>
                <p>Phone: +91-712-2582749 Ext: 104</p>
                <p>Timing: 9:00 AM - 5:00 PM (Mon-Sat)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AdministratorDesk
