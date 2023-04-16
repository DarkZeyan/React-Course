import PropTypes from 'prop-types'

const CounterApp = ({value}) =>{

    return(
        <>

        <h1>CounterApp</h1>
        <p>{value}</p>

        </>
    )

} 

export default CounterApp;

CounterApp.propTypes = {
    value:PropTypes.number.isRequired
}