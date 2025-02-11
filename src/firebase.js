

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiID7Kg8IhcRrk-HzXDjEGrhGWFpP8eGo",
  authDomain: "photofusion-f8db5.firebaseapp.com",
  projectId: "photofusion-f8db5",
  storageBucket: "photofusion-f8db5.firebasestorage.app",
  messagingSenderId: "6833008176",
  appId: "1:6833008176:web:af851f755c006a0f4d47f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};