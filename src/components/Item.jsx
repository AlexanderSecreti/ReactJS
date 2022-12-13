import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ id, title, pictureUrl }) => {
    return (
        <>
        <div className="itemCard">
            <img className='itemcard_img' src={pictureUrl} alt={title} />
            <h1>{id} - {title}</h1>
            <Link to={`/DigitalCelu/item/${id}`}>
                <button className='item_button'>Ver más detalles</button>
            </Link>
        </div>
        </>
    )
}

export default Item