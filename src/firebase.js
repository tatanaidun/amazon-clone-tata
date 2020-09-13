import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvQ4cktV_rkPl3RRImlcC1vbaOranhtDs",
  authDomain: "clone-tata-9b4e4.firebaseapp.com",
  databaseURL: "https://clone-tata-9b4e4.firebaseio.com",
  projectId: "clone-tata-9b4e4",
  storageBucket: "clone-tata-9b4e4.appspot.com",
  messagingSenderId: "486021007310",
  appId: "1:486021007310:web:f40b2e52dc8f09d1b78d9f",
  measurementId: "G-WYP5NX53L9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
