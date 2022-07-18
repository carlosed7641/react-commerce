// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJmOzu12rGwPj7qM61Lbe4FZIcG-1JMJ0",
  authDomain: "react-commerce-e98ef.firebaseapp.com",
  projectId: "react-commerce-e98ef",
  storageBucket: "react-commerce-e98ef.appspot.com",
  messagingSenderId: "1042351493823",
  appId: "1:1042351493823:web:4c67e6c42fca9680406c0a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase }