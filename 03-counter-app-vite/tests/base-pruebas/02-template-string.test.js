import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en el archivo 02-template-string.test.js', () => {
    test('getSaludo debe retornar "Hola Jorge"', () => {
        const nombre = 'Jorge';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });
 
});