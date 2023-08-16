import "./button.css";

const Button = (props) => {
  return (
    <button onClick={props.formHandler} className="button__comp">
      {props.children}
    </button>
  );
};

export default Button;
