import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import TrendingToday from '../Moving-Slider/movingslider';
import Moreroducts from '../More-Products/more-products'
import './slide-show.css';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel, Button } from 'react-bootstrap';
import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
Modal.setAppElement("#root");

const SlideShow = () => {
    
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Images data
  const images = [
    { src: "https://scontent.cdninstagram.com/v/t51.2885-15/467539395_18118471840407708_3861183157217682409_n.jpg?stp=dst-jpg_e15_s480x480&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=yEp2S-RLGUIQ7kNvgHHItND&_nc_gid=5515af0c60f540cdaa55c4406ae2a9b5&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AYBKUulSG8S8EeWbYxaBUjMDAIkx0zLZt4NMQTIrWemp5Q&oe=673F708A&_nc_sid=cc8940", alt: "Winter skincare essentials" },
    { src: "https://scontent-iad3-1.cdninstagram.com/v/t51.75761-15/467373198_18118385785407708_7046818825506131009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=NeQ_jbh0iUcQ7kNvgH_32WI&_nc_zt=23&_nc_ht=scontent-iad3-1.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=A5GFP1GhAQFj_5b1fJjlHN3&oh=00_AYA18wta4YsY1twEC6_16TAtmmRC-NhpZV6g7Wno_9Ogqg&oe=673E7197", alt: "Sustainable Superstar" },
    { src: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/467033066_18118175107407708_4787599541710962830_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=8ZAC-_RAVJUQ7kNvgGa7pOE&_nc_gid=259a6cb6e86247428703ec8ef9b75804&edm=AMO9-JQAAAAA&ccb=7-5&oh=00_AYAeJZWUe_DuucKPDA7rpRO5ucCxHXJSg_db5R6U2baO7w&oe=673BB25A&_nc_sid=cc8940", alt: "Family" },
  ];

  // Function to open modal and set active image
  const openModal = (index) => {
    console.log("Image clicked:", index); // Debug log
    setActiveImageIndex(index); // Set the clicked image index
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="app-list">
    {/* Quick Links Section */}
    <div className="quick-links-list">
      <a href="#">Coupon Code</a>
      <a href="#">Plastic Free Packaging</a>
      <a href="#">Track Order</a>
      <a href="#">Refund Policy</a>
      <a href="#">Shipping Policy</a>
      <a href="#">Support Desk</a>
    </div>

    {/* Main Layout Section */}
    <div className="main-layout-list">
      {images.map((img, index) => (
        <div
          key={index}
          className="image-card-list"
          onClick={() => openModal(index)} // Open modal with clicked image
        >
          <img src={img.src} alt={img.alt} className="thumbnail-list" />
          <p>{img.alt}</p>
        </div>
      ))}
    </div>

    {/* Modal with Carousel */}
    <Modal
      isOpen={isModalOpen} // Modal is shown when isModalOpen is true
      onRequestClose={closeModal} // Close modal on outside click
      className="modal-list"
      overlayClassName="overlay-list"
    >
      <button className="close-button-list" onClick={closeModal}>
        ×
      </button>
      <Carousel
        selectedItem={activeImageIndex} // Set initial slide based on clicked image
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        emulateTouch={true}
      >
        {console.log("Selected item:", activeImageIndex)} {/* Debug log */}
        {images.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt={img.alt} className="carousel-image-list" />
            <p className="legend">{img.alt}</p>
          </div>
        ))}
      </Carousel>
    </Modal>
  </div>
  )
}


export default SlideShow;