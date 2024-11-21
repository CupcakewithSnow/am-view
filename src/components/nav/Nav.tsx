import { Link } from "react-router-dom";
import style from "./nav.module.css";
import { InputText } from "../../shared/inputs";
export function Nav() {
  return (
    <div className={style.nav}>
      <div className={style.links}>
        <Link className={style.link} to={`/`}>Home</Link>
        <Link className={style.link} to={`anime`}>Anime</Link>
      </div>
      <div className={style.search}>
        <InputText placeholder="Поиск" />
      </div>
    </div>
  );
}
