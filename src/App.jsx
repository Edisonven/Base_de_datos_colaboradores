import BaseColaboradores from "./Colaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import FormAlert from "./components/Alert";
import Buscador from "./components/Buscador";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [listaColaboradores, setListaColaboradores] =
    useState(BaseColaboradores);
  const [errores, setErrores] = useState(false);
  const [exito, setExito] = useState("");
  const [searchPerson, setSearchPerson] = useState("");
  const [formValue, setFormValue] = useState({
    id: "",
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });
  const nuevaBaseDatos = [...listaColaboradores, formValue];
  const buscarColaborador = (event) => {
    setSearchPerson(event.target.value);
    if (event.target.value === "") {
      setListaColaboradores(listaColaboradores);
    } else {
      const results = [...nuevaBaseDatos].filter((colaborador) =>
        colaborador.nombre
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase())
      );
      console.log(results);
      setListaColaboradores(results);
    }
  };

  return (
    <div className="container">
      <div className="listado__container">
        <h1>Lista de colaboradores</h1>
        <Buscador
          searchPerson={searchPerson}
          buscarColaborador={buscarColaborador}
        ></Buscador>
        <Listado
          listaColaboradores={listaColaboradores}
          setListaColaboradores={setListaColaboradores}
          setSearchPerson={setSearchPerson}
        ></Listado>
      </div>
      <div>
        <Formulario
          listaColaboradores={listaColaboradores}
          setListaColaboradores={setListaColaboradores}
          errores={errores}
          setExito={setExito}
          setErrores={setErrores}
          exito={exito}
          nuevaBaseDatos={nuevaBaseDatos}
          formValue={formValue}
          setFormValue={setFormValue}
        ></Formulario>
        {errores ? (
          <FormAlert
            variant="danger"
            errores={errores}
            setErrores={setErrores}
          ></FormAlert>
        ) : null}
        {exito ? (
          <FormAlert
            variant="success"
            exito={exito}
            setExito={setExito}
          ></FormAlert>
        ) : null}
      </div>
    </div>
  );
}

export default App;
