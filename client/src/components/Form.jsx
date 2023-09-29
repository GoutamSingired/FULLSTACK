import { useState, useEffect } from "react"
import axios from 'axios'

const Form = () => {
    const [title, setTitle] = useState(" ")
    const [price, setPrice] = useState(" ")
    const [description, setDescription] = useState(" ")

    const createProduct = (e) => {
        e.preventDefault();
        
        const newProduct = {title, price, description }
        console.log(newProduct)
        axios.post('http://localhost:4500/product/new', {newProduct})
            .then(res => {
                console.log(res)
            })
            .catch(err => {console.log("The error is", err)})
        setTitle(" ");
        setPrice(" ");
        setDescription(" ");
    }

    // useEffect(() => {
        
    // },[])

    return(
        <>

            <form onSubmit={createProduct}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text"  value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <input type="submit" value="Create"></input>
            </form>

        </>
    )

}

export default Form;