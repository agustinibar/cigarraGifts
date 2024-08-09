import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
const analytics = getAnalytics(app);