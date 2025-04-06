// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmCAQB_KvYzg-BShXN19JgzXAUzPTKSbQ",
  authDomain: "netflixgpt-42c2b.firebaseapp.com",
  projectId: "netflixgpt-42c2b",
  storageBucket: "netflixgpt-42c2b.firebasestorage.app",
  messagingSenderId: "220287917913",
  appId: "1:220287917913:web:84fb95ac13a93f6743f648",
  measurementId: "G-SN1VY3RY19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
