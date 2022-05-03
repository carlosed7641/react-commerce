// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMe0KY6582KD7pBWAKAOqWhqJyvBc-gdo",
    authDomain: "react-commerce-c9fea.firebaseapp.com",
    projectId: "react-commerce-c9fea",
    storageBucket: "react-commerce-c9fea.appspot.com",
    messagingSenderId: "849247504716",
    appId: "1:849247504716:web:5c04d75c2890db0f1a67e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase }