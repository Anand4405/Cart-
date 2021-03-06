import React from 'react'
import CartItem from './CartItem'
const Cart = (props)=>{
   
       const {products} =props;
        return (
            <div className = 'cart' >
             
                {products.map((product)=>{
                    return (

                    <CartItem 
                    product = {product} 
                    key = {product.id} 
                    onIncreaseqty = {props.onIncreaseqty} 
                    onDecreaseqty = {props.onDecreaseqty} 
                    onDeleteqty = {props.onDeleteqty}
                    />
                    )
                })}
              
            
             </div>
        );
    
}

export default Cart;