import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC_Jv4kfJxO88XFw1kXv-5U0CS8qjcHPfk",
  authDomain: "preciouslife-949f2.firebaseapp.com",
  projectId: "preciouslife-949f2",
  storageBucket: "preciouslife-949f2.appspot.com",
  messagingSenderId: "646450635410",
  appId: "1:646450635410:web:0fffaa894ca137a9577c4b",
  measurementId: "G-M9K234ZGSN"
};

if (firebase.apps.length < 1) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

