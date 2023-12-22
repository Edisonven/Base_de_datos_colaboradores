import Table from 'react-bootstrap/Table';


function Listado({listadoUsuarios}) {
    const listadoUsuarioRender = listadoUsuarios
    
    return (
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
        <tbody>
            {listadoUsuarioRender.map(usu => 
            <tr key={usu.id}>
            <td>{usu.nombre}</td>
            <td>{usu.correo}</td>
            <td>{usu.edad}</td>
            <td>{usu.cargo}</td>
            <td>{usu.telefono}</td>
            </tr>)}
        </tbody>
      </Table>
    );
  }


export default Listado;