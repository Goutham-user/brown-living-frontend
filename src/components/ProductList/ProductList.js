import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import TrendingToday from '../Moving-Slider/movingslider';
import Moreroducts from '../More-Products/more-products'
import './ProductList.css';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Button } from 'react-bootstrap';
// import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import SlideShow from '../images-slideshow/slideshow'
import { useNavigate } from "react-router-dom";



const popularCategories = [
  {
    id: 1,
    image: 'https://brownliving.in/cdn/shop/files/Aroma_Candles_300x.jpg?v=1698752591',
    category: 'organic-scented-candles'
  },
  {
    id: 2,
    image: 'https://brownliving.in/cdn/shop/files/Ghee_300x.jpg?v=1698752591',
    category: 'organic-grass-fed-ghee'
  },
  {
    id: 3,
    image: 'https://brownliving.in/cdn/shop/files/Backpacks_300x.jpg?v=1705928889',
    category: 'eco-friendly-backpacks'
  },
  {
    id: 4,
    image: 'https://brownliving.in/cdn/shop/files/Bath_Accessories_300x.jpg?v=1705928949',
    category: 'sustainable-bath-accessories'
  },
  {
    id: 5,
    image: 'https://brownliving.in/cdn/shop/files/Beverage_Accessories_2_50d2b934-4671-492a-8217-aeae635982a4_300x.jpg?v=1705929089',
    category: 'eco-friendly-beverage-accessories'
  },
  {
    id: 6,
    image: 'https://brownliving.in/cdn/shop/files/Bottles_Sippers_300x.jpg?v=1705929184',
    category: 'eco-friendly-bottles'
  },
  {
    id: 7,
    image: 'https://brownliving.in/cdn/shop/files/Coasters_300x.jpg?v=1705929279',
    category: 'eco-friendly-coasters'
  },
  {
    id: 8,
    image: 'https://brownliving.in/cdn/shop/files/Deodorant_300x.jpg?v=1705929311',
    category: 'eco-friendly-deodorants'
  },
  {
    id: 9,
    image: 'https://brownliving.in/cdn/shop/files/Shampoo_Conditioner_300x.jpg?v=1705929405',
    category: 'sustainable-shampoo-conditioner'
  },
  {
    id: 10,
    image: 'https://brownliving.in/cdn/shop/files/Womens_Pants_aeb16d8c-bdc0-4c17-ba64-7cc184d9133f_300x.jpg?v=1705929564',
    category: 'sustainable-womens-pants'
  },
  {
    id: 11,
    image: 'https://brownliving.in/cdn/shop/files/Learning_and_Educational_Toys_300x.jpg?v=1705929610',
    category: 'sustainable-learning-educational-toys'
  },
  {
    id: 12,
    image: 'https://brownliving.in/cdn/shop/files/Mens_Shirts_300x.jpg?v=1705929681',
    category: 'sustainable-mens-shirt'
  },
  {
    id: 13,
    image: 'https://brownliving.in/cdn/shop/files/Musical_Instruments_300x.jpg?v=1705929712',
    category: 'eco-friendly-musical-instruments'
  },
  {
    id: 14,
    image: 'https://brownliving.in/cdn/shop/files/Sauces_Dips_300x.jpg?v=1705929753',
    category: 'organic-sauces-dips'
  }
]

const organicCareCategoroes = [
  {
    id: 'img-1',
    image: '//brownliving.in/cdn/shop/files/Body_Care_450x.png?v=1695390147',
    category: 'sustainable-body-care'
  },
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Face_Care_450x.png?v=1695390187',
    category: 'sustainable-face-care'
  },
  {
    id: 'img-3',
    image: '//brownliving.in/cdn/shop/files/Hair_Care_450x.png?v=1695390232',
    category: 'sustainable-hair-care'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Sanitary_Care_450x.png?v=1695390284',
    category: 'sustainable-sanitary-care'
  },
  {
    id: 'img-5',
    image: '//brownliving.in/cdn/shop/files/Face_Massagers_450x.png?v=1695390328',
    category: 'face-massagers'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Lip_Care_450x.png?v=1695390365',
    category: 'sustainable-lip-care'
  }
]

const homeCategories = [
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Home_Decor_450x.png?v=1695391360',
    category: 'eco-friendly-home-decor'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Bathroom_Essentials_450x.png?v=1695391412',
    category: 'sustainable-bathroom-essentials'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Cleaning_Supplies_450x.png?v=1695391464',
    category: 'eco-friendly-cleaning-supplies'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/Home_Linens_450x.png?v=1695391500',
    category: 'eco-friendly-home-linens-accessories'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/Aroma_Candles_450x.png?v=1695391701',
    category: 'organic-scented-candles'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/Pots_Planters_0d4c0b34-9030-4b68-bc56-9e97fe093f2f_450x.png?v=1695391743',
    category: 'eco-friendly-planters'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/Table_Essentials_450x.png?v=1695391825',
    category: 'eco-friendly-dining-table-essentials'
  }
]

const fashionCategories = [
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Womens_Dresses_745b5412-4cb6-4d44-91a8-9edbc3ebbc64_450x.png?v=1695303216',
    category: 'sustainable-womens-dresses'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Gender_Neutral_fashion_450x.png?v=1695303549',
    category: 'unisex-sustainable-fashion'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Womens_Co-ords_450x.png?v=1695303243',
    category: 'sustainable-womens-overalls-co-ord-sets'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/Plus_Size_Fashion_450x.png?v=1695303351',
    category: 'plus-size-sustainable-clothing'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/Women_s_Jewellery_450x.png?v=1695390069',
    category: 'eco-friendly-womens-jewellery'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/Womens_Ethnic_Traditional_Wear_450x.png?v=1695303322',
    category: 'womens-ethnic-traditional-wear'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/Mens_Shirts_450x.png?v=1695303381',
    category: 'sustainable-mens-shirt'
  },
  {
    id: 'img-16',
    image: '//brownliving.in/cdn/shop/files/Men_s_Accessories_450x.png?v=1695303405',
    category: 'sustainable-mens-accessories'
  },
  {
    id: 'img-18',
    image: '//brownliving.in/cdn/shop/files/Men_s_Sweatshirts_450x.png?v=1695303496',
    category: 'sustainable-mens-sweatshirts'
  },
  {
    id: 'img-20',
    image: '//brownliving.in/cdn/shop/files/Men_s_Ethnic_Wear_450x.png?v=1695303512',
    category: 'sustainable-mens-ethnic-wear'
  }
]

const kidsFashionCategories = [
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Sets_Overalls_450x.png?v=1695393704',
    category: 'sustainable-kids-overalls'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Onesies_450x.png?v=1695393759',
    category: 'kids-onesies'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Kids_Top_Wear_450x.png?v=1695393822',
    category: 'organic-kids-top-wear'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/Kids_Bottom_Wear_450x.png?v=1695393966',
    category: 'eco-friendly-kids-shorts-kids-bottom-wear'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/Diapering_Needs_450x.png?v=1695394010',
    category: 'sustainable-kids-diapering-needs'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/Bedding_Nursery_450x.png?v=1695394044',
    category: 'organic-kids-bedding-nursery-products'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/Kids_Furniture_450x.png?v=1695394100',
    category: 'x-y-kids-furniture'
  }
]

const giftCategories = [
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/For_Employee_450x.png?v=1695392452',
    category: 'corporate-gifts'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Wedding_Favours_450x.png?v=1695392494',
    category: 'gifts-for-weddings'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Birthday_Gifts_450x.png?v=1695392550',
    category: 'sustainable-birthday-gifts'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/For_Her_450x.png?v=1695392388',
    category: 'gifts-for-her'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/For_Him_450x.png?v=1695392416',
    category: 'gifts-for-him'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/For_Pets_450x.png?v=1695392747',
    category: 'sustainable-pet-care'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/For_Kids_450x.png?v=1695392814',
    category: 'gifts-for-kids'
  }
]

const foodDrinksCategories = [
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Coffee_450x.png?v=1695390410',
    category: 'organic-coffeecollection'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Tea_450x.png?v=1695390948',
    category: 'organic-teacollection'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Juices_Health_Drinks_450x.png?v=1695390970',
    category: 'organic-juices-health-drinks'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/Ghee_450x.png?v=1695391012',
    category: 'organic-grass-fed-ghee'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/Healthy_Food_450x.png?v=1695391055',
    category: 'organic-healthy-foods'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/Dips_Spreads_450x.png?v=1695304485',
    category: 'organic-ready-to-eat-foods'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/Beverage_Accessories_450x.png?v=1695391293',
    category: 'eco-friendly-beverage-accessories'
  }
]

const travelCategories = [
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Backpacks_450x.png?v=1695391863',
    category: 'eco-friendly-backpacks'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Everyday_Totes_81d7be9f-0f45-4aa4-9804-8d2c44f2325a_450x.png?v=1695392028',
    category: 'reusable-tote-bag'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Laptop_Sleeve_450x.png?v=1695392070',
    category: 'eco-friendly-laptop-sleeve'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/Travel_Accessories_450x.png?v=1695392118',
    category: 'eco-friendly-travel-accessories'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/Non-Leather_Wallets_450x.png?v=1695392173',
    category: 'non-leather-wallets'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/Stationery_450x.png?v=1695392244',
    category: 'eco-friendly-stationery'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/Duffels_450x.png?v=1695392210',
    category: 'sustainable-travel-duffels'
  }
]

const impactData = [
  {
    icon: "https://brownliving.in/cdn/shop/files/plastic_2_gif_280x.gif?v=1652339248", // Replace with the actual icon URL
    value: "284,405",
    label: "Kgs Plastic Saved",
  },
  {
    icon: "https://brownliving.in/cdn/shop/files/CO2_gif_1_280x.gif?v=1650870713", // Replace with the actual icon URL
    value: "588,000",
    label: "CO² Kgs Offset/Year",
  },
  {
    icon: "https://brownliving.in/cdn/shop/files/planting_tree_gif_280x.gif?v=1650870736", // Replace with the actual icon URL
    value: "29,400",
    label: "Trees Planted",
  },
  {
    icon: "https://brownliving.in/cdn/shop/files/jobs-created_280x.gif?v=1652339278", // Replace with the actual icon URL
    value: "2,088",
    label: "in Rural India",
  },
];


const ProductList = () => {
  // const [products, setProducts] = useState([]);

  const [trendinngProducts_api, setTrendingProducts_api] = useState([]);

  const [care, setCare] = useState([]);

  const [homeEssentials, sethomeEssentials] = useState([]);

  const [fashionProducts, setfashionProducts] = useState([]);

  const [kidsProducts, setkidsProducts] = useState([]);

  const [giftProducts, setgiftProducts] = useState([]);

  const [foodDrinksProducts, setfoodDrinksProducts] = useState([]);

  const [travelProducts, settravelProducts] = useState([]);






  const url = "https://sai-goutham-brown-living-backend.onrender.com/api/products"


  useEffect(() => {
    // Fetch products from an API or use static data
    const bestSelling = async () => {
      try {
        const response = await axios.get(url, { params: { category: 'best-selling-sustainable-products' } });
        setTrendingProducts_api(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    bestSelling();
  }, []);

  useEffect(() => {
    // Fetch products from an API or use static data
    const careProducts = async () => {
      try {
        const response = await axios.get(url, { params: { category: 'organic-personal-care-products' } });
        setCare(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    careProducts();
  }, []);

  useEffect(() => {
    // Fetch products from an API or use static data
    const homeEssentialsProducts = async () => {
      try {
        const response = await axios.get(url, { params: { category: "eco-friendly-home-living-essentials" } });
        sethomeEssentials(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    homeEssentialsProducts();
  }, []);

  useEffect(() => {
    // Fetch products from an API or use static data
    const fashionProductsApi = async () => {
      try {
        const response = await axios.get(url, { params: { category: 'fashion' } });
        setfashionProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    fashionProductsApi();
  }, []);


  useEffect(() => {
    // Fetch products from an API or use static data
    const kidsProductsAPI = async () => {
      try {
        const response = await axios.get(url, { params: { category: 'sustainable-kids-corner' } });
        setkidsProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    kidsProductsAPI();
  }, []);

  useEffect(() => {
    // Fetch products from an API or use static data
    const giftProductsAPI = async () => {
      try {
        const response = await axios.get(url, { params: { category: 'sustainable-gifts' } });
        setgiftProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    giftProductsAPI();
  }, []);

  useEffect(() => {
    // Fetch products from an API or use static data
    const foodDrinkssAPI = async () => {
      try {
        const response = await axios.get(url, { params: { category: 'organic-food-drinks' } });
        setfoodDrinksProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    foodDrinkssAPI();
  }, []);

  useEffect(() => {
    // Fetch products from an API or use static data
    const travelProductsAPI = async () => {
      try {
        const response = await axios.get(url, { params: { category: 'eco-friendly-travel-essentials' } });
        settravelProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error accordingly
      }
    };

    travelProductsAPI();
  }, []);

  const navigate = useNavigate();

  const handleNavigation = (category) => {
    navigate(`/products/${category}`);
  };


  // useEffect(() => {
  //   // Fetch products from an API or use static data
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('https://fakestoreapi.com/products');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //       // Handle error accordingly
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div
            className="carousel-image sustainable-living">

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image plastic"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image future-fashion">

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image secret-radient"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image gift-green">

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image eat-plants"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image celeb-cafts">

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image cool-globe"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image brown-lens">

          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image pack-purpose"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image support-change-makers"></div>
        </Carousel.Item>
      </Carousel>

      <div className='container-fluid slideshow-footer'>
        <div className='row'>
          <div className='col-3'>Brown Lens ⓒ Verified Sustainable <span className="pl-6">💚</span></div>
          <div className='col-3'>Plastic-Free Products & Packaging <span className="pl-6">💚</span></div>
          <div className='col-3 p-0'>Choose from 1,35,000+ Verified Sustainable Products <span>💚</span></div>
          <div className='col-3'>Empowering 550+ Sustainable Brands <span className="pl-6">💚</span></div>
        </div>
      </div>

      <div className='mlr-24'>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Trending Today</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("best-selling-sustainable-products"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>

        {/* {console.log(trendinngProducts_api.length)} */}
        <TrendingToday trendinngProducts={trendinngProducts_api} />



        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Popular Categories</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("best-selling-sustainable-products"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>

        <TrendingToday trendinngProducts={popularCategories} />


        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Our Impact</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="/more-info" className="read-more">
                Read More →
              </a>
            </div>
          </div>
        </div>



        <div className="impact-section">
          <div className="impact-grid">
            {impactData.map((item, index) => (
              <div className="impact-item" key={index}>
                <img src={item.icon} alt={item.label} className="impact-icon" />
                <div className="impact-value">{item.value}</div>
                <div className="impact-label">{item.label}</div>
              </div>
            ))}
          </div>

        </div>


        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Popular in Care</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("organic-personal-care-products"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>


        <TrendingToday trendinngProducts={care} />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Organic Personal Care</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("organic-personal-care-products"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>

        <TrendingToday trendinngProducts={organicCareCategoroes} />




        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Home Essentials</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-home-living-essentials"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>





        <TrendingToday trendinngProducts={homeEssentials} />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Home & Living</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-home-living-essentials"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>

        <TrendingToday trendinngProducts={homeCategories} />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Popular in Fashion</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("fashion"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>


        <TrendingToday trendinngProducts={fashionProducts} />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Sustainable Fashion</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("fashion"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>


        <TrendingToday trendinngProducts={fashionCategories} />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Loved by Kids</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-kids-corner"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>




        <TrendingToday trendinngProducts={kidsProducts} />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-4 img-gallery'>
              <img src='//brownliving.in/cdn/shop/files/Living_Room_3629a9ba-26f1-49c1-8153-c18669ebb547_600x.jpg?v=1728231605' onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-home-living-essentials"); // Pass category
                }}/>

            </div>
            <div className='col-4 img-gallery'>
              <img src='//brownliving.in/cdn/shop/files/Home_Garden_ab94cd7f-ad4f-4cc9-98ae-1a30aeecc5b4_600x.jpg?v=1728231619'onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("gardening-tools-planters-flower-pots"); // Pass category
                }} />

            </div>
            <div className='col-4 img-gallery'>
              <img src='//brownliving.in/cdn/shop/files/Bedroom_81648206-a8c1-4887-885c-054b5330d8b9_600x.jpg?v=1728231632' onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-bed-linens"); // Pass category
                }} />

            </div>

            <div className='col-4 img-gallery'>
              <img src='https://brownliving.in/cdn/shop/files/Kids_Corner_7c87e834-7abd-4d82-b82e-829aabeb2f5c_600x.jpg?v=1728231640' onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-kids-corner"); // Pass category
                }}/>
            </div>
            <div className='col-4 img-gallery'>
              <img src='//brownliving.in/cdn/shop/files/Bathroom_2aedcb4e-adf3-4b86-b2aa-6400224b090b_600x.jpg?v=1728231646' onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-bathroom-essentials"); // Pass category
                }}/>

            </div>
            <div className='col-4 img-gallery'>
              <img src='//brownliving.in/cdn/shop/files/Kitchen_bfeb86ec-7b76-4a80-b413-c7b34ce7f8cc_600x.jpg?v=1728231653' onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-kitchenware"); // Pass category
                }}/>
            </div>

            <div className='col-4 img-gallery'>
              <img src='//brownliving.in/cdn/shop/files/Dining_1efbfe81-4a3a-4e94-a482-58885f98096d_600x.jpg?v=1728231658' onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-dining-table-essentials"); // Pass category
                }} />

            </div>
            <div className='col-4 img-gallery'>
              <img src='//brownliving.in/cdn/shop/files/Office_87ebf114-a526-4fe5-98f4-4584d5fa45e8_600x.jpg?v=1728231664' onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-stationery"); // Pass category
                }}/>

            </div>
            <div className='col-4 img-gallery'>
              <img src='//brownliving.in/cdn/shop/files/Yoga_Wellness_f8c15454-083d-41f2-92e6-f86b4d82f02e_600x.jpg?v=1728231671' onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-yoga-essentials"); // Pass category
                }}/>

            </div>

          </div>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Kids Corner</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-kids-corner"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>


        <TrendingToday trendinngProducts={kidsFashionCategories} />
        

        {/* <div className='container-fluid gifts-img'>
          <div className='row'>
            <div className='col-6'>
              <img src='https://brownliving.in/cdn/shop/products/sustainable-gift-card-bl-18-gift-cards-brown-living-492516_900x.jpg?v=1717419326' />

            </div>
            <div className='col-6'>
              <img src='//brownliving.in/cdn/shop/files/Home_Garden_ab94cd7f-ad4f-4cc9-98ae-1a30aeecc5b4_600x.jpg?v=1728231619' />

            </div>
            

          </div>
        </div> */}

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Best Selling Gifts</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-gifts"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>


        <TrendingToday trendinngProducts={giftProducts} />


        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Sustainable Gifts</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("sustainable-gifts"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>


        <TrendingToday trendinngProducts={giftCategories} />




        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Popular in Food & Drink</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("organic-food-drinks"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>


        <TrendingToday trendinngProducts={foodDrinksProducts} />


        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Organic Food & Drink</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("organic-food-drinks"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>


        <TrendingToday trendinngProducts={foodDrinksCategories} />




        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Popular in Travel</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-travel-essentials"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>


        <TrendingToday trendinngProducts={travelProducts} />


        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6'><h3 className="sub-heading">Work & Travel</h3></div>
            <div className='col-lg-6 text-end'>
              <a href="#" className="read-more"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleNavigation("eco-friendly-travel-essentials"); // Pass category
                }}>
                Read More →
              </a>
            </div>
          </div>
        </div>

      </div>


      <TrendingToday trendinngProducts={travelCategories} />

      {/* <SlideShow /> */}




    </div>
  );
};

export default ProductList;


// Use below for product list more page

{/* <div className="product-list">
        {trendinngProducts_api.length > 0 ? (
          trendinngProducts_api.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>Loading products...</p>
        )}
      </div> */}
