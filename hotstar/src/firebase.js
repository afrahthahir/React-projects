import firebase from "firebase/app";
import firestore from "firebase/firestore";
import auth from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD3uVfiG9ZwHxlREuz0eonYwebMfD4mbRY",
  authDomain: "hotstar-clone-80e9d.firebaseapp.com",
  projectId: "hotstar-clone-80e9d",
  storageBucket: "hotstar-clone-80e9d.appspot.com",
  messagingSenderId: "246209973498",
  appId: "1:246209973498:web:822c326725a0d544e9cd43",
  measurementId: "G-0CYG7JCEMR",
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = storage();

export { auth, provider, storage };
export default db;
