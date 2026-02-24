import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main.js"
import Price from "./pages/Price.js"
import Currencies from "./pages/Currencies.js"
import Nav from "./components/Nav.js"
import './App.css'

function App() {

  return (
    <div className="App">
		<Nav />
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/currencies" element={<Currencies />} />
			<Route path="/price" element={<Price />} />
		</Routes>
    </div>
  )
}

export default App
