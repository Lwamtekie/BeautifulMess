import React from 'react';
import getProducts from '../../Helpers/Data/ProductData';
import ProductCard from '../ProductCard/ProductCard';
import './Products.scss';


class Product extends React.Component {
  state = {
    Products: [],
  }

  componentDidMount() {
    getProducts()
      .then(res => this.setState({ Products: res }));
    console.error('product');
  }

  render() {
    const { Products } = this.state;
    const printProducts = Products.map(product => <ProductCard
        product={product}
      />);
    return (
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
          {printProducts}
        </div>
      </div>
    );
  }
}
export default Product;
