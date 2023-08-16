import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./trabajador.css";

const Trabajador = (props) => {
  const { removerColaborador, id, giveLike, fav } = props;

  return (
    <div className="trabajador__container">
      <div>
        <AiFillCloseCircle
          className="close__icon"
          onClick={() => removerColaborador(id)}
        ></AiFillCloseCircle>
      </div>
      <div
        className="trabajador__img-container"
        style={{ backgroundColor: `${props.colorPrimario}` }}
      >
        <img
          className="trabajador__img"
          src={props.foto}
          alt={`Avatar de ${props.nombre}`}
        />
      </div>
      <div className="trabajador__info">
        <h2>{props.nombre}</h2>
        <p className="trabajado__puesto">{props.puesto}</p>
        {fav ? (
          <AiFillHeart color="red" onClick={() => giveLike(id)} />
        ) : (
          <AiOutlineHeart onClick={() => giveLike(id)} />
        )}
      </div>
    </div>
  );
};

export default Trabajador;
