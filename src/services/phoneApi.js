import axios from 'axios';

const baseURL = 'http://localhost:3005/phones';

export async function getPhones() {
  const { data } = await axios.get(baseURL);
  return data;
}
