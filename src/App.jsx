import Footer from "./components/Footer"
import Nav from "./components/Nav"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Wishlist from "./pages/Wishlist"
import Cart from "./components/Cart"

function App() {


  return (
    <>
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route element={<Home />} index path='/' />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login'  element={<LogIn />}/>
          <Route path='/cart'  element={<Cart />}/>
          <Route path='/wishlist'  element={<Wishlist />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
