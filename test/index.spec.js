/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';
// eslint-disable-next-line quotes
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { signup } from '../src/lib/auth';
// eslint-disable-next-line quotes, no-unused-vars
import path from 'path';
// import signup from '../lib/auth.js';

jest.mock('firebase/auth');
jest.mock(path.resolve('lib/auth.js'));

// jest.mock('firebase/auth');
jest.mock(createUserWithEmailAndPassword);


describe(signup, () => {
  it('debería ser una función', () => {
    expect(typeof signup).toBe('function');
  });
  it('Deberia aceptar usuario y password', () => {
    createUserWithEmailAndPassword.mockImplementation(() => {
      Promise.resolve({
        email: 'pepita1990@gmail.com',
        password: '123456',
      });
    });
    signup(createUserWithEmailAndPassword);

    expect(createUserWithEmailAndPassword).toBeCalled();
  });

  it('Debe retornar un objeto con las propiedades email y password', () => {
    signup('pepita1990@gmail.com', '123456');
    expect({
      email: 'pepita1990@gmail.com',
      password: '123456',
    }).toEqual(expect.anything());
  });
});

/* describe('signup()', () => {
  it('debe ser una funcion', () => {
    const correo1 = email;
    const password1 = password;
    // eslint-disable-next-line no-undef
    createUserWithEmailAndPassword(correo1, password1);
    expect(auth.createUserWithEmailAndPassword).toBeCalled();
  });
}); */
