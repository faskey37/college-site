import { motion } from 'framer-motion'
import DownloadCard from '../components/DownloadCard'
import { FaFilePdf, FaFileWord, FaFileExcel, FaFileAlt, FaSearch } from 'react-icons/fa'
import '../styles/components/downloadcard.css'

const Downloads = () => {
  const downloads = [
    {
      id: 1,
      title: "Academic Calendar 2023-24",
      description: "Detailed academic schedule for odd and even semesters",
      type: "pdf",
      size: "2.5 MB",
      date: "15 Jun 2023",
      url: "/downloads/academic-calendar-2023-24.pdf"
    },
    {
      id: 2,
      title: "Exam Form (Semester)",
      description: "Application form for semester examinations",
      type: "docx",
      size: "1.2 MB",
      date: "01 Oct 2023",
      url: "/downloads/semester-exam-form.docx"
    },
    {
      id: 3,
      title: "Scholarship Application Form",
      description: "Application form for various scholarship schemes",
      type: "pdf",
      size: "1.8 MB",
      date: "20 Aug 2023",
      url: "/downloads/scholarship-form.pdf"
    },
    {
      id: 4,
      title: "Placement Brochure 2023",
      description: "College placement brochure for recruiters",
      type: "pdf",
      size: "5.4 MB",
      date: "01 Jul 2023",
      url: "/downloads/placement-brochure-2023.pdf"
    },
    {
      id: 5,
      title: "Hostel Application Form",
      description: "Application form for hostel accommodation",
      type: "docx",
      size: "1.1 MB",
      date: "15 May 2023",
      url: "/downloads/hostel-application-form.docx"
    },
    {
      id: 6,
      title: "Library Book List",
      description: "Complete list of books available in the library",
      type: "xlsx",
      size: "3.2 MB",
      date: "10 Sep 2023",
      url: "/downloads/library-book-list.xlsx"
    },
    {
      id: 7,
      title: "Research Guidelines",
      description: "Guidelines for research scholars and faculty",
      type: "pdf",
      size: "2.7 MB",
      date: "05 Aug 2023",
      url: "/downloads/research-guidelines.pdf"
    },
    {
      id: 8,
      title: "Student Handbook",
      description: "Comprehensive guide for students about college policies",
      type: "pdf",
      size: "4.5 MB",
      date: "01 Jun 2023",
      url: "/downloads/student-handbook.pdf"
    }
  ]

  const categories = [
    { name: "All Categories", count: 28 },
    { name: "Academic", count: 12 },
    { name: "Examination", count: 8 },
    { name: "Administrative", count: 5 },
    { name: "Placement", count: 3 }
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
    <div className="downloads-page">
      
      {/* Hero Section */}
      <section className="downloads-hero">
        <div className="downloads-hero-overlay"></div>
        <img 
          src="/downloads-hero.jpg" 
          alt="Download Documents" 
          className="downloads-hero-image"
        />
        <div className="downloads-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="downloads-hero-title">Downloads</h1>
            <p className="downloads-hero-subtitle">
              Access important forms, documents and resources
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="downloads-main-section">
        <div className="container">
          
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Documents & Resources
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Download important forms, brochures, guidelines and other documents
            </motion.p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="search-filter-container"
          >
            <div className="search-bar-wrapper">
              <div className="search-icon">
                <FaSearch />
              </div>
              <input
                type="text"
                className="search-input"
                placeholder="Search documents..."
              />
            </div>
            
            <div className="filter-controls">
              <div className="category-select-wrapper">
                <select className="category-select">
                  {categories.map(category => (
                    <option key={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              <button className="filter-btn">Filter</button>
            </div>
          </motion.div>

          {/* File Type Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="file-type-filters"
          >
            <button className="file-type-btn pdf active">
              <FaFilePdf /> PDF
            </button>
            <button className="file-type-btn word">
              <FaFileWord /> Word
            </button>
            <button className="file-type-btn excel">
              <FaFileExcel /> Excel
            </button>
            <button className="file-type-btn others">
              <FaFileAlt /> Others
            </button>
          </motion.div>

          {/* Downloads Grid */}
          <div className="downloads-grid">
            {downloads.map((file, index) => (
              <motion.div
                key={file.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="download-card-wrapper"
              >
                <DownloadCard file={file} />
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pagination-wrapper"
          >
            <nav className="pagination">
              <a href="#" className="pagination-link pagination-prev">Previous</a>
              <a href="#" className="pagination-link pagination-active">1</a>
              <a href="#" className="pagination-link">2</a>
              <a href="#" className="pagination-link">3</a>
              <a href="#" className="pagination-link pagination-next">Next</a>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Request Documents Section */}
      <section className="request-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="section-header"
          >
            <motion.h2 variants={itemVariants} className="section-title">
              Can't Find What You Need?
            </motion.h2>
            <motion.div variants={itemVariants} className="section-divider"></motion.div>
            <motion.p variants={itemVariants} className="section-description">
              Request documents that are not available in our downloads section
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="request-form-wrapper"
          >
            <form className="request-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input type="text" id="name" className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input type="email" id="email" className="form-input" required />
                </div>
                <div className="form-group form-group-full">
                  <label htmlFor="document" className="form-label">Document Name *</label>
                  <input 
                    type="text" 
                    id="document" 
                    className="form-input" 
                    placeholder="e.g. Scholarship Application Form 2023" 
                    required 
                  />
                </div>
                <div className="form-group form-group-full">
                  <label htmlFor="details" className="form-label">Additional Details</label>
                  <textarea 
                    id="details" 
                    className="form-textarea" 
                    rows="4" 
                    placeholder="Provide any additional information about the document you're requesting"
                  ></textarea>
                </div>
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-btn">Submit Request</button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Downloads
