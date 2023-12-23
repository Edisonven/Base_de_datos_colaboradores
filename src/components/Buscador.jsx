import Form from "react-bootstrap/Form";
const Buscador = ({ searchPerson, buscarColaborador }) => {
  return (
    <>
      <Form.Control
        className="buscador"
        placeholder="Buscar colaborador"
        value={searchPerson}
        onChange={buscarColaborador}
      />
    </>
  );
};

export default Buscador;
