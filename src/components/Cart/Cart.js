import React, { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
import "./Cart.css";
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState();
  // const [cart1, setCart1] = useState();

  // [
  //   {
  //     id: 1,
  //     name: "Kakapo Cork Wallet - Unique Unisex Slim Wallet for Men and Women - Tan",
  //     price: 2000,
  //     quantity: 1,
  //     image: "https://via.placeholder.com/100", // Replace with actual image URL
  //   },
  // ]
  
  // const { user } = useParams();
  const url = "http://localhost:5000/api/products/cart"

useEffect(() => {
    // Fetch products from an API or use static data
    const getCartListByUser = async () => {
      try {
        const loggedInUser = localStorage.getItem('user')
        const response = await axios.get(url, { params: { user: loggedInUser } });
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    getCartListByUser();
  }, []);

  

  const handleQuantityChange = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    cart?.reduce((total, item) => total + item.priceCurrent * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      <p>
        You Will Save 4.1 Kgs Of Plastic, Contribute 5 Tree Plantations, Contribute To 100 Kgs Of CO2 Reduction.
      </p>
      <div className="cart-content">
        <div className="cart-items">
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 cart-text">Product</div>
              <div className="col-6">&nbsp;</div>
              <div className="col-2 cart-text">Quantity</div>
              <div className="col-2 cart-text">Total</div>
            </div>
          </div>
          <hr/>
          {cart?.map((item) => (
            <div key={item.id} className="cart-item">
              {/*  */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-2">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              </div>
              <div className="col-6 cart-text">
              <h4>{item.title}</h4>
              <p className="price-color">₹{item.priceCurrent}</p>
              </div>
              <div className="col-2">
              <div className="cart-item-details">
                
                <div className="cart-item-quantity">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <button className="remove-btn cart-text" onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
              </div>
              <div className="col-2">
              <div className="cart-item-total cart-text">₹{parseInt(item.priceCurrent) * item.quantity}</div>
              </div>
            </div>
          </div>
          {/*  */}
              
             
              
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Total</h3>
          <p>₹{calculateTotal()}</p>
          <textarea placeholder="Order Instructions" />
          <p>Tax included. <a href="#">Shipping</a> calculated at checkout</p>
          <label>
            <input type="checkbox" /> Pay Via Gift Card
          </label>
          <button className="pay-now-btn" onClick={()=>alert("Ordered Sucessfully!")}>PAY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
