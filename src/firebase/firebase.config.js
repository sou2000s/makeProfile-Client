// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkUOwjEw76nLgUPbPBkw2IeoMYQphLr6U",
  authDomain: "makeyourprofile-fa19b.firebaseapp.com",
  projectId: "makeyourprofile-fa19b",
  storageBucket: "makeyourprofile-fa19b.appspot.com",
  messagingSenderId: "154254075287",
  appId: "1:154254075287:web:1c6fc0721a80e00c2d90d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;