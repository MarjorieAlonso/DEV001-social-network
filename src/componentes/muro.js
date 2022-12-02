import '../firebase.js';

// eslint-disable-next-line func-names
export const showMuro = function () {
  const templatePrincipal = `
<div  id ="contenedor">
<textarea name="mensaje" id="mensaje1" cols="50" rows="10" placeholder="Escribe aqui"></textarea>
</div>
<div class ="botonPublicar">
<button class="botonP">publicar</button>
<button class="botonM">me gusta</button>
</div> `;
  document.getElementById('root').innerHTML = templatePrincipal;
  // eslint-disable-next-line no-restricted-globals
  history.pushState(null, null, '#Muro');
};
showMuro();
