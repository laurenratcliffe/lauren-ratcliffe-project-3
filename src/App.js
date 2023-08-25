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
  const [selectedDishType, setSelectedDishType] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState([]);
  const [displayRecipe, setDisplayRecipe] = useState(false);

  useEffect (() => {

  },[selectedDiet, selectedCuisine, selectedDishType])

  const fetchRandomRecipe = () => { 
    if (displayRecipe) {
      axios({
        url: `https://api.spoonacular.com/recipes/complexSearch?instructionsRequired=true&veryPopular=true&addRecipeInformation=true&sort=random&number=1`,
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
    };
    }


    console.log(allRecipes);
 

  // const getRecipes = (event) => { 
  //   event.preventDefault();
  //   fetchRandomRecipe();
  //   setDisplayRecipe(true);
  // }
  
  const handleGetRecipes = () => {
    setDisplayRecipe(true); 
    fetchRandomRecipe(); 
  };

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
    <div className='appContainer'>
      <h1>MAKE ME A MEAL!</h1>
      <p>It's important to make smart decisions when it comes to your health. This recipe generator is made to make your meal decisions a bit easier!</p>
      <div className='app'> 
        <UserInput 
         selectedDiet={selectedDiet}
         selectedDishType={selectedDishType}
         selectedCuisine={selectedCuisine}
         onDietChange={handleDietSelection}
         onDishTypeChange={handleDishTypeSelection}
         onCuisineChange={handleCuisineSelection}
         getRecipes={handleGetRecipes}
        />

        {displayRecipe && allRecipes.length > 0 ? (
          <DisplayRecipes recipe={allRecipes[0]} />
        ) : null}

      </div>
    </div>
  );
}

export default App;
