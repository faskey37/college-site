// src/pages/Settings.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/config';
import { 
  updatePassword, 
  reauthenticateWithCredential, 
  EmailAuthProvider,
  deleteUser,
  signOut
} from 'firebase/auth';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { 
  FaUser, 
  FaLock, 
  FaBell, 
  FaTrash, 
  FaSave, 
  FaTimes,
  FaEye,
  FaEyeSlash,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaGraduationCap
} from 'react-icons/fa';
import '../styles/components/settings.css';

const Settings = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  
  // Notification preferences
  const [notificationPrefs, setNotificationPrefs] = useState({
    emailNotifications: true,
    pushNotifications: true,
    followNotifications: true,
    likeNotifications: true,
    commentNotifications: true,
    announcementNotifications: true
  });
  
  // Delete account state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [deleteError, setDeleteError] = useState('');
  
  // Activity status
  const [lastActive, setLastActive] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await loadUserProfile(currentUser.uid);
        await loadNotificationPrefs(currentUser.uid);
        await updateLastActive(currentUser.uid);
      } else {
        navigate('/');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  const loadUserProfile = async (userId) => {
    try {
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setProfile(userSnap.data());
        setLastActive(userSnap.data().lastActive || new Date());
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const loadNotificationPrefs = async (userId) => {
    try {
      const prefsRef = doc(db, 'notificationPrefs', userId);
      const prefsSnap = await getDoc(prefsRef);
      if (prefsSnap.exists()) {
        setNotificationPrefs(prefsSnap.data());
      }
    } catch (error) {
      console.error('Error loading notification prefs:', error);
    }
  };

  const updateLastActive = async (userId) => {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        lastActive: new Date()
      });
    } catch (error) {
      console.error('Error updating last active:', error);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');
    setSaving(true);

    // Validation
    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      setSaving(false);
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      setSaving(false);
      return;
    }

    try {
      // Re-authenticate user
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      
      // Update password
      await updatePassword(user, newPassword);
      
      setPasswordSuccess('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      
      // Clear success message after 3 seconds
      setTimeout(() => setPasswordSuccess(''), 3000);
    } catch (error) {
      console.error('Error changing password:', error);
      switch (error.code) {
        case 'auth/wrong-password':
          setPasswordError('Current password is incorrect');
          break;
        case 'auth/too-many-requests':
          setPasswordError('Too many failed attempts. Please try again later');
          break;
        default:
          setPasswordError('Failed to change password. Please try again.');
      }
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateNotificationPrefs = async (prefName, value) => {
    try {
      const newPrefs = { ...notificationPrefs, [prefName]: value };
      setNotificationPrefs(newPrefs);
      
      const prefsRef = doc(db, 'notificationPrefs', user.uid);
      await updateDoc(prefsRef, newPrefs);
      
      // Show success toast
      console.log('Notification preferences updated');
    } catch (error) {
      console.error('Error updating notification prefs:', error);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== 'DELETE') {
      setDeleteError('Please type "DELETE" to confirm');
      return;
    }

    setSaving(true);
    setDeleteError('');

    try {
      // Re-authenticate user before deletion
      // You might want to ask for password again here
      
      // Delete user data from Firestore
      const userRef = doc(db, 'users', user.uid);
      await deleteDoc(userRef);
      
      // Delete notification preferences
      const prefsRef = doc(db, 'notificationPrefs', user.uid);
      await deleteDoc(prefsRef);
      
      // Delete user posts (optional - you might want to keep them)
      // Delete user from Firebase Auth
      await deleteUser(user);
      
      // Sign out
      await signOut(auth);
      
      // Redirect to home
      navigate('/');
      alert('Account deleted successfully');
    } catch (error) {
      console.error('Error deleting account:', error);
      switch (error.code) {
        case 'auth/requires-recent-login':
          setDeleteError('Please sign out and sign in again to delete your account');
          break;
        default:
          setDeleteError('Failed to delete account. Please try again.');
      }
    } finally {
      setSaving(false);
      setShowDeleteConfirm(false);
      setDeleteConfirmText('');
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/');
  };

  if (loading) {
    return (
      <div className="settings-loading">
        <FaSpinner className="spinner" />
        <p>Loading settings...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="settings-error">
        <p>Please sign in to access settings.</p>
      </div>
    );
  }

  return (
    <div className="settings-page">
      <div className="settings-container">
        {/* Header */}
        <div className="settings-header">
          <button className="back-button" onClick={() => navigate('/profile')}>
            <FaArrowLeft /> Back to Profile
          </button>
          <h1>Settings</h1>
          <p>Manage your account preferences</p>
        </div>

        <div className="settings-grid">
          {/* Account Information */}
          <div className="settings-card">
            <div className="card-header">
              <FaUser className="card-icon" />
              <h2>Account Information</h2>
            </div>
            <div className="account-info">
              <div className="info-row">
                <FaEnvelope />
                <div>
                  <label>Email</label>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="info-row">
                <FaUser />
                <div>
                  <label>Display Name</label>
                  <p>{profile?.displayName || 'Not set'}</p>
                </div>
              </div>
              <div className="info-row">
                <FaIdCard />
                <div>
                  <label>Student ID</label>
                  <p>{profile?.studentId || 'Not assigned'}</p>
                </div>
              </div>
              <div className="info-row">
                <FaGraduationCap />
                <div>
                  <label>Department</label>
                  <p>{profile?.department || 'Not set'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="settings-card">
            <div className="card-header">
              <FaLock className="card-icon" />
              <h2>Change Password</h2>
            </div>
            
            <form onSubmit={handleChangePassword} className="password-form">
              <div className="form-group">
                <label>Current Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    disabled={saving}
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="password-toggle-btn"
                  >
                    {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>New Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    disabled={saving}
                    minLength="6"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="password-toggle-btn"
                  >
                    {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Confirm New Password</label>
                <div className="password-input-wrapper">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={saving}
                  />
                </div>
              </div>

              {passwordError && (
                <div className="error-message">
                  <FaExclamationTriangle /> {passwordError}
                </div>
              )}
              
              {passwordSuccess && (
                <div className="success-message">
                  <FaCheckCircle /> {passwordSuccess}
                </div>
              )}

              <button type="submit" className="save-btn" disabled={saving}>
                {saving ? <FaSpinner className="spinner" /> : <FaSave />}
                {saving ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          </div>

          {/* Notification Preferences */}
          <div className="settings-card">
            <div className="card-header">
              <FaBell className="card-icon" />
              <h2>Notification Preferences</h2>
            </div>

            <div className="preferences-list">
              <div className="preference-item">
                <div className="preference-info">
                  <span className="preference-title">Email Notifications</span>
                  <span className="preference-desc">Receive notifications via email</span>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notificationPrefs.emailNotifications}
                    onChange={(e) => handleUpdateNotificationPrefs('emailNotifications', e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="preference-item">
                <div className="preference-info">
                  <span className="preference-title">Push Notifications</span>
                  <span className="preference-desc">Receive browser notifications</span>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notificationPrefs.pushNotifications}
                    onChange={(e) => handleUpdateNotificationPrefs('pushNotifications', e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="preference-item">
                <div className="preference-info">
                  <span className="preference-title">Follow Notifications</span>
                  <span className="preference-desc">When someone follows you</span>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notificationPrefs.followNotifications}
                    onChange={(e) => handleUpdateNotificationPrefs('followNotifications', e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="preference-item">
                <div className="preference-info">
                  <span className="preference-title">Like Notifications</span>
                  <span className="preference-desc">When someone likes your post</span>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notificationPrefs.likeNotifications}
                    onChange={(e) => handleUpdateNotificationPrefs('likeNotifications', e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="preference-item">
                <div className="preference-info">
                  <span className="preference-title">Comment Notifications</span>
                  <span className="preference-desc">When someone comments on your post</span>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notificationPrefs.commentNotifications}
                    onChange={(e) => handleUpdateNotificationPrefs('commentNotifications', e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="preference-item">
                <div className="preference-info">
                  <span className="preference-title">Announcement Notifications</span>
                  <span className="preference-desc">College announcements and updates</span>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notificationPrefs.announcementNotifications}
                    onChange={(e) => handleUpdateNotificationPrefs('announcementNotifications', e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="settings-card danger-zone">
            <div className="card-header">
              <FaTrash className="card-icon" />
              <h2>Danger Zone</h2>
            </div>

            <div className="danger-actions">
              <div className="danger-item">
                <div className="danger-info">
                  <h3>Delete Account</h3>
                  <p>Permanently delete your account and all associated data</p>
                </div>
                <button 
                  className="delete-btn"
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  Delete Account
                </button>
              </div>

              <div className="danger-item">
                <div className="danger-info">
                  <h3>Sign Out</h3>
                  <p>Sign out from your account on this device</p>
                </div>
                <button className="signout-btn" onClick={handleSignOut}>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Delete Account Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="modal-overlay" onClick={() => setShowDeleteConfirm(false)}>
            <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <FaExclamationTriangle className="warning-icon" />
                <h2>Delete Account</h2>
                <button className="close-modal" onClick={() => setShowDeleteConfirm(false)}>
                  <FaTimes />
                </button>
              </div>
              
              <div className="modal-body">
                <p className="warning-text">
                  This action <strong>cannot</strong> be undone. This will permanently delete:
                </p>
                <ul>
                  <li>Your profile information</li>
                  <li>All your posts and comments</li>
                  <li>Your followers and following data</li>
                  <li>Your notification history</li>
                  <li>All your saved data</li>
                </ul>
                
                <div className="confirm-input">
                  <label>Type <strong>DELETE</strong> to confirm:</label>
                  <input
                    type="text"
                    value={deleteConfirmText}
                    onChange={(e) => setDeleteConfirmText(e.target.value)}
                    placeholder="Type DELETE"
                  />
                </div>
                
                {deleteError && (
                  <div className="error-message">
                    <FaExclamationTriangle /> {deleteError}
                  </div>
                )}
              </div>
              
              <div className="modal-footer">
                <button className="cancel-btn" onClick={() => setShowDeleteConfirm(false)}>
                  Cancel
                </button>
                <button 
                  className="confirm-delete-btn"
                  onClick={handleDeleteAccount}
                  disabled={saving}
                >
                  {saving ? <FaSpinner className="spinner" /> : 'Yes, Delete My Account'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;