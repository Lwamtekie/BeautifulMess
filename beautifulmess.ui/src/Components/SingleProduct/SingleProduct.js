import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../../Helpers/Data/ProductData';

import './SingleProduct.scss';

class SingleProduct extends React.Component {
 state = {
   product: {},
 }

 getProduct = () => {
   const productId = this.props.match.params.id;
   ProductData.getSingleProduct(productId)
     .then(productPromise => this.setState({ product: productPromise.data }))
     .catch(err => (err));
 }

 componentDidMount() {
   this.getProduct();
   console.error('product');
 }


 render() {
   const { product } = this.state;
   const ProductsLink = '/products';
   return (
    <div className="ProductCard col-4">
      <div className="card">
        <div className="card-body">
        <p className="card-title">{product.name}</p>
        <p className="card-title">${product.price}</p>
        <p className="card-title">{product.store}</p>
        <img src={product.imageUrl} className="card-img" alt="..." />
        <Link className="btn btn-success" to={ProductsLink}>Return</Link>


        </div>
      </div>
    </div>
   );
 }
}

export default SingleProduct;
