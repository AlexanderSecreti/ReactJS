import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const CartWidget = () => {
    const {getTotalItemCount} = useContext(CartContext)
    return (
        <div className='cart'>
            <Link to={"/cart"}>
            <button>
            <AiOutlineShoppingCart/>
            </button>
            </Link>
            <span>{getTotalItemCount()}</span>
        </div>
    )
}

export default CartWidget