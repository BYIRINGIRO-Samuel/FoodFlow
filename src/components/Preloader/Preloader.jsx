import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="loader-content">
                <div className="loader-ring"></div>
                <div className="loader-logo">
                    <span className="logo-text">FoodFlow</span>
                    <div className="logo-pulse"></div>
                </div>
                <div className="loader-status">Preparing your feast...</div>
            </div>
            <div className="loader-decorations">
                <span className="food-emoji">🍕</span>
                <span className="food-emoji">🍔</span>
                <span className="food-emoji">🍣</span>
                <span className="food-emoji">🍦</span>
            </div>
        </div>
    );
};

export default Preloader;
