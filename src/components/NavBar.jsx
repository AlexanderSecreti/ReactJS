import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillPhone } from "react-icons/ai";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
        <nav className='containerNavBar'>
            <Link to='/' className='iconNavBar'>
                <AiFillPhone/>
                DigitalCelu
            </Link>
            <div className='linkNavBar'>
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/category/Samsung/'}>Samsung</Link>
                    <Link to={'/category/Motorola/'}>Motorola</Link>
                    <Link to={'/category/Iphone/'}>Iphone</Link>
                    <Link to={'/category/Tablet/'}>Tablet</Link>
            </div>
            <div>
            <CartWidget/>
            </div>
        </nav>
        </>
    )
}

export default NavBar