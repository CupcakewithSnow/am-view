export interface IGetRecommendations {
    id: number;
    name: string;
}

export function getRecommendations(): Promise<IGetRecommendations[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Recommendation 1" },
                { id: 2, name: "Recommendation 2" },
                { id: 3, name: "Recommendation 3" },
                { id: 4, name: "Recommendation 4" },
                { id: 5, name: "Recommendation 5" },
            ]);
        }, 1000);
    });
}