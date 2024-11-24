import React from "react";
import Slider from "react-slick";
import "./movingslider.css"; // Custom styles
import axios from 'axios';
// Example product data

// const [cartProduct, setcartProduct ] = useState();

const url = "http://localhost:5000/api/products";


const addToCart = async (product)=>{
  console.log("product", product)
  try {
    product.user = localStorage.getItem("user")
    product.quantity = 1;
    const response = await axios.post(`${url}/addToCart`, product);
    console.log(response.data);
  } catch (error) {
    console.error('Error posting product:', error);
    // Handle error accordingly
  }
}

const getToDetailPage = (product) =>{
  if(product.title){
    window.location.href = `products/${product.category}/${product._id}`
  }
  else{
    window.location.href = `products/${product.category}`

  }
    
}


const TodaysTrending = ( {trendinngProducts} ) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="product-slider">
      <Slider {...settings}>
        {/* {console.log(products.length)} */}
        {trendinngProducts.map((product) => (
          <div key={product.id} className="product-card" onClick={()=>getToDetailPage(product)}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h5 className="product-name">{product.title}</h5>
           
            <p className="product-price">
           {product.priceCurrent && <span> ₹ {product.priceCurrent}</span>  } {product.priceOld && <span className="product-old-price">₹{product.priceOld}</span>}
            </p>
            { product.title ? 
                <button className="add-to-cart-btn" onClick={()=> addToCart(product)} >ADD TO CART</button> : null
          }
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Arrow Components
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      &gt;
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &lt;
    </div>
  );
};

export default TodaysTrending;
