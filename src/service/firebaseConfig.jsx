// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4hA2kUEFfidIRjMI6uTyzfWyU3l4Ihr4",
  authDomain: "trip-planner-613f5.firebaseapp.com",
  projectId: "trip-planner-613f5",
  storageBucket: "trip-planner-613f5.firebasestorage.app",
  messagingSenderId: "493974979071",
  appId: "1:493974979071:web:da642bb570f6d9d210e7ca",
  measurementId: "G-Y2SHFWZNYH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
