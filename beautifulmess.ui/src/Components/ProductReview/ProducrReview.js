import React from 'react';
import './ProductReview.scss';


class ProductReview extends React.Component {
  render() {
    const productreview = this.props.productReview;
    return (
        <div className="ProductReview">
          <div className="input-group-addon">Name:{productreview.userName}</div>
          <div className="input-group-addon">Rating:{productreview.rating}</div>
          <div className="input-group-addon">Comment:{productreview.comment}</div>
        </div>
    );
  }
}


export default ProductReview;
