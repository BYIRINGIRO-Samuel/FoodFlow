import React from 'react'
import './ScrollButton.css'
const ScrollButton = () => {
    function handleScroll(){
        document.getElementById('navbar').scrollIntoView({behavior:'smooth'});
    }
  return (
    <div>
      <button onClick={handleScroll} className='scroll-btn' id='scroll-btn'>⌃</button>
    </div>
  )
}

export default ScrollButton
