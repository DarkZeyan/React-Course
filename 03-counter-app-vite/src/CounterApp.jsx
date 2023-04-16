//Los hooks se importan desde react. Siempre deben de usar el use.
import {useState} from 'react'

import PropTypes from 'prop-types';

//El redibujo de la pagina se hace con el uso del hook de useState.

export const CounterApp = ({value}) =>{
    //El uso de este hook es es la desestructuracion del retorno de la funcion useState.
    const [counter,setCounter] = useState(value);

    const handleAdd =() =>{
        // console.log(event)

        setCounter(counter+1);
        // setCounter((c)=>c+1);
    }

    const handleSubstrac = () =>setCounter(counter-1);
    1
    const handleReset = () => setCounter(value);
       
    
    return(
        <>

        <h1>CounterApp</h1>
        <p> { counter } </p>


        <button onClick={handleAdd}> +1 </button>
        <button onClick={handleSubstrac}> -1 </button>
        <button onClick={handleReset}> Reset counter </button>
        </>
    )

} 



CounterApp.propTypes = {
    value:PropTypes.number.isRequired
}