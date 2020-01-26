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
            <h4 className="card-title">{product.name}</h4>
            <h5 className="card-title">{product.Price}</h5>
            <h5 className="card-title">{product.store}</h5>
            <img src={product.imageUrl} className="card-img" alt="..." />

            </div>
          </div>
        </div>
   );
 }
}
export default ProductCard;
