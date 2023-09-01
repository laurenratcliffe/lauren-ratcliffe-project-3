// DisplayRecipes.js
import axios from "axios";
import {useEffect, useState} from 'react'
import { getDatabase, ref, update } from 'firebase/database';


const DisplayRecipes = ({recipe, handleNoRecipesFound}) => {
    const [detailedRecipe, setDetailedRecipe] = useState([]);
    const [showInstructions, setShowInstructions] = useState(false);
    const [instructionButton, setInstructionButton] = useState('Show Instructions')


    useEffect(() => {
        if (showInstructions && recipe) {
            fetchDetailedRecipe(recipe.id);
        }
    }, [showInstructions, recipe]);

    const fetchDetailedRecipe = (recipeId) => {
        axios({
          url: `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
          method: "GET",
        }).then((res) => {
          const detailedRecipeData = res.data;
        //   const recipeId = recipe.id;
        //   console.log(recipeId)
          console.log(detailedRecipeData);
          setDetailedRecipe(detailedRecipeData);
        });
      };
    
    
    const handleRecipeRefresh = () => { 
        
        window.location.reload();
        setShowInstructions(true); 
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

    const handleFavouriteRecipe = () => { 
        const db = getDatabase();
        const favoriteRecipes = ref(db, 'favorites');
        update(favoriteRecipes, {
            [recipe.id]: recipe,
        });
         
          
        
              
        }

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
            {/* <h2>CHECK OUT THIS RECIPE!</h2> */}
                <div className="recipeContainer">
                <button
                    className="button"
                    onClick={handleFavouriteRecipe}
                    >Add to Favourites</button>
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                {calculatedMinutes()}
                <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">Source</a>
                <button onClick={() => { 
                    fetchDetailedRecipe(recipe.id); 
                    setShowInstructions(true); 
                    setInstructionButton('Instructions')
                    }}
                    className={showInstructions ? 'instructionButton' : ''}
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