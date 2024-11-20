import { useLoaderData } from "react-router-dom";
import { IGetRecommendations } from "../../api/recommendations/recommendations";
import Recommendations from "./recommendations/Recommendations";
import Viewed from "./viewed/Viewed";
import style from "./home.module.css";
export default function Home() {
  const recommendation = useLoaderData() as IGetRecommendations[]

  return (
    <div className={style.home}>
      <Recommendations recommendation={recommendation} />
      <Viewed />
    </div>
  )
}
