export interface IGetRecommendations {
    id: number;
    name: string;
}

export function getRecommendations(): Promise<IGetRecommendations[]> {
    let result: IGetRecommendations[] = [
        { id: 1, name: "Recommendation 1" },
        { id: 2, name: "Recommendation 2" },
        { id: 3, name: "Recommendation 3" },
        { id: 4, name: "Recommendation 4" },
        { id: 5, name: "Recommendation 5" },
        { id: 6, name: "Recommendation 6" },
        { id: 7, name: "Recommendation 7" },
        { id: 8, name: "Recommendation 8" },
        { id: 9, name: "Recommendation 9" },
        { id: 10, name: "Recommendation 10" },
        { id: 11, name: "Recommendation 11" },
        { id: 12, name: "Recommendation 12" },
        { id: 13, name: "Recommendation 13" },
        { id: 14, name: "Recommendation 14" },
        { id: 15, name: "Recommendation 15" },
        { id: 16, name: "Recommendation 16" },
        { id: 17, name: "Recommendation 17" },
        { id: 18, name: "Recommendation 18" },
        { id: 19, name: "Recommendation 19" },
        { id: 20, name: "Recommendation 20" },

    ]
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}