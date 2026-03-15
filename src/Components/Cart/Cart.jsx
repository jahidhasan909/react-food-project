
import React from 'react';

const Cart = ({c}) => {
    return (
        <div>
          <img className='img2' src={c.strMealThumb} alt="" />
            <h3>Name: {c.strMeal}</h3>
            <p>Country: {c.strArea}</p>
        </div>
    );
};

export default Cart;