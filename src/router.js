import {showLogin} from './main.js';
import { showMuro } from './muro.js';
import { showRegister } from './register.js';

export const Router= () =>{
   // const rootDiv =document.getElementById('root');
    const hash = location.hash;
   // rootDiv.innerHTML=null;
switch (hash){
    case'#':
    showLogin();
    break;
case '#signup':
    showRegister();
    break;
case '#muro' :
    showMuro();
    break
}
};
console.log (Router);