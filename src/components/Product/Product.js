import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, authorName, addPrice, imageURL, _id } = props.product;

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 m-3 p-3" style={{ width: '18rem' }}>
            <div className="card h-100">
                <img src={imageURL} className="card-img-top img-fluid" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-subtitle mb-2 text-muted">{authorName}</p>
                    <div className="d-flex justify-content-between">
                        <p className="card-text">৳{addPrice}</p>
                        <Link to={`/product/${_id}`} className="card-link btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Product;