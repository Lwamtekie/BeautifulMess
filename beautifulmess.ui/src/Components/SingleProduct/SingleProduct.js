/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../../Helpers/Data/ProductData';
import UserProductData from '../../Helpers/Data/UserProductData';
import UserData from '../../Helpers/Data/UserData';
import ProductReviewData from '../../Helpers/Data/ProductReviewData';
import ProductReview from '../ProductReview/ProducrReview';


import './SingleProduct.scss';

class SingleProduct extends React.Component {
 state = {
   product: {},
   productReview: [],
   rating: '',
   comment: '',
   userName: '',
 }

 userInputHandler = (e) => {
   const { value } = e.target;
   const InputName = e.target.name;
   this.setState({ [InputName]: value });
 }

AddReview = (e) => {
  e.preventDefault();
  const userSessionInfo = UserData.getSessionUser();
  const tempReview = {
    rating: this.state.rating,
    comment: this.state.comment,
    userName: userSessionInfo.userName,
  };

  ProductReviewData.postNewProductReview(tempReview)
    .then(() => {
      this.setState({
        rating: '',
        comment: '',
        userName: '',
      });
      this.props.getProductReview();
    })
    .catch(error => console.error(error));
}


 getProductReview = () => {
   ProductReviewData.getProductsReview(this.state.product.id)
     .then(res => this.setState({ productReview: res }));
 }

 addMyProducts = () => {
   const userSessionInfo = UserData.getSessionUser();
   const currentProductid = this.state.product.id;
   const myProduct = {
     userid: userSessionInfo.id,
     productid: currentProductid,
   };


   UserProductData.addMyProducts(myProduct)
     .then(() => this.props.history.push('/User'))
     .catch(err => (err));
 }

 getProduct = () => {
   const productId = this.props.match.params.id;
   ProductData.getSingleProduct(productId)
     .then((productPromise) => {
       this.setState({ product: productPromise.data });
       this.getProductReview();
     })
     .catch(err => (err));
 }

 componentDidMount() {
   this.getProduct();
 }

 render() {
   const { rating, comment, userName } = this.state;
   const { product } = this.state;
   const BuildproductReview = this.state.productReview.map(productReview => <ProductReview productReview={productReview}/>);
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
        {BuildproductReview}
        <form>
  <div class="form-group">
    <label for="exampleInputName">Name</label>
    <input name="userName" type="name" class="form-control" id="exampleInputName" aria-describedby="NameHelp" value={userName} onChange={this.userInputHandler}/>
    <small id="nameHelp" class="form-text text-muted">We'll  share your name.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputComment">Comment</label>
    <input name="comment" type="Comment" class="form-control" id="exampleInputComment"aria-describedby="CommentHelp" value={comment} onChange={this.userInputHandler}/>
    <small id="nameHelp" class="form-text text-muted">We'll  share your comment.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputRating">Rating</label>
    <input name="rating" type="rating" class="form-control" id="exampleInputRating" aria-describedby="RatingHelp" value= {rating} onChange={this.userInputHandler}/>
    <small id="RatingHelp" class="form-text text-muted">We'll  share your rating.</small>
  </div>
  <button type="AddReview" class="btn btn-primary">AddReview</button>
</form>
</div>
   );
 }
}

export default SingleProduct;
