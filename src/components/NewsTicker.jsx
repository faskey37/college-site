import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaBullhorn } from 'react-icons/fa'
import '../styles/components/newsticker.css'

const NewsTicker = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const announcements = [
    "Last date for submission of exam forms is 15th November 2023",
    "College will remain closed on 12th November for Diwali holiday",
    "Workshop on Artificial Intelligence scheduled on 20th November",
    "Sports meet 2023-24 registration now open",
    "New batch of M.Tech (CSE) starting from January 2024"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prevIndex) => 
          prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
        )
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, announcements.length])

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  return (
    <div className="news-ticker">
      <div className="news-ticker-container">
        <div className="news-ticker-content">
          <div className="news-ticker-icon">
            <FaBullhorn />
          </div>
          
          <div className="news-ticker-messages">
            <motion.div
              key={activeIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="news-ticker-message"
              onHoverStart={() => setIsPaused(true)}
              onHoverEnd={() => setIsPaused(false)}
            >
              <p className="news-ticker-text">
                {announcements[activeIndex]}
              </p>
            </motion.div>
          </div>
          
          <div className="news-ticker-link">
            <a href="/announcements" className="view-all-link">
              View All
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsTicker
