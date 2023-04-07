// Promesas en javascript.
//Son asincronas, se ejecuta primero el codigo sincrono.
//Cuando termina el codigo sincrono se ejecuta el asincrono.
//Convencion, tiene 2 argumentos, resolve si es exitosa, reject
// si fracasa.

import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise( (resolve,reject) => {
//     setTimeout(() => {
//      //Tarea importar  los heroes y los get heroe by id.
//         // console.log("2 segundos despues");
//         // resolve();

//         const heroe = getHeroeById(2);
//         resolve(heroe); //El resolve envia el valor
//         //de sus argumentos al then.
//         // reject('No se pudo encontrar el heroe.')
//         //Segundo argumento cantidad de milisegundos que se ejecutara.
//     }, 2000);
// });

//Usa 3 metodos, el then es el mas importante y funciona si la promesa 
//funciono correctamente
// el segundo es el catch el cual es para atrapar los errores y cuando la promesa
// no funciono.
// tercero es el finally para que apesar del resultado de la promesa se ejecute el codigo.
// promesa.then((heroe)=>{
//     console.log('heroe',heroe);
// })
// .catch(err=>console.warn(err));
const getHeroeByIdAsync = (id)=>{
    return new Promise( (resolve,reject) => {
        setTimeout(() => {
         //Tarea importar  los heroes y los get heroe by id.
            // console.log("2 segundos despues");
            // resolve();
    
            const heroe = getHeroeById(id);
            if(heroe) resolve(heroe);
            else reject('El heroe con la id especificada no existe.')
             //El resolve envia el valor
            //de sus argumentos al then.
            // reject('No se pudo encontrar el heroe.')
            //Segundo argumento cantidad de milisegundos que se ejecutara.
        }, 2000);
    });
    
}
getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn); //Si se llama a una funcion
    //Entonces la funcion recibira como argumento el reject.