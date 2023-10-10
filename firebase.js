import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAM0bF0gJzy_Se3xS7sDi6DHfAJNiSaYjA",
  authDomain: "laundry-application-f4dcb.firebaseapp.com",
  projectId: "laundry-application-f4dcb",
  storageBucket: "laundry-application-f4dcb.appspot.com",
  messagingSenderId: "384793680788",
  appId: "1:384793680788:web:333e8f9c58381840904d81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
