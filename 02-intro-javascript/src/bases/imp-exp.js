//El método find() devuelve el valor del primer elemento
//del array que cumple la función de prueba proporcionada.
// import {heroes} from './data/heroes'
// import {heroes} from './data/heroes';
import heroes, {owners} from "../data/heroes";
//Con exportaciones default se pueden importar con el nombre que deseemos.
// const getHeroeById = (id) =>{
//     return heroes.find(x=>x.id==id);
// }

console.log(owners);
const getHeroeById = (id) =>(heroes.find(x=>x.id==id));

console.log(getHeroeById(2));
//find no sirve porque solo retorna uno. filter funciona igual pero retorna varios.
const getHeroesByOwner = ( owner )=> heroes.filter(x=>x.owner==owner);
console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner('Marvel'));