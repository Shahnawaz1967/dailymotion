// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA89xf0ulea9p9KzP2f_2aDlWSPvW-t9Ac",
    authDomain: "dailymotion-1788b.firebaseapp.com",
    projectId: "dailymotion-1788b",
    storageBucket: "dailymotion-1788b.appspot.com",
    messagingSenderId: "84627042474",
    appId: "1:84627042474:web:20f76410607f7086ed60d3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}