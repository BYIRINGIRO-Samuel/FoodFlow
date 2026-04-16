import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import ScrollButton from './components/ScrollButton/ScrollButton'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Preloader from './components/Preloader/Preloader'

function App() {

  const[showLogin,setShowLogin]=useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> :<></>}

   <div className={`app ${loading ? 'loading-hidden' : ''}`}>
      <Navbar setShowLogin={setShowLogin} />
      <ScrollButton/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
 
  )
}

export default App
