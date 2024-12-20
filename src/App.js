import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Formulario from './components/Formulario';
import Header from './components/Header'
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar ] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]);// Lista de equipos
  const [equipos,actualizarEquipos] = useState([
    {
      id:uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278"
    },
    {
      id:uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA"
    },
    {
      id:uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157"
    },
    {
      id:uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69"
    },
    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF"
    },
    {
      id:uuid(),
      titulo:"Móvil",
      colorPrimario:"#FFBA05"
    },
    {
      id:uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29"
    }
  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores,colaborador]);
  }

  const crearEquipo = (nuevoEquipo) => {

    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}]);
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, titulo) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.titulo === titulo) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      { 
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        /> }
      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo,index) => <Equipo 
          datos={equipo} 
          key={index}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        /> )
      }
      <Footer/>
    </div>
  );
}

export default App;
