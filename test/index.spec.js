
import { getAuth, signup, createUserWithEmailAndPassword, jest } from '../lib/auth.js';
jest.mock('firebase/auth');
import { showRegister } from '../componentes/register.js';


describe('singup', () => {
  it('debería ser una función', () => {
    expect(typeof signup).toBe('function');
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
  expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(getAuth(), 'pepita1990@gmail.com', '123456');
});
 */