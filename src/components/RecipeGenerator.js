import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserInput from './UserInput';
import DisplayRecipes from './DisplayRecipes';
import '../App.css';


function RecipeGenerator() {
   
    const [allRecipes, setAllRecipes] = useState([]);
    const [selectedDiet, setSelectedDiet] = useState([""]);
    const [selectedDishType, setSelectedDishType] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState([]);
    const [displayRecipe, setDisplayRecipe] = useState(false);
    const [noRecipesFound, setNoRecipesFound] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); 

    useEffect (() => {
    
    },[selectedDiet, selectedCuisine, selectedDishType, allRecipes])
  
    const fetchRandomRecipe = () => { 
        axios({
          url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&instructionsRequired=true&veryPopular=true&addRecipeInformation=true&sort=random&number=1`,
          method: "GET",
          dataResponse: "json",
          params: { 
              apiKey: process.env.REACT_APP_API_KEY,
              diet: selectedDiet.join(','),
              type: selectedDishType.join(','),
              cuisine: selectedCuisine.join(','),
          }
         
        }).then((res) => { 
          const recipes = res.data.results;
          setAllRecipes(recipes);
          if (recipes.length === 0) {
            setNoRecipesFound(true);
          } else {
            setNoRecipesFound(false);
            setNoRecipesFound(recipes.length === 0);
          }
        });
      }
    
   

    const handleGetRecipes = () => {
      setDisplayRecipe(true); 
      fetchRandomRecipe(); 
    }

    const handleDietSelection = (selectedOptions) => { 
      setSelectedDiet(selectedOptions);
      setDisplayRecipe(false);
  }
  
  const handleDishTypeSelection = (selectedOptions) => { 
      setSelectedDishType(selectedOptions);
      setDisplayRecipe(false);
  }
  
  const handleCuisineSelection = (selectedOptions) => { 
      setSelectedCuisine(selectedOptions);
      setDisplayRecipe(false);
  }

  return (
    <div className='recipeGenerator'>
      <div className='recipeDisplay'>   
        <DisplayRecipes
        recipe={allRecipes[0]}
        getNewRecipe={fetchRandomRecipe}
        />
      </div>
      <div className='filterOptions'>
        <UserInput
          selectedDiet={selectedDiet}
          selectedDishType={selectedDishType}
          selectedCuisine={selectedCuisine}
          onDietChange={handleDietSelection}
          onDishTypeChange={handleDishTypeSelection}
          onCuisineChange={handleCuisineSelection}
          getRecipes={handleGetRecipes}
          recipe={allRecipes[0]}
          allRecipes={allRecipes}
          noRecipesFound={noRecipesFound}
        />
      </div>
    </div>
  );
}



export default RecipeGenerator;
