import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase.js';

export const auth = getAuth(app);
export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
