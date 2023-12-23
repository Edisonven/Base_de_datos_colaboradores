import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador';
import BaseColaboradores from './Colaboradores';

function App() {
  const [error, setError] = useState("");
  const [registrado, setRegistrado] = useState("");
  
  return (
    <>
      <h1 className='titulo'>Agregar Colaborador</h1>
      <Formulario
      error={error} 
      registrado={registrado}
      setError={setError}
      setRegistrado={setRegistrado}/>
      <Listado listadoUsuarios={BaseColaboradores}/>
      <Buscador/>
    </>
  )
}

export default App
