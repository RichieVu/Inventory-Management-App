// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvRne-VspD23flHqKWyO_21ns4o8n00NM",
  authDomain: "inventory-management-app-13396.firebaseapp.com",
  projectId: "inventory-management-app-13396",
  storageBucket: "inventory-management-app-13396.appspot.com",
  messagingSenderId: "326091536654",
  appId: "1:326091536654:web:5eb7aaf0e379a57a08bf5f",
  measurementId: "G-CNZE05HYTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
