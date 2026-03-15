import React from 'react';
import './Food.css'

const Food = ({ food, addtoCart }) => {
    return (
        <div className='food-container'>
            <img className='img2' src={food.strMealThumb} alt="" />
            <h3>Name: {food.strMeal}</h3>
            <p>Country: {food.strArea}</p>
            <button onClick={() => addtoCart(food)} className='button'>Add To cart</button>
        </div>
    );
};

export default Food;