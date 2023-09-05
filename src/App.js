
import './App.css';
import { Routes, Route } from 'react-router-dom';
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
        <Route path='/' element={<RecipeGenerator />} />
        <Route path='/login' element={<Favourites />} />
        <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
