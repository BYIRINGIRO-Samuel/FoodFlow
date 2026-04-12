import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, tenetur esse earum magni eum neque aut eius deleniti voluptatum et impedit dolor ut dolorum incidunt ad minima vero maxime tempora!</p>
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
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+250790395120</li>
                <li>contact@foodflow.com</li>
               </ul>
            </div>
        </div>
                <hr />
                <p className="footer-copyright">Copyright {new Date().getFullYear()} &copy; FoodFlow.com - All rights Reserved.</p>
    </div>
  )
}

export default Footer
