import React from 'react'
import HomeItem from '../shared/HomeItem'

const homeItems = [
	{
		name: 'Gin',
		description: 'Ipsum dolor sit amet',
	},
	{
		name: 'Vodka',
		description: 'Ipsum dolor sit amet',
	},
	{
		name: 'Rum',
		description: 'Ipsum dolor sit amet',
	},
	{
		name: 'Scotch',
		description: 'Ipsum dolor sit amet',
	},
	{
		name: 'Alcohol free',
		description: 'Ipsum dolor sit amet',
	},
	{
		name: 'Random',
		description: 'Ipsum dolor sit amet',
	},
]

function Home() {
	return (
		<main className="lg:grid lg:grid-cols-2 xl:grid-cols-3">
			{homeItems.map((item) => {
				return (
					<HomeItem
						key={item.name}
						content={item}
					/>
				)
			})}
		</main>
	)
}

export default Home
