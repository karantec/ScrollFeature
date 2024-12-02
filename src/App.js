import { Routes, Route } from "react-router-dom"
import Home from "./Components/HomePage/Home"
import Cont from "./Components/Contact/Cont"
import Navbar from "./Components/Nav/Navbar"
import Footer from "./Components/Footer/Footer"
import About from "./Components/AboutPage/About"
import Blog from "./Components/Blogs/blog"
import ShoppingCart from "./Components/Order/Cart"
import SecureCheckout from "./Components/Order/Summar"
import Final from "./Components/Order/Final"
import ProductDetail from "./Components/Product/Product"
import ProductLayout from "./Components/Product/ProductLayout"
import NotFound from "./NotFound"
import ProductPage from "./Components/Product/ProductList/ProductPage"
import  Signup from "./Components/SignUp/Signup"
import Login from "./Components/SignUp/Login"
import TabSwitcher from "./Components/Order/TabSwich"


function App() {
  return (
    <div className="App">
      
    <Navbar/>
    
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={ <Cont/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/cart" element={<ShoppingCart/> } />
        <Route path="/checkout" element={<SecureCheckout/> } />
        <Route path="/confirm" element={<Final/>}/>
        <Route path="/products" element={<ProductLayout/>}/>
        <Route path="/productlist" element={<ProductPage/>}/>
        <Route path="/carts" element={<TabSwitcher/>}/>
        <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App