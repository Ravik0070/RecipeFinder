import React, { useContext, useEffect, useState } from 'react'
import { ContextAPI } from '../context/ContextApi'


const RecepieList = () => {
  const context = useContext(ContextAPI);
  const items = context.searchItems.meals;
  const [meals, setMeals] = useState([])
  const handleClick = (idMeal) => {
    context.setCurrentMealId(idMeal)
    context.setIsList(false)
  }
  useEffect(() => {
    setMeals(items)
  },[items])
  return (
    <div className='recepieListContainer'>
      {meals ?
        meals?.map((meal) => (<div className='card' key={meal.idMeal} onClick={() => handleClick(meal.idMeal)}>
          <img src={meal.strMealThumb} alt="" />
          <h1>{meal.strMeal}</h1>
        </div>)) : <p>No result found</p>
      }
    </div>
  )
}

export default RecepieList
