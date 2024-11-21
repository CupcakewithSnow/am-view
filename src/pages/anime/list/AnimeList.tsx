import { getAnime } from "@/api/anime/anime";
import { useQuery } from "@tanstack/react-query";

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

    return <div>
        {data && data.map((anime) => (<div key={anime.id}>{anime.name}</div>))}
    </div>;
}