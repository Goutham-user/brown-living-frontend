import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaSearch, FaRegHeart  } from 'react-icons/fa';
import { IoIosArrowDown  } from "react-icons/io";
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import { FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

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
    "Bemberg",
    "Bamboo",
    "Coconut",
    "Copper",
    "Cork",
    "Denim",
    "Desserto (Cactus Leather)",
    "Geranium",
    "Hemp",
    "Kala Cotton",
    "Kansa",
    "Khadi",
    "Malai (Coconut Leather)",
    "Organic Cotton",
    "Piñatex (Pineapple Leather)",
    "Sisal",
    "Steel",
    "Tencel",
    "Wood"
  ];

  const crafts = ["lkat", "Macrame", "Shibori"];

  const certifications = ["AYUSH", "ECOCERT", "FDA", "FSC", "GOTS", "Oeko-Tex", "PETA", "USDA Organic"];

  const prices = ["Under ₹199", "Under ₹299", "Under ₹500", "Under ₹1000", "Under ₹1500", "Under ₹2500", "Under ₹5000", "Under ₹10000"];

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

  // Function to toggle zIndex for show/hide behavior
  const handleToggle = (e) => {
    e.stopPropagation(); // Prevent event bubbling to document
    setZIndex((prevZIndex) => (prevZIndex === -1 ? 2 : -1));
    setdispaly((prevDisplay) => (prevDisplay === "none" ? "block" : "none"));
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
              <button className="subscribe-button">
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
         
          <FaRegHeart  />
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
            <span className="navbar-link-1">Shop All<IoIosArrowDown  /></span>
            {shopAllOpen && (
              <div className="dropdown-1">
                <div className="dropdown-item-1">Shop by Collection</div>
                <div
                  className="dropdown-item-1"
                  onMouseEnter={() => { setMaterialOpen(true) }}
                  onMouseLeave={() => setMaterialOpen(false)}
                >
                  Shop by Material
                  {materialOpen && (
                    <div className="submenu-1">
                      {materials.map((material, index) => (
                        <li className="navbar-item-1">
                          <span key={index} className="submenu-item-1">
                            {material}
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
                        <li className="navbar-item-1">
                          <span key={index} className="submenu-item-1">
                            {craft}
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
                        <li className="navbar-item-1">
                          <span key={index} className="submenu-item-1">
                            {certification}
                          </span>
                        </li>

                      ))}
                    </div>
                  )}
                </div>
                <div className="dropdown-item-1">Shop by Brand</div>
                <div
                  className="dropdown-item-1"
                  onMouseEnter={() => { setPriceOpen(true) }}
                  onMouseLeave={() => setPriceOpen(false)}
                >
                  Shop by Price
                  {price && (
                    <div className="submenu-1">
                      {prices.map((price, index) => (
                        <li className="navbar-item-1">
                          <span key={index} className="submenu-item-1">
                            {price}
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
                        <li className="care-item">Body Care</li>
                        <li className="care-item">Deodorants</li>
                        <li className="care-item">Hand & Foot Care</li>
                        <li className="care-item">Hygiene</li>
                        <li className="care-item">Nail Care</li>
                        <li className="care-item">Sanitary Care</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5>Face</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Eye Care</li>
                        <li className="care-item">Face Care</li>
                        <li className="care-item">Face Massagers</li>
                        <li className="care-item">Lip Care</li>
                        <li className="care-item">Make Up Needs</li>
                        <li className="care-item">Oral Care</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5>Hair</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Hair Care</li>
                        <li className="care-item">Hair Grooming</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <Image
                        src="./assets/careNatural.jpg"
                        alt="Natural & Cruelty Free"
                        fluid
                      />
                      <h6 className='care-item'>Natural & Cruelty Free</h6>
                      <p>Vegan Skin Care</p>
                    </Col>
                    <Col md={2}>
                      <Image
                        src="./assets/careReef.jpg"
                        alt="Reef Safe"
                        fluid
                      />
                      <h6 className='care-item'>Reef Safe</h6>
                      <p>Plastic Free Bath Essentials</p>
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
                      <h5>Mens</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">T-Shirts</li>
                        <li className="care-item">Pants & Pyjamas</li>
                        <li className="care-item">Shorts</li>
                        <li className="care-item">Jackets & Suits</li>
                        <li className="care-item">Ethnic Wear</li>
                        <li className="care-item">Accessories</li>
                        <li className="care-item">Jackets & Suits</li>
                        <li className="care-item">Shoes & Flip Flops</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5>Womens Clothing</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Dresses</li>
                        <li className="care-item">Tops & Blouses</li>
                        <li className="care-item">Shirts</li>
                        <li className="care-item">Sweatshirts & Jackets</li>
                        <li className="care-item">Skirts</li>
                        <li className="care-item">Shorts</li>
                        <li className="care-item">Co-ord Sets</li>
                        <li className="care-item">Ethnic Wear</li>
                      </ul>

                    </Col>
                    <Col md={2}>


                      <h5>Womens</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Accessories</li>
                        <li className="care-item">Accessories</li>
                        <li className="care-item">Clutches</li>
                        <li className="care-item">Earrings</li>
                        <li className="care-item">Handbags</li>
                        <li className="care-item">Intimate Wear</li>
                        <li className="care-item">Jewellery</li>
                        <li className="care-item">Scarves</li>
                        <li className="care-item">Shoes</li>
                      </ul>
                    </Col>

                    <Col md={2}>
                      <h5>Kids</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">All Clothing</li>
                        <li className="care-item">Onesies</li>
                        <li className="care-item">Sets & Overalls</li>
                        <li className="care-item">Top Wear</li>
                        <li className="care-item">Bottom Wear</li>
                        <li className="care-item">Diapering Needs</li>
                        <li className="care-item">Accessories</li>
                        <li className="care-item">Bedding & Nursery</li>
                        <li className="care-item">Furniture</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/gender_neutral_550x.jpg?v=1675333017"
                        alt="Unisex"
                        fluid
                      />
                      <h6 className='care-item'>Unisex</h6>
                      <p>Explore Sustainable Fashion</p>
                    </Col>
                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/Plus_size_fashion_550x.jpg?v=1675333074"
                        alt="plus Size"
                        fluid
                      />
                      <h6 className='care-item'>Plus Size</h6>
                      <p>Explore Sustainable Fashion</p>
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
                        <li className="care-item">Bakery & Snacks</li>
                        <li className="care-item">Cereals & Grains</li>
                        <li className="care-item">Cooking Essentials</li>
                        <li className="care-item">Ghee</li>
                        <li className="care-item">Gourmet Foods</li>
                        <li className="care-item">Healthy Foods</li>
                        <li className="care-item">Honey</li>
                        <li className="care-item">Packed Foods</li>
                        <li className="care-item">Ready to Eat Foods</li>
                      </ul>

                    </Col>
                    <Col md={2}>
                      <h5>Drink</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Coffee</li>
                        <li className="care-item">Juices & Health Drinks</li>
                        <li className="care-item">Tea</li>
                        <li className="care-item">Beverage Accessories</li>
                      </ul>











                    </Col>

                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/EAT_DRINK_1_1c77decc-7e45-4f40-97e0-54baed6057d9_550x.jpg?v=1634230620"
                        alt="Mindfully Organic"
                        fluid
                      />
                      <h6 className='care-item'>Mindfully Organic</h6>
                      <p>Shop Conscious Food</p>
                    </Col>
                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/EAT_DRINK_2_550x.jpg?v=1634230657"
                        alt="Earth-Friendly"
                        fluid
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
                      <h5>Home</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Bathroom Essentials</li>
                        <li className="care-item">Bath Linens</li>
                        <li className="care-item">Bed Linens</li>
                        <li className="care-item">Cleaning Supplies Games & Toys</li>
                        <li className="care-item">Home Decor</li>
                        <li className="care-item">Home Essentials</li>
                        <li className="care-item">Home Linens</li>
                        <li className="care-item">Hygiene</li>
                        <li className="care-item">Religious & Ceremonial Items</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5>Kitchen & Garden</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Food Storage</li>
                        <li className="care-item">Tableware</li>
                        <li className="care-item">Table Essentials</li>
                        <li className="care-item">Drinkware</li>
                        <li className="care-item">Pots & Planters</li>
                        <li className="care-item">Pet Care</li>
                      </ul>

                    </Col>
                    <Col md={2}>


                      <h5>Wellness</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Aroma Candles</li>
                        <li className="care-item">Essential Oils</li>
                        <li className="care-item">Fitness Essentials</li>
                        <li className="care-item">Musical Instruments</li>
                        <li className="care-item">Workout Gear</li>
                        <li className="care-item">Yoga Essentials</li>
                      </ul>
                    </Col>


                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/Musical_Instruments_3_550x.png?v=1694019788"
                        alt="Sounds of Nature"
                        fluid
                      />
                      <h6 className='care-item'>Sounds of Nature</h6>
                      <p>Musical Instruments</p>
                    </Col>
                    <Col md={2}>
                      <Image
                        src="https://brownliving.in/cdn/shop/files/Yoga_Essentials_2_550x.png?v=1694019807"
                        alt="Mindful & Wholistic"
                        fluid
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
            <span className="navbar-link-1">Work <IoIosArrowDown  /></span>
            {workOpen && (
              <div className="dropdown-1">
                <div className="dropdown-item-1">Travel Bags</div>
                <div className="dropdown-item-1">Travel Duffels</div>
                <div className="dropdown-item-1">Backpacks</div>
                <div className="dropdown-item-1">Handbags</div>
                <div className="dropdown-item-1">Travel Accessories</div>
                <div className="dropdown-item-1">On The Go Cutlery</div>
                <div className="dropdown-item-1">Wallets</div>
                <div className="dropdown-item-1">Stationery</div>
                <div className="dropdown-item-1">Laptop Sleeve</div>
                <div className="dropdown-item-1">Everyday Totes</div>
              </div>
            )}
          </li>

          <li className="navbar-item-1"
            onMouseEnter={() => settravelOpen(true)}
            onMouseLeave={() => settravelOpen(false)}>
            <span className="navbar-link-1">Travel <IoIosArrowDown  /></span>
            {travelOpen && (
              <div className="dropdown-1">
                <div className="dropdown-item-1">Office Supplies</div>
                <div className="dropdown-item-1">Packaging Solutions</div>
                <div className="dropdown-item-1">Stationery</div>
                <div className="dropdown-item-1">Shop by Collection</div>
                <div className="dropdown-item-1">Work-From-Home Essentials</div>
              </div>
            )}
          </li>
          <li className="navbar-item-1"
            onMouseEnter={() => setgiftsOpen(true)}
            onMouseLeave={() => setgiftsOpen(false)}>
            <span className="navbar-link-1">Gifts</span>
            {giftsOpen && (
              <div className="dropdown-1-care dropdown-1-gifts">
                <Container>
                  <Row className="text-center my-5">
                    <Col md={2}>
                      <h5>Gift Hampers</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Hampers Under ₹500</li>
                        <li className="care-item">Hampers Under ₹1000</li>
                        <li className="care-item">Hampers Under ₹1500</li>
                        <li className="care-item">Hampers Under ₹2500</li>
                        <li className="care-item">Hampers Under ₹5000</li>
                        <li className="care-item">Hampers Under ₹10000</li>
                        <li className="care-item">Gifts on Sale</li>
                      </ul>
                    </Col>
                    <Col md={2}>
                      <h5>Personalised</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">For Employee</li>
                        <li className="care-item">For Her</li>
                        <li className="care-item">For Him</li>
                        <li className="care-item">For Kids</li>
                        <li className="care-item">For Pets</li>
                        <li className="care-item">For Plant Lovers</li>
                      </ul>

                    </Col>
                    <Col md={2}>


                      <h5>By Occasion</h5>
                      <ul className="list-unstyled">
                        <li className="care-item">Mother's Day</li>
                        <li className="care-item">Anniversary</li>
                        <li className="care-item">Baby Shower</li>
                        <li className="care-item">Birthday</li>
                        <li className="care-item">Christmas</li>
                        <li className="care-item">Diwali</li>
                        <li className="care-item">Father's Day</li>
                        <li className="care-item">Ganesh Chaturthi</li>
                        <li className="care-item">Holi</li>
                        <li className="care-item">House Warming</li>
                        <li className="care-item">Raksha Bandhan</li>
                        <li className="care-item">Social Events</li>
                        <li className="care-item">Valentine's Day</li>
                        <li className="care-item">Wedding Favours</li>
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
          <li className="navbar-item-1"><span className="navbar-link-1">SALE</span></li>
          <li className="navbar-item-1"><span className="navbar-link-1">Bulk Request</span></li>
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
