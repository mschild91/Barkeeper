import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiBaseLink } from '../../utils/apiLink'
import CocktailsItem from '../shared/CocktailsItem'
import { Spinner } from '@material-tailwind/react'

function Cocktails() {
	const ingredient = useParams().ingredient
	const searchTerm = useParams().searchTerm
	const [cocktails, setCocktails] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const fetchLink =
		ingredient === 'Alcohol free'
			? `${apiBaseLink}/filter.php?a=Non_Alcoholic`
			: ingredient === 'search'
			? `${apiBaseLink}/search.php?s=${searchTerm}`
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
				setIsLoading(false)
			})
			.catch((error) => console.log(error))

		return () => setIsLoading(true)
	}, [ingredient, searchTerm])

	if (isLoading) {
		return <Spinner color="amber" />
	}

	return (
		<main className="md:grid md:grid-cols-2 lg:grid-cols-3">
			{cocktails ? (
				cocktails.map((cocktail) => {
					return (
						<CocktailsItem
							key={cocktail.strDrink}
							cocktail={cocktail}
							ingredient={ingredient}
						/>
					)
				})
			) : (
				<article
					className={`py-12  bg-gradient-to-t to-white  from-orange-500`}>
					<h2 className="px-8 mb-4 text-2xl font-bold text-center font-montserrat text-project-blue">
						No Drinks found
					</h2>
				</article>
			)}
		</main>
	)
}

export default Cocktails
