import React from 'react'
import {Link} from 'react-router-dom'
import { AiFillPhone } from "react-icons/ai";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
        <nav className='containerNavBar'>
            <Link to='/DigitalCelu/' className='iconNavBar'>
                <AiFillPhone/>
                DigitalCelu
            </Link>
            <div className='linkNavBar'>
                    <Link to={'/DigitalCelu/'}>Inicio</Link>
                    <Link to={'/DigitalCelu/category/Samsung/'}>Samsung</Link>
                    <Link to={'/DigitalCelu/category/Motorola/'}>Motorola</Link>
                    <Link to={'/DigitalCelu/category/Iphone/'}>Iphone</Link>
                    <Link to={'/DigitalCelu/category/Tablet/'}>Tablet</Link>
            </div>
            <div>
            <CartWidget/>
            </div>
        </nav>
        </>
    )
}

export default NavBar