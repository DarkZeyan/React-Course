//Desestructuracion de arreglos.

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// La desestructuracion de arreglos se hace con corchetes.
// Se colocan comas para indicar que los elementos deben
// salt
const [, , p3] = personajes;
console.log(p3);


const retornaArreglo = ()=>{
    return ['ABC',123];
}

const [letras,numeros]=retornaArreglo();
console.log(letras,numeros);

//Tarea
//1 El primer valor del arreglo se llamara nombre
//2 Se llamara setNombre.

const  useState = (valor) =>{
    return [valor,()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre] = useState('Goku');

console.log(nombre);
setNombre();