import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Home from '../Components/Home/Home';
import Products from '../Components/Products/Products';
import Navbar from '../Components/MyNavbar/MyNavbar';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';
import SingleProduct from '../Components/SingleProduct/SingleProduct';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';


class App extends React.Component {
  state = {
    authenticated: false,
  }

  setAuthenticated = () => {
    this.setState({ authenticated: true });
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <BrowserRouter>
        <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Products} path="/Products" />
        <Route exact component={Register} path="/Register" />
        <Route exact path="/Login" component={(props) => <Login {...props} setAuthenticated={this.setAuthenticated}/>} />
        <Route exact path="/single/:id" component={SingleProduct}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
