

// App.js 
// - render UserInput.js and DisplayRecipes.js to app.js
// - create a getRecipes function that will perform the API call - pass results to userInputs component.

import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Header from './Header';
import RecipeGenerator from './RecipeGenerator'
import Favourites from './components/Favourites';
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <div className='appContainer'>
      <Header />
      <div className='app'> 

        <Routes>
        <Route path='/home' element={<RecipeGenerator />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='*' element={<ErrorPage />} />
        </Routes>
        
      </div>
    </div>
  );
}
export default App;
