import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Newsletter,
  Landing,
} from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail",
        element: <Cocktail />,
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
