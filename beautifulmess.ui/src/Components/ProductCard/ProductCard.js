import React from 'react';


import './ProductCard.scss';

class ProductCard extends React.Component {
 state = {
   product: {},
 };


 render() {
   const { product } = this.props;
   return (
        <div className="ProductCard col-4">
          <div className="card">
            <div className="card-body">
            <p className="card-title">{product.name}</p>
            <p className="card-title">{product.price}</p>
            <p className="card-title">{product.store}</p>
            <img src={product.imageUrl} className="card-img" alt="..." />

            </div>
          </div>
        </div>
   );
 }
}
export default ProductCard;
