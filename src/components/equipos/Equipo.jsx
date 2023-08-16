import hexToRgba from "hex-to-rgba";
import Trabajador from "../trabajador/Trabajador";
import "./equipos.css";

const Equipo = (props) => {
  const { titulo, colorPrimario, colorSecundario, id } = props.datos;
  const { colaboradores, removerColaborador, actualizarColor, giveLike, fav } =
    props;

  const colorAUtulizar = hexToRgba(colorPrimario, 0.4);
  if (props.colaboradores.length > 0) {
    return (
      <section
        className="equipo__container"
        style={{ backgroundColor: `${colorAUtulizar}` }}
      >
        <input
          type="color"
          className="color__input"
          value={colorPrimario}
          onChange={(event) => actualizarColor(event.target.value, id)}
        ></input>
        <h3
          className="equipo__titulo"
          style={{ borderBottom: `3px solid ${colorPrimario}` }}
        >
          {titulo}
        </h3>

        <div className="colaborador__container">
          {colaboradores.map((e, i) => {
            return (
              <Trabajador
                colorPrimario={colorPrimario}
                key={i}
                id={e.id}
                nombre={e.nombre}
                foto={e.foto}
                puesto={e.puesto}
                removerColaborador={removerColaborador}
                fav={e.fav}
                giveLike={giveLike}
              ></Trabajador>
            );
          })}
        </div>
      </section>
    );
  }
};

export default Equipo;
