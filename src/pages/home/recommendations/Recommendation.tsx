import { IGetRecommendations } from "src/api/recommendations/recommendations"
import style from "./recommendation.module.css"

interface IRecommendationProps {
    recommendation: IGetRecommendations[]
}
export default function Recommendations(props: IRecommendationProps) {
    return <div className={style.recommendations}>
        {props.recommendation.map((recommendation) => (
            <div className={style.recommendation} key={recommendation.id}>{recommendation.name}</div>
        ))}
    </div>
}