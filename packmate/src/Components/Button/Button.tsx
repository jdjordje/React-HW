import "./Button.css";

interface ButtonProp {
  text: string;
  onClickBtn: () => void;
}

function Button({ text, onClickBtn }: ButtonProp) {
  return (
    <button className="Button" onClick={onClickBtn}>
      {text}
    </button>
  );
}

export default Button;
