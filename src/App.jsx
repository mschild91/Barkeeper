import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Cocktails from './components/pages/Cocktails'

function App() {
	return (
		<>
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
		</>
	)
}

export default App
