import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContent';

function Navbar({setShowLogin}) {
  
    const[menu,setMenu]=useState("home");
    const {getTotalCartAmount, food_list} = useContext(StoreContext); 

    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false);

    const filteredFood = food_list.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5); // Limit to top 5 results

  return (
    <div className='navbar' id='navbar'>
      <Link to={'/'} className='logo-text'>FoodFlow</Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() =>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href="#explore-menu" onClick={() =>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href="#App-download" onClick={() =>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href="#footer" onClick={() =>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className='navbar-right'>
          <div className="search-container">
            <div className="search-input-wrapper">
              <img src={assets.search_icon} alt="" className="search-icon-nav" />
              <input 
                type="text" 
                placeholder="Search food..." 
                value={searchQuery}
                onFocus={() => setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {showResults && searchQuery && (
              <div className="search-results-dropdown">
                {filteredFood.length > 0 ? (
                  filteredFood.map(item => (
                    <div key={item._id} className="search-result-item">
                      <img src={item.image} alt="" />
                      <div className="search-result-info">
                        <p>{item.name}</p>
                        <span>${item.price}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="no-results">No matches found</p>
                )}
              </div>
            )}
          </div>
          <div className="nav-search">
                  <Link to={'/cart'}><img src={assets.basket_icon} alt="" /></Link>
                  <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
