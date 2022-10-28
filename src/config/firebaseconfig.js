import firebase from 'firebase';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC_Jv4kfJxO88XFw1kXv-5U0CS8qjcHPfk",
    authDomain: "preciouslife-949f2.firebaseapp.com",
    projectId: "preciouslife-949f2",
    storageBucket: "preciouslife-949f2.appspot.com",
    messagingSenderId: "646450635410",
    appId: "1:646450635410:web:0fffaa894ca137a9577c4b",
    measurementId: "G-M9K234ZGSN"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export default firebase;