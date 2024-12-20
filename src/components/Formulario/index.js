import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color,setColor] = useState("");

    const { registrarColaborador, equipos, crearEquipo }=props

    const manejarNuevoColaborador = (e) => {
        e.preventDefault();
        registrarColaborador({nombre,puesto,foto,equipo});
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({titulo,colorPrimario:color});
    }

    return <section className='formulario'>
        <form onSubmit={manejarNuevoColaborador}>
            <h2>Rellena el formulario para crear al colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} setValor={setNombre} />
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} setValor={setPuesto} />
            <Campo titulo="Foto" placeholder="Ingresar enlace de la foto" valor={foto} setValor={setFoto}/>
            <ListaOpciones valor={equipo} setValor={setEquipo} equipos={equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear al equipo.</h2>
            <Campo titulo="Titulo" placeholder="Ingresar titulo" required valor={titulo} setValor={setTitulo} />
            <Campo titulo="Color" type="color"  placeholder="Ingresar el color en Hex" required valor={color} setValor={setColor} />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}
export default Formulario