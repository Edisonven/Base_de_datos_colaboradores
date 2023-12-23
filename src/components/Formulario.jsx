import Button from "react-bootstrap/Button";
import "./Formulario.css";

const Formulario = ({
  setListaColaboradores,
  setExito,
  setErrores,
  setFormValue,
  formValue,
  nuevaBaseDatos,
}) => {
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validNombre = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;

  const enviarFormulario = (submit) => {
    submit.preventDefault();
    //Condicional que evalúa  que el campo no esté vacío
    if (
      formValue.nombre === "" &&
      formValue.correo === "" &&
      formValue.edad === "" &&
      formValue.cargo === "" &&
      formValue.telefono === ""
    ) {
      return setErrores("¡Completa todos los campos!"), setExito("");
      //Condicional que evalúa que el nombre no esté vacío
    } else if (formValue.nombre === "") {
      return setErrores("Ingrese su nombre");
      //Condicional que evalúa que el nombre tenga formato válido
    } else if (!validNombre.test(formValue.nombre)) {
      return setErrores("Formato de nombre invalido (ingrese solo letras)");
      //Condicional que evalúa que el nombre no esté vacío
    } else if (formValue.correo === "") {
      return setErrores("Ingrese su correo");
      //Condicional que evalúa que el mail sea válido y además que el campo no esté vacío
    } else if (!validEmail.test(formValue.correo)) {
      return setErrores("formato de correo inválido");
      //Condicional que evalúa que la edad no esté vacía
    } else if (formValue.edad === "") {
      return setErrores("Ingrese su edad");
      //Condicional que evalúa que el cargo no esté vacío
    } else if (formValue.cargo === "") {
      return setErrores("Ingrese su cargo");
      //Condicional que evalúa un mínimo de caracteres para número telefónico
    } else if (formValue.telefono.length < 9) {
      return setErrores("Ingrese su número de teléfono completo");
    } else {
      setExito("¡Usuario añadido con éxito!");
    }
    //Reseteando errores al no cumplirse las condiciones de arriba
    setErrores("");
    //Reseteando valores en inputs
    setFormValue({
      id: "",
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
    setListaColaboradores(nuevaBaseDatos);
  };

  const updateForm = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form
        className="container__formulario"
        onSubmit={(e) => enviarFormulario(e)}
      >
        <h1>Agregar colaborador</h1>
        <input
          type="text"
          placeholder="Nombre del colaborador"
          name="nombre"
          value={formValue.nombre}
          onChange={updateForm}
        />
        <input
          type="text"
          placeholder="Mail del colaborador"
          name="correo"
          value={formValue.correo}
          onChange={updateForm}
        />
        <input
          type="number"
          placeholder="Edad del colaborador"
          name="edad"
          value={formValue.edad}
          onChange={updateForm}
        />
        <input
          type="text"
          placeholder="Cargo del colaborador"
          name="cargo"
          value={formValue.cargo}
          onChange={updateForm}
        />
        <input
          type="number"
          placeholder="Teléfono del colaborador"
          name="telefono"
          value={formValue.telefono}
          onChange={updateForm}
        />
        <Button type="submit">
          Agregar colaborador
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
