import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import OrgTitle from "./components/orgTitle/orgTitle.jsx";
import Footer from "./components/footer/Footer.jsx";
import Equipo from "./components/equipos/Equipo.jsx";
import "./app.css";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Boris Bodeman",
      puesto: "Desarrollador",
      foto: "https://avatars.githubusercontent.com/u/99201503?v=4",
      titulo: "Front End",
      fav: true,
    },
    {
      id: uuid(),
      nombre: "Miguel Angel Duran",
      puesto: "Software Engineer",
      foto: "https://unavatar.io/midudev",
      titulo: "DevOps",
      fav: false,
    },
    {
      id: uuid(),
      nombre: "Mauricio Davis",
      puesto: "Capacitador",
      foto: "https://unavatar.io/mouredev",
      titulo: "Mobile",
      fav: false,
    },
    {
      id: uuid(),
      nombre: "Goncy Dev",
      puesto: "Maquetador",
      foto: "https://unavatar.io/miguelsousa",
      titulo: "UX y Diseño",
      fav: false,
    },
    {
      id: uuid(),
      nombre: "Carmen Barbieri",
      puesto: "Cantante",
      foto: "https://unavatar.io/carmen",
      titulo: "Front End",
      fav: false,
    },
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Programacíon",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Back End",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Mobile",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovacíon y Gestíon",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const visibleHandler = (e) => {
    setVisible(!visible);
  };

  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const removerColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
  };

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    setEquipos(equiposActualizados);
  };

  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
    console.log("NUEVO ", equipos);
  };

  const giveLike = (id) => {
    console.log("Like", id);
    const actualizarFav = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColor(actualizarFav);
  };

  return (
    <>
      <Header></Header>
      {visible && (
        <Form
          equipos={equipos}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        ></Form>
      )}
      <OrgTitle visibleHandler={visibleHandler}></OrgTitle>
      {equipos.map((e, i) => {
        return (
          <Equipo
            id={e.id}
            key={i}
            datos={e}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.titulo === e.titulo
            )}
            removerColaborador={removerColaborador}
            actualizarColor={actualizarColor}
            giveLike={giveLike}
          ></Equipo>
        );
      })}
      <Footer></Footer>
    </>
  );
};

export default App;
