import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCGe7N6Ob7WB414g56LX6Uf0yJ2D4EBECA",
  authDomain: "ninja-smoothies-5d840.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-5d840.firebaseio.com",
  projectId: "ninja-smoothies-5d840",
  storageBucket: "ninja-smoothies-5d840.appspot.com",
  messagingSenderId: "24244456546"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
//export firestore database
export default firebaseApp.firestore();
