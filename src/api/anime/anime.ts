export interface IGetAnime {
    id: number;
    name: string;
}

export function getAnime(): Promise<IGetAnime[]> {
    console.log("job started anime")
    let result: IGetAnime[] = [
        { id: 1, name: "Anime 1" },
        { id: 2, name: "Anime 2" },
        { id: 3, name: "Anime 3" },
        { id: 4, name: "Anime 4" },
        { id: 5, name: "Anime 5" },
        { id: 6, name: "Anime 6" },
        { id: 7, name: "Anime 7" },
        { id: 8, name: "Anime 8" },]
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 1000);
    })
}