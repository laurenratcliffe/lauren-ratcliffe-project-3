// General Structure/Styling
// - create general component framing (html/css) to create apps user inputs and the section to display filtered recipes
// - define useState variables for user inputs such as dietary restrictions, meal type, cuisine type

// App.js 
// - render UserInput.js and DisplayRecipes.js to app.js
// - create a getRecipes function that will perform the API call - pass results to userInputs component.

import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserInput from './UserInput';
import DisplayRecipes from './DisplayRecipes';

function App() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [selectedDiet, setSelectedDiet] = useState([""]);
  const [selectedMealType, setSelectedMealType] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState([]);

  useEffect (() => {
    fetchRandomRecipe();
  },[selectedDiet, selectedMealType, selectedCuisine])

  const fetchRandomRecipe = () => { 
    axios({
      url: `https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&veryPopular=true&addRecipeInformation=true&sort=random&number=1`,
      method: "GET",
      dataResponse: "json",
      params: { 
          apiKey: process.env.REACT_APP_API_KEY,
          diet: selectedDiet.join(','),
          dishType: selectedMealType.join(','),
          cuisine: selectedCuisine.join(','),
      }
     
    }).then((res) => { 
      const recipes = res.data.results;
      setAllRecipes(recipes);
    });
  };
    
  

  console.log(allRecipes)

  const getRecipes = (event) => { 
    event.preventDefault();
    fetchRandomRecipe();
  }

  const handleDietSelection = (selectedOptions) => { 
    setSelectedDiet(selectedOptions);
}

const handleMealTypeSelection = (selectedOptions) => { 
    setSelectedMealType(selectedOptions);
}

const handleCuisineSelection = (selectedOptions) => { 
    setSelectedCuisine(selectedOptions);
}

  return (
    <div className='appContainer'>
      <h1>RECIPE GENERATOR</h1>
      <div className='app'> 
        <UserInput 
         selectedDiet={selectedDiet}
         selectedMealType={selectedMealType}
         selectedCuisine={selectedCuisine}
         onDietChange={handleDietSelection}
         onMealTypeChange={handleMealTypeSelection}
         onCuisineChange={handleCuisineSelection}
         getRecipes={getRecipes}
        />
        <DisplayRecipes recipe={allRecipes[0]}/>
      </div>
    </div>
  );
}

export default App;
