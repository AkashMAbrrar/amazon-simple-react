// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD02A-f-KWwuV_ohY44Fp0QdrdbYH-6mSI",
    authDomain: "emajon-simple-firebase.firebaseapp.com",
    projectId: "emajon-simple-firebase",
    storageBucket: "emajon-simple-firebase.appspot.com",
    messagingSenderId: "282109532889",
    appId: "1:282109532889:web:0805d090847ebf716cfcc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;