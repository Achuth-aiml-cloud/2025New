// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxRG01OWrdwVmchfwdAnW6SaDOyEYaKrQ",
  authDomain: "lms-s-53bfe.firebaseapp.com",
  projectId: "lms-s-53bfe",
  storageBucket: "lms-s-53bfe.firebasestorage.app",
  messagingSenderId: "439989533096",
  appId: "1:439989533096:web:88f785e3703ddcc5b5c59d",
  measurementId: "G-E43HTRRW81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
export default app;