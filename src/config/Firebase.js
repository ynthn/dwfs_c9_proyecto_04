// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWnJHNo6B6obZnCSFZiCqlmUQFJFBajVE",
    authDomain: "proyecto-04-d5f33.firebaseapp.com",
    projectId: "proyecto-04-d5f33",
    storageBucket: "proyecto-04-d5f33.appspot.com",
    messagingSenderId: "913130824325",
    appId: "1:913130824325:web:929cfbcf8862225b973fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Recibe el firebase inicializado
export const db = getFirestore(app) 