import { initializeApp } from 'firebase/app';
// eslint-disable-next-line no-unused-vars
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyDysxbZcvLWYEXuYDnGghgdWEeyfX_QIH8',
  authDomain: 'recomiendame-la-movie.firebaseapp.com',
  projectId: 'recomiendame-la-movie',
  storageBucket: 'recomiendame-la-movie.appspot.com',
  messagingSenderId: '8704091286',
  appId: '1:8704091286:web:0d3f77a39b5bd0c6e04eb7',
};

export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const db = getFirestore(app);
export const saveTask = (mensaje1) => {
addDoc(collection(db,'task'),{mensaje1})
}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

