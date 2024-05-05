import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { removeProduct } from '../features/todo/productSlice'

function Card() {
    
    const dispatch=useDispatch()
    const carts=useSelector(store=>store.cart)
    const productsremove=(id)=>{
          dispatch(removeProduct(id))
    }


  return (
    <div className="product-list">
        {carts.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => productsremove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
  )
}

export default Card