import style from "./root.module.css";
import { Outlet } from "react-router-dom";
import { Nav } from "./widgets";
export default function Root() {
  return (
    <div className={style.main}>
      <Nav />
      <div className={style.main__content}>
        <Outlet />
      </div>
    </div>
  );
}
