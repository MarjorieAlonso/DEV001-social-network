// eslint-disable-next-line import/no-cycle
import { showLogin } from './componentes/main.js';
import { showMuro } from './componentes/muro.js';
// eslint-disable-next-line import/no-cycle
import { showRegister } from './componentes/register.js';

export const Router = () => {
  // eslint-disable-next-line no-restricted-globals
  const hash = location.hash;
  // rootDiv.innerHTML=null;
  switch (hash) {
    case '#Login':
      showLogin();
      break;
    case '#Signup':
      showRegister();
      break;
    case '#Muro':
      showMuro();
      break;
    default:
  }
};
// eslint-disable-next-line no-unused-vars
window.addEventListener('popstate', (e) => {
  Router();
});
