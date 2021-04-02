import React from 'react';

const Orders = (props) => {
    //const { name, addPrice } = props.product;
    console.log('props', props);
    return (
        <div className="container">
            ,<h1>Checkout</h1>
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
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Orders;