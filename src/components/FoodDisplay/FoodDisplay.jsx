import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContent'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext);

    // AI Logic Simulation: Pick 4 unique high-rated dishes
    const recommendations = food_list.slice(4, 8);

  return (
    <div className='food-display' id='food-display'>
        {category === "All" && (
          <div className="recommendations-container">
            <h2 className="section-title">✨ Recommended for You</h2>
            <div className="recommendations-list">
              {recommendations.map((item, index) => (
                <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              ))}
            </div>
          </div>
        )}
        
        <h2 className="section-title">{category === "All" ? "Top dishes near you" : `Popular ${category} dishes`}</h2>
        <div className="food-display-list">
            {food_list.map((item,index) =>{
              if(category ==="All" || category===item.category){
                return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
