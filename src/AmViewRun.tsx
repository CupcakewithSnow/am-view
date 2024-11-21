import { Route, Routes } from "react-router-dom"
import { Nav } from "./widgets"
import Home from "./pages/home/Home"
import AnimeRoute from "./pages/anime/AnimeRoute"

const AnimeViewRun = () => {
    return (
        <>
            <Nav />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/anime" element={<AnimeRoute />} />
                </Routes>
            </div>
        </>

    )
}
export default AnimeViewRun