//Los hooks se importan desde react. Siempre deben de usar el use.
import {useState} from 'react'

import PropTypes from 'prop-types';

//El redibujo de la pagina se hace con el uso del hook de useState.

const CounterApp = ({value}) =>{
    //El uso de este hook es es la desestructuracion del retorno de la funcion useState.
    const [counter,setCounter] = useState(value);

    const handleAdd =() =>{
        // console.log(event)

        setCounter(counter+1);
        // setCounter((c)=>c+1);
    }
    return(
        <>

        <h1>CounterApp</h1>
        <p> { counter } </p>


        <button onClick={handleAdd}>+1</button>
        </>
    )

} 

export default CounterApp;

CounterApp.propTypes = {
    value:PropTypes.number.isRequired
}