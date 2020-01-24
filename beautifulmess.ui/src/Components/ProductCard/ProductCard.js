import React from 'react';
import { Link } from 'react-router-dom';

import './ProductCard.scss';

const ProductCard = (props) => {
    const {
      ProductId,
      Name,
      Price,
      Store,
      ImageUrl
  
    } = props.product;
  
    render()  { 
        const { product } = this.props;
        return (
        <div className="ProductCard col-4">
          <div className="card">
            <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <h5 className="card-title">{product.Price}</h5>
            <h5 className="card-title">{product.store}</h5>
                <p className="card-text">{recipe.ingredients}</p>
                <img src={recipe.imageurl} className="card-img" alt="..." />
           <button className="btn btn-danger" onClick={this.deleteMyRecipes}>Delete</button>
            </div>
          </div>
        </div>
        );
      }
    }
    
export default ProductCard;
