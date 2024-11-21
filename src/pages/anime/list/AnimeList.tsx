import { IGetAnime } from "@/api/anime/anime";
import { useLoaderData } from "react-router-dom";

export default function AnimeList() {
    const anime = useLoaderData() as IGetAnime[]
    console.log(anime)
    return <div>
        Anime list
    </div>;
}