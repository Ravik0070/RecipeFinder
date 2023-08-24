import React, { useContext, useEffect, useState } from 'react'
import { ContextAPI } from '../context/ContextApi'

const SingleRecepie = () => {
  const context = useContext(ContextAPI);
  const [meals, setMeals] = useState([])
  useEffect(() => {
    setMeals(context.currentMeal.meals || [])
  }, [context.currentMeal.meals])
  const meal = meals[0] || {};
  const instructions = meals[0]?.strInstructions;
  const recipeInstructions = instructions?.split("\r\n");
  const tags = meals[0]?.strTags?.split(",");
  const handleClick = (e) => {
    e.preventDefault()
    context.setIsList(true);
  }

  if (meals?.length === 0) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }
  return (
    <div className='singleRecepieContainer'>
      <div className="top">
        <div className="left">
          <div className="img">
            <img src={meal?.strMealThumb} alt="" />
          </div>
          <div className="tags">
            {tags?.map(tag => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className='url'>
            {meals[0]?.strSource && <><b>SourceLink:</b> &nbsp;<a href={meals[0]?.strSource}> {meals[0]?.strSource}</a></>}
            <br />
            <b>Youtube:</b> &nbsp;<a href={meals[0]?.strYoutube}>{meals[0].strYoutube}</a>
          </div>

        </div>
        <div className="right">
          <h1>{meal.strMeal}</h1>
          <div className="instruction">
            {recipeInstructions?.map((instruction, index) => (
              <p key={index}>{`${instruction}`}</p>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleClick} className='backbtn'>Back</button>
    </div>
  )
}

export default SingleRecepie
