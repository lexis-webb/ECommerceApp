import { useState } from 'react';
import './App.scss';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const addToCart = (item) => {
    let isProductPresent = false;
    cart.forEach(product => {
      if(item.id === product.id) {
        isProductPresent = true;
      }
    });

    if(isProductPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <>
      <Header size={cart.length} setShow={setShow} />
      <Products addToCart={addToCart} />
      <Cart />
      
      {warning && <div className='warning'>Product is already in cart</div>}
    </>
  );
}

export default App;

