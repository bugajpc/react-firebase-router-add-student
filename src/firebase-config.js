// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOURKEYHERE",
  authDomain: "connect-android-e3b24.firebaseapp.com",
  projectId: "connect-android-e3b24",
  storageBucket: "connect-android-e3b24.appspot.com",
  messagingSenderId: "456347557205",
  appId: "1:456347557205:web:a9ad142617a6672009e3dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db
