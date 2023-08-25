// UserInput.js

import { useState } from "react";
import Select from 'react-select';


// UserInput.js 
// - create a filtering component to collect user inputs (dietary restrictions, meal type, cuisine type)
// - create handleUserInputChange function to handle filter choices by user
// - call the getRecipes function and pass the user inputs as arguments when the user submits the form
// - pass fetched/filtered recipes back to app.js and then to DisplayRecipes.js as props

const UserInput = (props) => {
    const [selectedDiet, setSelectedDiet] = useState([]);
    const [selectedMealType, setSelectedMealType] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState([]);

    const handleDietSelection = (selectedDiet) => { 
        props.onDietChange(selectedDiet.map(option => option.value));
    }

    const handleMealTypeSelection = (selectedMealType) => { 
        props.onMealTypeChange(selectedMealType.map(option => option.value));;
    }

    const handleCuisineSelection = (selectedCuisine) => { 
        props.onCuisineChange(selectedCuisine.map(option => option.value));
    }

    const unselectedOptions = []

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
                defaultValue={unselectedOptions}
                isMulti
                onChange={handleDietSelection}
                value={selectedDiet.map(value => ({ value, label: value }))}
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
                defaultValue={unselectedOptions}
                isMulti
                onChange={handleMealTypeSelection}
                value={selectedMealType}
                id="recipeFilterSelection" 
                name="mealTypePreference"
                options={mealTypeOptions}> 
                </Select>

                <label htmlFor="userInput">Choose your cuisine: </label>
                <Select 
                defaultValue={unselectedOptions}
                isMulti
                onChange={handleCuisineSelection}
                value={selectedCuisine}
                id="recipeFilterSelection" 
                name="mealTypePreference"
                options={cuisineOptions}> 
                </Select>

            <button className="submitButton" type="submit">Find me a recipe!</button>
            </form>
        </div>
        
        </>
    );
}

export default UserInput;