import React from 'react';
import './MyProducts.scss';

class MyProducts extends React.Component {
delete = () => {
  const { deleteUserProduct } = this.props;
  deleteUserProduct(this.props.product.id);
}

render() {
  const { product } = this.props;
  console.error(product);
  return (

          <div className="MyProduct col-4">
            <div className="card">
              <div className="Product-body">
              <p className="Product-name">{product.name}</p>
              <img src={product.imageUrl} className="card-img" alt="..." />
              <button className="btn btn-warning" onClick={this.delete}>Delete</button>
              </div>
            </div>
          </div>
  );
}
}
export default MyProducts;
