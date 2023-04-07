// Arreglos en js
// Coleccion de informacion dentro de una variable.
// const arreglo =  new Array(100); //Manera tradicional.
// arreglo.push(1);


const arreglo = [1,2,3,4];
// arreglo.push(1);  // Preferentemente no usar el push porque altera todo el objeto.
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

// let  arreglo2 = arreglo;  //Como los arreglos son objetos tambien, el hacer esta asignacion
// solo guarda la referencia de memoria donde esta localizado.

// let arreglo2 =  [arreglo,5]
let arreglo2 = [...arreglo,5]; //Nuevamente, los puntos
// nos permiten copiar el arreglo anterior y asignar
// sus valores a nuestro arreglo.
// Estos puntos se llaman operador spread.

// arreglo2.push(5);

// const arreglo3 =  arreglo2.map(); // Esto suelta error
// porque el metodo map espera una funcion.
// el metodo map crea un nuevo arreglo con los resultados de la llamada
// a la funcion indicada aplicados a cada uno de sus elementos.
const arreglo3 = arreglo2.map(function(num){
    return num*2; // Retorna los numeros por dos.
    // Esto crea un nuevo arreglo y evita tener errores
    // de duplicacion del arreglo original.
}); 

//En javascript cuando las funcionen no tienen
// un return explicito, retornan undefined.

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);