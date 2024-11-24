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
    category: 'bestSelling'
  },
  {
    id: 2,
    image: 'https://brownliving.in/cdn/shop/files/Ghee_300x.jpg?v=1698752591',
    category: 'bestSelling'
  },
  {
    id: 3,
    image: 'https://brownliving.in/cdn/shop/files/Backpacks_300x.jpg?v=1705928889',
    category: 'bestSelling'
  },
  {
    id: 4,
    image: 'https://brownliving.in/cdn/shop/files/Bath_Accessories_300x.jpg?v=1705928949',
    category: 'bestSelling'
  },
  {
    id: 5,
    image: 'https://brownliving.in/cdn/shop/files/Beverage_Accessories_2_50d2b934-4671-492a-8217-aeae635982a4_300x.jpg?v=1705929089',
    category: 'bestSelling'
  },
  {
    id: 6,
    image: 'https://brownliving.in/cdn/shop/files/Bottles_Sippers_300x.jpg?v=1705929184',
    category: 'bestSelling'
  },
  {
    id: 7,
    image: 'https://brownliving.in/cdn/shop/files/Coasters_300x.jpg?v=1705929279',
    category: 'bestSelling'
  },
  {
    id: 8,
    image: 'https://brownliving.in/cdn/shop/files/Deodorant_300x.jpg?v=1705929311',
    category: 'bestSelling'
  },
  {
    id: 9,
    image: 'https://brownliving.in/cdn/shop/files/Shampoo_Conditioner_300x.jpg?v=1705929405',
    category: 'bestSelling'
  },
  {
    id: 10,
    image: 'https://brownliving.in/cdn/shop/files/Womens_Pants_aeb16d8c-bdc0-4c17-ba64-7cc184d9133f_300x.jpg?v=1705929564',      
    category: 'bestSelling'
  },
  {
    id: 11,
    image: 'https://brownliving.in/cdn/shop/files/Learning_and_Educational_Toys_300x.jpg?v=1705929610',
    category: 'bestSelling'
  },
  {
    id: 12,
    image: 'https://brownliving.in/cdn/shop/files/Mens_Shirts_300x.jpg?v=1705929681',
    category: 'bestSelling'
  },
  {
    id: 13,
    image: 'https://brownliving.in/cdn/shop/files/Musical_Instruments_300x.jpg?v=1705929712',
    category: 'bestSelling'
  },
  {
    id: 14,
    image: 'https://brownliving.in/cdn/shop/files/Sauces_Dips_300x.jpg?v=1705929753',
    category: 'bestSelling'
  }
]

const organicCareCategoroes =[
  {
    id: 'img-1',
    image: '//brownliving.in/cdn/shop/files/Body_Care_450x.png?v=1695390147',
    category: 'care'
  },
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Face_Care_450x.png?v=1695390187',
    category: 'care'
  },
  {
    id: 'img-3',
    image: '//brownliving.in/cdn/shop/files/Hair_Care_450x.png?v=1695390232',
    category: 'care'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Sanitary_Care_450x.png?v=1695390284',
    category: 'care'
  },
  {
    id: 'img-5',
    image: '//brownliving.in/cdn/shop/files/Face_Massagers_450x.png?v=1695390328',
    category: 'care'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Lip_Care_450x.png?v=1695390365',
    category: 'care'
  }
]

const homeCategories = [
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Home_Decor_450x.png?v=1695391360',
    category: 'homeEssentials'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Bathroom_Essentials_450x.png?v=1695391412',
    category: 'homeEssentials'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Cleaning_Supplies_450x.png?v=1695391464',
    category: 'homeEssentials'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/Home_Linens_450x.png?v=1695391500',
    category: 'homeEssentials'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/Aroma_Candles_450x.png?v=1695391701',
    category: 'homeEssentials'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/Pots_Planters_0d4c0b34-9030-4b68-bc56-9e97fe093f2f_450x.png?v=1695391743',
    category: 'homeEssentials'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/Table_Essentials_450x.png?v=1695391825',
    category: 'homeEssentials'
  }
]

const fashionCategories = [
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Womens_Dresses_745b5412-4cb6-4d44-91a8-9edbc3ebbc64_450x.png?v=1695303216',
    category: 'pFashion'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Gender_Neutral_fashion_450x.png?v=1695303549',
    category: 'pFashion'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Womens_Co-ords_450x.png?v=1695303243',
    category: 'pFashion'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/Plus_Size_Fashion_450x.png?v=1695303351',
    category: 'pFashion'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/Women_s_Jewellery_450x.png?v=1695390069',
    category: 'pFashion'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/Womens_Ethnic_Traditional_Wear_450x.png?v=1695303322',
    category: 'pFashion'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/Mens_Shirts_450x.png?v=1695303381',
    category: 'pFashion'
  },
  {
    id: 'img-16',
    image: '//brownliving.in/cdn/shop/files/Men_s_Accessories_450x.png?v=1695303405',
    category: 'pFashion'
  },
  {
    id: 'img-18',
    image: '//brownliving.in/cdn/shop/files/Men_s_Sweatshirts_450x.png?v=1695303496',
    category: 'pFashion'
  },
  {
    id: 'img-20',
    image: '//brownliving.in/cdn/shop/files/Men_s_Ethnic_Wear_450x.png?v=1695303512',
    category: 'pFashion'
  }
]

const kidsFashionCategories =[
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Sets_Overalls_450x.png?v=1695393704',
    category: 'kids'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Onesies_450x.png?v=1695393759',
    category: 'kids'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Kids_Top_Wear_450x.png?v=1695393822',
    category: 'kids'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/Kids_Bottom_Wear_450x.png?v=1695393966',
    category: 'kids'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/Diapering_Needs_450x.png?v=1695394010',
    category: 'kids'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/Bedding_Nursery_450x.png?v=1695394044',
    category: 'kids'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/Kids_Furniture_450x.png?v=1695394100',
    category: 'kids'
  }
]

const giftCategories = [
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/For_Employee_450x.png?v=1695392452',
    category: 'gifts'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Wedding_Favours_450x.png?v=1695392494',
    category: 'gifts'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Birthday_Gifts_450x.png?v=1695392550',
    category: 'gifts'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/For_Her_450x.png?v=1695392388',
    category: 'gifts'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/For_Him_450x.png?v=1695392416',
    category: 'gifts'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/For_Pets_450x.png?v=1695392747',
    category: 'gifts'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/For_Kids_450x.png?v=1695392814',
    category: 'gifts'
  }
]

const foodDrinksCategories = [
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Coffee_450x.png?v=1695390410',
    category: 'foodDrinks'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Tea_450x.png?v=1695390948',
    category: 'foodDrinks'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Juices_Health_Drinks_450x.png?v=1695390970',
    category: 'foodDrinks'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/Ghee_450x.png?v=1695391012',
    category: 'foodDrinks'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/Healthy_Food_450x.png?v=1695391055',
    category: 'foodDrinks'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/Dips_Spreads_450x.png?v=1695304485',
    category: 'foodDrinks'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/Beverage_Accessories_450x.png?v=1695391293',
    category: 'foodDrinks'
  }
]

const travelCategories =[
  {
    id: 'img-2',
    image: '//brownliving.in/cdn/shop/files/Backpacks_450x.png?v=1695391863',
    category: 'travel'
  },
  {
    id: 'img-4',
    image: '//brownliving.in/cdn/shop/files/Everyday_Totes_81d7be9f-0f45-4aa4-9804-8d2c44f2325a_450x.png?v=1695392028',
    category: 'travel'
  },
  {
    id: 'img-6',
    image: '//brownliving.in/cdn/shop/files/Laptop_Sleeve_450x.png?v=1695392070',
    category: 'travel'
  },
  {
    id: 'img-8',
    image: '//brownliving.in/cdn/shop/files/Travel_Accessories_450x.png?v=1695392118',
    category: 'travel'
  },
  {
    id: 'img-10',
    image: '//brownliving.in/cdn/shop/files/Non-Leather_Wallets_450x.png?v=1695392173',
    category: 'travel'
  },
  {
    id: 'img-12',
    image: '//brownliving.in/cdn/shop/files/Stationery_450x.png?v=1695392244',
    category: 'travel'
  },
  {
    id: 'img-14',
    image: '//brownliving.in/cdn/shop/files/Duffels_450x.png?v=1695392210',
    category: 'travel'
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






  const url = "http://localhost:5000/api/products"


  useEffect(() => {
    // Fetch products from an API or use static data
    const bestSelling = async () => {
      try {
        const response = await axios.get(url, { params: { category: 'bestSelling' } });
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
        const response = await axios.get(url, { params: { category: 'care' } });
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
        const response = await axios.get(url, { params: { category: 'homeEssentials' } });
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
        const response = await axios.get(url, { params: { category: 'pFashion' } });
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
        const response = await axios.get(url, { params: { category: 'kids' } });
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
        const response = await axios.get(url, { params: { category: 'gifts' } });
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
        const response = await axios.get(url, { params: { category: 'foodDrinks' } });
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
        const response = await axios.get(url, { params: { category: 'travel' } });
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
              handleNavigation("bestSelling"); // Pass category
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
              handleNavigation("bestSelling"); // Pass category
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
              handleNavigation("care"); // Pass category
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
              handleNavigation("care"); // Pass category
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
              handleNavigation("homeEssentials"); // Pass category
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
              handleNavigation("homeEssentials"); // Pass category
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
              handleNavigation("pFashion"); // Pass category
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
              handleNavigation("pFashion"); // Pass category
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
              handleNavigation("kids"); // Pass category
            }}>
              Read More →
            </a>
          </div>
        </div>
      </div>


      <TrendingToday trendinngProducts={kidsProducts} />

      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'><h3 className="sub-heading">Kids Corner</h3></div>
          <div className='col-lg-6 text-end'>
          <a href="#" className="read-more"
             onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("kids"); // Pass category
            }}>
              Read More →
            </a>
          </div>
        </div>
      </div>


      <TrendingToday trendinngProducts={kidsFashionCategories} />



      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6'><h3 className="sub-heading">Best Selling Gifts</h3></div>
          <div className='col-lg-6 text-end'>
          <a href="#" className="read-more"
             onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation("gifts"); // Pass category
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
              handleNavigation("gifts"); // Pass category
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
              handleNavigation("foodDrinks"); // Pass category
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
              handleNavigation("foodDrinks"); // Pass category
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
              handleNavigation("travel"); // Pass category
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
              handleNavigation("travel"); // Pass category
            }}>
              Read More →
            </a>
          </div>
        </div>
      </div>

      </div>


      <TrendingToday trendinngProducts={travelCategories} />

      <SlideShow />


    

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
