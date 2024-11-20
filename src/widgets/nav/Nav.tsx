import { Link } from "react-router-dom";
import style from "./nav.module.css";
import { InputText } from "../../shared/inputs";
export function Nav() {
  return (
    <div className={style.nav}>
      <div className={style.links}>
        <Link to={`home`}>Home</Link>
      </div>
      <div className={style.search}>
        <InputText placeholder="Поиск" />
      </div>
    </div>
  );
}
