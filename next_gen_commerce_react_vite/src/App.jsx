// src/App.jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePageDesktop from './pages/HomePageDesktop';
import HomePageMobile from './pages/HomePageMobile';

function App() {
  return (
    <div >
      <Header />
      <div >
        <Switch>
          <Route path="/products" component={HomePageDesktop} />
          <Route path="/" component={HomePageMobile} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
