

// App.js 
// - render UserInput.js and DisplayRecipes.js to app.js
// - create a getRecipes function that will perform the API call - pass results to userInputs component.

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import RecipeGenerator from './RecipeGenerator'
import Favourites from './components/Favourites';






function App() {

  return (
    <div className='appContainer'>
      <Header />
      <div className='app'> 
        <Routes>
        <Route path='/' element={<RecipeGenerator />} />
        <Route path='/login' element={<Favourites />} />
        </Routes>
        
      </div>
    </div>
  );
}
export default App;
