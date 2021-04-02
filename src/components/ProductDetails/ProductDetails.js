import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { _id } = useParams();
    const [productDetail, setProductDetail] = useState({});
    useEffect(() => {
        fetch(`http://localhost:6066/products/${_id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data));
    }, [])
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
                        <td>${productDetail.addPrice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductDetails;