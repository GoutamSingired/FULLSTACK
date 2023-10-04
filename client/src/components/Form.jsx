import { useState, useEffect } from "react"
import axios from 'axios'

const Form = (props) => {
    const {products, setProducts} = props;

    const [title, setTitle] = useState(" ")
    const [price, setPrice] = useState(" ")
    const [description, setDescription] = useState(" ")

    const createProduct = (e) => {
        e.preventDefault();
        
        const newProduct = {title, price, description }
        //console.log(newProduct)
        axios.post('http://localhost:4500/product/new', {newProduct})
            .then(res => {
                //console.log(res)
                setProducts([...products, res.data])
            })
            .catch(err => {console.log("The error is", err)})
        setTitle(" ");
        setPrice(" ");
        setDescription(" ");
    }

    return(
        <>
            <form onSubmit={createProduct}>
                <div>
                    <label>Title:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price:</label>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text"  value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description:</label>&nbsp;
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <input type="submit" value="Create"></input>
            </form>
        </>
    )

}

export default Form;