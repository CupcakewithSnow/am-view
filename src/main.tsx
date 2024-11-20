import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root.tsx";
import ErrorPage from "./error-page.tsx";
import Home from "./pages/home/Home.tsx";
import { getRecommendations } from "./api/recommendations/recommendations.ts";
import AnimeList from "./pages/anime/list/AnimeList.tsx";
import AnimeInfo from "./pages/anime/info/AnimeInfo.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
        loader: getRecommendations
      },
      {
        path: "/anime",
        element: <AnimeList />,
        children: [
          {
            path: ":id",
            element: <AnimeInfo />
          }
        ]
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
