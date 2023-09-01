
import { useState, useEffect } from 'react'
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import firebase from '../Firebase'




function Favourites (){ 
  const [firebaseFavourites, setFirebaseFavourites] = useState([]);

  useEffect(() => {
    const db = getDatabase(firebase);
    const favoriteRecipesRef = ref(db, 'favorites');

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
  const favoriteRecipesRef = ref(db, 'favorites/' + id); // Specify the path to the specific node

  // Use the `remove` function to delete the specific node.
  remove(favoriteRecipesRef);
  
}

return (

 <>
 <div className='favouritesContainer'>
  <h1>Your Favourite Recipes</h1>
  <div>
      <ul >
        {firebaseFavourites.map((favourite, index) => (
          <li key={index} className="favouritedRecipe">
            <img src={favourite.image} alt={favourite.title} />
            <div className='recipeInfo'>
            <p>{favourite.title}</p>
            <a href={favourite.sourceUrl} target="_blank" rel="noreferrer">Source</a>
            <button onClick={() => handleRemoveFavourites(favourite.id)}>Remove from Favourites</button>
            </div>
          
          </li>
        ))}
      </ul>
        </div>
 </div>
 

 </>

)
}



export default Favourites