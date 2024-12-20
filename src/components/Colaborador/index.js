import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = (props) => {
    const {nombre,puesto,foto,equipo,id,fav} = props.datos;
    const { colorPrimario,eliminarColaborador,like } = props; 
    const estiloEncabezado = { backgroundColor : colorPrimario}
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)} />
        <div className="encabezado" style={estiloEncabezado}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {
                fav ?
                <AiFillHeart color="red" onClick={()=>like(id)}/> :
                <AiOutlineHeart className="icono" onClick={()=>like(id)}/>
            }
        </div>
    </div>
}

export default Colaborador;