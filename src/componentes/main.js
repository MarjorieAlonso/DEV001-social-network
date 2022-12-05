import '../lib/firebase.js';
import { showRegister } from './register.js';
import { showMuro } from './muro.js';
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';
import { auth, auth2 } from '../lib/auth.js';
import { async } from 'regenerator-runtime';
// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

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
            <span class = "icon-eye">
            <i class="fa-solid fa-eye"></i>
            <span>
                <input type= "text" id="contraseña" placeholder="Ingresa tu contraseña" required></input>
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
  history.pushState(null, null, '#Login');
};
showLogin();
const sigInForm = document.querySelector('.login-form');
document.getElementById('botonEntrar').addEventListener('click', async ()=>{
  const email= sigInForm['correo'].value;
  const password= sigInForm['contraseña'].value;
 try {
  const credentials= await signInWithEmailAndPassword(auth,email,password)
  //console.log(credentials)
 } catch(error){
  //console.log(error)
 }
  showMuro();
});
  //EventListener para el boton de inicio con Google
  const registerGoogle = document.querySelector('#botonGoogle')
  registerGoogle.addEventListener('click', async () =>{
     const provider = new GoogleAuthProvider();
     try{
     const credentials= await signInWithPopup(auth, provider)
     } catch (error){
      //console.log(error)
     }
     showMuro();
  });
  //priorizar funciones que no tengan que ver con el DOM 
  //then y catch
