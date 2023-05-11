import axios from 'axios';

axios.defaults.baseURL = 'https://645952ea4eb3f674df8d5885.mockapi.io/';

export async function getUsers() {
  const res = await axios.get('/Users');
  const data = res.data;
  console.log(data);
  return data;
}
