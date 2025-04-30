import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Newsletter,
  Landing,
  SinglePageError,
} from "./pages"

import { loader as landingLoader } from "./pages/Landing"
import { loader as singleCocktailLoader } from "./pages/Cocktail"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail/:id",
        element: <Cocktail />,
        loader: singleCocktailLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
