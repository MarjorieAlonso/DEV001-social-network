import { showLogin } from './main.js';
import { showMuro } from './muro.js';
import { showRegister } from './register.js';

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
