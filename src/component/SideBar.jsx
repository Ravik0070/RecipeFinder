import React from 'react'
import Profile from "../assets/mydp.jpg"

const SideBar = () => {
  return (
    <div className='sidebarContainer'>
      <div className="photo">
        <img src={Profile} alt="" />
      </div>
      <div className="description">
        <span>
          <p>Devloper</p> <h3>Ravikant</h3>
        </span>
        <h4>Whats this get you?</h4>
        <p>This gets you the recipe that you're looking for !</p>
        <p>It could be the next thing you want to cook,
          could be the nutrient that you require in a meal or not.</p>
        <span>
          <p>API used in it</p><a href="https://www.themealdb.com/api.php"><code>https://www.themealdb.com/api.php</code></a>
        </span>
      </div>
      <div className="madeWithLove">
        Made with Love
      </div>
    </div>
  )
}

export default SideBar