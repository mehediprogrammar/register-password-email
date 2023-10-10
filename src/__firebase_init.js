// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHsFpV6SY7gRQXvKSq5FuazUB_HayB-BY",
  authDomain: "register-password-email.firebaseapp.com",
  projectId: "register-password-email",
  storageBucket: "register-password-email.appspot.com",
  messagingSenderId: "65319407537",
  appId: "1:65319407537:web:fa2fa7bf6bbc5215aa7790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;