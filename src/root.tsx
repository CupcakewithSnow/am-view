import style from "./root.module.css"
import {Link, Outlet} from "react-router-dom";
export default function Root() {
    return (
        <div className={style.main}>
            <div className={style.main__left_side}>
                <div className={style.search}>
                </div>
                <div className={style.menu}>
                    <Link to={`home`}>Home</Link>
                </div>
            </div>
            <div className={style.main__right_side}>
                <Outlet/>
            </div>
        </div>
    )
}