import axios from 'axios';

const baseUrl = 'https://localhost:44315/api/users';
const addUser = user => axios.post(`${baseUrl}`, user);


export default {
  addUser,
};
