import axios from 'axios';

const baseUrl = 'https://localhost:44315/api/userproducts';
const getuserproducts = () => new Promise((resolve, reject) => {
  axios.get(baseUrl)
    .then(res => resolve(res.data))
    .catch(err => reject(err));
});

const addMyProducts = products => axios.post(`${baseUrl}`, products);

export default {
  getuserproducts,
  addMyProducts,
};
