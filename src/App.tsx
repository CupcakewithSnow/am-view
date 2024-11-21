import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/home/Home";
import { getRecommendations } from "./api/recommendations/recommendations";
import { Nav } from "./widgets";
import { Suspense } from "react";
import AnimeList from "./pages/anime/list/AnimeList";
import { getAnime } from "./api/anime/anime";
import AnimeInfo from "./pages/anime/info/AnimeInfo";


const RoutesJSX = (
  <Route path="/" element={
    <div>
      <Nav />
      <div>
        <Outlet />
      </div>
    </div>
  }>
    <Route
      index
      loader={getRecommendations}
      element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>}
    ></Route>
    <Route path="anime">
      <Route index element={<AnimeList />} loader={getAnime} />
      <Route path=":id" element={<AnimeInfo />} />
    </Route>
  </Route>
);

const routes = createRoutesFromElements(RoutesJSX);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;