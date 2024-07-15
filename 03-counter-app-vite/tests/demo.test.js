describe('Pruebas en <DemoComponent>', () => {

test('Esta prueba no deberia fallar', () =>{


    // Las pruebas se caracterizan por tener el siguiente cuerpo

    // 1. Inicialización
    // 2. Estímulo
    // 3. Observacion del comportamiento esperado

    // En la primera prueba los mensajes deben ser identicos
    const message1 =  'Hello World';

    const message2 = message1.trim();


    // ToBe es un metodo que compara si dos valores son iguales
    // Y pasa la prueba si son iguales
    expect(message1).toBe(message2);


    // La instalacion de @types/jest nos ayuda a identificar de mejor
    // manera las pruebas de JEST que podemos utilizar pues
    //de esta forma los metodos explican que son

    })
});