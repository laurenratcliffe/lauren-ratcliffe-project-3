// UserInput.js

import { useState } from "react";
import Select from 'react-select';


// UserInput.js 
// - create a filtering component to collect user inputs (dietary restrictions, meal type, cuisine type)
// - create handleUserInputChange function to handle filter choices by user
// - call the getRecipes function and pass the user inputs as arguments when the user submits the form
// - pass fetched/filtered recipes back to app.js and then to DisplayRecipes.js as props

const UserInput = () => {
        const [userSelection, setUserSelection] = useState([]);
        const handleUserSelection = (event) => { 
            setUserSelection(event.target.value);
        }

    console.log(userSelection);

    const handleUserInputChange = () => { 

    }

    const dietOptions = [
        { value: 'dairy-free', label: 'Dairy-Free' },
        { value: 'fodmap-free', label: 'FODMAP-Free' },
        { value: 'gluten-free', label: 'Gluten-Free' },
        { value: 'keto-friendly', label: 'Keto-Friendly' },
        { value: 'low-sugar', label: 'Low-Sugar' },
        { value: 'paleo', label: 'Paleo' },
        { value: 'peanut-free', label: 'Peanut-Free' },
        { value: 'vegan', label: 'Vegan' },
        { value: 'vegetarian', label: 'Vegetarian' },
    ]

    const mealOptions = [
        { value: 'balanced', label: 'Balanced' },
        { value: 'highProtein', label: 'High-Protein' },
        { value: 'lowCarb', label: 'Low-Carb' },
        { value: 'lowFat', label: 'Low-Fat' },
        { value: 'lowSodium', label: 'Low-Sodium' },
    ]

    const mealTypeOptions = [
        { value: 'breakfast', label: 'Breakfast' },
        { value: 'lunch', label: 'Lunch' },
        { value: 'dinner', label: 'Dinner' },
        { value: 'snack', label: 'Snack' },
        { value: 'drinks', label: 'Drinks' },
    ]


    const cuisineOptions = [
        { value: 'american', label: 'American' },
        { value: 'asian', label: 'Asian' },
        { value: 'french', label: 'French' },
        { value: 'greek', label: 'Greek' },
        { value: 'italian', label: 'Italian' },
        { value: 'mexican', label: 'Mexican' },
        { value: 'middleEastern', label: 'Middle Eastern' },
    ]

    return (
        <>
        <h2>Choose your preferences</h2>
        <div className="userInputForm">
            <form onClick={handleUserSelection}>
                <label htmlFor="userInput">Choose your diet preferences: </label>
                <Select 
                value={userSelection}
                onChange={handleUserSelection}
                id="dietPreference" 
                name="dietPreference"
                options={dietOptions}> 
                </Select>

                <label htmlFor="userInput">Choose your meal preferences: </label>
                <Select 
                value={userSelection}
                onChange={handleUserSelection}
                id="mealPreference" 
                name="mealPreference"
                options={mealOptions}> 
                </Select>

                <label htmlFor="userInput">Choose your meal type: </label>
                <Select 
                value={userSelection}
                onChange={handleUserSelection}
                id="mealTypePreference" 
                name="mealTypePreference"
                options={mealTypeOptions}> 
                </Select>

                <label htmlFor="userInput">Choose your cuisine: </label>
                <Select 
                value={userSelection}
                onChange={handleUserSelection}
                id="mealTypePreference" 
                name="mealTypePreference"
                options={cuisineOptions}> 
                </Select>
            </form>
        </div>
        </>
    );
}

export default UserInput;