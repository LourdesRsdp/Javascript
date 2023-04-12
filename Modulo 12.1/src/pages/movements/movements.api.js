import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovements = () =>
  Axios.get(url).then(response => {
    return response.data;
});

// export const getMovementsFromAccount = accountId =>
//   Axios.get(`${url}/${accountId}`, {params: {accountId}}).then(response => {
//     return response.data;
// });