
import { useState, useEffect } from 'react'
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import firebase from './Firebase'
import { v4 as uuidv4 } from 'uuid';



function Favourites (){ 
  const [firebaseFavourites, setFirebaseFavourites] = useState([]);

  useEffect(() => {
    const db = getDatabase(firebase);
    const userId = localStorage.getItem('userId') || uuidv4();
        localStorage.setItem('userId', userId);
    const favoriteRecipesRef = ref(db, `users/${userId}/favorites`);

    onValue(favoriteRecipesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const favoritesArray = Object.values(data);
        setFirebaseFavourites(favoritesArray);
      } else {
        setFirebaseFavourites([]);
      }
    });
  }, []);
  
const handleRemoveFavourites = (id) => { 
  const db = getDatabase(firebase);
  const userId = localStorage.getItem('userId') || uuidv4();
  const favoriteRecipesRef = ref(db, `users/${userId}/favorites/${id}`); 
  remove(favoriteRecipesRef);
}


return (

 <>
 <div className='favouritesContainer'>
      <h1>YOUR FAVOURITES</h1>
        <ul className='favouriteRecipeContainer'>
          {firebaseFavourites.map((favorite, index) => (
            <li key={index} className="favouritedRecipe">
             
             
                <img src={favorite.image} alt={favorite.title} />
                
                  <p>{favorite.title}</p>
                  <button className='sourceButton'><a href={favorite.sourceUrl} target="_blank" rel="noreferrer">Source</a></button>
                  <button className='button' onClick={() => handleRemoveFavourites(favorite.id)}>Remove from Favourites</button>
                
             
            </li>
          ))}
        </ul>
      
    </div>
 

 </>

)
}



export default Favourites