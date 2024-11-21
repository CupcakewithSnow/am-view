export interface IGetAnime {
    id: number;
    name: string;
    img: string;
    description: string
}

export function getAnime(): Promise<IGetAnime[]> {
    console.log("job started anime")
    let result: IGetAnime[] = [
        { id: 1, name: "Anime 1", description: "Description 1", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Steins_Gate_0.jpg" },
        { id: 2, name: "Anime 2", description: "Description 1", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Steins_Gate_0.jpg" },
        { id: 3, name: "Anime 3", description: "Description 1", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Steins_Gate_0.jpg" },
        { id: 4, name: "Anime 4", description: "Description 1", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Steins_Gate_0.jpg" },
        { id: 5, name: "Anime 5", description: "Description 1", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Steins_Gate_0.jpg" },
        { id: 6, name: "Anime 6", description: "Description 1", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Steins_Gate_0.jpg" },
        { id: 7, name: "Anime 7", description: "Description 1", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Steins_Gate_0.jpg" },
        { id: 8, name: "Anime 8", description: "Description 1", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Steins_Gate_0.jpg" },]
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 1000);
    })
}