// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADdk9ppiFdOZz1FQJ8Ou3iRLt9ok3sBg0",
  authDomain: "krrunch-2461d.firebaseapp.com",
  projectId: "krrunch-2461d",
  storageBucket: "krrunch-2461d.appspot.com",
  messagingSenderId: "1052995900292",
  appId: "1:1052995900292:web:c6284396600f5a409d43d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
