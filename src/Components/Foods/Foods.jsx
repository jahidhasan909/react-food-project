import React, { use, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'


const Foods = ({ FoodData }) => {
    const AllFood = use(FoodData);
    const AllMeals = AllFood.meals;


    const [foodCart, setFoodCart] = useState([]);


    const addtoCart = (foodData) => {
        setFoodCart([...foodCart, foodData])
    }


    return (
        <div className='main-container'>
            <div className='Foods-container'>
                {
                    AllMeals.map((food, index) => <Food key={index} food={food} addtoCart={addtoCart}></Food>)
                }

            </div>
            <div className='food-cart'>
                <h1>Food Cart</h1>
                {
                    foodCart.map(c => <h3>{c.strMeal}</h3>)
                }
                <button className='button1'>Click Oder</button>
            </div>
        </div>
    );
};

export default Foods;