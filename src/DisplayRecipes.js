// DisplayRecipes.js

const DisplayRecipes = (recipes) => {

    return (
        <section>
            {recipes.length === 0 ? (
            <h2>Sorry! Your criteria did not match any of our recipes.</h2>
            ): (
            <>
            <h2>Here are your recipes!</h2>
            </>
            )}
        </section>
    );
}

export default DisplayRecipes;