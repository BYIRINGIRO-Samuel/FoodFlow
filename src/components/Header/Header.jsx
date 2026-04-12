import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <div className="header-contents">
        <div className="header-badge">🍕 Fresh & Fast</div>
        <h1>Delicious Food <br/>Delivered to Your Door</h1>
        <p>Experience culinary excellence with our carefully curated menu. From local favorites to international cuisines, we bring restaurant-quality meals right to your doorstep.</p>
        <div className="header-buttons">
          <button className="primary-btn">Order Now</button>
          <button className="secondary-btn">View Menu</button>
        </div>
        <div className="header-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Restaurants</span>
          </div>
          <div className="stat">
            <span className="stat-number">10k+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">30min</span>
            <span className="stat-label">Avg Delivery</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
