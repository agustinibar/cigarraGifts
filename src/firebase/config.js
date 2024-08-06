import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDN5_rFHBdrBag9Ozlgbmn7OXHcDlSdFZo",
  authDomain: "cigarra-gifts.firebaseapp.com",
  projectId: "cigarra-gifts",
  storageBucket: "cigarra-gifts.appspot.com",
  messagingSenderId: "161915433679",
  appId: "1:161915433679:web:f1128ae9817341660b7dba",
  measurementId: "G-T0NGG2RTVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);