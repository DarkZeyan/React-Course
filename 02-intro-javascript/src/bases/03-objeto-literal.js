//Objetos literales

//Evitar caracteres especiales debido a problemas con charsets.

//Se estandariza que las propiedades se interpreten
//alfabeticamente por el navegador.
const persona = {
    nombre:'Yoyi',
    apellido:'Nator',
    edad: 20,
    direccion:{
        ciudad:'Chihuahua',
        zip:31300,
        lat:10.23233,
        lng:34.34343,
    }
};
//Cuando se declara cualquier variable, funcion u objeto en javascript
// se genera su prototype el cual contiene sus metodos y funciones basicos.
//es decir tiene todas las propiedades implicitas de todos los objetos

//Los objetos literales son diccionarios tambien en otros lenguajes
// de programacion.
console.log(persona);
// console.log({persona:persona}); //Debido a ecmascript se puede obviar
// console.log({persona}); //se evita y el resultado es el mismo.

// console.table(persona);

//No se almacena el valor de la persona sino la referencia al objeto.
//Esto funciona igual que otros paradigmas de objetos.
// const persona2 = persona;
// persona2.nombre='Peter';
//Es el mismo objeto, se altero el objeto original. Jamas se debe hacer
//este tipo de asignaciones al igual que en otros lenguajes.

// console.log(persona2);
// console.log(persona);



//Si se desea crear un clon entonces se introducen nuevas propiedades.
//Los clones se hacen utilizando las llaves d enuevo objeto
// y colocando ... el nombre de la referencia del objeto.
const persona2 = { ...persona};
persona2.nombre='Peter';
console.log(persona2)
