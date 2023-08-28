// DisplayRecipes.js

const DisplayRecipes = ({recipe, getNewRecipe, handleNoRecipesFound}) => {

    const handleRecipeRefresh = () => { 
        getNewRecipe();
    }

    

    return (
        <section>
            {recipe ? (
            <>
            <div className="generatedRecipe">
            <h2>CHECK OUT THIS RECIPE!</h2>
                <div className="recipeContainer">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                <button>Instructions</button>
                <p>Ready in {recipe.readyInMinutes} minutes!</p>
                <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">Source</a>
                
                {/* <h4>Ingredients</h4>
                    <ul>
                        {recipe.analyzedInstructions[0].steps.map((step) => (
                                    <li key={step.number}>
                                        {step.ingredients.length > 0 && (
                                            <ul>
                                                {step.ingredients.map((ingredient) => (
                                                    <li key={ingredient.id}>{ingredient.name}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                    </ul> */}
                {/* <h4>Instructions</h4>
                    <ul>
                        {recipe.analyzedInstructions[0].steps.map((step) => (
                        <li key={recipe.id}>{step.step}</li>
                        ))}
                    </ul> */}
                </div>
                <button onClick={handleRecipeRefresh}>Try a new search!</button>
            </div>
            </>
            ): (
            handleNoRecipesFound()
            )}
            
        </section>
    );
}

export default DisplayRecipes;