import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVZTiJGa-QC7YahzYi1osvOdO9grYqPbw",
  authDomain: "cart-3f5b1.firebaseapp.com",
  projectId: "cart-3f5b1",
  storageBucket: "cart-3f5b1.appspot.com",
  messagingSenderId: "761349136552",
  appId: "1:761349136552:web:6609c3f95d5006eb93a29d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

