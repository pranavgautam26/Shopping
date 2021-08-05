import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Product } from '../models/product';
import NavBar from './NavBar';
import ProductDashboard from '../../features/products/dashboard/ProductDashboard';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  function onAdd(product: Product){
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty +1} : x));
    }
    else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  };

  function onRemove(product: Product){
    const exist = cartItems.find(x => x.id === product.id);
    if(exist){
      if(exist.qty ===1){
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      }else{
        setCartItems(cartItems.map((x) =>
        x.id === product.id ? {...exist, qty: exist.qty-1}:x
        ));
      }
    }
    
  };

  useEffect(() => {
    axios.get<Product[]>('http://localhost:5000/api/products').then(response => {
      setProducts(response.data);
    })
  }, [])


  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
      <ProductDashboard products={products} cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </Container>
        
    </>
  );
}

export default App;
