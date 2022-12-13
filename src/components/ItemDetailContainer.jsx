import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../mock/products'
import ItemCount from './ItemCount'
const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState([])
    useEffect(() => {
        getItemDetail()
            .then(response => setItemDetail(response))
    }, [])
    const { id } = useParams()

    const getItemDetail = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.find((item) => item.id === parseInt(id)))
            }, 2000);
        })
    }

    return (
        <>
            <div className="itemCard">
                <img className='itemcard_img'src={itemDetail.pictureUrl} alt={itemDetail.title} />
                <h1>{itemDetail.id} - {itemDetail.title}</h1>
                <p class="price">${itemDetail.price}</p>
                <p>{itemDetail.description}</p>
                <h4 >Stock: {itemDetail.stock}</h4>
                <ItemCount stock={itemDetail.stock}/>
            </div>
        </>
    )
}

export default ItemDetailContainer