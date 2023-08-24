import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContextAPI = createContext();
export const ContextAPIProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [currentMealId, setCurrentMealId] = useState("");
  const [currentMeal, setCurrentMeal] = useState([]);
  const [isList, setIsList] = useState(true);
  useEffect(() => {
    getSearchedItem();
    setIsList(true);
  }, [searchText]);
  async function getSearchedItem() {
    try {
      let apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?";
      if (searchText.length === 1) {
        apiUrl = `${apiUrl}f=${searchText}`;
      } else {
        searchText.replace(" ", "_").toLowerCase();
        apiUrl = `${apiUrl}s=${searchText}`;
      }
      const response = await axios.get(apiUrl);
      setSearchItems(response.data);
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  }
  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${currentMealId}`
      )
      .then((res) => {
        setCurrentMeal(res.data);
      });
  }, [currentMealId]);
  return (
    <ContextAPI.Provider
      value={{
        searchItems,
        setSearchText,
        isList,
        setIsList,
        currentMealId,
        setCurrentMealId,
        currentMeal,
      }}
    >
      {children}
    </ContextAPI.Provider>
  );
};
