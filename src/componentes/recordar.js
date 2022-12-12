import '../lib/firebase.js';

// eslint-disable-next-line func-names
export const showReset = function () {
  const templateReset = `
<div class= "container">
        <div class= "form">
            <div class= "form-reset">
            <span class= title>Reestablecer contraseña</span>
            <form action="#">
                <div class= "input-field">
                <input type= "text" id="userName"placeholder= "Ingresa tu email" required></input>
                </div>
             <div class= "input-field-button">
              <input type= "button"  id ="botonEntrar"value="Enviar ">
             </div> 
            </form>
            </div>  
        </div>
    </div>`;
  document.getElementById('root').innerHTML = templateReset;
  const recordar = document.getElementsByClassName('text');
  recordar.addEventListener('click', (event) => {
    event.preventDefault();
    showReset();
  });
};

// showRegister();
