import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
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
      console.log(res);
    })
  }, [])


  return (
    <>
      
    </>
  );
}

export default App;
