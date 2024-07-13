// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC5-afE99w82injLDnlnK2CQinN0XnxcA",
  authDomain: "my-web-store-4c92c.firebaseapp.com",
  projectId: "my-web-store-4c92c",
  storageBucket: "my-web-store-4c92c.appspot.com",
  messagingSenderId: "942955220660",
  appId: "1:942955220660:web:04f2dc2086be7bf67691e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);