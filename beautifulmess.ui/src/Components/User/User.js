import React from 'react';
import UserProduct from '../../Helpers/Data/UserProductData';
import MyProducts from '../MyProducts/MyProducts';
import './User.scss';


class User extends React.Component {
  state = {
    MyProducts: [],
  }

  getMyProducts = () => {
    UserProduct.getMyProducts()
      .then(res => this.setState({ MyProducts: res }));
  }

  componentDidMount() {
    this.getMyProducts();
  }

  render() {
    const printMyProducts = this.setState.MyProducts.map(product => <MyProducts key={product.id}
          product={product}
          getMyProducts={this.getMyProducts}
    />);
    return (
          <div className="UserPage">
              <h2>FavoriteProducts</h2>
                  {printMyProducts}
              <div className="user">
                {printMyProducts}
              </div>
          </div>
    );
  }
}


export default User;
