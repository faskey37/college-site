// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where,
  orderBy,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  limit,
  writeBatch,
  onSnapshot
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Create or update user profile in Firestore
export const createUserProfile = async (user, additionalData = {}) => {
  if (!user) return { success: false, error: 'No user provided' };

  try {
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    const currentYear = new Date().getFullYear();

    const defaultProfile = {
      uid: user.uid,
      displayName: user.displayName || additionalData.displayName || 'Student',
      email: user.email || additionalData.email || '',
      photoURL: user.photoURL || 'https://via.placeholder.com/150',
      coverPhoto: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
      phone: additionalData.phone || '',
      location: additionalData.location || 'Nagpur, Maharashtra',
      bio: additionalData.bio || 'Student at Anjuman College of Engineering and Technology',
      rollNumber: additionalData.rollNumber || '',
      studentId: additionalData.rollNumber || additionalData.studentId || '',
      department: additionalData.department || 'Computer Science & Engineering',
      year: additionalData.year || '1st Year',
      section: additionalData.section || '',
      semester: additionalData.semester || '1st Semester',
      enrollmentYear: additionalData.enrollmentYear || currentYear.toString(),
      expectedGraduation: additionalData.expectedGraduation || (currentYear + 4).toString(),
      skills: additionalData.skills || [],
      interests: additionalData.interests || [],
      socialLinks: additionalData.socialLinks || {
        linkedin: '',
        github: '',
        twitter: '',
        website: ''
      },
      followers: [],
      following: [],
      posts: [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      isProfileComplete: false
    };

    if (!userSnap.exists()) {
      await setDoc(userRef, defaultProfile);
      console.log('✅ User profile created successfully');
      return { success: true, data: defaultProfile, error: null };
    } else {
      const existingData = userSnap.data();
      const updates = {};
      
      Object.keys(defaultProfile).forEach(key => {
        if (existingData[key] === undefined && key !== 'createdAt') {
          updates[key] = defaultProfile[key];
        }
      });
      
      if (Object.keys(updates).length > 0) {
        await updateDoc(userRef, { ...updates, updatedAt: serverTimestamp() });
        console.log('✅ User profile updated with missing fields');
      }
      
      return { success: true, data: { ...existingData, ...updates }, error: null };
    }
  } catch (error) {
    console.error('❌ Error in createUserProfile:', error);
    return { success: false, data: null, error: error.message };
  }
};

// Get user profile
export const getUserProfile = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return { success: true, data: userSnap.data(), error: null };
    } else {
      return { success: false, data: null, error: 'User profile not found' };
    }
  } catch (error) {
    console.error('Error getting user profile:', error);
    return { success: false, data: null, error: error.message };
  }
};

// Update user profile
export const updateUserProfile = async (userId, updateData) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });
    return { success: true, error: null };
  } catch (error) {
    console.error('Error updating user profile:', error);
    return { success: false, error: error.message };
  }
};

// Notification Functions
export const createNotification = async (notificationData) => {
  try {
    const notificationsRef = collection(db, 'notifications');
    const docRef = await addDoc(notificationsRef, {
      ...notificationData,
      createdAt: serverTimestamp(),
      isRead: false,
      readAt: null
    });
    return { success: true, id: docRef.id, error: null };
  } catch (error) {
    console.error('Error creating notification:', error);
    return { success: false, error: error.message };
  }
};

// Subscribe to user's notifications
export const subscribeToNotifications = (userId, callback) => {
  if (!userId) return null;
  
  const notificationsRef = collection(db, 'notifications');
  const q = query(
    notificationsRef,
    where('userId', '==', userId),
    orderBy('createdAt', 'desc'),
    limit(50)
  );
  
  return onSnapshot(q, (snapshot) => {
    const notifications = [];
    snapshot.forEach((doc) => {
      notifications.push({ id: doc.id, ...doc.data() });
    });
    callback(notifications);
  });
};

// Mark notification as read
export const markNotificationAsRead = async (notificationId) => {
  try {
    const notificationRef = doc(db, 'notifications', notificationId);
    await updateDoc(notificationRef, {
      isRead: true,
      readAt: serverTimestamp()
    });
    return { success: true, error: null };
  } catch (error) {
    console.error('Error marking notification as read:', error);
    return { success: false, error: error.message };
  }
};

// Mark all notifications as read
export const markAllNotificationsAsRead = async (userId) => {
  try {
    const notificationsRef = collection(db, 'notifications');
    const q = query(
      notificationsRef,
      where('userId', '==', userId),
      where('isRead', '==', false)
    );
    
    const snapshot = await getDocs(q);
    const batch = writeBatch(db);
    
    snapshot.forEach((doc) => {
      batch.update(doc.ref, { isRead: true, readAt: serverTimestamp() });
    });
    
    await batch.commit();
    return { success: true, error: null };
  } catch (error) {
    console.error('Error marking all notifications as read:', error);
    return { success: false, error: error.message };
  }
};

// Delete notification
export const deleteNotification = async (notificationId) => {
  try {
    const notificationRef = doc(db, 'notifications', notificationId);
    await deleteDoc(notificationRef);
    return { success: true, error: null };
  } catch (error) {
    console.error('Error deleting notification:', error);
    return { success: false, error: error.message };
  }
};

// Send notification for follow
export const sendFollowNotification = async (followerId, followerName, targetUserId) => {
  return await createNotification({
    userId: targetUserId,
    type: 'follow',
    title: 'New Follower',
    message: `${followerName} started following you`,
    data: {
      followerId: followerId,
      followerName: followerName
    }
  });
};

// Send notification for like
export const sendLikeNotification = async (postId, postAuthorId, likerId, likerName) => {
  return await createNotification({
    userId: postAuthorId,
    type: 'like',
    title: 'Post Liked',
    message: `${likerName} liked your post`,
    data: {
      postId: postId,
      likerId: likerId,
      likerName: likerName
    }
  });
};

// Send notification for comment
export const sendCommentNotification = async (postId, postAuthorId, commenterId, commenterName, comment) => {
  return await createNotification({
    userId: postAuthorId,
    type: 'comment',
    title: 'New Comment',
    message: `${commenterName} commented: "${comment.substring(0, 50)}${comment.length > 50 ? '...' : ''}"`,
    data: {
      postId: postId,
      commenterId: commenterId,
      commenterName: commenterName,
      comment: comment
    }
  });
};

// Auth functions
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    await createUserProfile(result.user);
    return { user: result.user, error: null };
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    return { user: null, error: error.message };
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { user: result.user, error: null };
  } catch (error) {
    console.error('Email Sign-In Error:', error);
    let errorMessage = "Failed to sign in. ";
    switch (error.code) {
      case 'auth/invalid-credential':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        errorMessage += "Invalid email or password.";
        break;
      case 'auth/too-many-requests':
        errorMessage += "Too many failed attempts. Please try again later.";
        break;
      default:
        errorMessage += error.message;
    }
    return { user: null, error: errorMessage };
  }
};

export const signUpWithEmail = async (email, password, displayName, additionalData = {}) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, { displayName });
    await createUserProfile(result.user, {
      displayName,
      email,
      ...additionalData
    });
    return { user: result.user, error: null };
  } catch (error) {
    console.error('Email Sign-Up Error:', error);
    let errorMessage = "Failed to create account. ";
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage += "Email is already registered.";
        break;
      case 'auth/weak-password':
        errorMessage += "Password should be at least 6 characters.";
        break;
      case 'auth/invalid-email':
        errorMessage += "Invalid email format.";
        break;
      default:
        errorMessage += error.message;
    }
    return { user: null, error: errorMessage };
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true, error: null };
  } catch (error) {
    console.error("Password Reset Error:", error);
    let errorMessage = "Failed to send reset email. ";
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage += "No account found with this email.";
        break;
      case 'auth/invalid-email':
        errorMessage += "Invalid email format.";
        break;
      default:
        errorMessage += error.message;
    }
    return { success: false, error: errorMessage };
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true, error: null };
  } catch (error) {
    console.error("Logout Error:", error);
    return { success: false, error: error.message };
  }
};