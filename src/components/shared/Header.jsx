import React from 'react'
import arrowSVG from '../../assets/img/arrows.svg'
import { Input, Button } from '@material-tailwind/react'
import { useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [drink, setDrink] = useState('')
  const handleDrinkSearch = ({ target }) => setDrink(target.value)

  const createLocation = useLocation()
  const navigate = useNavigate()

  const handleSearch = (event) => {
    if ((event.type === 'keydown' && event.key === 'Enter') || event.type === 'click') {
      navigate(`/cocktails/search/${drink}`)
      setDrink('')
    }
  }

  return (
    <header className="pt-16 pl-12 bg-project-blue text-project-white pb-14 pr-14">
      <div>
        <h1 className="pb-2 font-normal font-playfair text-heading">Cocktails & Drinks</h1>
        <p className="pb-10 text-xs leading-5 font-montserrat">WELCOME TO THE WORLD OF COCKTAILS AND DRINKS!</p>
      </div>
      {createLocation.pathname !== '/create' && (
        <>
          <div className="relative flex w-80">
            <Input
              type="drinksearch"
              label="Search for Drink"
              value={drink}
              onChange={handleDrinkSearch}
              onKeyDown={handleSearch}
              className="pt-2 pr-20"
              color="white"
              containerProps={{
                className: 'min-w-0',
              }}
            />
            <Button
              onClick={handleSearch}
              size="sm"
              color={'orange'}
              disabled={!drink}
              className="!absolute right-1 top-1 rounded">
              Search
            </Button>
          </div>
          <div className="flex justify-center pt-14">
            <img
              src={arrowSVG}
              alt="Arrows pointing down"
            />
          </div>
        </>
      )}
    </header>
  )
}

export default Header
