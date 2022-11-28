import './firebase.js';
import { showRegister } from './register.js';
import { showMuro } from './muro.js';
// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

// eslint-disable-next-line func-names
export const showLogin = function () {
  const templateFormulario = `
    <div class= "container">
      <img src="claqueta.png" class="claqueta" alt="claqueta">
        <div class= "form">
            <div class= "form-login">
            <span class= title>Login</span>
            <form action="#">
                <div class= "input-field">
                <input type= "text" placeholder= "Ingresa tu mail" required></input>
                </div>
            <div class= "input-field">
            <span class = "icon-eye">
            <i class="fa-solid fa-eye"></i>
            <span>
                <input type= "text" placeholder="Ingresa tu contraseña" required></input>
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
  history.pushState
};
showLogin();
const muro = document.getElementById('botonEntrar');
muro.addEventListener('click', (event) => {
  event.preventDefault();
  showMuro();
});
