import { initializeApp } from 'firebase/app';
// eslint-disable-next-line no-unused-vars
import { getAuth } from 'firebase/auth';
import {
  getFirestore, collection, addDoc, getDocs, onSnapshot,
} from 'firebase/firestore';
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
export const auth = getAuth(app);
// Initialize Firebase Authentication and get a reference to the service
export const db = getFirestore(app);
export const saveTask = (mensaje1, userName, uid) => {
  addDoc(collection(db, 'task'), { mensaje1, userName, uid });
};

export const getTasks = () => getDocs(collection(db, 'task'));

export const onGetComents = (querySnapshot) => {
  // eslint-disable-next-line no-undef
  const queryPost = query(collection(db, 'coments'), orderBy('date', 'desc'));
  onSnapshot(queryPost, querySnapshot);
};

/* const docRef = doc(db, "task");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
} */
