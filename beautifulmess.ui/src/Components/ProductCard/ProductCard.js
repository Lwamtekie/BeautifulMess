import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';

class ProductCard extends React.Component {
 state = {
   product: {},
 };


 render() {
   const { product } = this.props;
   const singleLink = `/single/${product.id}`;

   return (
        <div className="ProductCard col-4">
          <div className="product">
            <div className="product-body">
            <p className="product-title">{product.name}</p>
            <img src={product.imageUrl} className="card-img" alt="..." />
            <Link className="btn btn-info" to={singleLink}>View</Link>

            </div>
          </div>
        </div>
   );
 }
}
export default ProductCard;
