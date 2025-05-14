// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJlnJ48BoL72XkasoFFFGG5GeemBwm4fc",
  authDomain: "project-one-8c11f.firebaseapp.com",
  projectId: "project-one-8c11f",
  storageBucket: "project-one-8c11f.firebasestorage.app",
  messagingSenderId: "725412879701",
  appId: "1:725412879701:web:6980b367e7cdf42632e3dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

