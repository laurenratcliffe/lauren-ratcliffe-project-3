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


  useEffect (() => {

    
    axios({
      url: "https://api.edamam.com/api/recipes/v2?type=public&app_id=f9d938b5&app_key=9eda799447f92c7c378ad72894d88028%20%09&health=gluten-free&mealType=Dinner",
      method: "GET",
      dataResponse: "json",
      params: { 
        type: "public",
        app_id: "f9d938b5",
        app_key: "9eda799447f92c7c378ad72894d88028",
        mealType: "dinner",
        health: "gluten-free",
      }
    }).then((res) => { 
      const recipes = res.data.hits;
      setAllRecipes(recipes);
    })
  }, [])

  console.log(allRecipes)

  return (
    <div className='appContainer'>
      <h1>RECIPE GENERATOR</h1>
      <div className='app'> 
        <UserInput />
        <DisplayRecipes/>
      </div>
    </div>
  );
}

export default App;
