import firebase from "firebase";
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZZWteK0hDmKczYJ6NDsfqFPBl0Ha4Yu4",
  authDomain: "newui-6ea4b.firebaseapp.com",
  databaseURL: "https://newui-6ea4b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "newui-6ea4b",
  storageBucket: "newui-6ea4b.appspot.com",
  messagingSenderId: "959497293991",
  appId: "1:959497293991:web:53c2fae44f025944244b82",
  measurementId: "G-HR077HXRPW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase
