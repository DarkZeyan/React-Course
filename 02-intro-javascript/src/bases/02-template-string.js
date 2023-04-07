const nombre = 'Jorge';
const apellido = 'Bugarini';

// const nombreCompleto =  nombre+' '+apellido;
// const nombreCompleto = `Hola mundo`; //Nombre del caracter =  backticks.

// const nombreCompleto = `
// ${nombre}
// ${apellido}
// ${1+1}
// `;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);



function getSaludo(nombre){
    return 'Hola Mundo ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)