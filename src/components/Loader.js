import React from "react";
import './Loader.css';

function Loader() {
    return (
        <div className="loader-container">
            <div className="letters-container">
                <div className="letter">H</div>
                <div className="letter delayed">H</div>
            </div>
            <div className="hounter-text">Hounter</div>
        </div>
    );
}

export default Loader;
