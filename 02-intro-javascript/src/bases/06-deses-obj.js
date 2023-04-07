//Desestructuracion de objetos.
// Tambien se conoce como Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
};


// Aqui entra en juego.
//Si hay una variable con el mismo nombre se puede renombrar utilizando : nombreNuevo
// const {nombre:nombre2} = persona;
// const {nombre,edad,clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
// console.log(persona.edad);
// console.log(persona.clave);


//Desestructuracion en el argumento, es muy utilizado

// Si la propiedad existe se utiliza la del objeto, caso contrario
// Se utiliza el valor por defecto Ejemplo: Rango  = 'Capitan'
const Context = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    // console.log(persona);

    // const {nombre,edad,clave} = persona; 

    // console.log(nombre,edad,clave);
    // console.log(nombre, edad, rango);

    return {
        nombreClave:clave,
        anios: edad,
        latlng:{
            lat:14.4398893,
            lng: -13.32323
        }
    }
}
//Extraer objetos anidados y asignarlos a constantes.
//Esto casi no se usa  entonces se usa la sintaxis de abajo
// const {nombreClave,anios,latlng:{lat,lng}} = Context(persona);
const {nombreClave,anios,latlng} = Context(persona);
const {lat,lng} = latlng;
console.log(nombreClave,anios);
console.log(lat,lng);