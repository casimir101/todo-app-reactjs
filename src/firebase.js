import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDIpGIDJbfwPm7Qo6_y9_7XR7I44nCV914",
  authDomain: "todo-app-de36f.firebaseapp.com",
  databaseURL: "https://todo-app-de36f.firebaseio.com",
  projectId: "todo-app-de36f",
  storageBucket: "todo-app-de36f.appspot.com",
  messagingSenderId: "694712689707",
  appId: "1:694712689707:web:0e9a8f8f5346a97537f66e",
  measurementId: "G-5XC3X9P466",
});

const db = firebaseApp.firestore();

export default db;
