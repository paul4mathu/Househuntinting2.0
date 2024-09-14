import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FilterSection from './components/Filtersection';
import HouseListing from './components/Houselisting';
import Footer from './components/Footer';
import Favorites from './components/favorites';  // Import  pages
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate data fetching with a timeout (or replace with actual API calls)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  // Simulate data load completion
    }, 2000);  // Replace with actual data loading logic
  }, []);


  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Show loader while content is loading */}
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FilterSection />
                  <HouseListing />
                </>
              }
            />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;

  