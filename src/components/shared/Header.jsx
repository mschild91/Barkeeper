import React from 'react'
import arrowSVG from '../../assets/img/arrows.svg'
import { Input, Button } from '@material-tailwind/react'
import { useState } from 'react'

const Header = () => {
  const [drink, setDrink] = useState('')
  const handleDrinkSearch = ({ target }) => setDrink(target.value)

  return (
    <header className="bg-project-blue text-project-white h-120 pt-16 pb-14 pl-12 pr-14">
      <div>
        <h1 className="font-playfair text-heading font-normal pb-2">Cocktails & Drinks</h1>
        <p className="font-montserrat text-xs leading-5 pb-10">WELCOME TO THE WORLD OF COCKTAILS AND DRINKS!</p>
      </div>
      <div className="relative flex w-80">
        <Input
          type="drinksearch"
          label="Search for Drink"
          value={drink}
          onChange={handleDrinkSearch}
          className="pr-20 pt-2"
          color="white"
          containerProps={{
            className: 'min-w-0',
          }}
        />
        <Button
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
    </header>
  )
}

export default Header
