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
    const [selectedDishType, setSelectedDishType] = useState([]);
    const [selectedCuisine, setSelectedCuisine] = useState([]);

    const handleDietSelection = (userSelection) => { 
        const selectedDietValues = userSelection.map(option => option.value);
        setSelectedDiet(userSelection);
        props.onDietChange(selectedDietValues);
    }

    const handleDishTypeSelection = (userSelection) => { 
        const selectedDishTypeValues = userSelection.map(option => option.value);
        setSelectedDishType(userSelection)
        props.onDishTypeChange(selectedDishTypeValues)
    }

    const handleCuisineSelection = (userSelection) => { 
        const selectedCuisineValues = userSelection.map(option => option.value);
        setSelectedCuisine(userSelection)
        props.onCuisineChange(selectedCuisineValues)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        props.getRecipes(); 
    };

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

    const dishTypeOptions = [
        { value: 'appetizer', label: 'Appetizer' },
        { value: 'breakfast', label: 'Breakfast' },
        { value: 'beverage', label: 'Beverage' },
        { value: 'dessert', label: 'Dessert' },
        { value: 'main course', label: 'Main Course' },
        { value: 'marinade', label: 'Marinade' },
        { value: 'salad', label: 'Salad' },
        { value: 'side dish', label: 'Side Dish' },
        { value: 'snack', label: 'Snack' },
        { value: 'soup', label: 'Soup' },
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
        <div className="userInputForm">
            <form onSubmit={handleSubmit}>
                <div className="filterInput">
                <label >Choose your diet preferences: </label>
                <Select 
                defaultValue={selectedDiet}
                isMulti
                onChange={handleDietSelection}
                value={selectedDiet}
                id="recipeFilterSelection" 
                name="dietPreference"
                options={dietOptions}>
                </Select>

                <label htmlFor="userInput">Choose your meal type: </label>
                <Select 
                defaultValue={unselectedOptions}
                isMulti
                onChange={handleDishTypeSelection}
                value={selectedDishType}
                id="recipeFilterSelection" 
                name="dishTypePreference"
                options={dishTypeOptions}> 
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
                </div>
            <button className="submitButton" type="submit">Find me a recipe!</button>
            </form>
        </div>
        
        </>
    );
}

export default UserInput;