import { IGetRecommendations } from "src/api/recommendations/recommendations"
import style from "../home.module.css"

interface IRecommendationProps {
    recommendation: IGetRecommendations[]
}
export default function Recommendations(props: IRecommendationProps) {
    return <div className={style.blocks}>
        {props.recommendation.map((recommendation) => (
            <div className={style.block} key={recommendation.id}>{recommendation.name}</div>
        ))}
    </div>
}