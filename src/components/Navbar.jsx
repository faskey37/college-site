// Complete Navbar.jsx with working auth modal
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotificationsDropdown from './NotificationsDropdown';
import { useNotifications } from '../context/NotificationContext';
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUniversity,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaUsers,
  FaBuilding,
  FaCogs,
  FaBookOpen,
  FaClipboardList,
  FaDownload,
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaTrophy,
  FaRegCalendarAlt,
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaUserEdit,
  FaCog,
  FaHeart,
  FaBell,
  FaSignOutAlt,
  FaGoogle,
  FaEnvelope as FaEmailIcon,
  FaEye,
  FaEyeSlash,
  FaIdCard,
  FaCodeBranch,
} from "react-icons/fa";
import {
  MdComputer,
  MdSchool,
  MdLibraryBooks,
  MdPeople,
  MdContactMail,
  MdAccountBalance,
  MdInfo,
  MdEngineering,
  MdScience,
  MdMenuBook,
  MdAssessment,
} from "react-icons/md";
import { IoMdNotifications, IoMdPaper } from "react-icons/io";
import { GiGraduateCap } from "react-icons/gi";
import { AiOutlineTeam } from "react-icons/ai";
import { BiBuilding, BiNews } from "react-icons/bi";
import { 
  auth, 
  signInWithGoogle, 
  signInWithEmail, 
  signUpWithEmail, 
  logoutUser, 
  resetPassword, 
  createUserProfile,
  createNotification 
} from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import "../styles/components/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { unreadCount } = useNotifications();
  
  // New signup fields
  const [phoneNumber, setPhoneNumber] = useState('');
  const [branch, setBranch] = useState('');
  const [section, setSection] = useState('');
  const [year, setYear] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const dropdownTimeout = useRef(null);
  const userDropdownRef = useRef(null);
  const authModalRef = useRef(null);
  const notificationButtonRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setShowAuthModal(false);
        resetAuthForm();
      }
    });
    return () => unsubscribe();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdown(null);
    setSearchOpen(false);
    setUserDropdownOpen(false);
    setShowNotifications(false);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
      if (authModalRef.current && !authModalRef.current.contains(event.target) && showAuthModal) {
        setShowAuthModal(false);
        resetAuthForm();
      }
      if (notificationButtonRef.current && !notificationButtonRef.current.contains(event.target) && 
          showNotifications && !event.target.closest('.notifications-dropdown')) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAuthModal, showNotifications]);

  useEffect(() => {
    return () => {
      if (dropdownTimeout.current) {
        clearTimeout(dropdownTimeout.current);
      }
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => {
    setIsOpen(false);
    setDropdown(null);
    setSearchOpen(false);
    setUserDropdownOpen(false);
    setShowNotifications(false);
  };

  const handleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setDropdown(index);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdown(null);
    }, 200);
  };

  const resetAuthForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setDisplayName('');
    setPhoneNumber('');
    setBranch('');
    setSection('');
    setYear('');
    setRollNumber('');
    setAuthError('');
    setAuthLoading(false);
    setShowPassword(false);
  };

  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    setAuthError('');
    const { user, error } = await signInWithGoogle();
    if (error) {
      setAuthError(error);
    } else if (user) {
      setShowAuthModal(false);
      resetAuthForm();
    }
    setAuthLoading(false);
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    
    const { user, error } = await signInWithEmail(email, password);
    if (error) {
      setAuthError(error);
    } else if (user) {
      setShowAuthModal(false);
      resetAuthForm();
    }
    setAuthLoading(false);
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    
    if (password !== confirmPassword) {
      setAuthError('Passwords do not match');
      setAuthLoading(false);
      return;
    }
    
    if (password.length < 6) {
      setAuthError('Password must be at least 6 characters');
      setAuthLoading(false);
      return;
    }
    
    const studentData = {
      displayName: displayName,
      phone: phoneNumber,
      rollNumber: rollNumber,
      studentId: rollNumber,
      department: branch,
      year: year,
      section: section,
      semester: year === '1st Year' ? '1st Semester' : 
                year === '2nd Year' ? '3rd Semester' :
                year === '3rd Year' ? '5th Semester' : '7th Semester',
      enrollmentYear: new Date().getFullYear().toString(),
      expectedGraduation: (new Date().getFullYear() + 4).toString(),
      location: 'Nagpur, Maharashtra',
      bio: `Student at Anjuman College of Engineering, ${branch}`,
      isProfileComplete: true
    };
    
    const { user, error } = await signUpWithEmail(email, password, displayName, studentData);
    
    if (error) {
      setAuthError(error);
    } else if (user) {
      try {
        await createNotification({
          userId: user.uid,
          type: 'announcement',
          title: 'Welcome to Anjuman College! 🎓',
          message: `Welcome ${displayName}! Complete your profile to get started with your academic journey.`,
          data: { type: 'welcome' }
        });
      } catch (notifError) {
        console.error('Error creating welcome notification:', notifError);
      }
      
      setShowAuthModal(false);
      resetAuthForm();
      alert('Account created successfully! Welcome to Anjuman College of Engineering!');
      window.location.href = '/profile';
    }
    setAuthLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    
    const { success, error } = await resetPassword(email);
    if (error) {
      setAuthError(error);
    } else if (success) {
      setAuthMode('signin');
      setAuthError('Password reset email sent! Check your inbox.');
    }
    setAuthLoading(false);
  };

  const handleLogout = async () => {
    setUserDropdownOpen(false);
    setShowNotifications(false);
    await logoutUser();
    navigate('/');
  };

  const groupedNavLinks = [
    {
      name: "Institute",
      path: "/institute",
      icon: <FaUniversity />,
      description: "About, IQAC, Contact & Facilities",
      subLinks: [
        { name: "About ACET", path: "/about/acet", icon: <MdInfo />, description: "History, vision & mission" },
        { name: "About Trust", path: "/about/trust", icon: <BiBuilding />, description: "Our governing trust" },
        { name: "Vision & Mission", path: "/about/vision-mission", icon: <MdInfo />, description: "Our core purpose" },
        { name: "Core Values", path: "/about/core-values", icon: <FaCogs />, description: "Principles that guide us" },
        { name: "Principal Message", path: "/about/principal-message", icon: <FaGraduationCap />, description: "From the Principal's desk" },
        { name: "Management", path: "/about/management", icon: <MdPeople />, description: "Our leadership team" },
        { name: "IQAC", path: "/iqac", icon: <MdAccountBalance />, description: "Quality assurance cell" },
        { name: "Facilities", path: "/facilities", icon: <BiBuilding />, description: "Campus amenities" },
        { name: "Contact", path: "/contact", icon: <MdContactMail />, description: "Get in touch with us" },
      ],
    },
    {
      name: "Academics",
      path: "/academics",
      icon: <MdSchool />,
      description: "Departments, Research & Resources",
      subLinks: [
        { name: "Computer Science & Engineering", path: "/department/computer-science", icon: <MdComputer />, description: "CSE Department" },
        { name: "Mechanical Engineering", path: "/department/mechanical", icon: <MdEngineering />, description: "Mechanical Department" },
        { name: "Electronics & Telecommunication", path: "/department/electronics-telecommunication", icon: <MdScience />, description: "ENTC Department" },
        { name: "Civil Engineering", path: "/department/civil", icon: <BiBuilding />, description: "Civil Department" },
        { name: "Electrical Engineering", path: "/department/electrical", icon: <FaCogs />, description: "Electrical Department" },
        { name: "AI & Data Science", path: "/department/ai-data-science", icon: <MdComputer />, description: "AI & DS Department" },
        { name: "Research", path: "/research", icon: <MdScience />, description: "Research & publications" },
        { name: "Resources", path: "/resources", icon: <MdLibraryBooks />, description: "Study materials & downloads" },
        { name: "Exam Cell", path: "/examcell", icon: <IoMdNotifications />, description: "Examination information" },
      ],
    },
    {
      name: "Admissions",
      path: "/admissions",
      icon: <GiGraduateCap />,
      description: "Eligibility, Fees & Apply Now",
      subLinks: [
        { name: "B.Tech Admissions", path: "/admissions/btech", icon: <GiGraduateCap />, description: "Undergraduate programs" },
        { name: "M.Tech Admissions", path: "/admissions/mtech", icon: <FaGraduationCap />, description: "Postgraduate programs" },
        { name: "Ph.D Admissions", path: "/admissions/phd", icon: <MdScience />, description: "Doctoral programs" },
        { name: "Eligibility Criteria", path: "/admissions/eligibility", icon: <FaClipboardList />, description: "Check your eligibility" },
        { name: "Fee Structure", path: "/admissions/fee-structure", icon: <FaBuilding />, description: "Course fees & charges" },
        { name: "Scholarships", path: "/admissions/scholarships", icon: <FaGraduationCap />, description: "Financial assistance" },
        { name: "Admission Forms", path: "/admissions/forms", icon: <IoMdPaper />, description: "Download application forms" },
        { name: "Required Documents", path: "/admissions/documents", icon: <FaDownload />, description: "Documents checklist" },
      ],
    },
    {
      name: "Student Life",
      path: "/student-life",
      icon: <FaUsers />,
      description: "Placements, Activities & More",
      subLinks: [
        { name: "Training & Placements", path: "/placements", icon: <FaBuilding />, description: "Career opportunities" },
        { name: "Placement Statistics", path: "/placements/statistics", icon: <MdAssessment />, description: "Placement records" },
        { name: "Our Recruiters", path: "/placements/recruiters", icon: <FaBuilding />, description: "Companies visiting campus" },
        { name: "Student Activities", path: "/students/activities", icon: <FaUsers />, description: "Clubs & events" },
        { name: "Student Clubs", path: "/students/clubs", icon: <AiOutlineTeam />, description: "Join student communities" },
        { name: "Events", path: "/students/events", icon: <FaRegCalendarAlt />, description: "Upcoming events" },
        { name: "Alumni", path: "/students/alumni", icon: <FaGraduationCap />, description: "Alumni network" },
        { name: "Student Achievements", path: "/students/achievements", icon: <FaTrophy />, description: "Our students' successes" },
        { name: "Faculty", path: "/faculty", icon: <AiOutlineTeam />, description: "Meet our faculty" },
      ],
    },
  ];

  const userMenuItems = [
    { name: "My Profile", path: "/profile", icon: <FaUserEdit /> },
    { name: "Results", path: "/results", icon: <MdAssessment /> },
    { name: "Fee Status", path: "/fee-status", icon: <FaBuilding /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  const branches = [
    "Computer Science & Engineering",
    "Mechanical Engineering",
    "Electronics & Telecommunication",
    "Civil Engineering",
    "Electrical Engineering",
    "AI & Data Science",
    "Information Technology"
  ];

  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const sections = ["A", "B", "C", "D"];

  return (
    <>
      <header ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className="navbar-top-row">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
              <img
                src="https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true"
                alt="Anjuman College of Engineering and Technology"
              />
              <div className="navbar-logo-text">
                <h1>Anjuman College of Engineering</h1>
                <p>Affiliated to RTMNU, Nagpur</p>
              </div>
            </Link>

            <div className="navbar-actions">
              <button 
                ref={notificationButtonRef}
                className="notification-button" 
                aria-label="Notifications"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <FaBell />
                {unreadCount > 0 && (
                  <span className="notification-badge">{unreadCount}</span>
                )}
              </button>

              {showNotifications && (
                <NotificationsDropdown 
                  isOpen={showNotifications} 
                  onClose={() => setShowNotifications(false)} 
                />
              )}

              <button 
                className={`search-button ${searchOpen ? "active" : ""}`}
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <FaSearch />
                <span className="search-shortcut">⌘K</span>
              </button>

              {user ? (
                <div className="user-dropdown" ref={userDropdownRef}>
                  <button 
                    className={`user-avatar-button ${userDropdownOpen ? "active" : ""}`}
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    aria-label="User menu"
                  >
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName || "User"} className="user-avatar" />
                    ) : (
                      <div className="user-avatar-placeholder">
                        {user.displayName ? user.displayName.charAt(0).toUpperCase() : <FaUserCircle />}
                      </div>
                    )}
                    <span className="user-name">{user.displayName?.split(' ')[0] || "User"}</span>
                    <FaChevronDown className={`dropdown-arrow ${userDropdownOpen ? "rotate" : ""}`} />
                  </button>

                  {userDropdownOpen && (
                    <div className="user-dropdown-menu">
                      <div className="user-dropdown-header">
                        {user.photoURL ? (
                          <img src={user.photoURL} alt={user.displayName} className="user-dropdown-avatar" />
                        ) : (
                          <div className="user-dropdown-avatar-placeholder">
                            {user.displayName ? user.displayName.charAt(0).toUpperCase() : <FaUserCircle />}
                          </div>
                        )}
                        <div className="user-dropdown-info">
                          <strong>{user.displayName || "User"}</strong>
                          <span>{user.email}</span>
                        </div>
                      </div>
                      
                      <div className="user-dropdown-divider"></div>
                      
                      {userMenuItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="user-dropdown-item"
                          onClick={() => setUserDropdownOpen(false)}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </Link>
                      ))}
                      
                      <div className="user-dropdown-divider"></div>
                      
                      <button className="user-dropdown-item logout" onClick={handleLogout}>
                        <FaSignOutAlt />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  className="signin-button"
                  onClick={() => setShowAuthModal(true)}
                  aria-label="Sign In"
                >
                  <FaSignInAlt />
                  <span>Sign In</span>
                </button>
              )}

              <button
                onClick={toggleMenu}
                className="mobile-menu-button"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="search-bar">
              <div className="search-container">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search for departments, courses, faculty..."
                  autoFocus
                />
                <button className="search-close" onClick={() => setSearchOpen(false)}>
                  <FaTimes />
                </button>
              </div>
            </div>
          )}

          <div className="navbar-navigation-wrapper">
            <ul className="navbar-nav">
              {groupedNavLinks.map((link, index) => (
                <li
                  key={index}
                  className="navbar-nav-item"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={link.path}
                    className={`navbar-nav-link ${
                      location.pathname.includes(link.path.split('/')[1]) ? "active" : ""
                    } ${dropdown === index ? "dropdown-active" : ""}`}
                  >
                    <span className="nav-icon">{link.icon}</span>
                    <span className="nav-text">
                      <span className="nav-name">{link.name}</span>
                      <span className="nav-description">{link.description}</span>
                    </span>
                    <FaChevronDown className={`dropdown-arrow ${dropdown === index ? "rotate" : ""}`} />
                  </Link>

                  {dropdown === index && (
                    <div className="mega-menu-wrapper">
                      <div className="mega-menu">
                        <div className="mega-menu-header">
                          <h3>{link.name}</h3>
                          <p>{link.description}</p>
                        </div>
                        <div className="mega-menu-grid">
                          {link.subLinks.map((subLink, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subLink.path}
                              className="mega-menu-item"
                              onClick={closeMenu}
                            >
                              <span className="mega-item-icon">{subLink.icon}</span>
                              <div className="mega-item-content">
                                <span className="mega-item-title">{subLink.name}</span>
                                <span className="mega-item-description">{subLink.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className={`mobile-nav ${isOpen ? "active" : ""}`}>
            <div className="mobile-nav-header">
              <div className="mobile-logo">
                <img
                  src="https://github.com/faskey37/college-website/blob/main/R.jpg?raw=true"
                  alt="Logo"
                />
              </div>
              <button className="mobile-nav-close" onClick={closeMenu}>
                <FaTimes />
              </button>
            </div>

            {user && (
              <div className="mobile-user-info">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} className="mobile-user-avatar" />
                ) : (
                  <div className="mobile-user-avatar-placeholder">
                    {user.displayName ? user.displayName.charAt(0).toUpperCase() : <FaUserCircle />}
                  </div>
                )}
                <div className="mobile-user-details">
                  <strong>{user.displayName || "User"}</strong>
                  <span>{user.email}</span>
                </div>
              </div>
            )}

            <ul className="mobile-nav-list">
              {groupedNavLinks.map((link, index) => (
                <li key={index} className="mobile-nav-item">
                  <div className="mobile-nav-link-wrapper">
                    <Link
                      to={link.path}
                      className="mobile-nav-link"
                      onClick={closeMenu}
                    >
                      <span className="mobile-nav-icon">{link.icon}</span>
                      <span className="mobile-nav-text">
                        <span className="mobile-nav-name">{link.name}</span>
                        <span className="mobile-nav-description">{link.description}</span>
                      </span>
                    </Link>
                    <button
                      className={`mobile-dropdown-toggle ${dropdown === index ? "active" : ""}`}
                      onClick={() => handleDropdown(index)}
                    >
                      <FaChevronDown />
                    </button>
                  </div>

                  {dropdown === index && (
                    <div className="mobile-dropdown">
                      {link.subLinks.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subLink.path}
                          className="mobile-dropdown-item"
                          onClick={closeMenu}
                        >
                          <span className="mobile-dropdown-icon">{subLink.icon}</span>
                          <div className="mobile-dropdown-content">
                            <span className="mobile-dropdown-title">{subLink.name}</span>
                            <span className="mobile-dropdown-description">{subLink.description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="mobile-contact">
              <a href="tel:+918888888888">
                <FaPhone /> Call Us
              </a>
              <a href="mailto:info@anjuman.edu">
                <FaEnvelope /> Email
              </a>
              {!user && (
                <button onClick={() => {
                  closeMenu();
                  setShowAuthModal(true);
                }}>
                  <FaSignInAlt /> Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {isOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}

      {/* Auth Modal - SIGN IN FORM */}
      {showAuthModal && (
        <div className="auth-modal-overlay" onClick={() => {
          setShowAuthModal(false);
          resetAuthForm();
        }}>
          <div className="auth-modal" ref={authModalRef} onClick={(e) => e.stopPropagation()}>
            <button className="auth-modal-close" onClick={() => {
              setShowAuthModal(false);
              resetAuthForm();
            }}>
              <FaTimes />
            </button>

            <div className="auth-modal-header">
              <h2>{authMode === 'signin' ? 'Welcome Back!' : authMode === 'signup' ? 'Create Account' : 'Reset Password'}</h2>
              <p>{authMode === 'signin' ? 'Sign in to access your dashboard' : authMode === 'signup' ? 'Join the Anjuman family' : 'Enter your email to reset password'}</p>
            </div>

            {authError && (
              <div className={`auth-error ${authError.includes('sent') ? 'success' : ''}`}>
                {authError}
              </div>
            )}

            {authMode === 'signin' && (
              <form onSubmit={handleEmailSignIn} className="auth-form">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={authLoading}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                      disabled={authLoading}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <button type="button" className="forgot-password-link" onClick={() => setAuthMode('forgot')}>
                  Forgot Password?
                </button>
                <button type="submit" className="auth-submit" disabled={authLoading}>
                  {authLoading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>
            )}

            {authMode === 'signup' && (
              <form onSubmit={handleEmailSignUp} className="auth-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    disabled={authLoading}
                  />
                </div>
                
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={authLoading}
                  />
                </div>
                
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone number"
                    required
                    disabled={authLoading}
                  />
                </div>
                
                <div className="form-group">
                  <label>Roll Number / Student ID *</label>
                  <input
                    type="text"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    placeholder="Enter your roll number"
                    required
                    disabled={authLoading}
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Branch *</label>
                    <select
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      required
                      disabled={authLoading}
                    >
                      <option value="">Select Branch</option>
                      {branches.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Year *</label>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      required
                      disabled={authLoading}
                    >
                      <option value="">Select Year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Section *</label>
                    <select
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                      required
                      disabled={authLoading}
                    >
                      <option value="">Select Section</option>
                      {sections.map((s) => (
                        <option key={s} value={s}>Section {s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Password *</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a password (min. 6 characters)"
                      required
                      disabled={authLoading}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Confirm Password *</label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                      required
                      disabled={authLoading}
                    />
                  </div>
                </div>
                
                <button type="submit" className="auth-submit" disabled={authLoading}>
                  {authLoading ? 'Creating Account...' : 'Sign Up'}
                </button>
              </form>
            )}

            {authMode === 'forgot' && (
              <form onSubmit={handleForgotPassword} className="auth-form">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your registered email"
                    required
                    disabled={authLoading}
                  />
                </div>
                <button type="submit" className="auth-submit" disabled={authLoading}>
                  {authLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
                <button type="button" className="back-to-signin" onClick={() => setAuthMode('signin')}>
                  Back to Sign In
                </button>
              </form>
            )}

            <div className="auth-divider">
              <span>OR</span>
            </div>

            <button 
              className="google-signin-btn" 
              onClick={handleGoogleSignIn}
              disabled={authLoading}
            >
              <FaGoogle />
              {authMode === 'signin' ? 'Continue with Google' : 'Sign up with Google'}
            </button>

            {authMode !== 'forgot' && (
              <p className="auth-switch">
                {authMode === 'signin' ? "Don't have an account? " : "Already have an account? "}
                <button 
                  type="button"
                  onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                >
                  {authMode === 'signin' ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            )}
          </div>
        </div>
      )}

      <div className={`navbar-spacer ${scrolled ? "scrolled" : ""}`}></div>
    </>
  );
};

export default Navbar;