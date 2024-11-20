import baseStyle from "./inputs.module.css";
interface InputTextProps {
  placeholder: string;
}

export function InputText(props: InputTextProps) {
  return (
    <input type="text" className={baseStyle.baseInput} placeholder={props.placeholder} />
  );
}
