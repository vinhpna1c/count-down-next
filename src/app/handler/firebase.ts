// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAIm5_bj1o4opXSyT_e8zPNqVUCQLLhF5M",

  authDomain: "count-down-d91e3.firebaseapp.com",

  projectId: "count-down-d91e3",

  storageBucket: "count-down-d91e3.appspot.com",

  messagingSenderId: "345459786370",

  appId: "1:345459786370:web:d5cea9f7a80908dc346a9b",

  measurementId: "G-Z9747HRMY2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db=getFirestore(app)

export {
    app,
    db
}