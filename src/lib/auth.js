import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
// eslint-disable-next-line import/no-unresolved
import { showMuro } from '../Componentes/muro.js';
import { app } from './firebase.js';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// REGISTARME
export const auth = getAuth(app);
export const signup = (email, password,userName) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      updateProfile(auth.currentUser, {
        displayName: userName,         
      });
      // eslint-disable-next-line no-unused-vars
      const user = userCredential.user;
      // eslint-disable-next-line no-alert
      // alert('Bienvenido a Recomiendame la movie');
      showMuro();
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      if (errorCode.includes('auth/email-already-in-use')) {
        // eslint-disable-next-line no-alert
        alert('este mail ya se encuentra registrado');
      }
      if (errorCode.includes('auth/internal-error')) {
        // eslint-disable-next-line no-alert
        alert('correo invalido');
      }
      if (errorCode.includes('auth/weak-password')) {
        // eslint-disable-next-line no-alert
        alert('la contraseña debe tener al menos 6 caracteres');
      }
    });
};
// INICIAR SESION
export const auth2 = getAuth(app);
export const singin = (email, password) => {
  signInWithEmailAndPassword(auth2, email, password)
    .then((userCredential) => {
    // Signed in
      // eslint-disable-next-line no-unused-vars
      const user = userCredential.user;
       console.log(user);
      showMuro();
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode.includes('auth/invalid-email')) {
        // eslint-disable-next-line no-alert
        alert('este correo no existe');
      }
      if (errorCode.includes('auth/wrong-password')) {
      // eslint-disable-next-line no-alert
        alert('contraseña incorrecta');
      }
    });
};

//PERFIL DE USUARIO
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const uid = user.uid;
}
