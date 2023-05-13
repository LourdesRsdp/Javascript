import Axios from 'axios';

const url = `${process.env.BASE_API_URL}`;

export const getSaleTypes = () =>
    Axios.get(`${url}/saleTypes`).then(response => {
        return response.data;
    });

export const getEquipments = () =>
    Axios.get(`${url}/equipments`).then(response => {
        return response.data;
    });

export const getProvinces = () =>
    Axios.get(`${url}/provinces`).then(response => {
        return response.data;
    });

export const getProperties = () =>
    Axios.get(`${url}/properties`).then(response => {
        return response.data;
    });

export const getPropertiesList = (request) =>
    Axios.get(`${url}/properties?${request}`).then(response => {
        return response.data;
    });


    /* Axios.get(`${url}/properties`).then(response => {
        return response.data;
    }); */