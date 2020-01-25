import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Home from '../Components/Home/Home';
import Products from '../Components/Products/Products';
import Navbar from '../Components/MyNavbar/MyNavbar';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <BrowserRouter>
        <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Products} path="/Products" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
