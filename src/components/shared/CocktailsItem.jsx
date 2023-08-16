import React from 'react'
import { Link } from 'react-router-dom'
import { getColorClassFrom } from '../../utils/getColorClass'

function CocktailsItem({ cocktail, ingredient }) {
	const color = getColorClassFrom(ingredient)
	return (
		<Link to={`/cocktail/${cocktail.idDrink}`}>
			<article className={`py-12  bg-gradient-to-t ${color} to-white `}>
				<h2 className="px-8 mb-4 text-2xl font-bold text-center font-montserrat text-project-blue">
					{cocktail.strDrink}
				</h2>
				<div className="mx-12 overflow-hidden rounded-xl">
					<img
						src={cocktail.strDrinkThumb}
						alt={cocktail.strDrink}
					/>
				</div>
			</article>
		</Link>
	)
}

export default CocktailsItem
