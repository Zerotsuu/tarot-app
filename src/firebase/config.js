// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPg6u7tFf-ISselvx7i1XrsIDHR3BohjY",
  authDomain: "tarot-app-413b6.firebaseapp.com",
  projectId: "tarot-app-413b6",
  storageBucket: "tarot-app-413b6.appspot.com",
  messagingSenderId: "599365510966",
  appId: "1:599365510966:web:7f445359f833944284f597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);