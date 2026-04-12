import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <div className="header-container">
        <div className="header-contents">
          <div className="header-badge">🚀 Lightning Fast Delivery</div>
          <h1>Crave It? <span className="highlight">We Deliver</span></h1>
          <p>From sizzling street food to gourmet dining, FoodFlow brings your favorite meals to your doorstep. Track your order in real-time and enjoy hot, fresh food delivered within minutes.</p>
          <div className="header-buttons">
            <button className="primary-btn">🍔 Order Food Now</button>
            <button className="secondary-btn">📱 Download App</button>
          </div>
        </div>
        <div className="header-features">
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <div className="feature-text">
              <strong>30-Min Delivery</strong>
              <span>Or it's on us</span>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">👨‍🍳</div>
            <div className="feature-text">
              <strong>1000+ Restaurants</strong>
              <span>Local favorites & chains</span>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">💳</div>
            <div className="feature-text">
              <strong>Easy Payment</strong>
              <span>Cash, card & digital</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
