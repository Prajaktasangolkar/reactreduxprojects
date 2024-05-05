
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Card from './components/Card'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/card" element={<Card/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
