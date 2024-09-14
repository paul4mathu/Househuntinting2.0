
import React, { useState, useEffect } from 'react';
import './HouseCard.css';
import { Swiper, SwiperSlide } from 'swiper/react';  // Import Swiper components
import { Pagination } from 'swiper/modules';  // Import Pagination module
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHouseUser, faHeart } from '@fortawesome/free-solid-svg-icons';

function HouseCard({ house }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the house is already in local storage when the component mounts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(savedFavorites.some(favHouse => favHouse.id === house.id));
  }, [house.id]);

  // Function to handle adding/removing favorites
  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = savedFavorites.filter(favHouse => favHouse.id !== house.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites
      localStorage.setItem('favorites', JSON.stringify([...savedFavorites, house]));
      setIsFavorite(true);
    }
  };

  return (
    <div className="house-card">
      <div className="house-images">
        <Swiper modules={[Pagination]} spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
          {house.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index}`} className="house-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="house-price">
        <FontAwesomeIcon icon={faHouseUser} className="price-icon" /> {house.price}
      </div>

      <div className="house-type">{house.type}</div>
      <p className="house-description">{house.description}</p>
      <div className="house-location">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> {house.location}
      </div>

      <div className="house-actions">
        <a href={`/house/${house.id}`} className="details-link">View Details</a>
        <button className="book-visit-btn">Book Visit</button>
        <button className={`favorite-btn ${isFavorite ? 'favorited' : ''}`} onClick={toggleFavorite}>
          <FontAwesomeIcon icon={faHeart} /> {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
}

export default HouseCard;