//Variables y constantes

//Variables de tipo var ya no se utilizan, se trabajara 
// en el curso con variables de tipo const y let.

//Las variables de tipo const son constantes. Son valores
// que una vez asignados no se pueden reasignar.
//Estas deben de ser inicializadas en la misma linea en la que son declaradas.
const nombre = 'Jorge';
const apellido = 'Bugarini';

//Por otra parte las variables de tipo let son variables
// que se pueden modificar tantas veces deseemos y no habra problema.

let valorDado=5;
valorDado = 4; // No se puede declarar nuevamente. solamnente
// se usa la referencia de memoria usando el nombre de la variable.

console.log(nombre,apellido,valorDado);

// Var ya no se utiliza ni se debe utilizar.

if(true){

    // En este caso se puede re declarar la variable
    // debido a que son variables de scope.
    // Es decir, es distinta de las variables de afuera.
    // Y solo existen en el campo en el que estan.

    //let valorDado = 6;

    const nombre = 'Zeyan';
    console.log(nombre);
}
console.log(valorDado);
