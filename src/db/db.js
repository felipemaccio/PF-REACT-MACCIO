import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVTPayGeuImb9sQEL8aF-74ga0pS8XXvU",
  authDomain: "ecommerce-pf-maccio.firebaseapp.com",
  projectId: "ecommerce-pf-maccio",
  storageBucket: "ecommerce-pf-maccio.firebasestorage.app",
  messagingSenderId: "842757305118",
  appId: "1:842757305118:web:a13dadb2989941c6c28f0f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db