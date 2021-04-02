import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Orders from '../Orders/Orders';

const ProductDetails = () => {
    const { _id } = useParams();
    
    const [productDetail, setProductDetail] = useState({});
    const [totalProduct, setTotalProduct] = useState([]);

   
    useEffect(() => {
        fetch(`http://localhost:6066/products/${_id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data))
            setTotalProduct([...totalProduct, productDetail])
    }, [])
    console.log(totalProduct);
    return (
        <div className="container">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productDetail.name}</td>
                        <td>1</td>
                        <td>৳{productDetail.addPrice}</td>
                    </tr>
                </tbody>
            </table>
            <Link to={"/orders"} className="card-link btn btn-primary">Checkout</Link>
            
        </div>
    );
};

export default ProductDetails;