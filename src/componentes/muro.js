import { addDoc, collection } from 'firebase/firestore';
import { currentUserInfo } from '../lib/auth.js';
import { saveTask, db, auth } from '../lib/firebase.js';
// eslint-disable-next-line func-names

// eslint-disable-next-line func-names
export const showMuro = function () {
  // console.log (currentUserInfo().displayName)
  const templatePrincipal = `

<h3> Hola ${currentUserInfo().displayName}</h3>
<form id="task-form">
<textarea name="mensaje" id="mensaje1" class="mensaje1" cols="50" rows="10" placeholder="Escribe aqui"></textarea>
<button class="botonP" id= "botonP">Publicar</button>
</form>
<div class="botonLike">
<button type="submit" class="botonM" id= "botonM">Me gusta</button>
</div>
`;

  // eslint-disable-next-line no-multi-assign, no-unused-vars
  document.getElementById('root').innerHTML = templatePrincipal;
  const publish = document.getElementById('botonP');
   publish.addEventListener('click', (e) => {
    e.preventDefault();
    const mensaje =  document.getElementById('mensaje1').value;
    saveTask(mensaje);
   });
  // eslint-disable-next-line no-restricted-globals
  history.pushState({ view: 'showMuro' }, null, '#Muro');
};

// Función para guardar el post
 /* const savePost = (contenido, uid) => addDoc(collection(db, 'task'),{
  content: contenido,
  likes: 0,
  uid,
}); */

