import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line import/no-unresolved
import { showMuro } from '../Componentes/muro.js';
import { app } from './firebase.js';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// REGISTARME
export const auth = getAuth(app);
export const signup = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
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

// todo esto se testea!!!
// spy (función vacia) se hace de de auth pero se hace mock de signin y createuser
// primero se hace el test, luegopasamos las funciones a spy para que esten vacias
// y al final se hace mock para comprobar que sean llamadas/usadas(toBeCalled)
// sin crear usuarios o archivos
