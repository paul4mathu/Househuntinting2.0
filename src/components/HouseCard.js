import React, { useState, useEffect, useCallback } from 'react';
import './HouseCard.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faHouseUser, faHeart } from '@fortawesome/free-solid-svg-icons';

const HouseCard = ({ house }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Isolated effect for setting initial favorite state
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(savedFavorites.some(favHouse => favHouse.id === house.id));
  }, [house.id]);

  // Toggle favorite logic
  const toggleFavorite = useCallback(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
      const updatedFavorites = savedFavorites.filter(favHouse => favHouse.id !== house.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      localStorage.setItem('favorites', JSON.stringify([...savedFavorites, house]));
      setIsFavorite(true);
    }
  }, [isFavorite, house]);

  return (
    <div className={`house-card ${isFavorite ? 'highlight-favorite' : ''}`}>
      <div className="house-images">
        <Swiper modules={[Pagination]} spaceBetween={10} slidesPerView={1} pagination={{ clickable: true }}>
          {house.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                src={image} 
                alt={`Slide ${index}`} 
                className="house-image" 
                onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image-url.jpg'; }} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="house-info">
        <div className="house-price">
          <FontAwesomeIcon icon={faHouseUser} className="price-icon" /> {house.price}
        </div>

        <div className="house-type">{house.type}</div>
        <p className="house-description">{house.description}</p>
        <div className="house-location">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> {house.location}
        </div>
      </div>

      <div className="house-actions">
        <a href={`/house/${house.id}`} className="details-link">View Details</a>
        <button className="book-visit-btn" onClick={() => alert('Booking visit functionality to be implemented.')}>Book Visit</button>
        <button 
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`} 
          onClick={toggleFavorite}
          aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        >
          <FontAwesomeIcon icon={faHeart} /> {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default HouseCard;
