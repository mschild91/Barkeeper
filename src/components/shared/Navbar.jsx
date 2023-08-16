import React from 'react'
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-project-blue h-14 flex justify-between items-center px-7 sticky top-0">
      <div>
        <h1 className="font-playfair text-project-white text-sm font-bold tracking-wider leading-5">
          D R I N K S & C H I L L
        </h1>
      </div>
      <div>
        <Menu>
          <MenuHandler>
            <Button className="bg-project-blue text-project-white font-montserrat text-sm font-normal">Menu</Button>
          </MenuHandler>
          <MenuList className="bg-project-blue text-project-white font-montserrat">
            <Link to={'/'}>
              <MenuItem>Home</MenuItem>
            </Link>
            <MenuItem>Random Drink</MenuItem>
            <MenuItem>Create Own Drink</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </nav>
  )
}

export default Navbar
