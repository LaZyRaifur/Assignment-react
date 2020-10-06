import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import data from '../data/data.json';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [product,setProduct] = useState([]);
    const [cart,setCart]= useState([]);
    const handleAddProduct = (product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
        
        
    }

    useEffect(()=>{
            setProduct(data);
            
    },[])

    // console.log(data);

    return (
        <div className="shop-container">
    
           <div className="product-container">
           <ul>
               {
                   product.map(pd=><Product product={pd} handleAddProduct={handleAddProduct}></Product>)
               }
           </ul>
           </div>
           <div className="card-container">
               <Cart cart={cart}> 
               </Cart>
           </div>
        </div>
    );
};

export default Shop;