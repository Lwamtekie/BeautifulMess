import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductReviewData from '../../Helpers/Data/ProductReviewData';
import UserData from '../../Helpers/Data/UserData';
import './ProductReview.scss';


class ProductReview extends React.Component {
 state = {
   productreview: [],
   rating: '',
   comment: '',
   userName: '',
 }


getProductReview = () => {
  ProductReviewData.getProductsReview()
    .then(res => this.setState({ productreview: res }));
};

ComponentDidMount = () => {
  this.getProductReview();
  const userSessionInfo = UserData.getSessionUser(); // How to get userInfo from sessionStorage
  this.setState({ userInfo: userSessionInfo });
};

render() {
  const { productreview } = this.props;
  return (
        <div className="ProductReview">
            <div className="row">
            <form className="comment-form form-group" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <span className="input-group-addon">Name</span>
          <input type="text" placeholder="Your name" className="form-control" />
        </div>
        <div className="input-group">
          <span className="input-group-addon">Comment</span>
          <input type="text" placeholder="Say something..." className="form-control" />
        </div>
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>
    );
  }
});
        </div>
        </div>
  );
}
}

export default withRouter(ProductReview);
