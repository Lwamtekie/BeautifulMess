import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../../Helpers/Data/ProductData';
import UserProductData from '../../Helpers/Data/UserProductData';
import UserData from '../../Helpers/Data/UserData';


import './SingleProduct.scss';

class SingleProduct extends React.Component {
 state = {
   product: {},
 }

 addMyProducts = () => {
   const userSessionInfo = UserData.getSessionUser();
   console.error('test', userSessionInfo);
   const currentProductid = this.state.product.id;
   const myProduct = {
     userid: userSessionInfo,
     productid: currentProductid,
   };

   UserProductData.addMyProducts(myProduct)
     .then(() => this.props.history.push('/User'))
     .catch(err => (err));
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
        <button className="btn btn-success" onClick={this.addMyProducts}>Add</button>


        </div>
      </div>
    </div>
   );
 }
}

export default SingleProduct;
