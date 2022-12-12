import '../lib/firebase.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// eslint-disable-next-line import/no-cycle
import { showRegister } from './register.js';
import { showMuro } from './muro.js';
import { auth } from '../lib/auth.js';

// eslint-disable-next-line func-names
export const showLogin = function () {
  const templateFormulario = `
    <div class= "container">
      <img src="images/claqueta.png" class="claqueta" alt="claqueta">
        <div class= "form">
            <div class= "form-login">
            <span class= title>Login</span>
            <form action="#" class="login-form">
                <div class= "input-field">
                <input type= "text" id="correo" placeholder= "Ingresa tu mail" required></input>
                </div>
            <div class= "input-field">
            <input type= "password" id="contraseña" placeholder="Ingresa tu contraseña" required></input>
            <span class = "icon-eye">
            
            <i class="fa-solid fa-eye"></i>
            </span>
            </div>
            <div class= "check-box-text">
             <div class= "check-box-content">
              <input type= "checkbox" id= "logCheck">
              <label for= "logCheck" class="text">Recordarme</label>
             </div>
             <a href="#" class="text">Olvidaste tu contraseña?</a>
            </div> 
             <div class= "input-field-button">
              <input type= "button"  id ="botonEntrar" value="Entrar">
             </div> 
            </form>
              <div class="login-signup">
               <span class= "text">Aún no te registras?
                <a href="#" class="signup-text" id="signup">Registrarme</a>
                <div class="buttonGoogle">
                <input type="button" class="registroGoogle" id="botonGoogle" value="Entrar con Google">
                </div>
               </span>
              </div>
            </div>  
        </div>
    </div>`;
  document.getElementById('root').innerHTML = templateFormulario;
  const signUp = document.getElementById('signup');
  signUp.addEventListener('click', (e) => {
    e.preventDefault();
    showRegister();
  });
  // eslint-disable-next-line no-restricted-globals
  history.pushState({ view: 'showLogin' }, null, '#Login');
};
showLogin();
const sigInForm = document.querySelector('.login-form');
document.getElementById('botonEntrar').addEventListener('click', async () => {
  //  no-unused-vars
  // eslint-disable-next-line no-unused-vars
  const email = sigInForm.correo.value;

  // eslint-disable-next-line no-unused-vars
  const password = sigInForm['contraseña'].value;
  try {
  // const credentials = await signInWithEmailAndPassword(auth, email, password);

  } catch (error) { /* empty */
  }
  showMuro();
});
// EventListener para el boton de inicio con Google
const registerGoogle = document.querySelector('#botonGoogle');
registerGoogle.addEventListener('click', async () => {
  const provider = new GoogleAuthProvider();
  try {
    // eslint-disable-next-line no-unused-vars
    const credentials = await signInWithPopup(auth, provider);
    showMuro();
  // eslint-disable-next-line no-empty
  } catch (error) {
  }
});
// priorizar funciones que no tengan que ver con el DOM
// then y catch
