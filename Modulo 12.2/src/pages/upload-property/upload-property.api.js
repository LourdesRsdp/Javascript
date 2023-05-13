import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const insertProperty = property =>
  Axios.post(`${url}/${property.id}`, property).then(response => {
    return response.data;
});