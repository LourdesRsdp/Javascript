import { getProvinces, getSaleTypes, getProperties, getPropertiesList} from '../property-list/property-list.api';
import { setOptions, addPropertyRows, clearPropertyRows } from './property-list.helpers';
import { quantityEuros, restroomsNumber, roomsNumber } from "./property-list.constants";
import { mapPropertyListFromApiToViewModel } from "./property-list.mappers";
import { onUpdateField, onSubmitForm } from "../../common/helpers";
import { mapFilterToQueryParams } from "./property-list.mappers";

getSaleTypes().then(SaleTypesList => {
    setOptions(SaleTypesList, "select-sale-type", "Venta")
});

getProvinces().then(SaleTypesList => {
    setOptions(SaleTypesList, "select-province", "Provincias")
});

setOptions(roomsNumber, "select-room", "Habitaciones");
setOptions(restroomsNumber, "select-bathroom", "Número de baños");
setOptions(quantityEuros, "select-min-price", "Min(€)");
setOptions(quantityEuros, "select-max-price", "Max(€)");


getProperties().then(propertiesList => {
    console.log(propertiesList);
    var result = mapPropertyListFromApiToViewModel(propertiesList);
    clearPropertyRows();
    addPropertyRows(result);
});

let filter = {
    saleTypeId: '',
    provinceId: '',
    minRooms: '',
    minBathrooms: '',
    minPrice: '',
    maxPrice: ''
};

onUpdateField('select-sale-type', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        saleTypeId: value,
    };
});

onUpdateField('select-province', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        provinceId: value,
    };
});

onUpdateField('select-room', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        minRooms: value,
    };
});

onUpdateField('select-bathroom', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        minBathrooms: value,
    };
});

onUpdateField('select-min-price', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        minPrice: value,
    };
});

onUpdateField('select-max-price', event => {
    const value = event.target.value;
    filter = {
        ...filter,
        maxPrice: value,
    };
});

onSubmitForm('search-button', () => {
    const queryParams = mapFilterToQueryParams(filter);
    if (queryParams == undefined){
        getProperties().then(propertiesList => {
            var result = mapPropertyListFromApiToViewModel(propertiesList);
            clearPropertyRows();
            addPropertyRows(result);
        });
    } else {
        getPropertiesList(queryParams).then(propertyList => {
            console.log(propertyList);
            var result = mapPropertyListFromApiToViewModel(propertyList);
            clearPropertyRows();
            addPropertyRows(result);
        });
    }
    
});

