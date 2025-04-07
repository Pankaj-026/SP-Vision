// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrDkkd_e5oWQGfncEynhD8P44G_syUOc8",
  authDomain: "spvision-9fbf3.firebaseapp.com",
  projectId: "spvision-9fbf3",
  storageBucket: "spvision-9fbf3.firebasestorage.app",
  messagingSenderId: "60809562764",
  appId: "1:60809562764:web:24faff3ab858a6947489a9",
  measurementId: "G-NF61VWF70J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);