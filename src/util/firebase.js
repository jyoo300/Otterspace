import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Make sure it hasn't already been initialized
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBRbWr2zoXq_QpS-U-aChoZpqwb-Vf1yOI",
    authDomain: "otterspace-46581.firebaseapp.com",
    databaseURL: "https://otterspace-46581.firebaseio.com",
    projectId: "otterspace-46581",
    storageBucket: "otterspace-46581.appspot.com",
    messagingSenderId: "609640930241",
    appId: "1:609640930241:web:50259e84c947b5287ded40",
    measurementId: "G-EW0MZSB1GB"
  });
}

export default firebase;
