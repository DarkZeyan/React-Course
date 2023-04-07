//Funciones en js
// function saludar(nombre){
//     return `Hola ${nombre}`;
// } // Para que esto sea mas seguro es mejor

// const  saludar = function(nom){
//     return `Hola ${nom}`;
// };
//Esta funcion tradicional se puede transformar a una funcion lambda
// o funcion de fecha.

const saludar2 = (nom)=>{
    return `Hola ${nom}`;
};
//Con las funciones lambda/flecha tienen solamente un return se pueden simplificar
// de la siguiente manera.

const saludar3 = (nom)=> `Hola ${nom}`; //Esto optimiza el codigo.
const saludar4 = ()=> `Hola Mundo`; //Esto optimiza el codigo.

// manipular las funciones como constantes que almacenen dichas funciones.

// saludar = 30; // Asignacion a la funcion.
// saludar = 20; // Genera un error y ya no funciona.
// console.log(saludar('Jorge'));

// console.log(saludar); // Imprime la referencia a la funcion
console.log(saludar2('Yoyi')); // Imprime la referencia a la funcion
console.log(saludar3('Zeyan')); // Imprime la referencia a la funcion
console.log(saludar4()); // Imprime la referencia a la funcion

// La funcion ya no es lo antes declarado, ahora tiene el
// valor de 30.

// const getUser = () =>{
//     return {
//         uid:'ABC123',
//         username:'DarkZeyan',
//     }
// };

// Para regresar el objeto de manera implicita se debe de colocar el parentesis antes
//  de las llaves.
const getUser = () =>({

        uid:'ABC123',
        username:'DarkZeyan',
}) ;


console.log(getUser());

const user = getUser();
console.log(user);

// Tarea
//1. Transformarlo a funcion de flecha
//2. Retornar un objeto implicito.
//3. Probarlo
// function getUsuarioActivo(nombre){
//     return{
//         uid:'ABC5569',
//         username:nombre,

//     }
// };
const getUsuarioActivo = (nombre)=>({
    uid:'ABC5569',
    username:nombre,
});


const usuarioActivo = getUsuarioActivo('Jorge');
console.log(usuarioActivo);

