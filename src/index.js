import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Reservations from './components/Reservations';
import About from './components/About';
import Login from './components/Login';
import Order from './components/Order';
import Menu from './components/Menu';

const Routing = () => {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
      <Footer/>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
