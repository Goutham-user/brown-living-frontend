import React, { useEffect, useState } from 'react';
import '../More-Products/more-products.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
import ProductCard from '../ProductCard/ProductCard'
import { useNavigate } from "react-router-dom";

const Moreroducts = () => {
  const { category } = useParams();
  const [productsPerPage, setProductsPerPage] = useState(48);
  const [sortOption, setSortOption] = useState("Featured");


  const [viewType, setViewType] = useState("grid"); // "grid" or "list"

  const [moreProducts, setMoreProducts] = useState([]);
  const [moreProductsImage, setMoreProductsImage] = useState();

  const url = "https://brown-living-backend.onrender.com/api/products";

  useEffect(() => {
    // Fetch products from an API or use static data
    const productsAPI = async () => {
      try {
        const response = await axios.get(url, { params: { category: category } });
        if(category === "bestSelling"){
          setMoreProductsImage("https://brownliving.in/cdn/shop/collections/best-selling-sustainable-products-556680_1200x.jpg?v=1683648438")
        }
        else if(category === "care"){
          setMoreProductsImage("https://brownliving.in/cdn/shop/collections/Organic_Personal_Care_1400x.jpg?v=1720073642")
          
        }
        else if(category === "homeEssentials"){
          setMoreProductsImage("https://brownliving.in/cdn/shop/collections/eco-friendly-home-living-essentials-760718_1400x.jpg?v=1719387157")
          
        }
        else if(category === "pFashion"){
          setMoreProductsImage("https://brownliving.in/cdn/shop/collections/750_x_250_px_Collection_Image_Wear_1400x.jpg?v=1720162498")
          
        }
        else if(category === "gifts"){
          setMoreProductsImage("https://brownliving.in/cdn/shop/collections/750_x_250_px_Collection_Image_gift_1400x.png?v=1727028820")
          
        }
        else if(category === "foodDrinks"){
          setMoreProductsImage("https://brownliving.in/cdn/shop/collections/Organic_Food_Drinks_1400x.jpg?v=1706296082")
          
        }
        else if(category === "travel"){
          setMoreProductsImage("https://brownliving.in/cdn/shop/collections/eco-friendly-travel-essentials-885808_1400x.jpg?v=1695195642")
          
        }
        
        setMoreProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    productsAPI();
  }, []);



  // Dummy product data
  // const products = [
  //   {
  //     id: 1,
  //     image: "https://via.placeholder.com/150",
  //     title: "Recycled Kitchen Towel - 2 Ply - 75 pulls per roll | Pack",
  //     price: "₹400",
  //     discount: "",
  //     quickView: true,
  //     addToCart: true,
  //   },
  //   {
  //     id: 2,
  //     image: "https://via.placeholder.com/150",
  //     title: "Recycled Notebooks - Pack of 6 | 70 GSM Paper",
  //     price: "From ₹300",
  //     discount: "",
  //     quickView: true,
  //     addToCart: false,
  //   },
  //   {
  //     id: 3,
  //     image: "https://via.placeholder.com/150",
  //     title: "Sustainable Grooming Kit | Personal Care Gift Box",
  //     price: "₹1,499",
  //     discount: "₹1,999",
  //     quickView: true,
  //     addToCart: true,
  //   },
  //   {
  //     id: 4,
  //     image: "https://via.placeholder.com/150",
  //     title: "Handmade Indian Wooden Solitaire Board Game",
  //     price: "₹499",
  //     discount: "₹799",
  //     quickView: true,
  //     addToCart: true,
  //   },
  // ];
  // State to track the expanded menu
  // const [isCareOpen, setIsCareOpen] = useState(false);

  // // Toggle function for the Care submenu
  // const toggleCareMenu = () => {
  //   setIsCareOpen(!isCareOpen);
  // };

  const [isCareExpanded, setIsCareExpanded] = useState(false);

  const toggleCareMenu = () => {
    setIsCareExpanded(!isCareExpanded);
  };


  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/products/${category}/${id}`);
  };

  const addToCart = async (product)=>{
    // console.log("product", product)
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

  return (
    <div>


      <div className="container-more-products">
        {/* Sidebar */}
        <aside className="sidebar-more-products">
          <h3 className="menu-header-more-products">Main Menu</h3>
          <ul className="menu-list-more-products">
            <li className="menu-item-more-products">
              Shop All
              <ul className="submenu-list-more-products">
                <li className="submenu-item-more-products">All Categories</li>
              </ul>
            </li>
            <li
              className="menu-item-more-products care-more-products"
              onClick={toggleCareMenu}
            >
              Care
              <ul
                className={`submenu-list-more-products ${isCareExpanded ? "expanded-more-products" : ""
                  }`}
              >
                <li className="submenu-item-more-products">Body</li>
                <li className="submenu-item-more-products">Face</li>
                <li className="submenu-item-more-products">Hair</li>
              </ul>
            </li>
            <li className="menu-item-more-products">
              Fashion
              <ul className="submenu-list-more-products">
                <li className="submenu-item-more-products">Clothing</li>
                <li className="submenu-item-more-products">Accessories</li>
              </ul>
            </li>
            <li className="menu-item-more-products">Eat & Drink</li>
            <li className="menu-item-more-products">Home & Living</li>
            <li className="menu-item-more-products">Work</li>
            <li className="menu-item-more-products">Travel</li>
            <li className="menu-item-more-products">Gift 🎁</li>
            <li className="menu-item-more-products">SALE 💚</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="content-more-products">
          {/* <div className="banner-more-products">
          <h1 className="banner-title-more-products">Sustainable Swaps</h1>
          <p className="banner-text-more-products">Starting from Rs.99 only</p>
          <button className="banner-button-more-products">Shop Now</button> */}
          <img
            src={moreProductsImage}
            alt="Sustainable Swaps"
            className="banner-image-more-products"
          />
          {/* </div> */}

          {/*  */}

          <div className="app-more-products">
            <header className="header-more-products">
              <h2 className="title-more-products">Best Selling Sustainable Products</h2>
              <div className="controls-more-products">
                <span className="products-count-more-products">
                  Showing 1-{productsPerPage} of {moreProducts.length + 1} products
                </span>
                <div className="dropdown-more-products">
                  <label className="dropdown-label-more-products">Display:</label>
                  <select
                    className="dropdown-select-more-products"
                    value={productsPerPage}
                    onChange={(e) => setProductsPerPage(e.target.value)}
                  >
                    <option value={24}>24 per page</option>
                    <option value={36}>36 per page</option>
                    <option value={48}>48 per page</option>
                  </select>
                </div>
                <div className="dropdown-more-products">
                  <label className="dropdown-label-more-products">Sort by:</label>
                  <select
                    className="dropdown-select-more-products"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="Featured">Featured</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                  </select>
                </div>
                <div className="view-switcher-more-products">
                  <button
                    className={`view-btn-more-products ${viewType === "grid" ? "active-more-products" : ""
                      }`}
                    onClick={() => setViewType("grid")}
                  >
                    Grid View
                  </button>
                  <button
                    className={`view-btn-more-products ${viewType === "list" ? "active-more-products" : ""
                      }`}
                    onClick={() => setViewType("list")}
                  >
                    List View
                  </button>
                </div>
              </div>
            </header>


          </div>

          <div
            className={`product-container-more-products ${viewType === "grid" ? "grid-view-more-products" : "list-view-more-products"
              }`}
          >
            {moreProducts.map((product) => (
              <div key={product.id} className="product-card-more-products"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation(product._id); // Pass category
                }}>
                <img
                  className="product-image-more-products"
                  src={product?.image}
                  alt={product.name}
                />
                <div className="product-info-more-products">
                  <h3 className="product-title-more-products">{product.title}</h3>
                  <p className="product-price-more-products product-price">
                  ₹{product.priceCurrent}
                    {product.priceOld && (
                      <span className="old-price-more-products product-old-price">₹{product.priceOld}</span>
                    )}
                  </p>
                  {product.title && (
                    <button className="add-to-cart-more-products" onClick={()=>addToCart(product)}>ADD TO CART</button>
                  )}
                  {product.title && (
                    <button className="quick-view-more-products">Quick View</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* view */}


    </div>
  );
};

export default Moreroducts;
