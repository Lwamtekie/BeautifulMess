import axios from 'axios';

const baseUrl = 'https://localhost:44315/api/blogs';

const getBlogs = () => new Promise((resolve, reject) => {
  axios.get(baseUrl)
    .then(res => resolve(res.data))
    .catch(err => reject(err));
});

export default getBlogs;
