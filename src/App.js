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
      // url: "https://api.edamam.com/api/recipes/v2?type=public&app_id=f9d938b5&app_key=9eda799447f92c7c378ad72894d88028%20%09&health=gluten-free&mealType=Dinner",
      url: "https://api.spoonacular.com/recipes/complexSearch?apiKey=266270d321e7430f975492e4c10ea228&intolerances=${diet}&${dishType}&${cuisine}&instructionsRequired=true&addRecipeInformation=true&sort=random&number=1",
      method: "GET",
      dataResponse: "json",
      params: { 
          app_key: process.env.REACT_APP_API_KEY,
          diet: "ketogenic", 
          dishType: "breakfast",
          cuisine: "indian",

      }
      // params: { 
      //   // type: "public",
      //   // app_id: "f9d938b5",
      //   // app_key: "9eda799447f92c7c378ad72894d88028",
      //   // mealType: "dinner",
      //   // health: "gluten-free",
      //   // responses: 100,
      // }
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
