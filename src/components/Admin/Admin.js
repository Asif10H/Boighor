import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const axios = require('axios');
const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const productData = {
            name: data.name,
            authorName: data.authorName,
            addPrice: data.addPrice,
            imageURL: imageURL
        }
        const url = `http://localhost:6066/addProduct`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response'))
    };

    const handleImageUpload = product => {
        console.log(product.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'c5039574c46502e4a3f28eaf9d81b0c0');
        imageData.append('image', product.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input class="form-control" name="name" defaultValue="Book Name" ref={register} />
                        <br></br>
                        <input class="form-control" name="authorName" defaultValue="Author Name" ref={register} />
                        <br></br>
                        <input class="form-control" name="addPrice" defaultValue="Add Price" ref={register} />
                        <br></br>
                        <input class="form-control" name="exampleRequired" type="file" onChange={handleImageUpload} />
                        <br></br>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;