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
  const [selectedDiet, setSelectedDiet] = useState([]);
  const [selectedDishType, setSelectedDishType] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState([]);

  useEffect (() => {
    axios({
      url: "https://api.spoonacular.com/recipes/complexSearch?apiKey=${app_key}&intolerances=${diet}&${dishType}&${cuisine}&instructionsRequired=true&addRecipeInformation=true&sort=random&number=1",
      method: "GET",
      dataResponse: "json",
      params: { 
          app_key: process.env.REACT_APP_API_KEY,
          diet: "ketogenic", 
          dishType: "breakfast",
          cuisine: "indian",

      }
     
    }).then((res) => { 
      const recipes = res.data;
      setAllRecipes(recipes);
    })
  }, [])

  console.log(allRecipes)

  const getRecipes = (event) => { 
    event.preventDefault();
    console.log('getting recipes');
  }

  const handleDietSelection = (userSelection) => { 
    setSelectedDiet(userSelection);
  }

  const handleDishTypeSelection = (userSelection) => { 
    setSelectedDishType(userSelection);
  }

  const handleCuisineSelection = (userSelection) => { 
    setSelectedCuisine(userSelection);
  }

  return (
    <div className='appContainer'>
      <h1>RECIPE GENERATOR</h1>
      <div className='app'> 
        <UserInput getRecipes={getRecipes}/>
        <DisplayRecipes/>
      </div>
    </div>
  );
}

export default App;
