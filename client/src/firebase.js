// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realtyhub-3a523.firebaseapp.com",
  projectId: "realtyhub-3a523",
  storageBucket: "realtyhub-3a523.appspot.com",
  messagingSenderId: "374041573607",
  appId: "1:374041573607:web:d6e665130183999ba1ca42"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);