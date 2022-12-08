// eslint-disable-next-line import/no-unresolved
import { signup } from '../lib/auth.js';

jest.mock('firebase/auth');
jest.mock(signup);
// import { showRegister } from '../componentes/register.js';

describe('signup()', () => {
  it('debbe ser una funcion', () => {
    // eslint-disable-next-line no-unused-vars, no-undef
    const correo1 = email;
    // eslint-disable-next-line no-unused-vars, no-undef
    const password1 = password;
    // eslint-disable-next-line no-undef
    createUserWithEmailAndPassword(email, password);

    // eslint-disable-next-line no-undef
    expect(auth.createUserWithEmailAndPassword).toBeCalled();
  });
});

/*
it('debe llamarse al metodo crear usuario', () => {
  createUserWithEmailAndPassword.mockImplementation(() => Promise.resolve('pepita1990@gmail.com'));
  signup(createUserWithEmailAndPassword);
  expect(createUserWithEmailAndPassword).toBeCalled();
});
it('deberia retornar un objeto con la propiedad email', () => {
  signup('mayitodraven@gmail.com', '123456').then((user) => {
    expect(user).toBe('mayitodraven@gmail.com');
  });
});
it('Debe recibir parámetros', () => {
  signup('pepita1990@gmail.com', '123456');
expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(getAuth
});
 */
