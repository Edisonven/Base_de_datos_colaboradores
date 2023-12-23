import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import BaseColaboradores from "./Colaboradores";

function App() {
  const [error, setError] = useState("");
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
          error={error}
          registrado={registrado}
          setError={setError}
          setRegistrado={setRegistrado}
        />
      </div>
    </div>
  );
}

export default App;
