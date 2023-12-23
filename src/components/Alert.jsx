import Alert from "react-bootstrap/Alert";

const FormAlert = ({ variant, exito, errores }) => {
  return (
    <>
      <Alert className="bootstrap-alert" variant={variant}>
        {exito}
        {errores}
      </Alert>
    </>
  );
};

export default FormAlert;
