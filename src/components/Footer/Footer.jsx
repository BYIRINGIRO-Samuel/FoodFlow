import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h3 className="footer-logo">FoodFlow</h3>
                <p>Your trusted food delivery partner bringing delicious meals from your favorite restaurants right to your doorstep. Fast, reliable, and always fresh.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+1-800-FOODFLOW</li>
                <li>support@foodflow.com</li>
                <li>24/7 Customer Support</li>
               </ul>
            </div>
        </div>
                <hr />
                <p className="footer-copyright">Copyright {new Date().getFullYear()} &copy; FoodFlow.com - All rights Reserved.</p>
    </div>
  )
}

export default Footer
