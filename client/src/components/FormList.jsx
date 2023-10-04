import { useState, useEffect } from "react"
import axios from 'axios'
import {Link} from 'react-router-dom';

const FormList = (props) => {
    const {removeFromDom, products, setProducts} = props;

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

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:4500/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
            products.map((product) => (
                <div key={product._id}>
                    <h2>Title: <Link to={`/products/${product._id}`}> {product.title}</Link></h2>
                    <p>Price: {product.price}</p>
                    <p>Desc: {product.description}</p>&nbsp;
                    <Link to={"/products/edit/" + product._id}>Edit</Link> &nbsp;&nbsp;&nbsp;
                    <button onClick={(e)=>{ if (window.confirm('Are you sure, you wish to delete this product?')) deleteProduct(product._id)}} style={{backgroundColor: 'red'}}>Delete</button>
                </div>
            ))
            }
        </div>
    )

}

export default FormList;