import React from 'react';
import UserProduct from '../../Helpers/Data/UserProductData';
import './MyProducts.scss';

class MyProducts extends React.Component {
    state = {
      product: [],
    }

    getMyProducts = () => {
      UserProduct.getMyProducts()
        .then(res => this.setState({ MyProducts: res }));
    }

    componentDidMount() {
      this.getMyProducts();
    }

    render() {
      const { product } = this.props;
      return (
            <div className="ProductCard col-4">
              <div className="card">
                <div className="card-body">
                <p className="card-title">{product.name}</p>
                <img src={product.imageUrl} className="card-img" alt="..." />


                </div>
              </div>
            </div>
      );
    }
}
export default MyProducts;
