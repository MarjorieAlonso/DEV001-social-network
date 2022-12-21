// import { saveTask } from '../lib/firebase.js';
import { currentUserInfo } from '../lib/auth.js';
import { post } from '../lib/firebase.js';
// eslint-disable-next-line func-names

// eslint-disable-next-line func-names
export const showMuro = function () {
  // console.log (currentUserInfo().displayName)
  const templatePrincipal = `

<h3> Hola ${currentUserInfo().displayName}</h3>
<form id="task-form">
<textarea name="mensaje" id="mensaje1" class="mensaje1" cols="50" rows="10" placeholder="Escribe aqui"></textarea>

</form>
<div class="botones">
<button type="submit" class="botonP" id= "botonP">Publicar</button>
<button type="submit" class="botonM" id= "botonM">Me gusta</button>
</div>
`;

  // eslint-disable-next-line no-multi-assign, no-unused-vars
  document.getElementById('root').innerHTML = templatePrincipal;

  // window.addEventListener('DOMContentLoaded', () => {

  // });
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(taskForm);
    const mensaje = document.getElementById('mensaje1').value;
    // console.log(mensaje);
    if (mensaje === '' || mensaje === '  ') {
      // alert('Este campo es requerido');
    } else {
      const published = {};
      published.fecha = Number(new Date());
      published.mensaje = mensaje;
      published.likes = [];
      published.uid = currentUserInfo().uid;
      published.userName = currentUserInfo().displayName;
      post(published).then();
    // console.log(published);
    }
  });
  // eslint-disable-next-line no-restricted-globals
  history.pushState({ view: 'showMuro' }, null, '#Muro');
};
