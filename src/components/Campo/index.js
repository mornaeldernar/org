import { useState } from 'react';
import './Campo.css';

const Campo = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    const {type = 'text', required, valor} = props;

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo.toUpperCase()}</label>
        <input 
            type={type}
            placeholder={placeholderModificado} 
            required={required} 
            value={valor}
            onChange={manejarCambio}
            />
    </div>;
}

export default Campo;