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
  const url = "https://sai-goutham-brown-living-backend.onrender.com/api/products/cart"

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

  

  const handleQuantityChange = async (item, change) => {
    console.log(item)

    try {
      const response = await axios.put(`https://sai-goutham-brown-living-backend.onrender.com/api/products/cart/${change}`, {
        id : item._id, user: item.user // Replace with dynamic username
      });
      console.log(response, 'response')
      setCart(response.data.cart); // Update cart state with the response
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
    // window.location.reload()
  };
  

  const handleRemoveItem = async (item) => {
    console.log(item._id)


    try {
      const response = await axios.delete("https://sai-goutham-brown-living-backend.onrender.com/api/products/cart/remove", {
        data: { user: item.user, title: item.title, id : item._id }, // Replace with dynamic username
      });
      setCart(response.data); // Update cart state with the response
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
    // setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () =>
    Array.isArray(cart) ? cart?.reduce((total, item) => total + item.priceCurrent * item.quantity, 0) : 0;

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
          {Array.isArray(cart) && cart?.map((item) => (
            <div key={item?.id} className="cart-item">
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
                  <button disabled={item.quantity === 1} onClick={() => handleQuantityChange(item, 'decQuantity')}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item, 'incQuantity')}>+</button>
                </div>
                <button className="remove-btn cart-text" onClick={() => handleRemoveItem(item)}>Remove</button>
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
