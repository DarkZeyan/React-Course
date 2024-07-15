test('Esta prueba no deberia fallar', () =>{


    if(1===0){
        throw new Error('No puede dividir entre 0');
    }
})