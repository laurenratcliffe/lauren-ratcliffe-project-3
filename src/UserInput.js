// UserInput.js

import { useState } from "react";
import Select from 'react-select';


// UserInput.js 
// - create a filtering component to collect user inputs (dietary restrictions, meal type, cuisine type)
// - create handleUserInputChange function to handle filter choices by user
// - call the getRecipes function and pass the user inputs as arguments when the user submits the form
// - pass fetched/filtered recipes back to app.js and then to DisplayRecipes.js as props

const UserInput = (props) => {
    const [userSelection, setUserSelection] = useState([]);
    const handleUserSelection = (event) => { 
        setUserSelection([event.value]);
    }

    // console.log(userSelection);

    const dietOptions = [
        { value: 'dairy-free', label: 'Dairy-Free' },
        { value: 'gluten-free', label: 'Gluten-Free' },
        { value: 'ketogenic', label: 'Ketogenic' },
        { value: 'low-FODMAP', label: 'Low-FODMAP' },
        { value: 'paleo', label: 'Paleo' },
        { value: 'pescatarian', label: 'Pescatarian' },
        { value: 'vegan', label: 'Vegan' },
        { value: 'vegetarian', label: 'Vegetarian' },
    ]

    // const mealOptions = [
    //     { value: 'balanced', label: 'Balanced' },
    //     { value: 'highProtein', label: 'High-Protein' },
    //     { value: 'lowCarb', label: 'Low-Carb' },
    //     { value: 'lowFat', label: 'Low-Fat' },
    //     { value: 'lowSodium', label: 'Low-Sodium' },
    // ]

    const mealTypeOptions = [
        { value: 'lunch', label: 'Lunch' },
        { value: 'dinner', label: 'Dinner' },
        { value: 'salad', label: 'Salad' },
        { value: 'side dish', label: 'Side Dish' },
        { value: 'snack', label: 'Snack' },
        { value: 'drinks', label: 'Drinks' },
    ]

    const cuisineOptions = [
        { value: 'american', label: 'American' },
        { value: 'asian', label: 'Asian' },
        { value: 'caribbean', label: 'Carribean' },
        { value: 'french', label: 'French' },
        { value: 'german', label: 'German' },
        { value: 'greek', label: 'Greek' },
        { value: 'indian', label: 'Indian' },
        { value: 'italian', label: 'Italian' },
        { value: 'mexican', label: 'Mexican' },
        { value: 'middleEastern', label: 'Middle Eastern' },
    ]

    
    return (
        <>
        {/* <h2>Choose your preferences</h2> */}
        <div className="userInputForm">
            <form onSubmit={(event) => props.getRecipes(event)}>
                <label htmlFor="recipeFilterSelection">Choose your diet preferences: </label>
                <Select 
                defaultValue={userSelection}
                isMulti
                onChange={handleUserSelection}
                id="recipeFilterSelection" 
                name="dietPreference"
                options={dietOptions}>
                </Select>

                {/* <label htmlFor="userInput">Choose your meal preferences: </label>
                <Select 
                defaultValue={userSelection}
                isMulti
                onChange={handleUserSelection}
                id="recipeFilterSelection" 
                name="mealPreference"
                options={mealOptions}> 
                </Select> */}

                <label htmlFor="userInput">Choose your meal type: </label>
                <Select 
                defaultValue={userSelection}
                isMulti
                onChange={handleUserSelection}
                id="recipeFilterSelection" 
                name="mealTypePreference"
                options={mealTypeOptions}> 
                </Select>

                <label htmlFor="userInput">Choose your cuisine: </label>
                <Select 
                defaultValue={userSelection}
                isMulti
                onChange={handleUserSelection}
                id="recipeFilterSelection" 
                name="mealTypePreference"
                options={cuisineOptions}> 
                </Select>
            </form>
        </div>
        <button className="submitButton" type="submit">Find me a recipe!</button>
        </>
    );
}

export default UserInput;