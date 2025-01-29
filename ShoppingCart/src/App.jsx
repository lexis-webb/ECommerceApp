import './App.scss'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Card from './components/Card/Card';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  

  return (
    <div>
      <Header />
      <Products />
      <Cart />
      <Card />
    </div>
  )
}

export default App
