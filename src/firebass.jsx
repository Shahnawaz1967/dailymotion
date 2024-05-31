import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5lW7PR_nd4SpdUInVyuK0XV-EHwgSNnU",
  authDomain: "dailymaotion.firebaseapp.com",
  projectId: "dailymaotion",
  storageBucket: "dailymaotion.appspot.com",
  messagingSenderId: "689189299960",
  appId: "1:689189299960:web:3a6ed37439035e5e893d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
