import React, { useState } from 'react'
import axios from 'axios';
import Form from '../components/Form'
import FormList from '../components/FormList'

const Main = () => {
    const [products, setProducts] = useState([])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <div>
            < Form products={products} setProducts={setProducts} />
            <hr/>
            < FormList products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main;