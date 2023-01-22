// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPy6l1jOMRc_JSo_kQlWYL06ODoVAEOts",
  authDomain: "esaramago-9aa5a.firebaseapp.com",
  databaseURL: "https://esaramago-9aa5a.firebaseio.com",
  projectId: "esaramago-9aa5a",
  storageBucket: "esaramago-9aa5a.appspot.com",
  messagingSenderId: "846386539054",
  appId: "1:846386539054:web:52c9fc6872f013230c4dbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);