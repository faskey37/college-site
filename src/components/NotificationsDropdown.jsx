// src/components/NotificationsDropdown.jsx
import React, { useState, useEffect } from 'react';
import { 
  FaBell, 
  FaSpinner, 
  FaTimes, 
  FaUserPlus, 
  FaThumbsUp, 
  FaComment, 
  FaGraduationCap,
  FaExclamationTriangle
} from 'react-icons/fa';
import { auth, db } from '../firebase/config';
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  limit, 
  onSnapshot,
  getDocs
} from 'firebase/firestore';
import { formatDistanceToNow } from 'date-fns';

const NotificationsDropdown = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  // Get current user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log('Auth user changed:', currentUser?.uid);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch notifications when user is available and dropdown is open
  useEffect(() => {
    if (!user || !isOpen) {
      if (!user) console.log('No user logged in');
      return;
    }

    console.log('Fetching notifications for user:', user.uid);
    setLoading(true);
    setError(null);

    try {
      const notificationsRef = collection(db, 'notifications');
      const q = query(
        notificationsRef,
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc'),
        limit(50)
      );

      const unsubscribe = onSnapshot(q, 
        (snapshot) => {
          console.log('Notifications snapshot received, size:', snapshot.size);
          const notificationsList = [];
          snapshot.forEach((doc) => {
            notificationsList.push({ 
              id: doc.id, 
              ...doc.data(),
              createdAt: doc.data().createdAt?.toDate?.() || new Date()
            });
          });
          console.log('Notifications loaded:', notificationsList.length);
          setNotifications(notificationsList);
          setLoading(false);
        },
        (error) => {
          console.error('Error fetching notifications:', error);
          setError(error.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.error('Error setting up notifications:', err);
      setError(err.message);
      setLoading(false);
    }
  }, [user, isOpen]);

  // Also try to manually fetch if real-time fails
  const manualFetch = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const notificationsRef = collection(db, 'notifications');
      const q = query(
        notificationsRef,
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc'),
        limit(50)
      );
      
      const snapshot = await getDocs(q);
      const notificationsList = [];
      snapshot.forEach((doc) => {
        notificationsList.push({ id: doc.id, ...doc.data() });
      });
      console.log('Manual fetch got:', notificationsList.length);
      setNotifications(notificationsList);
    } catch (err) {
      console.error('Manual fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (type) => {
    switch(type) {
      case 'follow': return <FaUserPlus />;
      case 'like': return <FaThumbsUp />;
      case 'comment': return <FaComment />;
      case 'announcement': return <FaGraduationCap />;
      default: return <FaBell />;
    }
  };

  const getIconColor = (type) => {
    switch(type) {
      case 'follow': return '#3b82f6';
      case 'like': return '#ef4444';
      case 'comment': return '#10b981';
      case 'announcement': return '#f59e0b';
      default: return '#8b5cf6';
    }
  };

  const handleMarkAsRead = async (notificationId) => {
    try {
      const notificationRef = doc(db, 'notifications', notificationId);
      await updateDoc(notificationRef, {
        isRead: true,
        readAt: new Date()
      });
    } catch (err) {
      console.error('Error marking as read:', err);
    }
  };

  const handleDelete = async (notificationId) => {
    try {
      const notificationRef = doc(db, 'notifications', notificationId);
      await deleteDoc(notificationRef);
    } catch (err) {
      console.error('Error deleting notification:', err);
    }
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'Just now';
    try {
      return formatDistanceToNow(timestamp, { addSuffix: true });
    } catch (e) {
      return 'Recently';
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="notifications-overlay"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9998,
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}
      />
      <div 
        className="notifications-dropdown"
        style={{
          position: 'absolute',
          top: '50px',
          right: '0',
          width: '420px',
          maxWidth: 'calc(100vw - 20px)',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          zIndex: 9999,
          overflow: 'hidden',
          animation: 'slideDown 0.2s ease'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 1.5rem',
          borderBottom: '1px solid #e5e7eb',
          backgroundColor: '#fff'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaBell style={{ color: '#3b82f6' }} />
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#111827' }}>Notifications</h3>
            {unreadCount > 0 && (
              <span style={{
                backgroundColor: '#3b82f6',
                color: '#fff',
                fontSize: '0.7rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '12px',
                fontWeight: 500
              }}>
                {unreadCount} new
              </span>
            )}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {unreadCount > 0 && (
              <button
                onClick={handleMarkAllAsRead}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#3b82f6',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                Mark all read
              </button>
            )}
            <button
              onClick={manualFetch}
              style={{
                background: 'none',
                border: 'none',
                color: '#666',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
              title="Refresh"
            >
              🔄
            </button>
          </div>
        </div>

        {/* Debug info - remove after testing */}
        <div style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#f0f0f0',
          fontSize: '0.7rem',
          borderBottom: '1px solid #ddd'
        }}>
          User: {user?.uid || 'Not logged in'} | 
          Loading: {loading ? 'Yes' : 'No'} | 
          Count: {notifications.length} |
          Error: {error || 'None'}
        </div>

        <div style={{
          maxHeight: '500px',
          overflowY: 'auto',
          padding: '0.5rem'
        }}>
          {!user ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem 2rem',
              textAlign: 'center',
              color: '#6b7280'
            }}>
              <FaExclamationTriangle style={{ fontSize: '2rem', marginBottom: '1rem', color: '#f59e0b' }} />
              <p>Please log in to see notifications</p>
            </div>
          ) : error ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem 2rem',
              textAlign: 'center',
              color: '#dc2626'
            }}>
              <FaExclamationTriangle style={{ fontSize: '2rem', marginBottom: '1rem' }} />
              <p>Error loading notifications</p>
              <p style={{ fontSize: '0.8rem' }}>{error}</p>
              <button
                onClick={manualFetch}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Retry
              </button>
            </div>
          ) : loading ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem 2rem',
              textAlign: 'center',
              color: '#6b7280'
            }}>
              <FaSpinner style={{ animation: 'spin 1s linear infinite', fontSize: '2rem', marginBottom: '1rem' }} />
              <p>Loading notifications...</p>
            </div>
          ) : notifications.length === 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem 2rem',
              textAlign: 'center',
              color: '#6b7280'
            }}>
              <FaBell style={{ fontSize: '2rem', marginBottom: '1rem', color: '#9ca3af' }} />
              <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>No notifications yet</p>
              <span style={{ fontSize: '0.8rem' }}>When someone follows you or likes your post, it will appear here</span>
            </div>
          ) : (
            notifications.map(notification => (
              <div
                key={notification.id}
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  backgroundColor: notification.isRead ? '#fff' : '#eff6ff',
                  padding: '1rem',
                  marginBottom: '0.75rem',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  borderLeft: notification.isRead ? '1px solid #e5e7eb' : '4px solid #3b82f6'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div style={{
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    backgroundColor: getIconColor(notification.type),
                    color: '#fff'
                  }}>
                    {getIcon(notification.type)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, color: '#111827', margin: '0 0 0.25rem 0' }}>{notification.title}</p>
                    <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                      {formatTime(notification.createdAt)}
                    </span>
                  </div>
                  <button
                    onClick={() => handleDelete(notification.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#9ca3af',
                      cursor: 'pointer',
                      padding: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '6px'
                    }}
                  >
                    <FaTimes size={12} />
                  </button>
                </div>
                <p style={{ margin: '0.5rem 0 0 2.5rem', color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  {notification.message}
                </p>
                {!notification.isRead && (
                  <div style={{ marginTop: '0.75rem', marginLeft: '2.5rem' }}>
                    <button
                      onClick={() => handleMarkAsRead(notification.id)}
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        textAlign: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        backgroundColor: '#f3f4f6',
                        color: '#4b5563',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      Mark as Read
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .notifications-dropdown {
          animation: slideDown 0.2s ease;
        }
      `}</style>
    </>
  );
};


export default NotificationsDropdown;