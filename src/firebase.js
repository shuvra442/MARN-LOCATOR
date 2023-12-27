// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-locator.firebaseapp.com",
  projectId: "mern-locator",
  storageBucket: "mern-locator.appspot.com",
  messagingSenderId: "68898313111",
  appId: "1:68898313111:web:22fe1c2d17677af73d2ad2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);