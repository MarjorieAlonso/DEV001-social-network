import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase.js';

export const auth = getAuth(app);
export const signup = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // eslint-disable-next-line no-alert
      alert('Bienvenido a Recomiendame la movie');
    })
    .catch((error) => {
      const errorCode = error.code;
      //const errorMessage = error.message;
      if (errorCode.includes('auth/email-already-in-use')) {
        alert('este mail ya se encuentra registrado');
      }
      if (errorCode.includes('auth/internal-error')) {
        alert('correo invalido');
      }
      if (errorCode.includes('auth/weak-password')) {
        alert('la contraseña debe tener al menos 6 caracteres');
      }
    });
};
