// DisplayRecipes.js
import axios from "axios";
import {useEffect, useState} from 'react'
import { getDatabase, ref, update } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

const DisplayRecipes = ({recipe, handleNoRecipesFound }) => {
    const [detailedRecipe, setDetailedRecipe] = useState([]);
    const [showInstructions, setShowInstructions] = useState(false);
    const [instructionButton, setInstructionButton] = useState('Show Instructions')
    const [favorited, setFavorited] = useState('Save to Favourites');

    useEffect(() => {
        if (showInstructions && recipe) {
            fetchDetailedRecipe(recipe.id);
        }
        checkIfFavorited();
        
    }, [showInstructions, recipe]);

    const fetchDetailedRecipe = (recipeId) => {
        axios({
          url: `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
          method: "GET",
        }).then((res) => {
          const detailedRecipeData = res.data;
          setDetailedRecipe(detailedRecipeData);
        });
      };
  
    
    const checkIfFavorited = () => {
    setFavorited(recipe && recipe.favorited ? 'Remove from Favourites' : 'Save to Favourites');
    };

    const handleRecipeRefresh = () => {   
        localStorage.removeItem('selectedRecipeId');
        window.location.reload();
        setShowInstructions(false); 
    }

    const calculatedMinutes = () => { 
        const minutes = recipe.readyInMinutes

        if (minutes > 60) { 
            return (
                <p> Ready in 1 hour and {minutes - 60} minutes</p>
            )
        } else if (minutes === 60) { 
            return (
                <p> Ready in 1 hour</p>
            )
        } else { 
            return (
                <p> Ready in {minutes} minutes </p>
            )
        }
    }


    const generateUserId = () => {
        const userId = localStorage.getItem('userId') || uuidv4();
        localStorage.setItem('userId', userId);
      };
    
      const getUserId = () => {
        return localStorage.getItem('userId');
      };


    const handleFavoriteRecipe = () => { 
    const db = getDatabase();
    const userId = getUserId(); 

    if (userId) {
      const favoriteRecipes = ref(db, `users/${userId}/favorites`); 
      if (favorited === 'Save to Favourites') {
              update(favoriteRecipes, {
                [recipe.id]: recipe,
              });
              setFavorited('Remove from Favourites');
            } else {
             
              update(favoriteRecipes, {
                [recipe.id]: null,
              });
              setFavorited('Save to Favourites');
            }
    }
    
    generateUserId()
};

    const displayDetailedInstructions = () => { 
        if (showInstructions && Object.keys(detailedRecipe).length > 0) {
            return (
              <div className="detailedInstructionsOverlay">
                <div className="detailedInstructions">
                <h4>Ingredients</h4>
                    <ul>
                    {detailedRecipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                    ))}
                </ul>

                <h4>Instructions</h4>
                    <ol>
                        {detailedRecipe.analyzedInstructions[0]?.steps.map((step) => (
                            <li key={step.number}>{step.step}</li>))}
                        
                    </ol>
                </div>
                <button className="button" onClick={() => {setShowInstructions(false); setInstructionButton('Show Instructions')}}>Hide Instructions</button>
              </div>
            )
          } else {
            return null;
          } 
        }
    
    return (
        <section>
            {recipe ? (
            <>
            <div className="generatedRecipe">
           
                <div className="recipeContainer">
                <button
                    className="favouriteButton"
                    onClick={handleFavoriteRecipe}
                    >{favorited}</button>

                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                {calculatedMinutes()}
                <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">Source</a>
                <button onClick={() => { 
                    fetchDetailedRecipe(recipe.id); 
                    setShowInstructions(true); 
                    setInstructionButton('Instructions')
                    }}
                    className='submitButton'
                >{instructionButton}</button>
                </div>
                {displayDetailedInstructions()}
                <button className="button" onClick={handleRecipeRefresh}>Try a new search!</button>
            </div>
            </>
            ): (
            handleNoRecipesFound()
            )}
        </section>
    );
}
export default DisplayRecipes;