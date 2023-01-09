// eslint-disable-next-line quotes
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// eslint-disable-next-line quotes, no-unused-vars
import path from 'path';
import { deleteDoc } from 'firebase/firestore';
import { signup, signIn } from '../src/lib/auth';
// import { auth } from "../src/lib/firebase";
import { deleteTask } from '../src/lib/firebase.js';
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

test('Signin es una función', () => {
  document.body.innerHTML = '<div id= "root"> </div>';
  const respuesta = Promise.resolve({ email: 'pepita1990@gmail.com', password: '123456' });
  signInWithEmailAndPassword.mockResolvedValue(respuesta);

  signIn();
  expect(typeof signIn).toBe('function');
  expect(signInWithEmailAndPassword).toBeCalled();
});

describe('deleteTask', () => {
  it('Debería ser una función', () => {
    expect(typeof deleteTask).toBe('function');
  });
  it('Debería ser llamada con un id', () => {
    const id = 'lXIJkj2pHuZM73QIJHkUlwn1l0g2';
    deleteTask(id);
    expect(deleteDoc).toHaveBeenCalledWith(id);
  });
  it('Debería llamar al metodo deleteDoc', () => {
    deleteTask(deleteDoc);
    expect(deleteDoc).toBeCalled();
  });
  it('Debería eliminar un  objeto', () => {
    deleteTask({
      id: 'lXIJkj2pHuZM73QIJHkUlwn1l0g2',
    });
    expect(deleteDoc).toEqual(expect.anything(), { id: 'lXIJkj2pHuZM73QIJHkUlwn1l0g2' });
  });
});
