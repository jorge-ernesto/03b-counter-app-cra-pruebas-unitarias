// Importar librerias
import React from 'react';
import PropTypes from 'prop-types';

// Declarar variables
const newMessage = {
    message: 'Hola Mundo',
    title: 'Fernando'
};
const getResult = () => {
    return 4 + 4;
}

export const FirstApp = ({ title = 'No hay titulo', subTitle = 'No hay subtitulo', name = 'Fernando Herrera' }) => {

    // Debug
    // console.log('debug', { title, subTitle, name });

    // Validar props
    // if (!title || typeof title !== 'string') {
    //     throw new Error('La variable title no existe');
    // }
    // if (!subTitle || typeof subTitle !== 'number') {
    //     throw new Error('La variable subTitle no existe');
    // }

    /****************** Respuesta ******************/

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subTitle}</p>
            <p>{subTitle}</p>
            <p>{name}</p>
            <hr />

            <h2>{getResult()}</h2>
            <hr />

            <h1>Fernando</h1>
            <code>{JSON.stringify(newMessage)}</code>
            <p>Soy un subtitulo</p>
        </>
    );
}

// Validar props
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}
