// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy36QEubXReIH3-ezywA9lz5LdjUskaoY",
  authDomain: "my-app-1a691.firebaseapp.com",
  projectId: "my-app-1a691",
  storageBucket: "my-app-1a691.appspot.com",
  messagingSenderId: "421413299201",
  appId: "1:421413299201:web:a35a7872451d3a501d4c00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app