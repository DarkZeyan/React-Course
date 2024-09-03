import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas con promesas en el archivo 09-promesas.js', () => {

    test('getHeroeByIdAsync debe retornar un héroe async', ( done ) => {

        const id = 1;

        //Las pruebas en JEST por defecto son sincronas, por lo que se debe agregar el parametro done para que la prueba sea asincrona
        // Si no se hace el llamado a done() la prueba fallará tras un periodo de 5 segundos de timeout.
        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done();
            })
     
            //Si el done se llama fuera de la promesa, la prueba fallará tras un periodo de 5 segundos de timeout.
    });

    test('getHeroeByIdAsync debe retornar un error si el héroe por id no existe', ( done ) => {

        const id = 10;

        getHeroeByIdAsync(id)
            .catch(error => {
                console.log(error);

                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });
    });

});