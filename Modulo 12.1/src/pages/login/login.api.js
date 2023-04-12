import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/login`;

// get
// post
// put
// delete
export const isValidLogin = login =>
  Axios.post(url, login).then(response => {
    console.log(response);
    return response.data;
  });
