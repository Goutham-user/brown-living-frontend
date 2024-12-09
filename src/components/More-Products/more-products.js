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

  const url = "https://sai-goutham-brown-living-backend.onrender.com/api/products";

  useEffect(() => {
    // Fetch products from an API or use static data
    const productsAPI = async () => {
      try {
        const response = await axios.get(url, { params: { category: category } });
        // if (category === "bestSelling") {
        //   setMoreProductsImage("https://brownliving.in/cdn/shop/collections/best-selling-sustainable-products-556680_1200x.jpg?v=1683648438")
        // }
        // else if (category === "care") {
        //   setMoreProductsImage("https://brownliving.in/cdn/shop/collections/Organic_Personal_Care_1400x.jpg?v=1720073642")

        // }
        // else if (category === "homeEssentials") {
        //   setMoreProductsImage("https://brownliving.in/cdn/shop/collections/eco-friendly-home-living-essentials-760718_1400x.jpg?v=1719387157")

        // }
        // else if (category === "pFashion") {
        //   setMoreProductsImage("https://brownliving.in/cdn/shop/collections/750_x_250_px_Collection_Image_Wear_1400x.jpg?v=1720162498")

        // }
        // else if (category === "gifts") {
        //   setMoreProductsImage("https://brownliving.in/cdn/shop/collections/750_x_250_px_Collection_Image_gift_1400x.png?v=1727028820")

        // }
        // else if (category === "foodDrinks") {
        //   setMoreProductsImage("https://brownliving.in/cdn/shop/collections/Organic_Food_Drinks_1400x.jpg?v=1706296082")

        // }
        // else if (category === "travel") {
        //   setMoreProductsImage("https://brownliving.in/cdn/shop/collections/eco-friendly-travel-essentials-885808_1400x.jpg?v=1695195642")

        // }

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
  const [isCareBodyExpanded, setIsCareBodyExpanded] = useState(false);
  const [isCareFaceExpanded, setIsCareFaceExpanded] = useState(false);
  const [isCareHairExpanded, setIsCareHairExpanded] = useState(false);

  const [isFashionExpanded, setIsFashionExpanded] = useState(false);
  const [isFMenExpanded, setisFMenExpanded] = useState(false);
  const [isFwomenExpanded, setisFwomenExpanded] = useState(false);
  const [isFWomenAccExpanded, setisFWomenAccExpanded] = useState(false);
  const [isFkidsExpanded, setisFkidsExpanded] = useState(false);

  const [isEatExpanded, setisEatExpanded] = useState(false);
  const [isEEatExpanded, setisEEatExpanded] = useState(false);
  const [isEDrinksExpanded, setisEDrinksExpanded] = useState(false);

  const [isLivingExpanded, setisLivingExpanded] = useState(false);
  const [isHomeExpanded, setisHomeExpanded] = useState(false);
  const [isKitchenExpanded, setisKitchenExpanded] = useState(false);
  const [isWellnessExpanded, setisWellnessExpanded] = useState(false);

  const [isWorkExpanded, setisWorkExpanded] = useState(false);

  const [isTravelExpanded, setisTravelExpanded] = useState(false);

  const [isGiftsExpanded, setisGiftsExpanded] = useState(false);
  const [isGHampersExpanded, setisGHampersExpanded] = useState(false);
  const [isGPrsonalisedExpanded, setisGPrsonalisedExpanded] = useState(false);
  const [isGOccationExpanded, setisGOccationExpanded] = useState(false);


  const toggleCareMenu = (setIsExpanded, isExpanded) => {
    setIsExpanded(!isExpanded);
  };


  const navigate = useNavigate();

  const handleNavigation = (id, page) => {
    if (page === "pDetails") {
      navigate(`/products/${category}/${id}`);
    } else if (page === "products") {
      navigate(`/products/${id}`);
      window.location.reload();
    }
  };

  const addToCart = async (product) => {
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

  const toTitleCase = (str) => {
    if (!str) return '';
    return str
      .toLowerCase()
      .split(/[\s\-]+/) // Split by spaces or hyphens
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };


  return (
    <div>


      <div className="container-more-products">
        {/* Sidebar */}
        <aside className="sidebar-more-products">
          <h3 className="menu-header-more-products">Main Menu</h3>
          <ul className="menu-list-more-products">
            <li className="menu-item-more-products" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("collection", "products"); // Pass category
                    }}>
              Shop All
              <ul className="submenu-list-more-products">
                <li className="submenu-item-more-products">All Categories</li>
              </ul>
            </li>
            <li
              className="menu-item-more-products care-more-products"

            >
              <span onClick={() => toggleCareMenu(setIsCareExpanded, isCareExpanded)}>
                Care</span>
              <ul
                className={`submenu-list-more-products ${isCareExpanded ? "expanded-more-products" : ""}`}>
                <li className="menu-item-more-products care-more-products" >
                  <span onClick={() => toggleCareMenu(setIsCareBodyExpanded, isCareBodyExpanded)}>Body </span>
                  <ul className={`submenu-list-more-products ${isCareBodyExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-body-care", "products"); // Pass category
                    }}>Body Care</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-deodorants", "products"); // Pass category
                    }}>Deodorants</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-hand-foot-care-products", "products"); // Pass category
                    }}>Hand & Foot Care</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("zero-waste-hygiene-essentials", "products"); // Pass category
                    }}>Hygiene</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-nail-care", "products"); // Pass category
                    }}>Nail Care</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-sanitary-care", "products"); // Pass category
                    }}>Sanitary Care</li>
                  </ul>
                </li>
                <li className="menu-item-more-products care-more-products">
                  <span onClick={() => toggleCareMenu(setIsCareFaceExpanded, isCareFaceExpanded)}>
                    Face
                  </span>
                  <ul className={`submenu-list-more-products ${isCareFaceExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-eye-care", "products"); // Pass category
                    }}>Eye Care</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-face-care", "products"); // Pass category
                    }}>Face Care</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("face-massagers", "products"); // Pass category
                    }}>Face Massagers</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-lip-care", "products"); // Pass category
                    }}>Lip Care</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-make-up-needs", "products"); // Pass category
                    }}>Make Up Needs</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-oral-care-products", "products"); // Pass category
                    }}>Oral Care</li>
                  </ul>
                </li>
                <li className="menu-item-more-products care-more-products">
                  <span onClick={() => toggleCareMenu(setIsCareHairExpanded, isCareHairExpanded)}>
                    Hair
                  </span>
                  <ul className={`submenu-list-more-products ${isCareHairExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-hair-care", "products"); // Pass category
                    }}>Hair Care</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("hair-grooming-essentials", "products"); // Pass category
                    }}>Hair Grooming</li>
                  </ul>

                </li>
              </ul>
            </li>
            <li className="menu-item-more-products" >
              <span onClick={() => toggleCareMenu(setIsFashionExpanded, isFashionExpanded)}>
                Fashion
              </span>
              <ul className={`submenu-list-more-products ${isFashionExpanded ? "expanded-more-products" : ""}`}>
                <li className="submenu-item-more-products" onClick={() => toggleCareMenu(setisFMenExpanded, isFMenExpanded)}>Men
                  <ul className={`submenu-list-more-products ${isFMenExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("mens-t-shirt", "products"); // Pass category
                    }}>T-Shirts</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-mens-pants-pyjamas", "products"); // Pass category
                    }}>Pants & Pyjamas</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-mens-shorts", "products"); // Pass category
                    }}>Shorts</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-mens-jackets-suits", "products"); // Pass category
                    }}>Jackets & Suits</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-mens-ethnic-wear", "products"); // Pass category
                    }}>Ethnic Wear</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-mens-accessories", "products"); // Pass category
                    }}>Accessories</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-mens-jackets-suits", "products"); // Pass category
                    }}>Jackets & Suits</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-men-shoes-flip-flops", "products"); // Pass category
                    }}>Shoes & Flip Flops</li>
                  </ul>
                </li>
                <li className="submenu-item-more-products" >
                  <span onClick={() => toggleCareMenu(setisFwomenExpanded, isFwomenExpanded)}>
                    Women
                  </span>
                  <ul className={`submenu-list-more-products ${isFwomenExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-dresses", "products"); // Pass category
                    }}>Dresses</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("womens-tops-blouses", "products"); // Pass category
                    }}>Tops & Blouses</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-t-shirts", "products"); // Pass category
                    }}>T-Shirts</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-shirts", "products"); // Pass category
                    }}>Shirts</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-sweatshirts-jackets", "products"); // Pass category
                    }}>Sweatshirts & Jackets</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-pants", "products"); // Pass category
                    }}>Skirts</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-skirts", "products"); // Pass category
                    }}>Skirts</li>

                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-shorts", "products"); // Pass category
                    }}>Shorts</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-overalls-co-ord-sets", "products"); // Pass category
                    }}>Co-ord Sets</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("womens-ethnic-traditional-wear", "products"); // Pass category
                    }}>Ethnic Wear</li>
                  </ul>

                </li>
                <li className="submenu-item-more-products" >
                  <span onClick={() => toggleCareMenu(setisFWomenAccExpanded, isFWomenAccExpanded)}>
                    Women Accesiories
                  </span>
                  <ul className={`submenu-list-more-products ${isFWomenAccExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-accessories", "products"); // Pass category
                    }}>Accessories</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-accessories", "products"); // Pass category
                    }}>Accessories</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-handbags", "products"); // Pass category
                    }}>Handbags</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-clutch", "products"); // Pass category
                    }}>Clutches</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("womens-earrings", "products"); // Pass category
                    }}>Earrings</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-intimate-wear", "products"); // Pass category
                    }}>Intimate Wear</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-womens-jewellery", "products"); // Pass category
                    }}>Jewellery</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-scarf", "products"); // Pass category
                    }}>Scarves</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-womens-shoes", "products"); // Pass category
                    }}>Shoes</li>
                  </ul>
                </li>
                <li className="submenu-item-more-products">
                  <span onClick={() => toggleCareMenu(setisFkidsExpanded, isFkidsExpanded)}>
                    Kids
                  </span>
                  <ul className={`submenu-list-more-products ${isFkidsExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-kids-clothing", "products"); // Pass category
                    }}>All Clothing</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("kids-onesies", "products"); // Pass category
                    }}>Onesies</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-kids-sets-overalls", "products"); // Pass category
                    }}>Sets & Overalls</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-kids-top-wear", "products"); // Pass category
                    }}>Top Wear</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-kids-shorts-kids-bottom-wear", "products"); // Pass category
                    }}>Bottom Wear</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-kids-diapering-needs", "products"); // Pass category
                    }}>Diapering Needs</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-kids-accessories", "products"); // Pass category
                    }}>Accessories</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-kids-bedding-nursery-products", "products"); // Pass category
                    }}>Bedding & Nursery</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("kids-furniture", "products"); // Pass category
                    }}>Furniture</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item-more-products">
              <span onClick={() => toggleCareMenu(setisEatExpanded, isEatExpanded)}>
                Eat & Drink
              </span>
              <ul className={`submenu-list-more-products ${isEatExpanded ? "expanded-more-products" : ""}`}>
                <li className="submenu-item-more-products">
                  <span onClick={() => toggleCareMenu(setisEEatExpanded, isEEatExpanded)}>
                    Eat
                  </span>
                  <ul className={`submenu-list-more-products ${isEEatExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-bakery-snacks", "products"); // Pass category
                    }}>Bakery & Snacks</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-cereals-grains", "products");// Pass category
                    }}>Cereals & Grains</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-cooking-essentials", "products");// Pass category
                    }}>Cooking Essentials</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-grass-fed-ghee", "products"); // Pass category
                    }}>Ghee</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-gourmet-foods", "products"); // Pass category
                    }}>Gourmet Foods</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-healthy-foods", "products"); // Pass category
                    }}>Healthy Foods</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("ethically-sourced-honey", "products"); // Pass category
                    }}>Honey</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-packed-foods", "products"); // Pass category
                    }}>Packed Foods</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-ready-to-eat-foods", "products"); // Pass category
                    }}>Ready to Eat Foods</li>
                  </ul>
                </li>
                <li className="submenu-item-more-products">
                  <span onClick={() => toggleCareMenu(setisEDrinksExpanded, isEDrinksExpanded)}>
                    Drinks
                  </span>
                  <ul className={`submenu-list-more-products ${isEDrinksExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-coffee", "products"); // Pass category
                    }}>Coffee</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-juices-health-drinks", "products"); // Pass category
                    }}>Juices & Health Drinks</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-tea", "products"); // Pass category
                    }}>Tea</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-beverage-accessories", "products"); // Pass category
                    }}>Beverage Accessories</li>
                  </ul>

                </li>
              </ul>
            </li>

            <li className="menu-item-more-products">
              <span onClick={() => toggleCareMenu(setisLivingExpanded, isLivingExpanded)}>
                Home & Living
              </span>
              <ul className={`submenu-list-more-products ${isLivingExpanded ? "expanded-more-products" : ""}`}>
                <li>
                  <span onClick={() => toggleCareMenu(setisHomeExpanded, isHomeExpanded)}>
                    Home
                  </span>
                  <ul className={`submenu-list-more-products ${isHomeExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-bathroom-essentials", "products"); // Pass category
                    }}>Bathroom Essentials</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-bath-linens", "products"); // Pass category
                    }}>Bath Linens</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-bed-linens", "products"); // Pass category
                    }}>Bed Linens</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-cleaning-supplies", "products"); // Pass category
                    }}>Cleaning Supplies Games & Toys</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-home-decor", "products"); // Pass category
                    }}>Home Decor</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("zero-waste-home-essentials", "products"); // Pass category
                    }}>Home Essentials</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-home-linens-accessories", "products"); // Pass category
                    }}>Home Linens</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("zero-waste-hygiene-essentials", "products"); // Pass category
                    }}>Hygiene</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("religious-ceremonial-essentials", "products"); // Pass category
                    }}>Religious & Ceremonial Items</li>
                  </ul>
                </li>
                <li>
                  <span onClick={() => toggleCareMenu(setisKitchenExpanded, isKitchenExpanded)}>
                    Kitchen & Garden
                  </span>
                  <ul className={`submenu-list-more-products ${isKitchenExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustaineco-friendly-tablewareable-food-storage-products", "products"); // Pass category
                    }}>Food Storage</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-tableware", "products"); // Pass category
                    }}>Tableware</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-dining-table-essentials", "products"); // Pass category
                    }}>Table Essentials</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-drinkware", "products"); // Pass category
                    }}>Drinkware</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("gardening-tools-planters-flower-pots", "products"); // Pass category
                    }}>Gardening Tools</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-planters", "products"); // Pass category
                    }}>Pots & Planters</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-pet-care", "products"); // Pass category
                    }}>Pet Care</li>
                  </ul>
                </li>
                <li>
                  <span onClick={() => toggleCareMenu(setisWellnessExpanded, isWellnessExpanded)}>
                    Wellness
                  </span>
                  <ul className={`submenu-list-more-products ${isWellnessExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-scented-candles", "products"); // Pass category
                    }}>Aroma Candles</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("organic-essential-oils", "products"); // Pass category
                    }}>Essential Oils</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-fitness-essentials", "products"); // Pass category
                    }}>Fitness Essentials</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-musical-instruments", "products"); // Pass category
                    }}>Musical Instruments</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-workout-from-home-essentials", "products"); // Pass category
                    }}>Workout Gear</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("sustainable-yoga-essentials", "products"); // Pass category
                    }}>Yoga Essentials</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item-more-products" >
              <span onClick={() => toggleCareMenu(setisWorkExpanded, isWorkExpanded)}>
                Work
              </span>
              <ul className={`submenu-list-more-products ${isWorkExpanded ? "expanded-more-products" : ""}`}>

                <li className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-office-supplies", "products"); // Pass category
                }}>Office Supplies</li>
                <li className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("plastic-free-packaging-supplies", "products"); // Pass category
                }}>Packaging Solutions</li>
                <li className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-stationerynav", "products"); // Pass category
                }}>Stationery</li>
                <li className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-work-from-home-essentials", "products"); // Pass category
                }}>Work-From-Home Essentials</li>
              </ul>

            </li>
            <li className="menu-item-more-products">
              <span onClick={() => toggleCareMenu(setisTravelExpanded, isTravelExpanded)}>
                Travel
              </span>
              <div className={`submenu-list-more-products ${isTravelExpanded ? "expanded-more-products" : ""}`}>
                <div className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-travel-bags", "products"); // Pass category
                }}>Travel Bags</div>
                <div className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-travel-duffels", "products"); // Pass category
                }}>Travel Duffels</div>
                <div className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-backpacks", "products"); // Pass category
                }}>Backpacks</div>
                <div className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-handbags-for-travel", "products"); // Pass category
                }}>Handbags</div>
                <div className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-travel-accessories", "products"); // Pass category
                }}>Travel Accessories</div>
                <div className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-travel-cutlery-set", "products"); // Pass category
                }}>On The Go Cutlery</div>
                <div className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("non-leather-wallets", "products"); // Pass category
                }}>Wallets</div>
                <div className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-laptop-sleeve", "products"); // Pass category
                }}>Laptop Sleeve</div>
                <div className="dropdown-item-1" onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("reusable-tote-bag", "products"); // Pass category
                }}>Everyday Totes</div>
              </div>
            </li>
            <li className="menu-item-more-products">
              <span onClick={() => toggleCareMenu(setisGiftsExpanded, isGiftsExpanded)}>
                Gift 🎁
              </span>
              <ul className={`submenu-list-more-products ${isGiftsExpanded ? "expanded-more-products" : ""}`}>
                <li>
                  <span onClick={() => toggleCareMenu(setisGHampersExpanded, isGHampersExpanded)}>
                    Gift Hampers
                  </span>
                  <ul className={`submenu-list-more-products ${isGHampersExpanded ? "expanded-more-products" : ""}`}>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-gift-hampers-under-500", "products"); // Pass category
                    }}>Hampers Under ₹500</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-gift-hampers-under-1000", "products"); // Pass category
                    }}>Hampers Under ₹1000</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-gift-hampers-under-1500", "products"); // Pass category
                    }}>Hampers Under ₹1500</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-gift-hampers-under-2500", "products"); // Pass category
                    }}>Hampers Under ₹2500</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-gift-hampers-under-5000", "products"); // Pass category
                    }}>Hampers Under ₹5000</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("eco-friendly-gift-hampers-under-10000", "products"); // Pass category
                    }}>Hampers Under ₹10000</li>
                    <li className="care-item" onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      handleNavigation("gifts-on-sale", "products"); // Pass category
                    }}>Gifts on Sale</li>
                  </ul>
                </li>
                <li>
                  <span onClick={() => toggleCareMenu(setisGPrsonalisedExpanded, isGPrsonalisedExpanded)}>
                    Personalised
                  </span>
                  <ul className={`submenu-list-more-products ${isGPrsonalisedExpanded ? "expanded-more-products" : ""}`}>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("corporate-gifts", "products"); // Pass category
                        }}>For Employee</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-her", "products"); // Pass category
                        }}>For Her</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-him", "products"); // Pass category
                        }}>For Him</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-kids", "products"); // Pass category
                        }}>For Kids</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-pet-care", "products"); // Pass category
                        }}>For Pets</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-gifts-for-plant-lovers", "products"); // Pass category
                        }}>For Plant Lovers</li>
                      </ul>
                </li>
                <li>
                  <span onClick={() => toggleCareMenu(setisGOccationExpanded, isGOccationExpanded)}>
                    By Occasion
                  </span>
                  <ul className={`submenu-list-more-products ${isGOccationExpanded ? "expanded-more-products" : ""}`}>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-mothers-day", "products"); // Pass category
                        }}>Mother's Day</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-anniversaries", "products"); // Pass category
                        }}>Anniversary</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-baby-gifts", "products"); // Pass category
                        }}>Baby Shower</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-birthday-gifts", "products"); // Pass category
                        }}>Birthday</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("christmas-giftsnav", "products"); // Pass category
                        }}>Christmas</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-diwali-gifts", "products"); // Pass category
                        }}>Diwali</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-fathers-day-gifts", "products"); // Pass category
                        }}>Father's Day</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-ganesh-chaturthi-essentials", "products"); // Pass category
                        }}>Ganesh Chaturthi</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-holi", "products"); // Pass category
                        }}>Holi</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-home-decor", "products"); // Pass category
                        }}>House Warming</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-office-parties", "products"); // Pass category
                        }}>Office Party</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-raksha-bandhan", "products"); // Pass category
                        }}>Raksha Bandhan</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-get-togethers", "products"); // Pass category
                        }}>Social Events</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-valentines-day", "products"); // Pass category
                        }}>Valentine's Day</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-weddings", "products"); // Pass category
                        }}>Wedding Favours</li>
                      </ul>
                </li>
              </ul>
            </li>
            <li className="me`nu-item-more-products" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("green-friday-sale", "products"); // Pass category
                        }}>SALE 💚</li>
          </ul>
        </aside>
        {/* Main Content */}
        <main className="content-more-products">
          {/* <div className="banner-more-products">
          <h1 className="banner-title-more-products">Sustainable Swaps</h1>
          <p className="banner-text-more-products">Starting from Rs.99 only</p>
          <button className="banner-button-more-products">Shop Now</button> */}
          {
            moreProducts[0]?.pageImage ?
              <img
                src={moreProducts[0]?.pageImage}
                alt="Sustainable Swaps"
                className="banner-image-more-products"
              /> : ""
          }

          {/* </div> */}

          {/*  */}

          <div className="app-more-products">
            <header className="header-more-products">
              <h2 className="title-more-products">{toTitleCase(moreProducts[0]?.category)}</h2>
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
                  handleNavigation(product._id, "pDetails"); // Pass category
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
                    <button className="add-to-cart-more-products" onClick={() => addToCart(product)}>ADD TO CART</button>
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
