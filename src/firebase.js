import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6uBmF9URNwgUZLTooeuwRWIaoX1fEBaM",
    authDomain: "nzs-sc.firebaseapp.com",
    projectId: "nzs-sc",
    storageBucket: "nzs-sc.appspot.com",
    messagingSenderId: "1038296462259",
    appId: "1:1038296462259:web:012010d3feff9a011211c6",
    measurementId: "G-CW7XNG8VDS"
  };

export const app = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const auth = firebase.auth()