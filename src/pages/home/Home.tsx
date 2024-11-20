import { useLoaderData } from "react-router-dom";
import { IGetRecommendations } from "../../api/recommendations/recommendations";
import Recommendations from "./recommendations/Recommendation";

export default function Home() {
  const recommendation = useLoaderData() as IGetRecommendations[]

  return (
    <div>
      <Recommendations recommendation={recommendation} />
    </div>
  )
}
