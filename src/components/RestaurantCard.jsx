import React from 'react'
import { config } from '../constants'

function RestaurantCard({prop}) {
  const {name, avgRatingString, cuisines, locality,cloudinaryImageId} = prop
  return (
    <div className='restaurant-card-container'>
        <img src={`${config.cloudinaryImageIdURL+cloudinaryImageId}`} alt="restaurant-photo"/>
        <h2>{name}</h2>
        <h5>{avgRatingString} Stars</h5>
        <h4>{cuisines.join(", ")}</h4>
        <p>{locality}</p>

    </div>
  )
}

export default RestaurantCard