import React, { useState } from 'react';
import './RequestHouseForm.css';
import axios from 'axios'; // Import axios for API calls

function RequestHouseForm({ closeForm }) {
  const [step, setStep] = useState(1); // State to manage form steps
  const [formData, setFormData] = useState({
    name: '',
    priceRange: '',
    typeOfHouse: '',
    location: '',
    description: '',
    mpesaNumber: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Next button
  const handleNext = () => {
    setStep(step + 1);
  };

  // Handle Back button
  const handleBack = () => {
    setStep(step - 1);
  };

  // Handle Submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the backend API to initiate STK Push
      const response = await axios.post('http://localhost:5000/api/stkpush', {
        phone: formData.mpesaNumber,
        amount: 1, // Set the amount as needed
      });
      console.log('STK Push initiated:', response.data);
      closeForm(); // Close the form popup
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Payment initiation failed. Please try again.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        {/* Close Button */}
        <button className="close-button" onClick={closeForm}>X</button>

        {/* Inner Container */}
        <div className="form-inner-container">
          {/* Step 1: House Details */}
          {step === 1 && (
            <div className="form-step">
              <h2>Request House</h2>
              <form>
                <label>Name:</label>
                <input
                  placeholder='Enter Your name'
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label>Price Range</label>
                <input
                  placeholder='Enter price range'
                  type="text"
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleChange}
                  required
                />

                <label>House Type</label>
                <input
                  placeholder='Enter house type'
                  type="text"
                  name="typeOfHouse"
                  value={formData.typeOfHouse}
                  onChange={handleChange}
                  required
                />

                <label>Preferred Location:</label>
                <input
                  placeholder='Enter preferred location'
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

                <label>House Description:</label>
                <textarea
                  placeholder='Enter additional description'
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />

                <button type="button" className='next-button' onClick={handleNext}>Next</button>
              </form>
            </div>
          )}

          {/* Step 2: MPesa Number */}
          {step === 2 && (
            <div className="form-step">
              <h2>Request a House </h2>
              <form onSubmit={handleSubmit}>
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="mpesaNumber"
                  placeholder="07xxxxxxxx"
                  value={formData.mpesaNumber}
                  onChange={handleChange}
                  required
                />
                <p>A M-PESA pop-up will be sent to the entered phone number to pay a deposit fee of ksh 250.The full amount will be paid when you meet the agent to view the house.</p>

                <div className="form-buttons">
                  <button type="button" className='back-button' onClick={handleBack}>Back</button>
                  <button  type="submit" className='submit-button'>Submit Request</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RequestHouseForm;
