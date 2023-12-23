import { useState } from "react";
import BaseColaboradores from "../Colaboradores";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import './Buscador.css'

function Buscador() {
    const [filtrarNombre, setFiltrarNombre] = useState("");
    const [listadoUsuario, setListaUsuario] = useState(BaseColaboradores)

    // Constante que obtiene el nombre del input buscador
    const filtrar = (e) => {
        setFiltrarNombre(e.target.value)
    }
    // Variable que guarda un array con las propiedades del nombre del input buscador
    const filtroId = listadoUsuario.filter((usu) => usu.nombre === filtrarNombre)
       
  return (
    <>
    <section className="buscador">
    <InputGroup className="mb-3" onChange={filtrar}>
      <InputGroup.Text >Busqueda</InputGroup.Text>
      <Form.Control 
      aria-label="First name"
       />
    </InputGroup>
    <Table striped bordered hover variant="dark" size="lg"> 
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody id="tabla-buscador">
            {filtroId.map(usu => 
            <tr key={usu.id}>
            <td>{usu.nombre}</td>
            <td>{usu.correo}</td>
            <td>{usu.edad}</td>
            <td>{usu.cargo}</td>
            <td>{usu.telefono}</td>
            </tr>)}
        </tbody>
      </Table>
      </section>
    </>
  );
}

export default Buscador;