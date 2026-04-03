// src/pages/Profile.jsx
import { useState, useEffect } from 'react';
import { auth, db, getUserProfile, updateUserProfile } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaSpinner, 
  FaEdit, 
  FaSave, 
  FaTimes,
  FaIdCard,
  FaCodeBranch,
  FaGraduationCap,
  FaCalendarAlt,
  FaUserGraduate,
  FaUniversity,
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from 'react-icons/fa';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    bio: '',
    phone: '',
    location: '',
    department: '',
    year: '',
    section: '',
    rollNumber: '',
    studentId: '',
    enrollmentYear: '',
    expectedGraduation: '',
    semester: '',
    socialLinks: {
      linkedin: '',
      github: '',
      twitter: '',
      website: ''
    }
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await loadUserProfile(currentUser.uid);
        
        // Set up real-time listener for profile updates
        const userRef = doc(db, 'users', currentUser.uid);
        const unsubscribeProfile = onSnapshot(userRef, (doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            setProfile(userData);
            setFormData({
              displayName: userData.displayName || '',
              bio: userData.bio || '',
              phone: userData.phone || '',
              location: userData.location || '',
              department: userData.department || '',
              year: userData.year || '',
              section: userData.section || '',
              rollNumber: userData.rollNumber || '',
              studentId: userData.studentId || '',
              enrollmentYear: userData.enrollmentYear || '',
              expectedGraduation: userData.expectedGraduation || '',
              semester: userData.semester || '',
              socialLinks: userData.socialLinks || {
                linkedin: '',
                github: '',
                twitter: '',
                website: ''
              }
            });
          }
        });
        
        return () => unsubscribeProfile();
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const loadUserProfile = async (userId) => {
    try {
      const result = await getUserProfile(userId);
      if (result.success) {
        setProfile(result.data);
        setFormData({
          displayName: result.data.displayName || '',
          bio: result.data.bio || '',
          phone: result.data.phone || '',
          location: result.data.location || '',
          department: result.data.department || '',
          year: result.data.year || '',
          section: result.data.section || '',
          rollNumber: result.data.rollNumber || '',
          studentId: result.data.studentId || '',
          enrollmentYear: result.data.enrollmentYear || '',
          expectedGraduation: result.data.expectedGraduation || '',
          semester: result.data.semester || '',
          socialLinks: result.data.socialLinks || {
            linkedin: '',
            github: '',
            twitter: '',
            website: ''
          }
        });
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    try {
      const result = await updateUserProfile(user.uid, {
        ...formData,
        updatedAt: new Date()
      });
      
      if (result.success) {
        alert('Profile updated successfully!');
        setIsEditing(false);
      } else {
        alert('Error updating profile: ' + result.error);
      }
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  // Branch options
  const branches = [
    "Computer Science & Engineering",
    "Mechanical Engineering",
    "Electronics & Telecommunication",
    "Civil Engineering",
    "Electrical Engineering",
    "AI & Data Science",
    "Information Technology"
  ];

  // Year options
  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  
  // Section options
  const sections = ["A", "B", "C", "D"];
  
  // Semester options
  const semesters = ["1st Semester", "2nd Semester", "3rd Semester", "4th Semester", "5th Semester", "6th Semester", "7th Semester", "8th Semester"];

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <FaSpinner style={{ animation: 'spin 1s linear infinite', fontSize: '2rem', color: '#003366' }} />
        <p>Loading profile...</p>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (!user) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <p>Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      paddingTop: '80px',
      paddingBottom: '2rem'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Profile Header Card */}
        <div style={{ 
          background: 'white', 
          borderRadius: '20px', 
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              {isEditing ? (
                <input 
                  type="text" 
                  value={formData.displayName}
                  onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                  style={{ 
                    fontSize: '2rem', 
                    padding: '0.5rem',
                    border: '2px solid #ddd',
                    borderRadius: '8px',
                    width: '100%',
                    minWidth: '250px'
                  }}
                />
              ) : (
                <h1 style={{ fontSize: '2rem', margin: 0, color: '#003366' }}>{profile?.displayName || user.displayName}</h1>
              )}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <p style={{ color: '#666', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaCodeBranch /> {profile?.department}
                </p>
                <p style={{ color: '#666', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaGraduationCap /> {profile?.year}
                </p>
                {profile?.section && (
                  <p style={{ color: '#666', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Section {profile?.section}
                  </p>
                )}
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              {isEditing ? (
                <>
                  <button 
                    onClick={handleSaveProfile}
                    disabled={saving}
                    style={{
                      padding: '0.6rem 1.2rem',
                      background: '#4caf50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: saving ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '600',
                      opacity: saving ? 0.6 : 1
                    }}
                  >
                    {saving ? <FaSpinner style={{ animation: 'spin 1s linear infinite' }} /> : <FaSave />} 
                    {saving ? 'Saving...' : 'Save'}
                  </button>
                  <button 
                    onClick={() => setIsEditing(false)}
                    style={{
                      padding: '0.6rem 1.2rem',
                      background: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '600'
                    }}
                  >
                    <FaTimes /> Cancel
                  </button>
                </>
              ) : (
                <button 
                  onClick={() => setIsEditing(true)}
                  style={{
                    padding: '0.6rem 1.2rem',
                    background: '#003366',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '600'
                  }}
                >
                  <FaEdit /> Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Profile Details Grid */}
        <div style={{ 
          background: 'white', 
          borderRadius: '20px', 
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ margin: '0 0 1.5rem 0', color: '#003366' }}>Personal Information</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <FaEnvelope style={{ fontSize: '1.5rem', color: '#003366' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Email Address</label>
                <span style={{ fontWeight: '500' }}>{user?.email}</span>
              </div>
            </div>

            {/* Phone Number */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <FaPhone style={{ fontSize: '1.5rem', color: '#003366' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Phone Number</label>
                {isEditing ? (
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="Add phone number"
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                  />
                ) : (
                  <span style={{ fontWeight: '500' }}>{profile?.phone || 'Not added'}</span>
                )}
              </div>
            </div>

            {/* Roll Number */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <FaIdCard style={{ fontSize: '1.5rem', color: '#003366' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Roll Number</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={formData.rollNumber}
                    onChange={(e) => setFormData({...formData, rollNumber: e.target.value, studentId: e.target.value})}
                    placeholder="Enter roll number"
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                  />
                ) : (
                  <span style={{ fontWeight: '500' }}>{profile?.rollNumber || 'Not assigned'}</span>
                )}
              </div>
            </div>

            {/* Department */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <FaCodeBranch style={{ fontSize: '1.5rem', color: '#003366' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Department</label>
                {isEditing ? (
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                  >
                    {branches.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                ) : (
                  <span style={{ fontWeight: '500' }}>{profile?.department}</span>
                )}
              </div>
            </div>

            {/* Year */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <FaGraduationCap style={{ fontSize: '1.5rem', color: '#003366' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Current Year</label>
                {isEditing ? (
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                ) : (
                  <span style={{ fontWeight: '500' }}>{profile?.year}</span>
                )}
              </div>
            </div>

            {/* Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <FaUserGraduate style={{ fontSize: '1.5rem', color: '#003366' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Section</label>
                {isEditing ? (
                  <select
                    value={formData.section}
                    onChange={(e) => setFormData({...formData, section: e.target.value})}
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                  >
                    <option value="">Select Section</option>
                    {sections.map(section => (
                      <option key={section} value={section}>Section {section}</option>
                    ))}
                  </select>
                ) : (
                  <span style={{ fontWeight: '500' }}>{profile?.section ? `Section ${profile.section}` : 'Not assigned'}</span>
                )}
              </div>
            </div>

            {/* Semester */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <FaCalendarAlt style={{ fontSize: '1.5rem', color: '#003366' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Current Semester</label>
                {isEditing ? (
                  <select
                    value={formData.semester}
                    onChange={(e) => setFormData({...formData, semester: e.target.value})}
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                  >
                    {semesters.map(semester => (
                      <option key={semester} value={semester}>{semester}</option>
                    ))}
                  </select>
                ) : (
                  <span style={{ fontWeight: '500' }}>{profile?.semester || 'Not set'}</span>
                )}
              </div>
            </div>

            {/* Enrollment Year */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <FaUniversity style={{ fontSize: '1.5rem', color: '#003366' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Enrollment Year</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={formData.enrollmentYear}
                    onChange={(e) => setFormData({...formData, enrollmentYear: e.target.value})}
                    placeholder="e.g., 2022"
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                  />
                ) : (
                  <span style={{ fontWeight: '500' }}>{profile?.enrollmentYear}</span>
                )}
              </div>
            </div>

            {/* Expected Graduation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <FaGraduationCap style={{ fontSize: '1.5rem', color: '#003366' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Expected Graduation</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={formData.expectedGraduation}
                    onChange={(e) => setFormData({...formData, expectedGraduation: e.target.value})}
                    placeholder="e.g., 2026"
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                  />
                ) : (
                  <span style={{ fontWeight: '500' }}>{profile?.expectedGraduation}</span>
                )}
              </div>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '12px' }}>
              <FaMapMarkerAlt style={{ fontSize: '1.5rem', color: '#003366' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Location</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="Add location"
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                  />
                ) : (
                  <span style={{ fontWeight: '500' }}>{profile?.location || 'Not added'}</span>
                )}
              </div>
            </div>

            {/* Bio - Full Width */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '1rem', 
              padding: '1rem', 
              background: '#f8f9fa', 
              borderRadius: '12px',
              gridColumn: '1 / -1'
            }}>
              <FaUser style={{ fontSize: '1.5rem', color: '#003366', marginTop: '0.25rem' }} />
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#666', marginBottom: '0.25rem' }}>Bio</label>
                {isEditing ? (
                  <textarea 
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    placeholder="Write your bio..."
                    rows="3"
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px', fontFamily: 'inherit' }}
                  />
                ) : (
                  <span style={{ fontWeight: '500' }}>{profile?.bio || 'No bio added yet.'}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Academic Summary Card */}
        <div style={{ 
          padding: '1.5rem', 
          background: 'linear-gradient(135deg, #003366 0%, #002244 100%)',
          borderRadius: '20px',
          color: 'white'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaUserGraduate /> Academic Summary
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <p style={{ margin: '0', fontSize: '0.8rem', opacity: '0.8' }}>Student ID</p>
              <p style={{ margin: '0.25rem 0 0', fontWeight: '600' }}>{profile?.rollNumber || profile?.studentId || 'Not assigned'}</p>
            </div>
            <div>
              <p style={{ margin: '0', fontSize: '0.8rem', opacity: '0.8' }}>Program</p>
              <p style={{ margin: '0.25rem 0 0', fontWeight: '600' }}>Bachelor of Technology (B.Tech)</p>
            </div>
            <div>
              <p style={{ margin: '0', fontSize: '0.8rem', opacity: '0.8' }}>Duration</p>
              <p style={{ margin: '0.25rem 0 0', fontWeight: '600' }}>{profile?.enrollmentYear} - {profile?.expectedGraduation}</p>
            </div>
            <div>
              <p style={{ margin: '0', fontSize: '0.8rem', opacity: '0.8' }}>Current Status</p>
              <p style={{ margin: '0.25rem 0 0', fontWeight: '600' }}>Active Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;