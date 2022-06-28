import React from 'react';

class CartItem extends React.Component{
    
    render(){
        console.log('this.props',this.props);
      const  {price,title,qty} = this.props.product;
      const {product,onIncreaseqty,onDecreaseqty,onDeleteqty} = this.props;
      return (
        <div className='cart-item'>
            <div className = 'left-block'> 
                <img style = {styles.image}/>
            </div>
            <div className = 'right-block'> 
                <div style={{fontSize:25}}>{title} </div>
                <div style={{color:'#777'}} >Rs: {price} </div>
                <div style={{color:'#777'}}>Qty: {qty} </div>
                <div className = 'cart-item-actions'>
                   
                    <img 
                    alt = "increase" 
                    className = 'action-icons' 
                    src="https://cdn-icons-png.flaticon.com/512/992/992651.png" 
                    // onClick = {this.increaseQty.bind(this)} 
                    onClick = {()=> onIncreaseqty(product)} 
                    />
                    <img 
                    alt = "decrease" 
                    className = 'action-icons' 
                    onClick = {()=> onDecreaseqty(product)}
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />

                    <img 
                    alt = "delete" 
                    className = 'action-icons' 
                    onClick = {()=> onDeleteqty(product.id)}
                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                     </div>

            </div>
        </div>
      );
    }
}

const styles  = {
    image:{
        height:110,
        width:110,
        borderRadius:20,
        background:'#777'


    }
}


export default CartItem;