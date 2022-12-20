import { saveTask } from '../lib/firebase.js';
import { currentUserInfo } from '../lib/auth.js';
// eslint-disable-next-line func-names

// eslint-disable-next-line func-names
export const showMuro = function () {
  // console.log (currentUserInfo().displayName)
  const templatePrincipal = `

<h3> Hola ${currentUserInfo().displayName}</h3>
<form id="task-form">
<textarea name="mensaje" id="mensaje1" cols="50" rows="10" placeholder="Escribe aqui"></textarea>
<button class="botonP" id= "botonP">publicar</button>
<button class="botonM">me gusta</button>
</form>`;
  // eslint-disable-next-line no-multi-assign, no-unused-vars
  document.getElementById('root').innerHTML = templatePrincipal;

  window.addEventListener('DOMContentLoaded', () => {
   
  });
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('taskForm');
    const mensaje = taskForm.mensaje1;
    saveTask(mensaje.value);
  });
  // eslint-disable-next-line no-restricted-globals
  history.pushState({ view: 'showMuro' }, null, '#Muro');
};
