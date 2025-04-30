import React from "react"
import { useLoaderData } from "react-router-dom"
import axios from "axios"
import CocktailList from "../components/CocktailList"
import SearchForm from "../components/SearchForm"

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

export async function loader({ request }) {
  const url = new URL(request.url)

  const commonDrinks = [
    "Martini",
    "Sour",
    "Margarita",
    "Mojito",
    "Daiquiri",
    "Negroni",
  ]
  const randomLetter =
    commonDrinks[Math.floor(Math.random() * commonDrinks.length)]

  const searchTerm = url.searchParams.get("search") || randomLetter
  const fullUrl = cocktailSearchUrl + searchTerm
  const response = await axios.get(fullUrl)
  return { drinks: response.data.drinks, searchTerm }
}

function Landing() {
  const { drinks, searchTerm } = useLoaderData()
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
