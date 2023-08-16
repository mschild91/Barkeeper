import React from 'react'
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-project-blue h-14 px-7">
      <Link to={'/'}>
        <div>
          <h1 className="text-sm font-bold leading-5 tracking-wider font-playfair text-project-white">
            D R I N K S & C H I L L
          </h1>
        </div>
      </Link>
      <div>
        <Menu>
          <MenuHandler>
            <Button className="text-sm font-normal bg-project-blue text-project-white font-montserrat">Menu</Button>
          </MenuHandler>
          <MenuList className="bg-project-blue text-project-white font-montserrat">
            <Link to={'/'}>
              <MenuItem>Home</MenuItem>
            </Link>
            <Link to={'/cocktail/random'}>
              <MenuItem>Random Drink</MenuItem>
            </Link>
            <Link to={'/create'}>
              <MenuItem>Create Own Drink</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </nav>
  )
}

export default Navbar
