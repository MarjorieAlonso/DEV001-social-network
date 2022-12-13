// eslint-disable-next-line quotes
import { createUserWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line quotes, no-unused-vars
import path from 'path';
import { signup } from '../src/lib/auth';
// import { auth } from "../src/lib/firebase";
// jest-environment jsdom;

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

test('Signup es una función', () => {
  // Set up our document body
  document.body.innerHTML = '<div id= "root"> </div>';
  const res = Promise.resolve({ email: 'pepita1990@gmail.com', password: '123456' });
  createUserWithEmailAndPassword.mockResolvedValue(res);

  signup();

  expect(typeof signup).toBe('function');
  expect(createUserWithEmailAndPassword).toBeCalled();
});

/* test ('Signin es una función', () =>{
  document.createElement('div').setAttribute('id','root');
  const respuesta = Promise.resolve({})
}) pendiente para cuando se guarde info del usuario */
