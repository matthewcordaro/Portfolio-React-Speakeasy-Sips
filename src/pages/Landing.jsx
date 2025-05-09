import React from "react"
import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"
import { useQuery } from "@tanstack/react-query"

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

function getCommonDrink() {
  const commonDrinks = [
    "Martini",
    "Sour",
    "Margarita",
    "Mojito",
    "Daiquiri",
    "Negroni",
  ]
  const index = Math.floor(Math.random() * commonDrinks.length)
  return commonDrinks[index]
}

function searchCocktailsQuery(searchTerm) {
  return {
    queryKey: ["search", searchTerm],
    queryFn: async () => {
      const fullUrl = cocktailSearchUrl + searchTerm
      const response = await axios.get(fullUrl)
      return response.data.drinks
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get("search") || getCommonDrink()
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm))
    return { searchTerm }
  }

function Landing() {
  const { searchTerm } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
