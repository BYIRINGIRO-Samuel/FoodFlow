import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'

function Header() {

  return (
    <div className='header'>
      <div className="header-container">
        <div className="header-left">
          <h1>Eat Your Favorite Just How <span className="highlight">You Like It!</span></h1>
          <p>Discover the best food & drinks in your city. From sizzling street food to gourmet dining, we bring your favorite meals to your doorstep.</p>
          
          <div className="header-buttons">
            <button className="order-btn">Order Now</button>
            <button className="menu-btn">See Menu</button>
          </div>

          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2,100+</span>
              <span className="stat-label">Orders</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">Delivery</span>
            </div>
          </div>
        </div>

        <div className="header-right">
          <div className="hero-img-container">
            <img src={assets.hero_plate} alt="Delicious Food Plate" className="hero-main-img" />
            <div className="floating-element garnish-1">🌿</div>
            <div className="floating-element garnish-2">🌶️</div>
            <div className="floating-element garnish-3">🍋</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
