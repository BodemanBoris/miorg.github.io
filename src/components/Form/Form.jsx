import { useState } from "react";
import Campo from "../Campo/Campo";
import Button from "../Button/Button";
import LabelSelect from "../label/Label-select";
import "./form.css";

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [titulo, setTitulo] = useState("");
  const [equipo, setEquipo] = useState("");
  const [color, setColor] = useState("");

  const { equipos, crearEquipo } = props;

  const formHandler = (e) => {
    e.preventDefault();
    const datosAEnviar = {
      nombre,
      puesto,
      foto,
      titulo,
    };
    props.registrarColaborador(datosAEnviar);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo: equipo, colorPrimario: color });
  };

  return (
    <>
      <section className="form__container">
        <form action="" className="form__colabo" onSubmit={formHandler}>
          <h2 className="titulo__form">Hola perrito</h2>
          <Campo
            required={true}
            autoFocus={true}
            label={"nombre"}
            nombre={"Nombre"}
            value={nombre}
            actualizarValor={setNombre}
            placeholder="Ingrese el nombre"
          ></Campo>

          <Campo
            required={true}
            label={"puesto"}
            nombre={"Puesto"}
            value={puesto}
            actualizarValor={setPuesto}
            placeholder="Ingrese el puesto"
          ></Campo>

          <Campo
            required={true}
            label={"urlImg"}
            nombre={"Url de imagen"}
            value={foto}
            actualizarValor={setFoto}
            placeholder="Ingrese la url de la Foto"
          ></Campo>

          <LabelSelect
            htmlFor={"select"}
            equipos={equipos}
            valor={titulo}
            required={true}
            actualizarValor={setTitulo}
          ></LabelSelect>

          <Button>{"Crear Asociado"}</Button>
        </form>

        <form action="" className="form__colabo" onSubmit={manejarNuevoEquipo}>
          <h2 className="titulo__form">Hola perrito</h2>
          <Campo
            required={true}
            autoFocus={true}
            label={"Equipo"}
            nombre={"equipo"}
            value={equipo}
            actualizarValor={setEquipo}
            placeholder="Ingrese el Equipo"
          ></Campo>

          <Campo
            type={"color"}
            required={true}
            label={"color"}
            nombre={"Color"}
            value={color}
            actualizarValor={setColor}
            placeholder="Ingrese el color"
          ></Campo>

          <Button>{"Crear Equipo"}</Button>
        </form>
      </section>
    </>
  );
};

export default Form;
