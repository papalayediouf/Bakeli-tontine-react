import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCTYopwNgdkyQo7W9prbPwdgWwfVLHbQ8g",
  authDomain: "test-6184d.firebaseapp.com",
  projectId: "test-6184d",
  storageBucket: "test-6184d.appspot.com",
  messagingSenderId: "188888212009",
  appId: "1:188888212009:web:402c05c866b5366f817238",
  measurementId: "G-0W07VJHN6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { db }; // Export Firestore
