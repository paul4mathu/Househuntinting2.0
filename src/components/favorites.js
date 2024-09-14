import React, { useState, useEffect } from 'react';
import HouseCard from './HouseCard';
import './Houselisting.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Fetch the favorites from local storage when the component mounts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="favorites-page">
      <h2>Your Favorite Houses</h2>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="house-list">
          {favorites.map(house => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
