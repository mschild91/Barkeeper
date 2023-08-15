import React from 'react'
import { Link } from 'react-router-dom'

function HomeItem({ content }) {
	return (
		<Link
			to={
				content.name !== 'Random'
					? `/cocktails/${content.name}`
					: `/cocktail/${content.name}`
			}>
			<article className="px-12 py-32">
				<h2 className="text-5xl font-bold tracking-normal font-Playfair">
					{content.name}
				</h2>
				<h2 className="font-Montserrat">{content.description.toUpperCase()}</h2>
			</article>
		</Link>
	)
}

export default HomeItem
