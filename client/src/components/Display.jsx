import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";

const Display = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:4500/products/" + id)
            .then(res => {
                console.log(res.data),
                setProduct(res.data)
            })
            .catch(err => console.log("The error message is", err))
    },[])

    return(
        <div>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default Display;