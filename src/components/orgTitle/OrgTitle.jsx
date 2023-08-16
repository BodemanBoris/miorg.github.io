import "./OrgTitle.css";
const OrgTitle = (props) => {
  const { visibleHandler } = props;

  return (
    <div className="form__divisor">
      <h2 className="form__title">Mi Organizacion</h2>
      <img
        onClick={visibleHandler}
        className="agregar__img"
        src="./botonAgregar.png"
        alt="boton para agregar colaborador"
      />
    </div>
  );
};

export default OrgTitle;
