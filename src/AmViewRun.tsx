import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import AnimeRoute from "./pages/anime/AnimeRoute"
import { Nav } from "./components/nav/Nav"

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