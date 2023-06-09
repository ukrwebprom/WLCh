// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3Dy4654B7-hRabi4TXOeCTEo_rzSX1UI",
    authDomain: "jsf-e34d0.firebaseapp.com",
    projectId: "jsf-e34d0",
    storageBucket: "jsf-e34d0.appspot.com",
    messagingSenderId: "836771138317",
    appId: "1:836771138317:web:1a1dd17e0664b05852be44",
    measurementId: "G-G0VE5ZN2ET"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.languageCode = 'ua';
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const GoogleSignIn = async () => {
  const result = await signInWithPopup(auth, provider)
  return result.user;
}

export const GoogleSignOut = async () => {
  await signOut(auth);
}