import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Alerta from "./Alert";
import BaseColaboradores from "../Colaboradores";
import "./Formulario.css";

function Formulario({ errores, registrado, setErrores, setRegistrado }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const [listadoUsuario, setListaUsuario] = useState(BaseColaboradores);

  // Variables que guardan el valor de los input del formulario
  const inputNombre = (e) => {
    setNombre(e.target.value);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputEdad = (e) => {
    setEdad(e.target.value);
  };
  const inputCargo = (e) => {
    setCargo(e.target.value);
  };
  const inputTelefono = (e) => {
    setTelefono(e.target.value);
  };

  //Condicionales para Alert
  const registrarse = (e) => {
    e.preventDefault();
    //Condicional para alerta del input nombre
    if (nombre === "") {
      return setErrores("Ingrese su nombre");
    }
    //Condicional para alerta del input email
    else if (!validEmail.test(email) && email.length == 0) {
      return setErrores("Ingrese un correo valido");
    }
    //Condicional para alerta del input edad
    else if (edad === "") {
      return setErrores("Ingrese su Edad");
    }
    //Condicional para alerta del input Cargo
    else if (cargo === "") {
      return setErrores("Ingrese su Cargo");
    }
    //Condicional para alerta del input Telefono
    else if (telefono.length <= 5) {
      return setErrores("Ingrese un numero de telefono valido");
    }
    //Condicional para alerta de registrado exitoso
    else if (
      nombre.length > 4 &&
      email.length != "" &&
      edad > 0 &&
      cargo != "" &&
      telefono.length >= 6
    ) {
      setRegistrado("!!!Colaborador registrado con exito¡¡¡");
      setErrores("");
      setListaUsuario([
        ...listadoUsuario,
        {
          id: listadoUsuario.length + 1,
          nombre: nombre,
          correo: email,
          edad: edad,
          cargo: cargo,
          telefono: telefono,
        },
      ]);
      setNombre("");
      setEmail("");
      setEdad("");
      setCargo("");
      setTelefono("");
    }
  };

  return (
    <div>
      <h1>Agregar colaborador</h1>
      <form className="formulario" onSubmit={registrarse}>
        <InputGroup size="sm" value={nombre} onChange={inputNombre}>
          <Form.Control
            placeholder="Nombre del Colaborador"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" value={email} onChange={inputEmail}>
          <Form.Control
            type="email"
            placeholder="Email del Colaborador"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" value={edad} onChange={inputEdad}>
          <Form.Control
            type="number"
            placeholder="Edad del Colaborador"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" value={cargo} onChange={inputCargo}>
          <Form.Control
            placeholder="Cargo del Colaborador"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="sm" value={telefono} onChange={inputTelefono}>
          <Form.Control
            type="number"
            placeholder="Telefono del Colaborador"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <Button bg="primary" size="sm" type="submit">
          Agregar Colaborador
        </Button>
      </form>
    </div>
  );
}

export default Formulario;
