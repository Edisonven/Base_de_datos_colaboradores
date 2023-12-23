import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import BaseColaboradores from "./Colaboradores";
import Alerta from "./components/Alert";

function App() {
  const [errores, setErrores] = useState("");
  const [registrado, setRegistrado] = useState("");

  return (
    <div className="container">
      <div>
        <h1 className="titulo">Agregar Colaborador</h1>
        <Buscador />
        <Listado listadoUsuarios={BaseColaboradores} />
      </div>
      <div className="container__formulario">
        <Formulario
          errores={errores}
          registrado={registrado}
          setErrores={setErrores}
          setRegistrado={setRegistrado}
        />
        {errores ? <Alerta color="danger" mensajeAlerta={errores} /> : null}
        {registrado ? (
          <Alerta color="success" mensajeAlerta={registrado} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
