// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line
 const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "gptflix-1.firebaseapp.com",
    projectId: "gptflix-1",
    storageBucket: "gptflix-1.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  }; 
  
  // Initialize Firebase
  // eslint-disable-next-line
  const app = initializeApp(firebaseConfig);
  // eslint-disable-next-line
  const analytics = getAnalytics(app);

export const auth = getAuth();