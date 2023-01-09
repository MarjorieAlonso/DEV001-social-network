// import { addDoc, collection } from 'firebase/firestore';
// eslint-disable-next-line no-unused-vars
import { onSnapshot, collection } from 'firebase/firestore';
import { currentUserInfo } from '../lib/auth.js';
import {
  saveTask, db, deleteTask, getTask, updateTask,
} from '../lib/firebase.js';
// eslint-disable-next-line func-names
// eslint-disable-next-line func-names
export const showMuro = function () {
  // console.log (currentUserInfo().displayName)
  const templatePrincipal = `
<h3> Hola ${currentUserInfo().displayName}</h3>
<button class="edit-act" id="edit-act">Actualizar Editar</button>
<button class="inicio" id="inicio">Regresar al Inicio</button>
<form id="task-form" class="containerComents">
<textarea name="mensaje" id="mensaje1" class="mensaje1" cols="50" rows="10" placeholder="Escribe aqui tu recomendación"></textarea>
<button class="botonP" id= "botonP">Publicar</button>
</form>
<div id= "container"></div>
`;
  document.getElementById('root').innerHTML = templatePrincipal;
  // eslint-disable-next-line no-unused-vars
  // AGREGAMOS LOS TASK AL MURO USANDO ONSNAPSHOT
  const taskForm = document.getElementById('task-form');
  const taskContainer = document.getElementById('container');
  // let editStatus = false;
  let id = '';
  // eslint-disable-next-line arrow-parens
  onSnapshot(collection(db, 'task'), querySnapshot => {
    // eslint-disable-next-line arrow-parens, no-shadow
    let html = '';
    querySnapshot.forEach((doc) => {
      const tasks = doc.data();
      html += `
      <div class= "comentarios">
       <h4>${tasks.userName}</h4>
       <h5>${tasks.mensaje1}</h5>
       <div class="botones">
      <button class="botonE" id= "botonEd" data-id="${doc.id}">Editar</button>
      <button class="botonEl" id="botonEl" data-id="${doc.id}">Eliminar</button>
      </div>
      </div>
      `;
    });
    taskContainer.innerHTML = '';
    taskContainer.innerHTML += html;
    // FUNCIONALIDAD BOTON ELIMINAR
    const eliminarPost = () => {
      const eliminar = taskContainer.querySelectorAll('.botonEl');
      eliminar.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          deleteTask(dataset.id);
        });
      });
    };
    eliminarPost();
    // FUNCIONALIDAD BOTON EDITAR
    const editar = taskContainer.querySelectorAll('.botonE');
    editar.forEach((btn) => {
      btn.addEventListener('click', async ({ target: { dataset } }) => {
        const doc = await getTask(dataset.id);
        const task = doc.data();
        taskForm.mensaje.value = task.mensaje1;
        // editStatus = true;
        id = doc.id;
        const editActualizar = document.getElementById('edit-act');
        editActualizar.addEventListener('click', () => {
          updateTask(id, { mensaje1: taskForm.mensaje.value });
        });
      });
    });
  });
  // FUNCIONALIDAD BOTON PUBLICAR
  const publish = document.getElementById('botonP');
  publish.addEventListener('click', (e) => {
    e.preventDefault();
    const mensaje = document.getElementById('mensaje1').value;
    saveTask(mensaje, currentUserInfo().displayName, currentUserInfo().uid);
    // if (!editStatus) {
    //   saveTask(mensaje, currentUserInfo().displayName, currentUserInfo().uid);
    // } else {
    //   updateTask(id, { mensaje });
    //   editStatus = false;
    // }
    taskForm.reset();
  });
  // BOTON QUE RECARGA PARA VOLVER AL INICIO
  const btnInicio = document.querySelector('.inicio');
  btnInicio.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  });
  // eslint-disable-next-line no-restricted-globals
  history.pushState({ view: 'showMuro' }, null, '#Muro');
};
