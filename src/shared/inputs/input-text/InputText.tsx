import style from "./inputs.module.css";
interface InputTextProps {
  placeholder: string;
}

export function InputText(props: InputTextProps) {
  return (
    <input type="text" className={style.textInput} placeholder={props.placeholder} />
  );
}
