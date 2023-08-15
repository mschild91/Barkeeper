import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiBaseLink } from '../../utils/apiLink'
import CocktailsItem from '../shared/CocktailsItem'

function Cocktails() {
	const ingredient = useParams().ingredient
	console.log(ingredient)
	const [cocktails, setCocktails] = useState([])

	const fetchLink =
		ingredient === 'Alcohol free'
			? `${apiBaseLink}/filter.php?a=Non_Alcoholic`
			: `${apiBaseLink}/filter.php?i=${ingredient}`

	useEffect(() => {
		fetch(fetchLink)
			.then((response) => {
				if (!response.ok) {
					throw new Error('fetch failed')
				}
				return response.json()
			})
			.then((data) => {
				// console.log(data.drinks)
				setCocktails(data.drinks)
			})
			.catch((error) => console.log(error))
	}, [])

	return (
		<main>
			{cocktails.map((cocktail) => {
				return (
					<CocktailsItem
						key={cocktail.strDrink}
						cocktail={cocktail}
					/>
				)
			})}
		</main>
	)
}

export default Cocktails
