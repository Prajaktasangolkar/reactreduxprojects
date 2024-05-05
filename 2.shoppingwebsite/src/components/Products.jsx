import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './products.css'
import {useDispatch,useSelector} from 'react-redux'
import { addProduct } from '../features/todo/productSlice';


function Products() {
    const [products,setProducts]=useState([])
    const carts=useSelector(state=>state.cart)
    const dispatch=useDispatch()
    useEffect(() => {
        // Fetching data from an API
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setProducts(data));
      }, []);

      const productsadd=(product)=>{
        dispatch(addProduct(product))
      }


  return (
    <div>
      <div style={{display:'flex',padding:'12px 12px 12px 12px'}}>
      <h2>Products</h2>
      <h2 style={{position:'absolute',right:'82px'}}>
        <Link to='/card'>My bag {carts.length}</Link>
      </h2>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => productsadd(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products