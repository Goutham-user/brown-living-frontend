import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import axios from 'axios';
import { CartContext } from '../../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  // const [product, setProduct] = useState([]);
  const { addToCart } = useContext(CartContext);

 

  // useEffect(() => {
  //   // Fetch product details from an API
  //   const fetchProduct = async () => {
  //     try {
  //       const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  //       setProduct(response.data);
  //     } catch (error) {
  //       console.error('Error fetching product:', error);
  //       // Handle error accordingly
  //     }
  //   };

  //   fetchProduct();
  // }, [id]);
  const url = "https://sai-goutham-brown-living-backend.onrender.com/api/products/"
  
  const [product, setProduct] = useState([]);
  useEffect(() => {
    // Fetch products from an API or use static data
    const productsAPI = async () => {
      try {
        const response = await axios.get(`${url}/details`, { params: { _id: id } });
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    productsAPI();
  }, []);

  const addToCartList = async (product)=>{
    console.log("product", product)
    try {
      product.user = localStorage.getItem("user");
      product.quantity = 1;
      const response = await axios.post(`${url}/addToCart`, product);
      console.log(response.data);
    } catch (error) {
      console.error('Error posting product:', error);
      // Handle error accordingly
    }
  }

   const images = [
    "https://brownliving.in/cdn/shop/products/kakapo-cork-wallet-unique-unisex-slim-wallet-for-men-and-women-tan-cekwt001-wallet-brown-living-646550_400x.jpg?v=1682963643",
    "https://brownliving.in/cdn/shop/products/kakapo-cork-wallet-unique-unisex-slim-wallet-for-men-and-women-tan-cekwt001-wallet-brown-living-950133_400x.jpg?v=1682963643",
    "https://brownliving.in/cdn/shop/products/kakapo-cork-wallet-unique-unisex-slim-wallet-for-men-and-women-tan-cekwt001-wallet-brown-living-221621_400x.jpg?v=1682963643",
    "https://brownliving.in/cdn/shop/products/kakapo-cork-wallet-unique-unisex-slim-wallet-for-men-and-women-tan-cekwt001-wallet-brown-living-324483_400x.jpg?v=1682963643",
    "https://brownliving.in/cdn/shop/products/kakapo-cork-wallet-unique-unisex-slim-wallet-for-men-and-women-tan-cekwt001-wallet-brown-living-403357_400x.jpg?v=1682963643",
    "https://brownliving.in/cdn/shop/products/kakapo-cork-wallet-unique-unisex-slim-wallet-for-men-and-women-tan-cekwt001-wallet-brown-living-846716_400x.jpg?v=1682963643",
    "https://brownliving.in/cdn/shop/products/kakapo-cork-wallet-unique-unisex-slim-wallet-for-men-and-women-tan-cekwt001-wallet-brown-living-584555_400x.jpg?v=1682963643"
  ];

  

  // State to track the currently displayed main image
  const [mainImage, setMainImage] = useState();

  // State for hover zoom functionality
  const [zoomStyle, setZoomStyle] = useState({ display: "none" });

  const handleThumbnailClick = (image) => {
    setMainImage(image); // Update the main image when a thumbnail is clicked
  };

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    setZoomStyle({
      display: "block",
      backgroundImage: `url(${mainImage})`,
      backgroundPosition: `${xPercent}% ${yPercent}%`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-details">
      
      <div className="product-detail-container">
      {/* Breadcrumb */}
      <nav className="breadcrumb-detail">
        <a href="/" className="link-detail">
          Home
        </a>{" "}
        &gt;{" "}
        <a href="/products" className="link-detail">
          All Products
        </a>{" "}
        &gt; {product?.title}
      </nav>

      <div className="layout-detail">
        {/* Left Column: Image Gallery */}
        <div className="image-gallery-detail">
          {/* Thumbnail Images */}
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-2'>
              <div className="thumbnail-images-detail">
            {product?.images?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail-detail"
                onClick={() => handleThumbnailClick(image)} // Set main image on click
              />
            ))}
          </div>
              </div>
              <div className='col-10'>
                  {/* Main Image */}
          <div
            className="main-image-wrapper-detail"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            
            <img
              src={mainImage ? mainImage : product.image}
              alt="Main Product"
              className="main-image-detail"
            />
            <div
              className="zoom-circle-detail"
              style={{
                display: zoomStyle.display,
                top: zoomStyle.top,
                left: zoomStyle.left,
                backgroundImage: zoomStyle.backgroundImage,
                backgroundPosition: zoomStyle.backgroundPosition,
              }}
            ></div>
          </div>
              </div>
            </div>
          </div>
          

        
        </div>

        {/* Right Column: Product Details */}
        <div className="product-info-detail">
          <h1 className="product-title-detail">
           {product?.title}
          </h1>
          <p className="rating-detail">⭐⭐⭐⭐⭐</p>
          {/* <p>
            <strong>Color:</strong> Tan
          </p> */}
          <p className='product-price'>
            <strong className='black-font'>Price:</strong>
          
            ₹{product.priceCurrent} {product.priceOld && <span className="product-old-price">₹{product.priceOld}</span>}
            </p>
          <p className="tax-detail">Tax included. Shipping calculated at checkout.</p>
          <button className="button-detail add-to-cart-detail" onClick={()=>addToCartList(product)}>ADD TO CART</button>
          <button className="button-detail buy-now-detail" onClick={()=>alert("Ordered Sucessfully!")}>BUY IT NOW</button>
          <p className="points-detail">Buy this item and earn 10000 Earthy points</p>
        </div>
      </div>

      {/* Product Description */}
      <div className="product-description-detail">
        <h2 className="description-title-detail">Product Description</h2>
        <p>
          The luxurious, lightweight cork wallet is made of Nature's most Sustainable fabric—Cork, with an
          enhanced premium, super-fine texture. Unlike leather, it's cruelty-free and chemical-free too, and yet it
          is water-resistant, wear and tear-resistant, and ages like leather.
        </p>
        <p>
          It looks like a classic wallet but so much different. Pictures don't do enough justice to this wallet. Once
          you hold it, you might as well fall in love! We are not saying that. It's coming from the people who have
          seen and own it so far!
        </p>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
