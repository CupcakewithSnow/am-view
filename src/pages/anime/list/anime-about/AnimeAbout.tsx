import style from "./animeAbout.module.css"
interface IAnimeAboutProps {
    id: number
    img: string
    name: string
    description: string
}

const AnimeAbout = (props: IAnimeAboutProps) => {
    return (
        <div className={style.card}>
            <div className={style.img}><img src={props.img} /></div>
            <div className={style.about}>
                <div>{props.name}</div>
                <div>{props.description}</div>
            </div>
        </div>
    )
}
export default AnimeAbout