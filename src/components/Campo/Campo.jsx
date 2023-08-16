import "./Campo.css";

const Campo = (props) => {
  const { type = "text" } = props;

  const actualizarValor = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <>
      <label className="campo__label" htmlFor={props.label}>
        {props.nombre}
      </label>
      <input
        type={type}
        required={props.required}
        autoFocus={props.autoFocus}
        className={`campo__input campo-${type}`}
        id={props.label}
        value={props.value}
        onChange={actualizarValor}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default Campo;
