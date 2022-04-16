// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnpfKavwV959VVbXCBevRfQ8sxWBQUayM",
  authDomain: "ema-jhon-simple-5c855.firebaseapp.com",
  projectId: "ema-jhon-simple-5c855",
  storageBucket: "ema-jhon-simple-5c855.appspot.com",
  messagingSenderId: "874986120194",
  appId: "1:874986120194:web:7167c59c59744180bdf31b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;