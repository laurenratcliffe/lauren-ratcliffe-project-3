
import { useState, useEffect } from 'react'
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import firebase from '../Firebase'




function Favourites (){ 
  const [firebaseFavourites, setFirebaseFavourites] = useState([]);
  // const [showInstructions, setShowInstructions] = useState(false);
  // const [instructionButton, setInstructionButton] = useState('Show Instructions')


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
  const favoriteRecipesRef = ref(db, 'favorites/' + id); 
  remove(favoriteRecipesRef);
}



return (

 <>
 <div className='favouritesContainer'>
      <h1>Your Favourite Recipes</h1>
        <ul className='favouriteRecipeContainer'>
          {firebaseFavourites.map((favourite, index) => (
            <li key={index} className="favouritedRecipe">
             
             
                <img src={favourite.image} alt={favourite.title} />
                
                  <p>{favourite.title}</p>
                  <a href={favourite.sourceUrl} target="_blank" rel="noreferrer">Source</a>
                  <button className='button' onClick={() => handleRemoveFavourites(favourite.id)}>Remove from Favourites</button>
                
             
            </li>
          ))}
        </ul>
      
    </div>
 

 </>

)
}



export default Favourites