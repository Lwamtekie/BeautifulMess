import React from 'react';
import './MyProducts.scss';

class MyProducts extends React.Component {
delete = () => {
  const { deleteUserProduct } = this.props;
  deleteUserProduct(this.props.product.id);
}

render() {
  const { product } = this.props;
  return (
          <div className="ProductCard col-4">
            <div className="card">
              <div className="card-body">
              <p className="card-title">{product.name}</p>
              <img src={product.imageUrl} className="card-img" alt="..." />
              <button className="btn btn-danger" onClick={this.delete}>Delete</button>
              </div>
            </div>
          </div>
  );
}
}
export default MyProducts;
