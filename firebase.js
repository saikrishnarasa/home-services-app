// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrTuUmN-lP8o1kfDIywvTfh4FP6HgImiM",
  authDomain: "home-services-app-3981a.firebaseapp.com",
  projectId: "home-services-app-3981a",
  storageBucket: "home-services-app-3981a.appspot.com",
  messagingSenderId: "1045876032528",
  appId: "1:1045876032528:web:c001c5b3fd310a49297695",
  measurementId: "G-GHQB1MNXEN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set to local persistence so it survives refresh
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Firebase persistence error:", error);
});

export { auth, db };
