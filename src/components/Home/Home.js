import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:6066/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    products.length === 0 && <div className="spinner-border text-dark" role="status">
                        <span className="sr-only"></span>
                    </div>
                }
                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>

    );
};

export default Home;