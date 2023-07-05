import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes ,Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Contact from './component/Contact';
import About from './component/About';
import Login from './component/Login';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:id' element={<Product/>} />
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
