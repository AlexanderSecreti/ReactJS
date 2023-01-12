import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Loader from './Loader';

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    const getProducts = async () => {
        const db = getFirestore()
        const collectionRef = id ? query(collection(db, "productos"), where("category", "==", id)) : collection(db, "productos")
        const snapshot = await getDocs(collectionRef)
        setTimeout(() => {
            setProductList(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
            setLoading(false)
        }, 2000);
    }
    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => setProductList(res))
    }, [id]);

    return (
        <>
            <div className='itemListContaier'>
                <h2>{greeting}</h2>
                {loading ? <div className='loader'><Loader /></div> : <ItemList productList={productList} />}
            </div>
        </>
    )
}

export default ItemListContainer