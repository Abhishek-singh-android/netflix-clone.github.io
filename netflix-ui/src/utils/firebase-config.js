// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCduTjFI86OQB2zqgtSk2M0KuAxu76ZNBk",
  authDomain: "react-netflix-clone-28be8.firebaseapp.com",
  projectId: "react-netflix-clone-28be8",
  storageBucket: "react-netflix-clone-28be8.appspot.com",
  messagingSenderId: "635844340507",
  appId: "1:635844340507:web:e519fbb53f51af236a01be",
  measurementId: "G-9Q9BWWKCR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);