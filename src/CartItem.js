import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title:'Mobile Phone',
            qty:1,
            img: ''
        }
        this.testing()

    }

    increaseQty = () =>{
        // console.log(this.state);
        // we get setState function from React.Component
        // this.setState({
        //     qty:this.state.qty + 1 // this is one way to increase qty
        // });
// If previous state then use this
        this.setState((prevState)=>{
           return {
               qty:prevState.qty +1
            }
        });
    }

    decreaseQty = () =>{
    const {qty} = this.state
    if(qty===0){
        return;
    }
        this.setState((prevState)=>{
           return {
           
               qty:prevState.qty -1
            }
        },()=>{
            // we get to know our data updated
            console.log(this.state);
        });
    }
    
    testing(){
        const promise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve('done');
            }, 5000);
        })

        promise.then(()=>{
            this.setState({qty:100})
            // setState acts like a synchronous call
            console.log('state',this.state);
        })
    }


    render(){
      const  {price,title,qty} = this.state
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
                    onClick = {this.increaseQty} 
                    />
                    <img 
                    alt = "decrease" 
                    className = 'action-icons' 
                    onClick = {this.decreaseQty}
                    src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />

                    <img 
                    alt = "delete" 
                    className = 'action-icons' 
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