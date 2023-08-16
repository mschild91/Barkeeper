import React from 'react'
import { Link } from 'react-router-dom'

function CocktailsItem({ cocktail }) {
  return (
    <Link to={`/cocktail/${cocktail.idDrink}`}>
      <article className="p-12">
        <h2 className="text-2xl font-bold text-center font-montserrat">{cocktail.strDrink}</h2>
        <img
          src={cocktail.strDrinkThumb}
          alt={cocktail.strDrink}
        />
      </article>
    </Link>
  )
}

export default CocktailsItem
