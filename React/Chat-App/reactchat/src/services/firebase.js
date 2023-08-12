import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlwSlvQCzcLlM64fN8gVORT06o2xGoe6I",
  authDomain: "chat-app-8e223.firebaseapp.com",
  projectId: "chat-app-8e223",
  storageBucket: "chat-app-8e223.appspot.com",
  messagingSenderId: "863735951139",
  appId: "1:863735951139:web:3f9d0e0875f2c5f22da696",
  measurementId: "G-P91XX9VLWL"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };