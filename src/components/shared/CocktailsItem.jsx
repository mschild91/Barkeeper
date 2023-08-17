import React from "react"
import { Link } from "react-router-dom"
import { getColorClassFrom } from "../../utils/getColorClass"

function CocktailsItem({ cocktail, ingredient }) {
  const color = getColorClassFrom(ingredient)
  return (
    <Link
      to={`/cocktail/${cocktail.idDrink}`}
      className={`py-12  bg-gradient-to-t ${color} to-white flex flex-col`}>
      <h2 className="px-8 mb-4 text-2xl font-bold text-center font-montserrat text-project-blue">
        {cocktail.strDrink}
      </h2>
      <div className="max-w-lg px-12 mx-auto mt-auto">
        <img
          className="rounded-2xl"
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
      </div>
    </Link>
  )
}

export default CocktailsItem
