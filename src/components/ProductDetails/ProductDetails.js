import React from 'react';
import { useParams } from 'react-router';
const ProductDetails = () => {
    const {_id} = useParams();
    console.log(_id);
    return (
        <div>
            <h1>This is product details.</h1>
        </div>
    );
};

export default ProductDetails;