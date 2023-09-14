import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserInput from './UserInput';
import DisplayRecipes from './DisplayRecipes';
import './App.css';





function RecipeGenerator() {
   
    const [allRecipes, setAllRecipes] = useState([]);
    const [selectedDiet, setSelectedDiet] = useState([""]);
    const [selectedDishType, setSelectedDishType] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState([]);
    const [displayRecipe, setDisplayRecipe] = useState(false);
    
    
   


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
        });
      }
  
  
      console.log(allRecipes);
    
    const handleGetRecipes = () => {
      setDisplayRecipe(true); 
      fetchRandomRecipe(); 
    };
  
    const handleNoRecipesFound = () => { 
      const handleNewSearch = () => { 
        window.location.reload();
      }
      
      if (allRecipes.length === 0){
        return null;
      } else {
        return (
            <div className="noRecipesFound">
              <p>Sorry! Your criteria didn't match any of our recipes.</p>
              <button onClick={handleNewSearch}>Try another search</button>
            </div>
        );
      }
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
        {/* <h1>MAKE ME A MEAL!</h1>
        <p>It's important to make smart decisions when it comes to your health. This recipe generator is made to make your meal decisions a bit easier!</p> */}
            
        <DisplayRecipes
        recipe={allRecipes[0]}
        getNewRecipe={fetchRandomRecipe}
        handleNoRecipesFound={handleNoRecipesFound}
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
        />
      </div>
    </div>
  );
}



export default RecipeGenerator;
