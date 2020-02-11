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
   newReview: {
     rating: '',
     comment: '',
   },
 }

 userInputHandler = (e) => {
   const { value } = e.target;
   const newUserReview = { ...this.state.newReview };
   const InputName = e.target.name;
   newUserReview[InputName] = value;
   this.setState({ newReview: newUserReview });
 }

AddReview = (e) => {
  e.preventDefault();
  const userSessionInfo = UserData.getSessionUser();
  const tempReview = {
    rating: this.state.newReview.rating,
    comment: this.state.newReview.comment,
    userName: userSessionInfo.name,
    productId: this.state.product.id,
  };

  ProductReviewData.postNewProductReview(tempReview)
    .then(() => {
      // const blankReview = {
      //   rating: '',
      //   comment: '',
      // };
      // this.setState({ newReview: blankReview });
      this.getProductReview();
    })
    .catch(error => console.error(error));
}


 getProductReview = () => {
   ProductReviewData.getProductsReview(this.state.product.id)
     .then((res) => {
       const blankReview = {
         rating: '',
         comment: '',
       };
       this.setState({ productReview: res, newReview: blankReview });
     });
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
   const { rating, comment } = this.state.newReview;
   const { product } = this.state;
   const BuildproductReview = this.state.productReview.map(productReview => <ProductReview productReview={productReview}/>);
   const ProductsLink = '/products';
   return (
    <div className="SingleProduct">
      <div className="productContainer">
      <div className="subContainer">
      <div className="Single">
      <div className="singleProduct">
     <p className="card-title">Name: {product.name}</p>
        <p className="card-title">$: {product.price}</p>
        <p className="card-title">Store: {product.store}</p>
        <img src={product.imageUrl} className="product-img" alt="..." />
       {BuildproductReview}
        <div className="buttuns">
        <Link className="btn btn-danger" to={ProductsLink}>Return</Link>
        <button className="btn btn-danger" onClick={this.addMyProducts}>Add</button>
        </div>
        </div>
      </div>
        </div>
        <form>
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
  <button type="AddReview" class="btn btn-primary" onClick={this.AddReview}>AddReview</button>
</form>
</div>
</div>

   );
 }
}

export default SingleProduct;
