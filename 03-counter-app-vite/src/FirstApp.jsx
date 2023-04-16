import PropTypes from 'prop-types'


// Si este valor no se cambia debe de estar fuera dle functional component.


// const newMessage = {
//   message:'Hola Mundo',
//   title:'Jorge'
// };

// const getSaludo= (nombre) => `Hola ${nombre}`;
//Esto es util ya que react no necesitara reprocesarlo ya que esta fuera del componente.

// Los props ya no se utilizan ya que 
// ahora se utiliza la desestructuracion.
// export const FirstApp = ({title = ' Hola soy Zeyan'}) => {




export const FirstApp = ({title,subTitle}) => {


// console.log(props);

  // if(!title){
  //   throw new Error('El title no existe');
  // }

  return (
    <>
    {/* Insercion de codigo/variables en html */}
    {/* Si necesitamos enviar el objeto
    podemos usar la expresion JSON.stringify ya que no podemos imprimir el objeto directamente. 
    No pueden ser  funciones asincronas debido a que estas esperan objetos de tipo promesa*/}
      {/* <h1>{getSaludo('Valentina')}</h1> */}
      <h1>{title}</h1>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>{subTitle}</p>
      </>
  )
}

//Los proptypes nos ayuda a que otros developers detecten errores
//al usar nuestros componentes.
//Con isRequired nos obliga a ser utilizado.
FirstApp.propTypes = {
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.number.isRequired,
}
