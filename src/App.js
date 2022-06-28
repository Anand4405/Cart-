import React from 'react';
import './App.css';
// import CartItem from './CartItem'
import Cart from './Cart'
import NavBar from './NavBar';
class App extends React.Component {

  constructor() {
    super();
    this.state =
   {
       products:[
           {
            price: 99,
            title:'Watch',
            qty:1,
            img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id:1
           },
           {
            price: 999,
            title:'Mobile Phone',
            qty:10,
            img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            id:2
           },
           {
            price: 9999,
            title:'Laptop',
            qty:5,
            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
            id:3
           }
        ]
    }
    

}

    handleincreaseqty = (product) =>{

    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        products:products
    })
    }

    handledecreaseqty = (product) =>{

    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty ===0){
        return;
    }
    products[index].qty -=1;
    this.setState({
        products:products
    })
    }

    handleDeleteproduct = (id)=>{
    const {products} = this.state;
    const items = products.filter((item)=> item.id !== id) // this is not deleted array on products
    this.setState({
        products:items
    })
   }

   getCartCount = ()=>{
     const {products} = this.state;
     let count =0;
     products.forEach((product)=>{
       count += product.qty;
     })
     return count;
   }
getTotal = ()=>{
  const {products} = this.state;
  let total =0
  products.map((product)=>{
    total += (product.qty*product.price)
  })
  return total;
}
  render(){
    const {products} = this.state;
  return (
    <div className="App">
      
    <NavBar count = {this.getCartCount()} />
    <Cart
    products = {products}
     onIncreaseqty = {this.handleincreaseqty} 
     onDecreaseqty = {this.handledecreaseqty} 
     onDeleteqty = {this.handleDeleteproduct}
    
    />
    <div style = {{padding:20,fontSize:25, fontWeight:600}}> Total:{this.getTotal()} </div>
      </div>
  );
  }
}

export default App;
