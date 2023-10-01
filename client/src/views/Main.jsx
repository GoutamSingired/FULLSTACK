import React, { useState } from 'react'
import axios from 'axios';
import Form from '../components/Form'
import FormList from '../components/FormList'

const Main = () => {
    const [products, setProducts] = useState([])

    return (
        <div>
            < Form products={products} setProducts={setProducts} />
            <hr/>
            < FormList products={products} setProducts={setProducts} />
        </div>
    )
}

export default Main;