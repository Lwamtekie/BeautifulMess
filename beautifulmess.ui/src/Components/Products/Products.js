import React from 'react';
import getProducts from '../../Helpers/Data/ProductsData';

import './Product.scss';

class Home extends React.Component {
  state = {
    Products: [],
  }

  componentDidMount() {
    getProducts()
      .then((res) => this.setState({ Products: res }));
  }

  render() {
    const { Products } = this.state;
    const printProducts = Products.map((product) => <ProductCard
        product={product}
      />);
    return (
      <>
        <h1>Home</h1>
    </>
     <div className="Product">
        <div className="home-Center">
          <h4>Product Categories</h4>
          <ul>
            <li>Industrial</li>
            <li>FarmHouse</li>
            <li>Bohemian</li>
          </ul>
        </div>
        <div className="Product-main">
          <h1>Products</h1>
          {printProducts}
        </div>
      </div>
    );
  }
}
Export defualt Product;
