import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiBaseLink } from '../../utils/apiLink'
import { Card, CardHeader, CardBody, CardFooter, Typography, Button, Spinner } from '@material-tailwind/react'

const CocktailDetails = () => {
  const [cocktailDetails, setCocktailDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const cocktailId = useParams().id

  useEffect(() => {
    fetch(`${apiBaseLink}/lookup.php?i=${cocktailId}`)
      .then((response) => {
        if (!response) {
          throw new Error('Fetch didnt work!')
        }
        return response.json()
      })
      .then((cocktailDetails) => {
        setCocktailDetails(cocktailDetails)
        setIsLoading(false)
      })
      .catch((error) => console.log(error.message))
  }, [])

  if (isLoading) {
    return <Spinner color="amber" />
  }

  return (
    <article className="flex justify-center bg-project-blue">
      <Card className="pt-10 text-black bg-gray-300 font-montserrat w-96 h-fit">
        <CardHeader
          color="blue-gray"
          className="w-64 h-64">
          <img
            className="w-64 h-64"
            src={cocktailDetails.drinks[0].strDrinkThumb}
            alt={cocktailDetails.drinks[0].strDrink}
          />
        </CardHeader>
        <CardBody>
          <h1 className="pb-6 text-xl font-medium">{cocktailDetails.drinks[0].strDrink}</h1>
          <div className="pb-6">
            <h3 className="text-lg font-medium">Ingredients:</h3>
            <p>
              {cocktailDetails.drinks[0].strMeasure1}
              {cocktailDetails.drinks[0].strIngredient1}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure2}
              {cocktailDetails.drinks[0].strIngredient2}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure3}
              {cocktailDetails.drinks[0].strIngredient3}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure4}
              {cocktailDetails.drinks[0].strIngredient4}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure4}
              {cocktailDetails.drinks[0].strIngredient5}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure6}
              {cocktailDetails.drinks[0].strIngredient6}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure7}
              {cocktailDetails.drinks[0].strIngredient7}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure8}
              {cocktailDetails.drinks[0].strIngredient8}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure9}
              {cocktailDetails.drinks[0].strIngredient9}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure10}
              {cocktailDetails.drinks[0].strIngredient10}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure11}
              {cocktailDetails.drinks[0].strIngredient11}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure12}
              {cocktailDetails.drinks[0].strIngredient12}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure13}
              {cocktailDetails.drinks[0].strIngredient13}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure14}
              {cocktailDetails.drinks[0].strIngredient14}
            </p>
            <p>
              {cocktailDetails.drinks[0].strMeasure15}
              {cocktailDetails.drinks[0].strIngredient15}
            </p>
          </div>
          <div>
            <p>{cocktailDetails.drinks[0].strInstructions}</p>
          </div>
        </CardBody>
      </Card>
    </article>
  )
}

export default CocktailDetails
