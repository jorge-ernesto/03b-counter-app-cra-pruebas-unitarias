import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

/******************/

export const CounterApp = ({ value }) => {

    // Declarar hooks
    const [counter, setCounter] = useState(value);

    // Declarar funciones
    const handleTest = (event) => {
        console.log('event', event);
    }
    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    /******************/

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={(event) => handleTest(event)}>Test</button>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
        </>
    );
}

// Validar props
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
