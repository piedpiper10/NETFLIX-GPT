// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtiRzujb-BkONeDp8DWnPlv9Ja8dNRj8E",
  authDomain: "netflixwatch-569a6.firebaseapp.com",
  projectId: "netflixwatch-569a6",
  storageBucket: "netflixwatch-569a6.firebasestorage.app",
  messagingSenderId: "205066146069",
  appId: "1:205066146069:web:3eb1fa2debdf952efcd91c",
  measurementId: "G-DNPR1KJWZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
