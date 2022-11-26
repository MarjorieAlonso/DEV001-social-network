import './firebase.js';
// eslint-disable-next-line func-names
export const showRegister = function () {
  const templateFormRegister = `
<div class= "container">
        <div class= "form">
            <div class= "form-login">
            <span class= title>Sign Up</span>
            <form action="#">
                <div class= "input-field">
                <input type= "text" placeholder= "Nombre de Usuario" required></input>
                </div>
            <div class= "input-field">
            <input type= "text" placeholder="Correo electronico" required></input>
            </div>
                <div class="input-field">
                <input type= "text" placeholder="Crea tu contraseña" required></input>
                </div>
                <div class="input-field">
                <input type= "text" placeholder="Repite tu contraseña" required></input>
            </div>
            <div class= "check-box-text">
             <div class= "check-box-content">
              <input type= "checkbox" id= "logCheck">
              <label for= "logCheck" class="text">Aceptar terminos y condiciones</label>
             </div>
        
            </div> 
             <div class= "input-field-button">
              <input type= "button" value="Entrar">
             </div> 
            </form>
            </div>  
        </div>
    </div>`;
  document.getElementById('root').innerHTML = templateFormRegister;
};
showRegister();
