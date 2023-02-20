import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyAuV9CLzgY3crsno2wqLK43Ep9tkDdhHdA",
  authDomain: "chat-app-11440.firebaseapp.com",
  projectId: "chat-app-11440",
  storageBucket: "chat-app-11440.appspot.com",
  messagingSenderId: "564049282835",
  appId: "1:564049282835:web:1b9a99a18969c57e6c7ce6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
