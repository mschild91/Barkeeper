import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/pages/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<h1>hi</h1>}
        />
      </Routes>
    </>
  )
}

export default App
