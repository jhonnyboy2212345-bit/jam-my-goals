// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4WWDglU7S8uTxgvBtzv7Ww0JAUzu53Ss",
  authDomain: "my-goals-main.firebaseapp.com",
  projectId: "my-goals-main",
  storageBucket: "my-goals-main.firebasestorage.app",
  messagingSenderId: "714812636906",
  appId: "1:714812636906:web:fae0f33893d607b3e9a193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)