import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './view/Log/Landing';
import Home from './view/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Detail from './view/Detail/Detail';
import { CartProvider } from './CartContext';
import Cart from './view/Cart/Cart'

function App() {


  return (
    <>
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/product/:productId" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
    </>
  )
}

export default App
