// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "auth-61d24.firebaseapp.com",
  projectId: "auth-61d24",
  storageBucket: "auth-61d24.appspot.com",
  messagingSenderId: "364849904149",
  appId: "1:364849904149:web:7be1d4444f06c6bb4bac1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);