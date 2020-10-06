import './Product.css';
import React from 'react';
import Cart from '../Cart/Cart';

const Product = (props) => {
    const {course_name,description,name,price,img} = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" className="img-style"/>
            </div>
            
        <div className="container">
           
            <h1 className="product-name">{course_name}</h1>
    <p><small>{description}</small></p>
            <p>{name}</p>
            <p><small>${price}</small></p>
            <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}>Enroll now</button>
            
           
          
        </div>
        </div>
    );
};

export default Product;