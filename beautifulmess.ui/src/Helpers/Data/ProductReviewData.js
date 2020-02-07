import axios from 'axios';

const baseUrl = 'https://localhost:44315/api/productreview';

const getProductsReview = () => new Promise((resolve, reject) => {
  axios.get(baseUrl)
    .then(res => resolve(res.data))
    .catch(err => reject(err));
});

export default {
  getProductsReview,
};
