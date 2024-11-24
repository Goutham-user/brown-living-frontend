import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductDetails from './components/ProducDetails/ProductDetails';
import Moreroducts from "./components/More-Products/more-products"
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/products/:category/:id" element={<ProductDetails />} />
              <Route path="/products/:category" element={<Moreroducts />} />
              <Route path="/cart" element={<Cart />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
