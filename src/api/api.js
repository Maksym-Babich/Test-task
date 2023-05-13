import axios from 'axios';

axios.defaults.baseURL = 'https://645952ea4eb3f674df8d5885.mockapi.io/';

export async function getUsers() {
  const res = await axios.get('/Users');
  const data = res.data;
  return data;
}

export async function updateUser(user) {
  const res = await axios.put(`/Users/${user.id}`, user);
  const data = res.data;
  return data;
}
