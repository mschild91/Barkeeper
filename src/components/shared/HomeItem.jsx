import React from 'react'
import { Link } from 'react-router-dom'
import { getColorClassBg } from '../../utils/getColorClass'

function HomeItem({ content }) {
	const color = getColorClassBg(content.name)

	return (
		<Link
			to={
				content.name !== 'Random'
					? `/cocktails/${content.name}`
					: `/cocktail/${content.name}`
			}>
			<article className={`px-12 py-32 ${color} text-project-blue`}>
				<h2 className="text-5xl font-bold tracking-normal font-playfair ">
					{content.name}
				</h2>
				<h2 className="font-montserrat">{content.description.toUpperCase()}</h2>
			</article>
		</Link>
	)
}

export default HomeItem
