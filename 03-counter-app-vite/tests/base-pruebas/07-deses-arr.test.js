import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en el archivo 07-deses-arr.test.js', () => {

    test('Debe de retornar un string y un numero', () => {
        const retorno = retornaArreglo();
        console.log(retorno)

        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123) // Evalua tambien el tipo de dato.

        expect(typeof letras ).toBe('string');
        expect(typeof numeros ).toBe('number');

        expect(letras).toEqual(expect.any(String));

    });
});