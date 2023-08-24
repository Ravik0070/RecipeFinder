import React from 'react'
import MainDish from "../assets/hero-dish.png"

const Banner = () => {
  return (
    <div className='bannerContainer'>
      <div className="welcome">
        <p>Welcome ! <br />
          Search for healthy and tasty dishes with their recipe.
          Make the next thing you're craving for this instant.
        </p>
      </div>
      <div className="img">
        <img src={MainDish} alt="" />
      </div>
    </div>
  )
}

export default Banner
