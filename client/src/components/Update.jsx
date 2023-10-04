import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4500/products/" + id)
            .then(res => {
                //console.log(res.data.title)
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err =>  console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();

        axios.patch("http://localhost:4500/products/" + id, {title, price, description})
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title</label><br />
                    <input type="text"  value={title} onChange={(e) => setTitle(e.target.value) } />
                </div>
                <div>
                    <label>Price</label><br />
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value) } />
                </div>
                <div>
                    <label>Description</label><br />
                    <input type="text"  value={description} onChange={(e) => setDescription(e.target.value) } />
                </div>
                <input type="submit" />
            </form>
        </div>
    )

}
export default Update;