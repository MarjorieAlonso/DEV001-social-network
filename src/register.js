import './firebase.js';
import { showMuro } from './muro.js';
//import { signup } from './auth.js';


// eslint-disable-next-line func-names
export const showRegister = function () {
  const templateFormRegister = `
<div class= "container">
        <div class= "form">
            <div class= "form-login">
            <span class= title>Sign Up</span>
            <form action="#">
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
  const directMuro = document.getElementById('botonEntrar'); 
   directMuro.addEventListener('submit', (event) => {
    event.preventDefault();
    showMuro();
  }); 

  showRegister();
};

