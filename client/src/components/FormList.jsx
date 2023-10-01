import { useState, useEffect } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom';

const FormList = (props) => {
    const {products, setProducts} = props;

    useEffect(() => {
        axios.get("http://localhost:4500/products")
        .then((res)=>{
        //console.log(res.data);
            setProducts(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <div>
            {
            products.map((product) => (
                <div key={product._id}>
                    <h2>Title: <Link to={`/products/${product._id}`}> {product.title}</Link></h2>
                    <p>Price: {product.price}</p>
                    <p>Desc: {product.description}</p>
                </div>
            ))
            }
        </div>
    )

}

export default FormList;