import React, { useContext, useEffect, useState } from "react";
import { ContextAPI } from "../context/ContextApi";

const SingleRecepie = () => {
  const context = useContext(ContextAPI);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    setMeals(context.currentMeal.meals || []);
  }, [context.currentMeal.meals]);
  const meal = meals[0] || {};
  const filteredIngredientKeys = Object.keys(meal).filter((key) =>
    key.startsWith("strIngredient")
  );
  const ingredients = filteredIngredientKeys.reduce((result, ingredientKey) => {
    const ingredientIndex = ingredientKey.slice("strIngredient".length);
    const measureKey = `strMeasure${ingredientIndex}`;
    if (meal[measureKey] !== "" && meal[measureKey] !== null) {
      result[meal[ingredientKey]] = meal[measureKey];
    }
    return result;
  }, {});
  const instructions = meals[0]?.strInstructions;
  const recipeInstructions = instructions?.split("\r\n");
  const tags = meals[0]?.strTags?.split(",");
  const handleClick = (e) => {
    e.preventDefault();
    context.setIsList(true);
  };
  if (meals?.length === 0) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }
  return (
    <div className="singleRecepieContainer">
      <div className="top">
        <div className="left">
          <div className="img">
            <img src={meal?.strMealThumb} alt="" />
          </div>
          <div className="tags">
            {tags?.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="url">
            {meals[0]?.strSource && (
              <>
                <b>SourceLink:</b> &nbsp;
                <a href={meals[0]?.strSource}> {meals[0]?.strSource}</a>
              </>
            )}
            <br />
            <b>Youtube:</b> &nbsp;
            <a href={meals[0]?.strYoutube}>{meals[0].strYoutube}</a>
          </div>
          <div className="ingredientsTable">
            <table>
              <thead>
                <tr>
                  <th>Ingredients</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {ingredients &&
                  Object.entries(ingredients).map((item) => (
                    <>
                      <tr key={item}>
                        <td>{item[0]}</td>
                        <td>{item[1]}</td>
                      </tr>
                      <hr />
                    </>
                  ))}
              </tbody>
            </table>
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
      <button onClick={handleClick} className="backbtn">
        Back
      </button>
    </div>
  );
};

export default SingleRecepie;
