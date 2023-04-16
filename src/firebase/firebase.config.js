// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYWAX00XfPF33Xgro2GKRzh0ecCAFuGEE",
    authDomain: "auth-firebase-context-ta-e33f3.firebaseapp.com",
    projectId: "auth-firebase-context-ta-e33f3",
    storageBucket: "auth-firebase-context-ta-e33f3.appspot.com",
    messagingSenderId: "645367870233",
    appId: "1:645367870233:web:7e137b75a1506a235e0b88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;