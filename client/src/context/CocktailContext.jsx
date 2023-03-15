import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const CocktailContext = createContext();

export const CocktailProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState(cocktails);
  const [selectedFilter, setSelectedFilter] = useState('all');




  useEffect(() => {
    getCocktails();
  }, []);  
  // array as 2nd param is list of dependencies (pieces of state)
  // the code inside useEffect will fire when any dependency changes
  // I added submitCocktail here


  useEffect(() => {
    filterCocktails();
  }, [cocktails, selectedFilter]);

  // create a useEffect for all the create a drink pieces of state

  // create an async submission function for saving new cocktail to the database
 
  // async function createNewCocktail(newCocktail) {
  // // DATA MUST BE RECEIVED IN THIS FORMAT: const { name, liquor, ingredients, garnish, directions } = req.body; 

  // //   const response = await axios.post('http://localhost:8080/api/cocktails');
  // //   setCocktails(response.data);
  // }

  const filterCocktails = () => {
    if (selectedFilter !== 'all') {
      const newFilteredCocktails = cocktails.filter((cocktail) => {
        return cocktail['liquor'].includes(selectedFilter);
      });
      setFilteredCocktails(newFilteredCocktails);
    } else {
      setFilteredCocktails(cocktails);
    }
  };


  async function getCocktails() {
    const response = await axios.get('http://localhost:8080/api/cocktails');
    setCocktails(response.data);
  }

  return (
    <CocktailContext.Provider
      value={{
        cocktails,
        filteredCocktails,
        selectedFilter,
        setSelectedFilter,
        filterCocktails,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailContext;
