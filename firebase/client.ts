import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEzwLxvOSJ6Mu_iY3yeVf-NcV_MI_EDbQ",
  authDomain: "aceprep-890d5.firebaseapp.com",
  projectId: "aceprep-890d5",
  storageBucket: "aceprep-890d5.firebasestorage.app",
  messagingSenderId: "316500411243",
  appId: "1:316500411243:web:60cc9800113a9738f9822e",
  measurementId: "G-GTYRPRC667"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) :getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)