import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiBaseLink } from '../../utils/apiLink'
import CocktailsItem from '../shared/CocktailsItem'
import { Spinner } from '@material-tailwind/react'

function Cocktails() {
  const ingredient = useParams().ingredient
  const [cocktails, setCocktails] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (isLoading) {
    return <Spinner color="amber" />
  }

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
