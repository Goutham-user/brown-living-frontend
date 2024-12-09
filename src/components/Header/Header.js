import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch, FaRegHeart } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import { FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// import '../../../public/assets/careNatural.jpg';

import { Container, Row, Col, Image } from 'react-bootstrap';

const Header = () => {

  const [shopAllOpen, setShopAllOpen] = useState(false);
  const [materialOpen, setMaterialOpen] = useState(false);
  const [craftOpen, setCraftOpen] = useState(false);
  const [certificationOpen, setCertificationOpen] = useState(false);
  const [price, setPriceOpen] = useState(false);

  const [workOpen, setWorkOpen] = useState(false);
  const [travelOpen, settravelOpen] = useState(false);

  const [careOpen, setCareOpen] = useState(false);

  const [fashionOpen, setFashionOpen] = useState(false);

  const [eatAndDrinkOpen, setEatAndDrinkOpen] = useState(false);

  const [homeAndLivingOpen, sethomeAndLivingOpen] = useState(false);

  const [giftsOpen, setgiftsOpen] = useState(false);

  const [aboutOpen, setaboutOpen] = useState(false);



  const materials = [
    { key: "Bemberg", value: "made-with-bemberg" },
    { key: "Bamboo", value: "made-with-bamboo" },
    { key: "Coconut", value: "coconut-essentials" },
    { key: "Copper", value: "copper-essentials" },
    { key: "Cork", value: "cork-essentials" },
    { key: "Denim", value: "made-with-denim" },
    { key: "Desserto (Cactus Leather)", value: "desserto-cactus-leather-essentials" },
    { key: "Geranium", value: "made-with-geranium" },
    { key: "Hemp", value: "hemp-essentials" },
    { key: "Kala Cotton", value: "sustainable-kala-cotton-essentials" },
    { key: "Kansa", value: "eco-friendly-kansa-essentials" },
    { key: "Khadi", value: "made-with-khadi" },
    { key: "Malai (Coconut Leather)", value: "malai-coconut-leather-essentials" },
    { key: "Organic Cotton", value: "organic-cotton-essentials" },
    { key: "Piñatex (Pineapple Leather)", value: "pinatex-products-pineapple-leather" },
    { key: "Sisal", value: "sisal-essentials" },
    { key: "Steel", value: "stainless-steel-essentials" },
    { key: "Tencel", value: "tencel-essentials" },
    { key: "Wood", value: "all-products-for-earth-lovers" }
  ];

  const crafts = [
    { key: "lkat", value: "ikat-essentials" },
    { key: "Macrame", value: "sustainable-macrame-essentials" },
    { key: "Shibori", value: "shibori-essentials" }
  ];

  const certifications = [{ key: "AYUSH", value: "ayush-certified-products" }, { key: "ECOCERT", value: "ecocert-certified-products" }, { key: "FDA", value: "fda-certified-products" }, { key: "FSC", value: "fsc-certified-products" }, { key: "GOTS", value: "gots-certified-products" }, { key: "Oeko-Tex", value: "oeko-tex-certified" }, { key: "PETA", value: "peta-approved-vegan-certified" }, { key: "USDA Organic", value: "usda-organic-certified" }];

  const prices = [{key: "Under ₹199",value:"eco-friendly-products-under-199"}, {key:"Under ₹299",value:"eco-friendly-products-under-299"}, {key:"Under ₹500",value:"eco-friendly-products-under-500"}, {key:"Under ₹1000",value:"eco-friendly-products-under-1000"}, {key:"Under ₹1500",value:"eco-friendly-products-under-1500"}, {key:"Under ₹2500",value:"eco-friendly-products-under-2500"}, {key:"Under ₹5000",value:"eco-friendly-products-under-5000"}, {key:"Under ₹10000",value:"eco-friendly-products-under-10000"}];


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logedInUser, setLogedInUser] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", response.data.user);
      setLogedInUser(localStorage.getItem("user"));
      console.log(response)
      setMessage("Login successful!");
      setIsLoggedIn(true);
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setLogedInUser(null)
    setMessage("Logged out successfully!");
  };



  const [zIndex, setZIndex] = useState(-1);
  const [display, setdispaly] = useState("none");
  const [visibiliy, setvisibiliy] = useState("hidden");

  // Function to toggle zIndex for show/hide behavior
  const handleToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling to document
    setZIndex((prevZIndex) => (prevZIndex === -1 ? 2 : -1));
    setdispaly((prevDisplay) => (prevDisplay === "none" ? "block" : "none"));
    setvisibiliy((prevVisiblilty) => (prevVisiblilty === "hidden" ? "visible" : "hidden"));
  };

  useEffect(() => {
    // Function to hide the div on clicking anywhere outside
    const handleClickOutside = () => {
      setZIndex(-1);
    };

    // Add event listener for global clicks
    document.addEventListener("click", handleClickOutside);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const handleNavigation = (category) => {
    navigate(`/products/${category}`);
    window.location.reload();
  };


  return (
    <div>




      <div className="info-bar">

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4'></div>
            <div className='col-lg-6'>
              <div className="info-text">
                <span role="img" aria-label="heart">💚</span> Planet Positive Shopping <span role="img" aria-label="heart">💚</span>
                COD Available <span className="flag-icon">🇮🇳</span>
              </div>
            </div>
            <div className='col-lg-2'>
              <button className="subscribe-button" onClick={()=>alert("Subscribed Sucessfully!")}>
                <FaEnvelope className="icon" />
                Subscribe NOW!
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* <div class="container-fluid">
        <div class="row">
          <div class="col-2">logo
          </div>
          <div class="col-6">search</div>
          <div class="col-2">login</div>
          <div class="col-1">fav</div>
          <div class="col-1">cart</div>
        </div>
      </div> */}
      <header className="header">

        <div className="logo">
          <Link to="/">
            <img class="header__logo-image" width="170" height="51" src="//brownliving.in/cdn/shop/files/BL_White_Logo_ca0efb4d-fadd-4db7-9e76-bbc4f1eac9c8_170x@2x.png?v=1723645123" alt="Brown Living™"></img>
          </Link>
        </div>
        <SearchBar />

        {/* <div class="container-fluid">
        <div class="row">
          <div class="col-4">login
          </div>
          <div class="col-4">fav</div>
          <div class="col-4">cart</div>
         
        </div>
      </div> */}

        <div className="header-icons">

          <button className='login-signup' onClick={handleToggle}>
            {logedInUser ? logedInUser :
              <span> Login/Sign up <p>My Account <IoIosArrowDown /></p> </span>
            }
          </button>

          <div onClick={(e) => e.stopPropagation()} style={{
            display: display,
            zIndex: zIndex,
            visibility:visibiliy
          }} className="login-dropdown">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin}>
                <h3 className='black'>Login to my account</h3>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Login</button>
                <p className="message">{message}</p>
              </form>
            ) : (
              <div>
                <p>Welcome back!</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>

          <FaRegHeart />
          <Link to="/cart" className="icon-link">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
        </div>




      </header>

      <nav className="navbar-1">
        <ul className="navbar-menu-1">
          <li
            className="navbar-item-1"
            onMouseEnter={() => setShopAllOpen(true)}
            onMouseLeave={() => setShopAllOpen(false)}
          >
            <span className="navbar-link-1">Shop All<IoIosArrowDown /></span>
            {shopAllOpen && (
              <div className="dropdown-1">
                <div className="dropdown-item-1"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleNavigation("collection"); // Pass category
                  }}>Shop by Collection</div>
                <div
                  className="dropdown-item-1"
                  onMouseEnter={() => { setMaterialOpen(true) }}
                  onMouseLeave={() => setMaterialOpen(false)}
                >
                  Shop by Material
                  {materialOpen && (
                    <div className="submenu-1">
                      {materials.map((material, index) => (
                        <li className="navbar-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation(material.value); // Pass category
                        }}>
                          <span key={index} className="submenu-item-1">
                            {material.key}
                          </span>
                        </li>

                      ))}
                    </div>
                  )}
                </div>

                <div
                  className="dropdown-item-1"
                  onMouseEnter={() => { setCraftOpen(true) }}
                  onMouseLeave={() => setCraftOpen(false)}
                >
                  Shop by Craft
                  {craftOpen && (
                    <div className="submenu-1">
                      {crafts.map((craft, index) => (
                        <li className="navbar-item-1"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            handleNavigation(craft.value); // Pass category
                          }}
                        >
                          <span key={index} className="submenu-item-1">
                            {craft.key}
                          </span>
                        </li>

                      ))}
                    </div>
                  )}
                </div>
                <div
                  className="dropdown-item-1"
                  onMouseEnter={() => { setCertificationOpen(true) }}
                  onMouseLeave={() => setCertificationOpen(false)}
                >
                  Shop by Certification
                  {certificationOpen && (
                    <div className="submenu-1">
                      {certifications.map((certification, index) => (
                        <li className="navbar-item-1"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            handleNavigation(certification.value); // Pass category
                          }}>
                          <span key={index} className="submenu-item-1">
                            {certification.key}
                          </span>
                        </li>

                      ))}
                    </div>
                  )}
                </div>
                {/* <div className="dropdown-item-1">Shop by Brand</div> */}
                <div
                  className="dropdown-item-1"
                  onMouseEnter={() => { setPriceOpen(true) }}
                  onMouseLeave={() => setPriceOpen(false)}
                >
                  Shop by Price
                  {price && (
                    <div className="submenu-1">
                      {prices.map((price, index) => (
                        <li className="navbar-item-1"  onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation(price.value); // Pass category
                        }}>
                          <span key={index} className="submenu-item-1">
                            {price.key}
                          </span>
                        </li>

                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
          <li className="navbar-item-1"
            onMouseEnter={() => setCareOpen(true)}
            onMouseLeave={() => setCareOpen(false)}>
            <span className="navbar-link-1">Care</span>
            {careOpen && (
              <div className="dropdown-1-care">
                <Container>
                  <Row className="text-center my-5">
                    <Col md={2}>
                      <h5>Body</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-body-care"); // Pass category
                        }}>Body Care</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-deodorants"); // Pass category
                        }}>Deodorants</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-hand-foot-care-products"); // Pass category
                        }}>Hand & Foot Care</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("zero-waste-hygiene-essentials"); // Pass category
                        }}>Hygiene</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-nail-care"); // Pass category
                        }}>Nail Care</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-sanitary-care"); // Pass category
                        }}>Sanitary Care</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5>Face</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-eye-care"); // Pass category
                        }}>Eye Care</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-face-care"); // Pass category
                        }}>Face Care</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("face-massagers"); // Pass category
                        }}>Face Massagers</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-lip-care"); // Pass category
                        }}>Lip Care</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-make-up-needs"); // Pass category
                        }}>Make Up Needs</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-oral-care-products"); // Pass category
                        }}>Oral Care</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5>Hair</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-hair-care"); // Pass category
                        }}>Hair Care</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("hair-grooming-essentials"); // Pass category
                        }}>Hair Grooming</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <div onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleNavigation("sustainable-skin-care"); // Pass category
                      }}>
                        <Image
                          src="https://brownliving.in/cdn/shop/files/CARE_2_319634d0-b9a3-4296-a056-04747747ce51_550x.jpg?v=1634230307"
                          alt="Natural & Cruelty Free"
                          fluid
                        />
                        <h6 className='care-item'>Natural & Cruelty Free</h6>
                        <p>Vegan Skin Care</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleNavigation("ocean-safe-bath-products"); // Pass category
                      }}>
                        <Image
                          src="https://brownliving.in/cdn/shop/files/CARE_1_Reef-Safe_Bath_Essentials_550x.jpg?v=1634230324"
                          alt="Reef Safe"
                          fluid
                        />
                        <h6 className='care-item'>Reef Safe</h6>
                        <p>Plastic Free Bath Essentials</p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            )}

          </li>
          <li className="navbar-item-1"
            onMouseEnter={() => setFashionOpen(true)}
            onMouseLeave={() => setFashionOpen(false)}>
            <span className="navbar-link-1">Fashion</span>
            {fashionOpen && (
              <div className="dropdown-1-care dropdown-1-fashion">
                <Container>
                  <Row className="text-center my-5">
                    <Col md={2}>
                      <h5 onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleNavigation("sustainable-mens-shirt"); // Pass category
                      }}>Mens</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("mens-t-shirt"); // Pass category
                        }}>T-Shirts</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-mens-pants-pyjamas"); // Pass category
                        }}>Pants & Pyjamas</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-mens-shorts"); // Pass category
                        }}>Shorts</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-mens-jackets-suits"); // Pass category
                        }}>Jackets & Suits</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-mens-ethnic-wear"); // Pass category
                        }}>Ethnic Wear</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-mens-accessories"); // Pass category
                        }}>Accessories</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-mens-jackets-suits"); // Pass category
                        }}>Jackets & Suits</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-men-shoes-flip-flops"); // Pass category
                        }}>Shoes & Flip Flops</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5>Womens Clothing</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-dresses"); // Pass category
                        }}>Dresses</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("womens-tops-blouses"); // Pass category
                        }}>Tops & Blouses</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-t-shirts"); // Pass category
                        }}>T-Shirts</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-shirts"); // Pass category
                        }}>Shirts</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-sweatshirts-jackets"); // Pass category
                        }}>Sweatshirts & Jackets</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-pants"); // Pass category
                        }}>Skirts</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-skirts"); // Pass category
                        }}>Skirts</li>

                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-shorts"); // Pass category
                        }}>Shorts</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-overalls-co-ord-sets"); // Pass category
                        }}>Co-ord Sets</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("womens-ethnic-traditional-wear"); // Pass category
                        }}>Ethnic Wear</li>
                      </ul>

                    </Col>
                    <Col md={2}>


                      <h5>Womens</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-accessories"); // Pass category
                        }}>Accessories</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-accessories"); // Pass category
                        }}>Accessories</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-handbags"); // Pass category
                        }}>Handbags</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-clutch"); // Pass category
                        }}>Clutches</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("womens-earrings"); // Pass category
                        }}>Earrings</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-intimate-wear"); // Pass category
                        }}>Intimate Wear</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-womens-jewellery"); // Pass category
                        }}>Jewellery</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-scarf"); // Pass category
                        }}>Scarves</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-womens-shoes"); // Pass category
                        }}>Shoes</li>
                      </ul>
                    </Col>

                    <Col md={2}>
                      <h5>Kids</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-kids-clothing"); // Pass category
                        }}>All Clothing</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("kids-onesies"); // Pass category
                        }}>Onesies</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-kids-sets-overalls"); // Pass category
                        }}>Sets & Overalls</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-kids-top-wear"); // Pass category
                        }}>Top Wear</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-kids-shorts-kids-bottom-wear"); // Pass category
                        }}>Bottom Wear</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-kids-diapering-needs"); // Pass category
                        }}>Diapering Needs</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-kids-accessories"); // Pass category
                        }}>Accessories</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-kids-bedding-nursery-products"); // Pass category
                        }}>Bedding & Nursery</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("kids-furniture"); // Pass category
                        }}>Furniture</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <div onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleNavigation("unisex-sustainable-fashion"); // Pass category
                      }}>

                        <Image
                          src="https://brownliving.in/cdn/shop/files/gender_neutral_550x.jpg?v=1675333017"
                          alt="Unisex"
                          fluid
                        />
                        <h6 className='care-item'>Unisex</h6>
                        <p>Explore Sustainable Fashion</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleNavigation("plus-size-sustainable-clothing"); // Pass category
                      }}>


                        <Image
                          src="https://brownliving.in/cdn/shop/files/Plus_size_fashion_550x.jpg?v=1675333074"
                          alt="plus Size"
                          fluid
                        />
                        <h6 className='care-item'>Plus Size</h6>
                        <p>Explore Sustainable Fashion</p>
                      </div>

                    </Col>
                  </Row>
                </Container>
              </div>
            )}
          </li>


          <li className="navbar-item-1"
            onMouseEnter={() => setEatAndDrinkOpen(true)}
            onMouseLeave={() => setEatAndDrinkOpen(false)}>
            <span className="navbar-link-1">Eat & Drink</span>
            {eatAndDrinkOpen && (
              <div className="dropdown-1-care dropdown-1-east-drink">
                <Container>
                  <Row className="text-center my-5">
                    <Col md={2}>
                      <h5>Eat</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-bakery-snacks"); // Pass category
                        }}>Bakery & Snacks</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-cereals-grains");// Pass category
                        }}>Cereals & Grains</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-cooking-essentials");// Pass category
                        }}>Cooking Essentials</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-grass-fed-ghee"); // Pass category
                        }}>Ghee</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-gourmet-foods"); // Pass category
                        }}>Gourmet Foods</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-healthy-foods"); // Pass category
                        }}>Healthy Foods</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("ethically-sourced-honey"); // Pass category
                        }}>Honey</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-packed-foods"); // Pass category
                        }}>Packed Foods</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-ready-to-eat-foods"); // Pass category
                        }}>Ready to Eat Foods</li>
                      </ul>

                    </Col>
                    <Col md={2}>
                      <h5>Drink</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-coffee"); // Pass category
                        }}>Coffee</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-juices-health-drinks"); // Pass category
                        }}>Juices & Health Drinks</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-tea"); // Pass category
                        }}>Tea</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-beverage-accessories"); // Pass category
                        }}>Beverage Accessories</li>
                      </ul>











                    </Col>

                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/EAT_DRINK_1_1c77decc-7e45-4f40-97e0-54baed6057d9_550x.jpg?v=1634230620"
                        alt="Mindfully Organic"
                        fluid onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-food-drinks"); // Pass category
                        }}
                      />
                      <h6 className='care-item'>Mindfully Organic</h6>
                      <p>Shop Conscious Food</p>
                    </Col>
                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/EAT_DRINK_2_550x.jpg?v=1634230657"
                        alt="Earth-Friendly"
                        fluid onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-food-drinks"); // Pass category
                        }}
                      />
                      <h6 className='care-item'>Earth-Friendly</h6>
                      <p>ECafes in India</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            )}
          </li>

          <li className="navbar-item-1"
            onMouseEnter={() => sethomeAndLivingOpen(true)}
            onMouseLeave={() => sethomeAndLivingOpen(false)}>
            <span className="navbar-link-1">Home & Living</span>
            {homeAndLivingOpen && (
              <div className="dropdown-1-care dropdown-1-home">
                <Container>
                  <Row className="text-center my-5">
                    <Col md={2}>
                      <h5 onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-home-living-essentials"); // Pass category
                        }} >Home</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-bathroom-essentials"); // Pass category
                        }}>Bathroom Essentials</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-bath-linens"); // Pass category
                        }}>Bath Linens</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-bed-linens"); // Pass category
                        }}>Bed Linens</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-cleaning-supplies"); // Pass category
                        }}>Cleaning Supplies Games & Toys</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-home-decor"); // Pass category
                        }}>Home Decor</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("zero-waste-home-essentials"); // Pass category
                        }}>Home Essentials</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-home-linens-accessories"); // Pass category
                        }}>Home Linens</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("zero-waste-hygiene-essentials"); // Pass category
                        }}>Hygiene</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("religious-ceremonial-essentials"); // Pass category
                        }}>Religious & Ceremonial Items</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5 onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-kitchen-products"); // Pass category
                        }}>Kitchen & Garden</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustaineco-friendly-tablewareable-food-storage-products"); // Pass category
                        }}>Food Storage</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-tableware"); // Pass category
                        }}>Tableware</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-dining-table-essentials"); // Pass category
                        }}>Table Essentials</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-drinkware"); // Pass category
                        }}>Drinkware</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gardening-tools-planters-flower-pots"); // Pass category
                        }}>Gardening Tools</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-planters"); // Pass category
                        }}>Pots & Planters</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-pet-care"); // Pass category
                        }}>Pet Care</li>
                      </ul>

                    </Col>
                    <Col md={2}>


                      <h5 onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("wellness-essentials"); // Pass category
                        }}> Wellness</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-scented-candles"); // Pass category
                        }}>Aroma Candles</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("organic-essential-oils"); // Pass category
                        }}>Essential Oils</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-fitness-essentials"); // Pass category
                        }}>Fitness Essentials</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-musical-instruments"); // Pass category
                        }}>Musical Instruments</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-workout-from-home-essentials"); // Pass category
                        }}>Workout Gear</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-yoga-essentials"); // Pass category
                        }}>Yoga Essentials</li>
                      </ul>
                    </Col>


                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/Musical_Instruments_3_550x.png?v=1694019788"
                        alt="Sounds of Nature"
                        fluid onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-musical-instruments"); // Pass category
                        }}
                      />
                      <h6 className='care-item'>Sounds of Nature</h6>
                      <p>Musical Instruments</p>
                    </Col>
                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/Yoga_Essentials_2_550x.png?v=1694019807"
                        alt="Mindful & Wholistic"
                        fluid onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-yoga-essentials"); // Pass category
                        }}
                      />
                      <h6 className='care-item'>Mindful & Wholistic</h6>
                      <p>Yoga Essentials</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            )}
          </li>

          <li className="navbar-item-1"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}>
            <span className="navbar-link-1">Work <IoIosArrowDown /></span>
            {workOpen && (
              <div className="dropdown-1">
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-office-supplies"); // Pass category
                        }}>Office Supplies</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("plastic-free-packaging-supplies"); // Pass category
                        }}>Packaging Solutions</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-stationerynav"); // Pass category
                        }}>Stationery</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-work-from-home-essentials"); // Pass category
                        }}>Work-From-Home Essentials</div>
              </div>
            )}
          </li>

          <li className="navbar-item-1"
            onMouseEnter={() => settravelOpen(true)}
            onMouseLeave={() => settravelOpen(false)}>
            <span className="navbar-link-1">Travel <IoIosArrowDown /></span>
            {travelOpen && (
              <div className="dropdown-1">
               <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-travel-bags"); // Pass category
                        }}>Travel Bags</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-travel-duffels"); // Pass category
                        }}>Travel Duffels</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-backpacks"); // Pass category
                        }}>Backpacks</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-handbags-for-travel"); // Pass category
                        }}>Handbags</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-travel-accessories"); // Pass category
                        }}>Travel Accessories</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-travel-cutlery-set"); // Pass category
                        }}>On The Go Cutlery</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("non-leather-wallets"); // Pass category
                        }}>Wallets</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-laptop-sleeve"); // Pass category
                        }}>Laptop Sleeve</div>
                <div className="dropdown-item-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("reusable-tote-bag"); // Pass category
                        }}>Everyday Totes</div>
              </div>
            )}
          </li>
          <li className="navbar-item-1"
            onMouseEnter={() => setgiftsOpen(true)}
            onMouseLeave={() => setgiftsOpen(false)}>
            <span className="navbar-link-1">Gifts 🎁</span>
            {giftsOpen && (
              <div className="dropdown-1-care dropdown-1-gifts">
                <Container>
                  <Row className="text-center my-5">
                    <Col md={2}>
                      <h5>Gift Hampers</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-gift-hampers-under-500"); // Pass category
                        }}>Hampers Under ₹500</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-gift-hampers-under-1000"); // Pass category
                        }}>Hampers Under ₹1000</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-gift-hampers-under-1500"); // Pass category
                        }}>Hampers Under ₹1500</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-gift-hampers-under-2500"); // Pass category
                        }}>Hampers Under ₹2500</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-gift-hampers-under-5000"); // Pass category
                        }}>Hampers Under ₹5000</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-gift-hampers-under-10000"); // Pass category
                        }}>Hampers Under ₹10000</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-on-sale"); // Pass category
                        }}>Gifts on Sale</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5>Personalised</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("corporate-gifts"); // Pass category
                        }}>For Employee</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-her"); // Pass category
                        }}>For Her</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-him"); // Pass category
                        }}>For Him</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-kids"); // Pass category
                        }}>For Kids</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-pet-care"); // Pass category
                        }}>For Pets</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-gifts-for-plant-lovers"); // Pass category
                        }}>For Plant Lovers</li>
                      </ul>

                    </Col>
                    <Col md={2}>


                      <h5>By Occasion</h5>
                      <ul className="list-unstyled">
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-mothers-day"); // Pass category
                        }}>Mother's Day</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-anniversaries"); // Pass category
                        }}>Anniversary</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-baby-gifts"); // Pass category
                        }}>Baby Shower</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-birthday-gifts"); // Pass category
                        }}>Birthday</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("christmas-giftsnav"); // Pass category
                        }}>Christmas</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-diwali-gifts"); // Pass category
                        }}>Diwali</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("sustainable-fathers-day-gifts"); // Pass category
                        }}>Father's Day</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-ganesh-chaturthi-essentials"); // Pass category
                        }}>Ganesh Chaturthi</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-holi"); // Pass category
                        }}>Holi</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("eco-friendly-home-decor"); // Pass category
                        }}>House Warming</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-office-parties"); // Pass category
                        }}>Office Party</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-raksha-bandhan"); // Pass category
                        }}>Raksha Bandhan</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-get-togethers"); // Pass category
                        }}>Social Events</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-valentines-day"); // Pass category
                        }}>Valentine's Day</li>
                        <li className="care-item" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("gifts-for-weddings"); // Pass category
                        }}>Wedding Favours</li>
                      </ul>
                    </Col>


                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/products/sustainable-gift-card-bl-18-gift-cards-brown-living-492516_550x.jpg?v=1717419326"
                        alt="Gift Cards"
                        fluid
                      />
                      <h6 className='care-item'>Gift Cards</h6>
                      <p>Give the Gift of Choice</p>
                    </Col>
                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/products/plant-a-tree-get-an-etreecertificate-045-01093-growtrees-etree-gift-a-tree-brown-living-740532_550x.jpg?v=1682966274"
                        alt="Plant a Tree"
                        fluid
                      />
                      <h6 className='care-item'>Plant a Tree</h6>
                      <p>Get an eTreeCertificate</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            )}
          </li>
          <li className="navbar-item-1"><span className="navbar-link-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("green-friday-sale"); // Pass category
                        }}>SALE 💚</span></li>
          <li className="navbar-item-1"><span className="navbar-link-1" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          handleNavigation("green-friday-sale"); // Pass category
                        }}>Bulk Request</span></li>
          <li className="navbar-item-1"
            onMouseEnter={() => setaboutOpen(true)}
            onMouseLeave={() => setaboutOpen(false)}>
            <span className="navbar-link-1">About Us</span>
            {aboutOpen && (
              <div className="dropdown-1-care dropdown-1-about">
                <Container>
                  <Row className="text-center my-5">
                    <Col md={2}>
                      <h5>The</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Brown</li>
                        <li className="care-item">Lens</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5>Our</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Impact</li>
                      </ul>

                    </Col>
                    <Col md={2}>


                      <h5>Our</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Team</li>
                      </ul>
                    </Col>
                    <Col md={1}>
                      <ul className="list-unstyled">
                        <li className="care-item">Our Blog - Brown Journal</li>
                      </ul>
                    </Col>
                    <Col md={1}>
                      <ul className="list-unstyled">
                        <li className="care-item">Press & Media</li>
                      </ul>
                    </Col>


                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/CA_X_PK_28_550x.jpg?v=1634231303"
                        alt="Earth-lovin' Packing"
                        fluid
                      />
                      <h6 className='care-item'>Earth-lovin' Packing</h6>
                      <p>100% Plastic Free</p>
                    </Col>
                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/CA_X_PK_23_550x.jpg?v=1634231348"
                        alt="Our Founder's Story"
                        fluid
                      />
                      <h6 className='care-item'>Our Founder's Story</h6>
                      <p>Making India Sustainable</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            )}
          </li>
        </ul>
      </nav>

    </div>
  );
};

export default Header;
