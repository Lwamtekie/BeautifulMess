import React from 'react';
import userProductData from '../../Helpers/Data/UserProductData';
import UserData from '../../Helpers/Data/UserData';
import MyProduct from '../MyProducts/MyProducts';
import './User.scss';


class User extends React.Component {
  state = {
    myProducts: [],
  }

  getMyProducts = () => {
    const userSessionInfo = UserData.getSessionUser();
    userProductData.getUserProducts(userSessionInfo.id)
      .then(myProducts => this.setState({ myProducts }))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.getMyProducts();
  }

  deleteUserProduct = (userProductId) => {
    userProductData.deleteUserProduct(userProductId)
      .then(() => this.getMyProducts())
      .catch(err => (err));
  }


  render() {
    const printMyProducts = this.state.myProducts.map(product => <MyProduct key={product.id}
          product={product}
          getMyProducts={this.getMyProducts}
          deleteUserProduct={this.deleteUserProduct}
    />);
    return (
          <div className="UserPage">
              <h2>FavoriteProducts</h2>
                  {printMyProducts}
              <div className="user">
              </div>
          </div>
    );
  }
}


export default User;
