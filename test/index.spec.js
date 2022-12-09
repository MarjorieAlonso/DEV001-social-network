// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';

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
