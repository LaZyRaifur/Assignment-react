import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const cart = props.cart;
    console.log(cart);
    
    let total = 0;
    for (let i = 0; i < cart.length;i++){
        const product = cart[i];
        total = total + product.price;
        
    }
    return (
        <div className="cart-style">
        
        <h4>Order Summary</h4>
    <p>Items Order: {cart.length}</p>
    <p>Product price: ${total}</p>

    <button className="btn-style">Total Enrollment: {cart.length}</button>
        
        </div>
    );
};

export default Cart;