// DisplayRecipes.js

const DisplayRecipes = ({recipe}) => {

    const handleRecipeRefresh = () => { 
        window.location.reload();
    }

    return (
        <section>
            {recipe ? (
            <>
            <div className="generatedRecipe">
            <h2>Check out this recipe!</h2>
                <div className="recipeContainer">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
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
                <h4>Instructions</h4>
                    <ul>
                        {recipe.analyzedInstructions[0].steps.map((step) => (
                        <li key={recipe.id}>{step.step}</li>
                        ))}
                    </ul>
                </div>
                <button onClick={handleRecipeRefresh}>Let's try another!</button>
            </div>
            </>
            ): (
            <h2>Sorry! Your criteria did not match any of our recipes.</h2>
            )}
        </section>
    );
}

export default DisplayRecipes;