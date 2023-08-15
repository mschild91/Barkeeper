import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/pages/Home'
import Cocktails from './components/pages/Cocktails'
import Navbar from './components/pages/Navbar'
import Header from './components/pages/Header'
import Footer from './components/pages/Footer'
import ScrollToTop from './components/pages/ScrollToTop'

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
      </Routes>
      <Footer />
    </>
  )
}

export default App
