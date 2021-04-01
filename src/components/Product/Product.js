import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, authorName, addPrice, imageURL, _id } = props.product;
    console.log(name, authorName, addPrice, imageURL, _id);

    return (
       
            <div className="col-sm-12  col-md-3 col-lg-3 mt-5">
                <div className="card h-100">
                    <img src={imageURL} className="card-img-top img-fluid w-100 h-50" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-subtitle mb-2 text-muted">{authorName}</p>
                        <div className="d-flex justify-content-between w-100  ">
                            <p className="card-text">${addPrice}</p>
                            <Link to="/" className="card-link btn btn-primary">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        

    );
};

export default Product;