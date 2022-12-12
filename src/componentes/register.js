import '../lib/firebase.js';
// import { createUserWithEmailAndPassword } from './firebase.js';
// eslint-disable-next-line import/no-unresolved, no-unused-vars
import { signup, auth } from '../lib/auth.js';
<<<<<<< HEAD
// import { GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import { showMuro } from './muro.js';
=======
// import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import { showMuro } from './muro.js';
// eslint-disable-next-line import/no-cycle, no-unused-vars
import { Router } from '../router.js';
>>>>>>> e29d663d54b9e72570689fff83b6aa644a868dfc

// eslint-disable-next-line func-names
export const showRegister = function () {
  const templateFormRegister = `
<div class= "container">
        <div class= "form">
            <div class= "form-login">
            <span class= title>Sign Up</span>
            <form action="#" id="login-form">
                <div class= "input-field">
                <input type= "text" id="userName"placeholder= "Nombre de Usuario" required></input>
                </div>
            <div class= "input-field">
            <input  type= "text" id='correo'  class='email' placeholder="Correo electronico" required></input>
            </div>
                <div class="input-field">
                <input type= "text" id ="creaCont" class='password' placeholder="Crea tu contraseña" required></input>
                </div>
            <div class= "check-box-text">
             <div class= "check-box-content">
              <input type= "checkbox" id= "logCheck">
              <label for= "logCheck" class="text">Aceptar terminos y condiciones</label>
             </div>
            </div> 
             <div class= "input-field-button">
              <input type= "button" class='registrar' id ="botonRegistrar"value="Registrar">
             </div> 
          
            </form>
            </div>  
        </div>
    </div>`;
  document.getElementById('root').innerHTML = templateFormRegister;

  // EventListener para el boton de Registrar
  const signupForm = document.querySelector('#login-form');
  document.getElementById('botonRegistrar').addEventListener('click', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const userName = signupForm.userName.value;
    const email = signupForm.correo.value;
    const password = signupForm.creaCont.value;
    signup(email, password);
  });
  // eslint-disable-next-line no-restricted-globals
  history.pushState({view: 'showRegister'}, null, '#Signup');
};
showRegister();
