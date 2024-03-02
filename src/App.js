import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './components/styles.css';
import Navbar from "./components/NavBar/Navbar";
import Category from "./components/category";
import Footer from "./components/NavBar/footer";
import Home from "./components/home";
import Fiction from './components/category/fiction';
import Cart from './components/cart/cart';
import Login from './components/login/login';
import Register from './components/login/register';
import { CartProvider } from './components/cart/CartContext';
import Profile from './components/profile/profile';


function App() {
  const login = window.localStorage.getItem("isLoggedIn");
  return (
    <div className="App">
      <CartProvider>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={login? <Profile /> : <Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile" element={login? <Profile /> : <Login />} />
        </Routes>
      <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
