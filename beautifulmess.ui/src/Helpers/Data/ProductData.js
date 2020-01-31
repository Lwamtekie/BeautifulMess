import axios from 'axios';

const baseUrl = 'https://localhost:44315/api/products';

const getProducts = () => new Promise((resolve, reject) => {
  axios.get(baseUrl)
    .then(res => resolve(res.data))
    .catch(err => reject(err));
});

const getSingleProduct = productId => axios.get(`${baseUrl}/${productId}`);

export default {
  getProducts,
  getSingleProduct,
};
