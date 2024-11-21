import { getAnime } from "@/api/anime/anime";
import { useQuery } from "@tanstack/react-query";
import AnimeAbout from "./anime-about/AnimeAbout";
import style from "./animeList.module.css";
export default function AnimeList() {
    const { isLoading, data, error } = useQuery({
        queryKey: ["anime"],
        queryFn: () => getAnime()
    })

    if (isLoading) {
        return <div>Loading</div>
    }

    if (error) {
        return <div>error</div>
    }

    return <div className={style.list}>
        {data && data.map((anime) => (
            <AnimeAbout key={anime.id} id={anime.id} img={anime.img} name={anime.name} description={anime.description} />
        ))}
    </div>;
}