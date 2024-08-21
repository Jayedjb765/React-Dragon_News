// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJamk_-mKwErfC3Ulo_kLSZJe9AB27Maw",
  authDomain: "dragon-auth-9c4b7.firebaseapp.com",
  projectId: "dragon-auth-9c4b7",
  storageBucket: "dragon-auth-9c4b7.appspot.com",
  messagingSenderId: "351781489795",
  appId: "1:351781489795:web:e0907399941829d2c49fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;