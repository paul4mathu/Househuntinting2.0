import React, { useState, useEffect } from 'react';
import HouseCard from './HouseCard';
import './Houselisting.css';

function HouseList() {
  const [houses, setHouses] = useState([]);  // House state for storing data

  // Simulate fetching data by setting static mock data
  useEffect(() => {
    const mockHouses = [
      {
        id: 1,
        type: "Apartment",
        price: "Kshs 10,000",
        description: "Beau1tiful apartment in downtown.",
        location: "Kenya",
        images: [
          "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Apartment+1-1",
          "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Apartment+1-2",
          "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Apartment+1-3"
        ]  
      },
      {
        id: 2,
        type: "Villa",
        price: "Kshs 10,000",
        description: "Luxurious villa with private beach access.",
        location:"kenya",
        images: ["https://via.placeholder.com/300x200/2980B9/FFFFFF?text=Villa+1"]
      },
      {
        id: 3,
        type: "Cottage",
        price: "Kshs 10,000",
        description: "Charming cottage in the countryside.",
        location:"kenya",
        images: ["https://via.placeholder.com/300x200/27AE60/FFFFFF?text=Cottage+1"]
      },
      {
        id: 4,
        type: "Penthouse",
        price: "Kshs 10,000",
        description: "Stunning penthouse with panoramic city views.",
        location:"kenya",
        images: ["https://via.placeholder.com/300x200/8E44AD/FFFFFF?text=Penthouse+1"]
      },
      {
        id: 5,
        type: "Townhouse",
        price: "Kshs 10,000",
        description: "Spacious townhouse with modern amenities.",
        location:"kenya",
        images: ["https://via.placeholder.com/300x200/F39C12/FFFFFF?text=Townhouse+1"]
      },
      {
        id: 6,
        type: "Studio",
        price: "Kshs 20,000",
        description: "Cozy studio apartment perfect for single living.",
        location:"kenya",
        images: ["https://via.placeholder.com/300x200/C0392B/FFFFFF?text=Studio+1"]
      },
      {
        id: 7,
        type: "Mansion",
        price: "Kshs 30,000",
        description: "Exquisite mansion with a private pool and garden.",
        location:"kenya",
        images: ["https://via.placeholder.com/300x200/16A085/FFFFFF?text=Mansion+1"]
      },
      {
        id: 8,
        type: "Loft",
        price: "Kshs 35,000",
        location:"kenya",
        description: "Stylish loft with open floor plan and industrial design.",
        images: ["https://via.placeholder.com/300x200/3498DB/FFFFFF?text=Loft+1"]
      },
      {
        id: 9,
        type: "Cabin",
        price: "Kshs 45,000",
        description: "Cozy cabin in the woods with a scenic view.",
        location:"kenya",
        images: ["https://via.placeholder.com/300x200/2ECC71/FFFFFF?text=Cabin+1"]
      },
      {
        id: 10,
        type: "Condo",
        price: "Kshs 30,000",
        description: "Modern condo in a prime urban location.",
        location:"kenya",
        images: ["https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Condo+1"]
      },
      {
        id: 11,
        type: "Condo",
        price: "Kshs 400,000",
        description: "Modern condo in a prime urban location.",
        location:"kenya",
        images: ["https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Condo+1"]
      },
      {
        id: 12,
        type: "Cabin",
        price: "Kshs 45,000",
        description: "Cozy cabin in the woods with a scenic view.",
        location:"kenya",
        images: ["https://via.placeholder.com/300x200/2ECC71/FFFFFF?text=Cabin+1"]
      },

    ];

    setHouses(mockHouses);
  }, []);

  return (
    <div className="house-list">
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}

export default HouseList;
