import React from 'react';
import './App.css';
// import CartItem from './CartItem'
import Cart from './Cart'
import NavBar from './NavBar';
// import * as firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
class App extends React.Component {
  constructor(){
    super();
    this.state =
   {
       products:[],
       loading:true
    }
    this.db = firebase.firestore()
  }

    componentDidMount(){
      // firebase
      //     .firestore()
      //     .collection('products')
      //     .get()
      //     .then((snapshot) =>{
      //       console.log(snapshot)

      //       snapshot.docs.forEach((doc)=>{
      //         console.log(doc.data())
      //       });
      //       const products = snapshot.docs.map((doc)=>{
      //         const data = doc.data();
      //         data['id'] = doc.id; // because particular document has id but in doc we dont have any field of id
      //         return data; // doc.data() returns object 
      //       })

      this.db
          .collection('products')
          // .where('price','>=',999)
          // .where('title','==','Camera')
          .orderBy('price','desc') // asc for asceonding and asc is by default
          
          .onSnapshot((snapshot) =>{ // this automatically update values updated on firebase . we dont need to fresh when data is updated
            console.log(snapshot)

            snapshot.docs.forEach((doc)=>{
              console.log(doc.data())
            });
            const products = snapshot.docs.map((doc)=>{
              const data = doc.data();
              data['id'] = doc.id; // because particular document has id but in doc we dont have any field of id
              return data; // doc.data() returns object 
            })


            this.setState({
              products:products,
              loading:false
            })

          })
    }



    handleincreaseqty = (product) =>{

    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].qty +=1;
    // this.setState({
    //     products:products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty+1
      })
      .then(()=>{
        console.log('Document added successfully')
      })
      .catch((err)=>{
        console.log("error : ",err);
      })

    }

    handledecreaseqty = (product) =>{

    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty ===0){
        return;
    }
    // products[index].qty -=1;
    // this.setState({
    //     products:products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1
      })
      .then(()=>{
        console.log('Document added successfully')
      })
      .catch((err)=>{
        console.log("error : ",err);
      })

    }

    handleDeleteproduct = (id)=>{
    // const {products} = this.state;
    // const items = products.filter((item)=> item.id !== id) // this is not deleted array on products
    // this.setState({
    //     products:items
    // })

    const docRef = this.db.collection('products').doc(id);
      docRef
      .delete()
      .then(()=>{
        console.log('deleted successfully')
      })
      .catch((err)=>{
        console.log("error : ",err);
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
  products.forEach((product)=>{
    total += (product.qty*product.price)
  })
  return total;
}

addProduct = ()=>{
  this.db
    .collection('products')
    .add({
      img: '',
      price:5555,
      qty:2,
      title:'washing machine'
    })
    .then((docRef)=>{
      console.log('product has been added' ,docRef)
    })
    .catch((err)=>{
      console.log('error : ',err);
    })
}

  render(){
    const {products,loading} = this.state;
  return (
    <div className="App">
      
    <NavBar count = {this.getCartCount()} />
    {/* <button onClick={this.addProduct} style = {{pading:20 , fontSize:20}} > Add a product </button> */}
    <Cart
    products = {products}
     onIncreaseqty = {this.handleincreaseqty} 
     onDecreaseqty = {this.handledecreaseqty} 
     onDeleteqty = {this.handleDeleteproduct}
    
    />
    {loading && <h1> Loading Products... </h1>}

    <div style = {{padding:20,fontSize:25, fontWeight:600}}> Total:{this.getTotal()} </div>
      </div>
  );
  }
}

export default App;
