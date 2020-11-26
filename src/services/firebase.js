import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCV6mCKuvg1JM_1dZiofikDtWQgQHE8dQ4",
    authDomain: "mercadolivre-clonern-df07c.firebaseapp.com",
    databaseURL: "https://mercadolivre-clonern-df07c.firebaseio.com",
    projectId: "mercadolivre-clonern-df07c",
    storageBucket: "mercadolivre-clonern-df07c.appspot.com",
    messagingSenderId: "157895500052",
    appId: "1:157895500052:web:d14656c49bcf567ba4e201",
};

firebase.initializeApp(firebaseConfig);

export default firebase; 