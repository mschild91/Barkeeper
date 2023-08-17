import React from "react"
import { Link } from "react-router-dom"
import { getColorClassBg } from "../../utils/getColorClass"

function HomeItem({ content }) {
  const color = getColorClassBg(content.name)

  return (
    <Link
      className={`px-12 py-32 ${color} text-project-blue flex flex-col justify-center`}
      to={
        content.name !== "Random"
          ? `/cocktails/${content.name}`
          : `/cocktail/${content.name}`
      }>
      <h2 className="text-5xl font-bold tracking-normal font-playfair ">
        {content.name}
      </h2>
      <h2 className="font-montserrat">{content.description.toUpperCase()}</h2>
    </Link>
  )
}

export default HomeItem
