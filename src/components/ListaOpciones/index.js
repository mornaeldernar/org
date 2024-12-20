import './ListaOpciones.css';

const ListaOpciones = (props) => {

    const manejarCambio = (e) => {
        props.setValor(e.target.value)
        console.log("cambio", e.target.value)
    }

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.value} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden selected>Seleccionar equipo</option>
            {
                props.equipos.map( (dato, index) => { 
                    return <option key={index} value={dato}>
                        {dato}
                    </option> 
                })
            }            
        </select>
    </div>
}

export default ListaOpciones;