import React, { useState } from 'react';
import './Filtersection.css';

const FilterSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSearch = () => {
    // search functionality here
    console.log('Search:', searchQuery, location, priceRange, propertyType);
  };

  return (
    <div className="filter-section">
      <div className="paragraph"> <p>Find any House in The 254.</p>  </div>
      <div className="filter-controls">
        <input
          type="text"
          placeholder="I'm looking for"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <option value="">Price Range</option>
          <option value="0-100000">Up to Kshs 100,000</option>
          <option value="100000-200000">Kshs 100,000 - Kshs 200,000</option>
          <option value="200000-500000">Kshs 200,000 - Kshs 500,000</option>
          <option value="500000-1000000">Kshs500,000 - Kshs1,000,000</option>
          <option value="1000000+">Kshs 1,000,000+</option>
        </select>
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option value="">Property Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default FilterSection;
