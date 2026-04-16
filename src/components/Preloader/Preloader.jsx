import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [text, setText] = useState("");
    const fullText = "FoodFlow";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="preloader">
            <div className="loader-content">
                <div className="loader-ring"></div>
                <div className="loader-logo">
                    <span className="logo-text">{text}</span>
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
