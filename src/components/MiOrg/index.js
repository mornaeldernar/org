import './MiOrg.css'

const MiOrg = (props) => {
    
    return <section className='orgSection'>
        <h3 className='title'>Mi Organización</h3>
        <img src="/img/add.png" alt="agregar" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;