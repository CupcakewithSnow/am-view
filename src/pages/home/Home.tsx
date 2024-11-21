import { useQuery } from "@tanstack/react-query";
import style from "./home.module.css";
import { getRecommendations } from "@/api/recommendations/recommendations";
import Recommendations from "./recommendations/Recommendations";
import Viewed from "./viewed/Viewed";
export default function Home() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["recommendations"],
    queryFn: () => getRecommendations()
  })

  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>error</div>
  }

  return (
    <div className={style.home}>
      <Recommendations recommendation={data ?? []} />
      <Viewed />
    </div>
  )
}
