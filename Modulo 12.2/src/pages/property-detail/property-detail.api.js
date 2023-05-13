import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;
const url2 = `${process.env.BASE_API_URL}/questions`;

export const insertQuestion = question =>
  Axios.post(`${url2}/${question.id}`, question).then(response => {
    return response.data;
});

export const getProperty = id =>
  Axios.get(`${url}/${id}`).then(response => {
    return response.data;
  });