import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
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
import { action as newsletterAction } from "./pages/Newsletter"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

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
        loader: landingLoader(queryClient),
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
        action: newsletterAction,
        element: <Newsletter />,
      },
    ],
  },
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
export default App
