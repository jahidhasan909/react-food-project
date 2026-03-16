import React, { useState } from 'react';
import './Food.css'


const Food = ({ food, addtoCart }) => {

    const [isAddtoCart, setAddtoCart] = useState(false);
    const handletoCart = () => {
        addtoCart(food)
        setAddtoCart(true)
    }

    return (
        <div className={`food-container ${isAddtoCart ? 'addCartbgColor' : ''}`}>
            <img className='img2' src={food.strMealThumb} alt="" />
            <h3 className='h3'>Name: {food.strMeal}</h3>
            <p>Country: {food.strArea}</p>
            <button onClick={handletoCart} className='button'>Add To cart</button>
        </div>
    );
};

export default Food;