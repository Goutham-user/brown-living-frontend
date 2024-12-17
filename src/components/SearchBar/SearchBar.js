import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
  
  const [searchTerm, setSearchTerm] = useState('');

  

  const searchOptions = [
    {
      "key": "all-products-for-earth-lovers",
      "value": "All Products For Earth Lovers"
    },
    {
      "key": "ayush-certified-products",
      "value": "Ayush Certified Products"
    },
    {
      "key": "best-selling-sustainable-products",
      "value": "Best Selling Sustainable Products"
    },
    {
      "key": "christmas-gifts",
      "value": "Christmas Gifts"
    },
    {
      "key": "coconut-essentials",
      "value": "Coconut Essentials"
    },
    {
      "key": "collection",
      "value": "Collection"
    },
    {
      "key": "copper-essentials",
      "value": "Copper Essentials"
    },
    {
      "key": "cork-essentials",
      "value": "Cork Essentials"
    },
    {
      "key": "corporate-gifts",
      "value": "Corporate Gifts"
    },
    {
      "key": "desserto-cactus-leather-essentials",
      "value": "Desserto Cactus Leather Essentials"
    },
    {
      "key": "eco-friendly-backpacks",
      "value": "Eco Friendly Backpacks"
    },
    {
      "key": "eco-friendly-beverage-accessories",
      "value": "Eco Friendly Beverage Accessories"
    },
    {
      "key": "eco-friendly-bottles",
      "value": "Eco Friendly Bottles"
    },
    {
      "key": "eco-friendly-cleaning-supplies",
      "value": "Eco Friendly Cleaning Supplies"
    },
    {
      "key": "eco-friendly-coasters",
      "value": "Eco Friendly Coasters"
    },
    {
      "key": "eco-friendly-deodorants",
      "value": "Eco Friendly Deodorants"
    },
    {
      "key": "eco-friendly-dining-table-essentials",
      "value": "Eco Friendly Dining Table Essentials"
    },
    {
      "key": "eco-friendly-diwali-gifts",
      "value": "Eco Friendly Diwali Gifts"
    },
    {
      "key": "eco-friendly-drinkware",
      "value": "Eco Friendly Drinkware"
    },
    {
      "key": "eco-friendly-eye-care",
      "value": "Eco Friendly Eye Care"
    },
    {
      "key": "eco-friendly-ganesh-chaturthi-essentials",
      "value": "Eco Friendly Ganesh Chaturthi Essentials"
    },
    {
      "key": "eco-friendly-gift-hampers-under-1000",
      "value": "Eco Friendly Gift Hampers Under 1000"
    },
    {
      "key": "eco-friendly-gift-hampers-under-10000",
      "value": "Eco Friendly Gift Hampers Under 10000"
    },
    {
      "key": "eco-friendly-gift-hampers-under-1500",
      "value": "Eco Friendly Gift Hampers Under 1500"
    },
    {
      "key": "eco-friendly-gift-hampers-under-2500",
      "value": "Eco Friendly Gift Hampers Under 2500"
    },
    {
      "key": "eco-friendly-gift-hampers-under-500",
      "value": "Eco Friendly Gift Hampers Under 500"
    },
    {
      "key": "eco-friendly-gift-hampers-under-5000",
      "value": "Eco Friendly Gift Hampers Under 5000"
    },
    {
      "key": "eco-friendly-home-decor",
      "value": "Eco Friendly Home Decor"
    },
    {
      "key": "eco-friendly-home-linens-accessories",
      "value": "Eco Friendly Home Linens Accessories"
    },
    {
      "key": "eco-friendly-home-living-essentials",
      "value": "Eco Friendly Home Living Essentials"
    },
    {
      "key": "eco-friendly-kansa-essentials",
      "value": "Eco Friendly Kansa Essentials"
    },
    {
      "key": "eco-friendly-kids-shorts-kids-bottom-wear",
      "value": "Eco Friendly Kids Shorts Kids Bottom Wear"
    },
    {
      "key": "eco-friendly-laptop-sleeve",
      "value": "Eco Friendly Laptop Sleeve"
    },
    {
      "key": "eco-friendly-musical-instruments",
      "value": "Eco Friendly Musical Instruments"
    },
    {
      "key": "eco-friendly-office-supplies",
      "value": "Eco Friendly Office Supplies"
    },
    {
      "key": "eco-friendly-oral-care-products",
      "value": "Eco Friendly Oral Care Products"
    },
    {
      "key": "eco-friendly-planters",
      "value": "Eco Friendly Planters"
    },
    {
      "key": "eco-friendly-products-under-1000",
      "value": "Eco Friendly Products Under 1000"
    },
    {
      "key": "eco-friendly-products-under-10000",
      "value": "Eco Friendly Products Under 10000"
    },
    {
      "key": "eco-friendly-products-under-1500",
      "value": "Eco Friendly Products Under 1500"
    },
    {
      "key": "eco-friendly-products-under-199",
      "value": "Eco Friendly Products Under 199"
    },
    {
      "key": "eco-friendly-products-under-2500",
      "value": "Eco Friendly Products Under 2500"
    },
    {
      "key": "eco-friendly-products-under-299",
      "value": "Eco Friendly Products Under 299"
    },
    {
      "key": "eco-friendly-products-under-500",
      "value": "Eco Friendly Products Under 500"
    },
    {
      "key": "eco-friendly-products-under-5000",
      "value": "Eco Friendly Products Under 5000"
    },
    {
      "key": "eco-friendly-recreation-games",
      "value": "Eco Friendly Recreation Games"
    },
    {
      "key": "eco-friendly-stationery",
      "value": "Eco Friendly Stationery"
    },
    {
      "key": "eco-friendly-tableware",
      "value": "Eco Friendly Tableware"
    },
    {
      "key": "eco-friendly-travel-accessories",
      "value": "Eco Friendly Travel Accessories"
    },
    {
      "key": "eco-friendly-travel-bags",
      "value": "Eco Friendly Travel Bags"
    },
    {
      "key": "eco-friendly-travel-essentials",
      "value": "Eco Friendly Travel Essentials"
    },
    {
      "key": "eco-friendly-womens-jewellery",
      "value": "Eco Friendly Womens Jewellery"
    },
    {
      "key": "eco-friendly-work-from-home-essentials",
      "value": "Eco Friendly Work From Home Essentials"
    },
    {
      "key": "ecocert-certified-products",
      "value": "Ecocert Certified Products"
    },
    {
      "key": "ethically-sourced-honey",
      "value": "Ethically Sourced Honey"
    },
    {
      "key": "face-massagers",
      "value": "Face Massagers"
    },
    {
      "key": "fashion",
      "value": "Fashion"
    },
    {
      "key": "fda-certified-products",
      "value": "Fda Certified Products"
    },
    {
      "key": "fsc-certified-products",
      "value": "Fsc Certified Products"
    },
    {
      "key": "gardening-tools-planters-flower-pots",
      "value": "Gardening Tools Planters Flower Pots"
    },
    {
      "key": "gifts-for-anniversaries",
      "value": "Gifts For Anniversaries"
    },
    {
      "key": "gifts-for-get-togethers",
      "value": "Gifts For Get Togethers"
    },
    {
      "key": "gifts-for-her",
      "value": "Gifts For Her"
    },
    {
      "key": "gifts-for-him",
      "value": "Gifts For Him"
    },
    {
      "key": "gifts-for-holi",
      "value": "Gifts For Holi"
    },
    {
      "key": "gifts-for-kids",
      "value": "Gifts For Kids"
    },
    {
      "key": "gifts-for-mothers-day",
      "value": "Gifts For Mothers Day"
    },
    {
      "key": "gifts-for-office-parties",
      "value": "Gifts For Office Parties"
    },
    {
      "key": "gifts-for-raksha-bandhan",
      "value": "Gifts For Raksha Bandhan"
    },
    {
      "key": "gifts-for-valentines-day",
      "value": "Gifts For Valentines Day"
    },
    {
      "key": "gifts-for-weddings",
      "value": "Gifts For Weddings"
    },
    {
      "key": "gifts-on-sale",
      "value": "Gifts On Sale"
    },
    {
      "key": "gots-certified-products",
      "value": "Gots Certified Products"
    },
    {
      "key": "green-friday-sale",
      "value": "Green Friday Sale"
    },
    {
      "key": "hair-grooming-essentials",
      "value": "Hair Grooming Essentials"
    },
    {
      "key": "hemp-essentials",
      "value": "Hemp Essentials"
    },
    {
      "key": "ikat-essentials",
      "value": "Ikat Essentials"
    },
    {
      "key": "kids-furniture",
      "value": "Kids Furniture"
    },
    {
      "key": "kids-onesies",
      "value": "Kids Onesies"
    },
    {
      "key": "made-with-bamboo",
      "value": "Made With Bamboo"
    },
    {
      "key": "made-with-bemberg",
      "value": "Made With Bemberg"
    },
    {
      "key": "made-with-coconut-essentials",
      "value": "Made With Coconut Essentials"
    },
    {
      "key": "made-with-denim",
      "value": "Made With Denim"
    },
    {
      "key": "made-with-geranium",
      "value": "Made With Geranium"
    },
    {
      "key": "made-with-khadi",
      "value": "Made With Khadi"
    },
    {
      "key": "malai-coconut-leather-essentials",
      "value": "Malai Coconut Leather Essentials"
    },
    {
      "key": "mens-t-shirt",
      "value": "Mens T Shirt"
    },
    {
      "key": "non-leather-wallets",
      "value": "Non Leather Wallets"
    },
    {
      "key": "ocean-safe-bath-products",
      "value": "Ocean Safe Bath Products"
    },
    {
      "key": "oeko-tex-certified",
      "value": "Oeko Tex Certified"
    },
    {
      "key": "organic-bakery-snacks",
      "value": "Organic Bakery Snacks"
    },
    {
      "key": "organic-cereals-grains",
      "value": "Organic Cereals Grains"
    },
    {
      "key": "organic-coffee",
      "value": "Organic Coffee"
    },
    {
      "key": "organic-cooking-essentials",
      "value": "Organic Cooking Essentials"
    },
    {
      "key": "organic-cotton-essentials",
      "value": "Organic Cotton Essentials"
    },
    {
      "key": "organic-essential-oils",
      "value": "Organic Essential Oils"
    },
    {
      "key": "organic-food",
      "value": "Organic Food"
    },
    {
      "key": "organic-food-drinks",
      "value": "Organic Food Drinks"
    },
    {
      "key": "organic-gourmet-foods",
      "value": "Organic Gourmet Foods"
    },
    {
      "key": "organic-grass-fed-ghee",
      "value": "Organic Grass Fed Ghee"
    },
    {
      "key": "organic-hand-foot-care-products",
      "value": "Organic Hand Foot Care Products"
    },
    {
      "key": "organic-healthy-foods",
      "value": "Organic Healthy Foods"
    },
    {
      "key": "organic-juices-health-drinks",
      "value": "Organic Juices Health Drinks"
    },
    {
      "key": "organic-kids-bedding-nursery-products",
      "value": "Organic Kids Bedding Nursery Products"
    },
    {
      "key": "organic-kids-top-wear",
      "value": "Organic Kids Top Wear"
    },
    {
      "key": "organic-nail-care",
      "value": "Organic Nail Care"
    },
    {
      "key": "organic-packed-foods",
      "value": "Organic Packed Foods"
    },
    {
      "key": "organic-personal-care-products",
      "value": "Organic Personal Care Products"
    },
    {
      "key": "organic-ready-to-eat-foods",
      "value": "Organic Ready To Eat Foods"
    },
    {
      "key": "organic-sauces-dips",
      "value": "Organic Sauces Dips"
    },
    {
      "key": "organic-scented-candles",
      "value": "Organic Scented Candles"
    },
    {
      "key": "organic-tea",
      "value": "Organic Tea"
    },
    {
      "key": "peta-approved-vegan-certified",
      "value": "Peta Approved Vegan Certified"
    },
    {
      "key": "pinatex-products-pineapple-leather",
      "value": "Pinatex Products Pineapple Leather"
    },
    {
      "key": "plastic-free-packaging-supplies",
      "value": "Plastic Free Packaging Supplies"
    },
    {
      "key": "plus-size-sustainable-clothing",
      "value": "Plus Size Sustainable Clothing"
    },
    {
      "key": "religious-ceremonial-essentials",
      "value": "Religious Ceremonial Essentials"
    },
    {
      "key": "reusable-tote-bag",
      "value": "Reusable Tote Bag"
    },
    {
      "key": "shibori-essentials",
      "value": "Shibori Essentials"
    },
    {
      "key": "sisal-essentials",
      "value": "Sisal Essentials"
    },
    {
      "key": "stainless-steel-essentials",
      "value": "Stainless Steel Essentials"
    },
    {
      "key": "sustainable-baby-gifts",
      "value": "Sustainable Baby Gifts"
    },
    {
      "key": "sustainable-bath-accessories",
      "value": "Sustainable Bath Accessories"
    },
    {
      "key": "sustainable-bath-linens",
      "value": "Sustainable Bath Linens"
    },
    {
      "key": "sustainable-bathroom-essentials",
      "value": "Sustainable Bathroom Essentials"
    },
    {
      "key": "sustainable-bed-linens",
      "value": "Sustainable Bed Linens"
    },
    {
      "key": "sustainable-birthday-gifts",
      "value": "Sustainable Birthday Gifts"
    },
    {
      "key": "sustainable-body-care",
      "value": "Sustainable Body Care"
    },
    {
      "key": "sustainable-face-care",
      "value": "Sustainable Face Care"
    },
    {
      "key": "sustainable-fathers-day-gifts",
      "value": "Sustainable Fathers Day Gifts"
    },
    {
      "key": "sustainable-fitness-essentials",
      "value": "Sustainable Fitness Essentials"
    },
    {
      "key": "sustainable-food-storage-products",
      "value": "Sustainable Food Storage Products"
    },
    {
      "key": "sustainable-gifts",
      "value": "Sustainable Gifts"
    },
    {
      "key": "sustainable-gifts-for-plant-lovers",
      "value": "Sustainable Gifts For Plant Lovers"
    },
    {
      "key": "sustainable-hair-care",
      "value": "Sustainable Hair Care"
    },
    {
      "key": "sustainable-handbags-for-travel",
      "value": "Sustainable Handbags For Travel"
    },
    {
      "key": "sustainable-kala-cotton-essentials",
      "value": "Sustainable Kala Cotton Essentials"
    },
    {
      "key": "sustainable-kids-accessories",
      "value": "Sustainable Kids Accessories"
    },
    {
      "key": "sustainable-kids-clothing",
      "value": "Sustainable Kids Clothing"
    },
    {
      "key": "sustainable-kids-corner",
      "value": "Sustainable Kids Corner"
    },
    {
      "key": "sustainable-kids-diapering-needs",
      "value": "Sustainable Kids Diapering Needs"
    },
    {
      "key": "sustainable-kids-sets-overalls",
      "value": "Sustainable Kids Sets Overalls"
    },
    {
      "key": "sustainable-kitchenware",
      "value": "Sustainable Kitchenware"
    },
    {
      "key": "sustainable-learning-educational-toys",
      "value": "Sustainable Learning Educational Toys"
    },
    {
      "key": "sustainable-lip-care",
      "value": "Sustainable Lip Care"
    },
    {
      "key": "sustainable-macrame-essentials",
      "value": "Sustainable Macrame Essentials"
    },
    {
      "key": "sustainable-make-up-needs",
      "value": "Sustainable Make Up Needs"
    },
    {
      "key": "sustainable-men-shoes-flip-flops",
      "value": "Sustainable Men Shoes Flip Flops"
    },
    {
      "key": "sustainable-mens-accessories",
      "value": "Sustainable Mens Accessories"
    },
    {
      "key": "sustainable-mens-bags-wallets",
      "value": "Sustainable Mens Bags Wallets"
    },
    {
      "key": "sustainable-mens-ethnic-wear",
      "value": "Sustainable Mens Ethnic Wear"
    },
    {
      "key": "sustainable-mens-jackets-suits",
      "value": "Sustainable Mens Jackets Suits"
    },
    {
      "key": "sustainable-mens-pants-pyjamas",
      "value": "Sustainable Mens Pants Pyjamas"
    },
    {
      "key": "sustainable-mens-shirt",
      "value": "Sustainable Mens Shirt"
    },
    {
      "key": "sustainable-mens-shorts",
      "value": "Sustainable Mens Shorts"
    },
    {
      "key": "sustainable-mens-sweatshirts",
      "value": "Sustainable Mens Sweatshirts"
    },
    {
      "key": "sustainable-pet-care",
      "value": "Sustainable Pet Care"
    },
    {
      "key": "sustainable-sanitary-care",
      "value": "Sustainable Sanitary Care"
    },
    {
      "key": "sustainable-shampoo-conditioner",
      "value": "Sustainable Shampoo Conditioner"
    },
    {
      "key": "sustainable-skin-care",
      "value": "Sustainable Skin Care"
    },
    {
      "key": "sustainable-travel-cutlery-set",
      "value": "Sustainable Travel Cutlery Set"
    },
    {
      "key": "sustainable-travel-duffels",
      "value": "Sustainable Travel Duffels"
    },
    {
      "key": "sustainable-womens-accessories",
      "value": "Sustainable Womens Accessories"
    },
    {
      "key": "sustainable-womens-clutch",
      "value": "Sustainable Womens Clutch"
    },
    {
      "key": "sustainable-womens-dresses",
      "value": "Sustainable Womens Dresses"
    },
    {
      "key": "sustainable-womens-handbags",
      "value": "Sustainable Womens Handbags"
    },
    {
      "key": "sustainable-womens-intimate-wear",
      "value": "Sustainable Womens Intimate Wear"
    },
    {
      "key": "sustainable-womens-overalls-co-ord-sets",
      "value": "Sustainable Womens Overalls Co Ord Sets"
    },
    {
      "key": "sustainable-womens-pants",
      "value": "Sustainable Womens Pants"
    },
    {
      "key": "sustainable-womens-scarf",
      "value": "Sustainable Womens Scarf"
    },
    {
      "key": "sustainable-womens-shirts",
      "value": "Sustainable Womens Shirts"
    },
    {
      "key": "sustainable-womens-shoes",
      "value": "Sustainable Womens Shoes"
    },
    {
      "key": "sustainable-womens-shorts",
      "value": "Sustainable Womens Shorts"
    },
    {
      "key": "sustainable-womens-skirts",
      "value": "Sustainable Womens Skirts"
    },
    {
      "key": "sustainable-womens-sweatshirts-jackets",
      "value": "Sustainable Womens Sweatshirts Jackets"
    },
    {
      "key": "sustainable-womens-t-shirts",
      "value": "Sustainable Womens T Shirts"
    },
    {
      "key": "sustainable-workout-from-home-essentials",
      "value": "Sustainable Workout From Home Essentials"
    },
    {
      "key": "sustainable-yoga-essentials",
      "value": "Sustainable Yoga Essentials"
    },
    {
      "key": "tencel-essentials",
      "value": "Tencel Essentials"
    },
    {
      "key": "unisex-sustainable-fashion",
      "value": "Unisex Sustainable Fashion"
    },
    {
      "key": "usda-organic-certified",
      "value": "Usda Organic Certified"
    },
    {
      "key": "wellness-essentials",
      "value": "Wellness Essentials"
    },
    {
      "key": "womens-earrings",
      "value": "Womens Earrings"
    },
    {
      "key": "womens-ethnic-traditional-wear",
      "value": "Womens Ethnic Traditional Wear"
    },
    {
      "key": "womens-tops-blouses",
      "value": "Womens Tops Blouses"
    },
    {
      "key": "wooden-essentials",
      "value": "Wooden Essentials"
    },
    {
      "key": "zero-waste-home-essentials",
      "value": "Zero Waste Home Essentials"
    },
    {
      "key": "zero-waste-hygiene-essentials",
      "value": "Zero Waste Hygiene Essentials"
    },
    {
      "value": ""
    }
  ]

  

  const navigate = useNavigate();

  // const handleNavigation = (category) => {
  //   setSearchTerm(category)
  //   // navigate(`/products/${category}`);
  //   // window.location.reload();
  // };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
    navigate(`/products/${searchTerm}`);
  };

  // const toTitleCase = (str) => {
  //   if (!str) return '';
  //   return str
  //     .toLowerCase()
  //     .split(/[\s\-]+/) // Split by spaces or hyphens
  //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(' ');
  // };

  const selecOption = (category) =>{
    setSearchTerm(category)
  }

 

  return (
    <form className="search-bar" onSubmit={handleSearch}>
     
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
       <select className="category-dropdown" onChange={(e) => selecOption(e.target.value)}>
        <option value="">All Categories</option>
       { searchOptions.map(item=> (

         <option value={item.key} >{item.value}</option>
       )) }

        {/* Add more categories as needed */}
      </select>
      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
