import "./Label-select.css";

const LabelSelect = (props) => {
  const actualizarValor = (e) => {
    props.actualizarValor(e.target.value);
  };
  return (
    <>
      <label className="campo__label" htmlFor="select">
        {"Seleccionar Equipo"}
      </label>
      <select
        id="select"
        required={props.required}
        className="select__comp"
        value={props.valor}
        onChange={actualizarValor}
      >
        <option value="" default="value" disabled hidden>
          {" "}
          Seleccionar equipo
        </option>
        {props.equipos.map((e, i) => {
          return (
            <option titulo={e.titulo} key={i}>
              {e.titulo}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default LabelSelect;
