import { Route, Routes } from "react-router-dom"
import AnimeList from "./list/AnimeList"
import AnimeInfo from "./info/AnimeInfo"

const AnimeRoute = () => {
    return (
        <Routes>
            <Route index element={<AnimeList />} />
            <Route path=":id" element={<AnimeInfo />} />
        </Routes>
    )
}
export default AnimeRoute