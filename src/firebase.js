// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUy6JOMHOIvXq9SGHaB_Pgi0Um26pUoQw",
    authDomain: "react-commerce-88203.firebaseapp.com",
    projectId: "react-commerce-88203",
    storageBucket: "react-commerce-88203.appspot.com",
    messagingSenderId: "1091028585903",
    appId: "1:1091028585903:web:f3a84de79f473e747af35a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase }