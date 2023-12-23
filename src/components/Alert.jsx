import Alert from 'react-bootstrap/Alert';

function Alerta({color, mensajeAlerta}) {
  return (
    <>
        <Alert className="alerta" variant={color}>
          {mensajeAlerta}
        </Alert>
    </>
  );
}

export default Alerta;