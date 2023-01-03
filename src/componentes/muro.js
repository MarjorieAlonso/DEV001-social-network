// import { addDoc, collection } from 'firebase/firestore';
// eslint-disable-next-line no-unused-vars
import { onSnapshot, doc, collection } from 'firebase/firestore';
import { currentUserInfo } from '../lib/auth.js';
import { saveTask, db } from '../lib/firebase.js';

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
<div class="botonesMuro">
<button type="submit" class="botonE" id= "botonM">Editar</button>
<button type="submit" class="botonEl" id= "botonM">Eliminar</button>
</div>
<div class="comentarios">Aqui van los comentarios
</div>
`;

  onSnapshot(collection(db, 'task'), querySnapshot => {
    // eslint-disable-next-line arrow-parens, no-shadow
    querySnapshot.forEach(doc => {
      // console.log(doc.data());
    });
  });
  // eslint-disable-next-line no-multi-assign, no-unused-vars
  document.getElementById('root').innerHTML = templatePrincipal;
  const publish = document.getElementById('botonP');
  publish.addEventListener('click', (e) => {
    e.preventDefault();
    const mensaje = document.getElementById('mensaje1').value;
    saveTask(mensaje, currentUserInfo().displayName, currentUserInfo().uid);
  });
  // eslint-disable-next-line no-restricted-globals
  history.pushState({ view: 'showMuro' }, null, '#Muro');
};
