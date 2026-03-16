import React, { use, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';


const Foods = ({ FoodData }) => {
    const AllFood = use(FoodData);
    const AllMeals = AllFood.meals;


    const [foodCart, setFoodCart] = useState([]);


    const addtoCart = (foodData) => {
        setFoodCart([...foodCart, foodData])
        
    }

    const handleOder = () => {
        setFoodCart([]);
        toast.success('Your Oder Successfully Done')
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
                    foodCart.map(c => <Cart c={c}></Cart>)
                }
                <button onClick={handleOder} className='button1'>Click Oder</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Foods;