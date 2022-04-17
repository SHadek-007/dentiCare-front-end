// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh1f8HQRJScplGWeH0wAsiXGPTnKURWLg",
  authDomain: "react-denticare.firebaseapp.com",
  projectId: "react-denticare",
  storageBucket: "react-denticare.appspot.com",
  messagingSenderId: "1083975943968",
  appId: "1:1083975943968:web:7075b15b612b808f90b945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;