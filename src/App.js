import React, { useEffect, useState } from 'react';
import 'swiper/swiper.min.css';
import { Switch, Route } from 'react-router-dom';

import Error from './pages/Error';

import './App.css';
import Home from './pages/home/Home';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import { ConText } from './context/DataContext';
import Product from './pages/product/Product';


const App = () => {
  return (
    <>
      <ConText>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:pid" component={Product} />

         
          <Route component={Error} />
        </Switch>
        <Footer />
      </ConText>
    </>
  );
};

export default App;
