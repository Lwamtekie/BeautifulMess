import axios from 'axios';

const baseUrl = 'https://localhost:44315/api/productreview';

const getProductsReview = productId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/allReviews/${productId}`)
    .then(res => resolve(res.data))
    .catch(err => reject(err));
});

const addProductReview = productreview => axios.post(`${baseUrl}`, productreview);
const postNewProductReview = newProductReview => axios.post(`${baseUrl}`, newProductReview);

export default {
  getProductsReview,
  addProductReview,
  postNewProductReview,

};
