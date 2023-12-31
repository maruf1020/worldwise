import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="product" element={<Product/>} />
        <Route path="Pricing" element={<Pricing/>} />
        <Route path="login" element={<Login/>} />
        <Route path="app" element={<AppLayout/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
