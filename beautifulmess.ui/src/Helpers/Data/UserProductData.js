import axios from 'axios';

const baseUrl = 'https://localhost:44315/api/userproducts';
const getUserProducts = userId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/${userId}`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
});


const addMyProducts = products => axios.post(`${baseUrl}`, products);
const deleteUserProduct = userproductsId => axios.delete(`${baseUrl}/${userproductsId}`);

export default {
  getUserProducts,
  addMyProducts,
  deleteUserProduct,
};
