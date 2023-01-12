import React from 'react'
import { AiFillPhone, AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer className='footerContainer'>
                <div className='footerUl'>
                <Link to={'/'}>Inicio</Link>
                    <Link to={'/category/Samsung/'}>Samsung</Link>
                    <Link to={'/category/Motorola/'}>Motorola</Link>
                    <Link to={'/category/Iphone/'}>Iphone</Link>
                    <Link to={'/category/Tablet/'}>Tablet</Link>
                </div>
                <div className='footerRedes'>
                    <ul className='wrapper'>
                        <li className='icon facebook'><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp /></a><span className='tooltip'>Whatsapp</span></li>
                        <li className='icon instagram'><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a><span className='tooltip'>Instagram</span></li>
                        <li className='icon twitter'><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /></a><span className='tooltip'>Twitter</span></li>
                    </ul>
                </div>
                <div className='logoFooter'>
                <AiFillPhone />
                    DigitalCelu
                </div>
            </footer>
        </>
    )
}

export default Footer