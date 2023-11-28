import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA3f07zRzDdU31B1pkY-4p-oi-jkEEYJts",
    authDomain: "tienda-coder-react-5c843.firebaseapp.com",
    projectId: "tienda-coder-react-5c843",
    storageBucket: "tienda-coder-react-5c843.appspot.com",
    messagingSenderId: "913487308004",
    appId: "1:913487308004:web:d5411d1a8da51d9af9f8f1",
    measurementId: "G-28F43EJCJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)