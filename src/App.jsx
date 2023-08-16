import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/pages/Home'
import Cocktails from './components/pages/Cocktails'
import Navbar from './components/shared/Navbar'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import ScrollToTop from './components/shared/ScrollToTop'
import CocktailDetails from './components/pages/CocktailDetails'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/cocktails/:ingredient"
          element={<Cocktails />}
        />
        <Route
          path="/cocktail/:id"
          element={<CocktailDetails />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
