import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones.test.js', () => {

    test('getUser debe retornar un objeto', () => {
    
        const userPrueba = {
            uid: 'ABC123',
            username: 'Zeyan'
        }

        const user = getUser();
        
        expect (userPrueba).toEqual(user);

    });

    //Tarea
    test('getUsuarioActivo debe de retornar un objeto', () => {
        const nombre = 'Zeyan';

        const usuario  = getUsuarioActivo(nombre)

        expect(usuario).toEqual(
            {
                uid: usuario.uid,
                username: nombre
            }
        )


    });

});