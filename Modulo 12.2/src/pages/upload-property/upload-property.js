import {
    onUpdateField,
    onSubmitForm,
    onSetError,
    onSetFormErrors,
} from '../../common/helpers';
import { formValidationGeneral, formValidationVivienda  } from './upload-property.validations';
import { getProvinces, getEquipments, getSaleTypes } from "../property-list/property-list.api";
import { setOptionList, onAddFeature, setCheckboxList, onAddImage} from "./upload-property.helpers";
import { onAddFile } from "../../common/helpers/element.helpers";
import { mapPropertyFromViewModelToApi } from "./upload-property.mappers";
import { insertProperty } from "./upload-property.api";


let datosGenerales = {
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypeIds: []
};

let datosVivienda = {
    address: '',
    city: '',
    provinceId: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: '',
    equipmentIds: ''
};

let datosFotos = {
    content: []
};

getProvinces().then(provincesList => {
    setOptionList(provincesList, "province");
});

getSaleTypes().then(salesTypesList => {
  setCheckboxList(salesTypesList, "saleTypes");

  onUpdateField('saleTypes', event => {
    const value = event.target.value;
    console.log(event.target.value);

    if(event.target.checked == true){
      var listAux = [];
      if(datosGenerales.saleTypeIds.length > 0) {
          var listAux = datosGenerales.saleTypeIds;
      } 

      listAux.push(event.target.value);
      datosGenerales.saleTypeIds = listAux;
    } else {
      var index2 = datosGenerales.saleTypeIds.indexOf(event.target.value);
      if (index2 !== -1) {
        datosGenerales.saleTypeIds.splice(index2, 1);
      }
    }

    datosGenerales = {
      ...datosGenerales,
      title: value,
    };
  });
});

var equipmentList = [];
getEquipments().then(equipmentListAPI => {
    equipmentList = equipmentListAPI;
    setCheckboxList(equipmentList, "equipments");

    const equipList = document.getElementById("equipments");
    
    equipList.childNodes.forEach((checkbox, index) => {
        var id = (index+1).toString() + "-" + equipmentListAPI[index].name;
        
        onUpdateField(id, event => {
            const value = event.target.value;
            if(document.getElementById(id).checked){
                var listAux = [];
                if(datosVivienda.equipmentIds.length > 0) {
                    var listAux = datosVivienda.equipmentIds;
                } 
        
                listAux.push(equipmentListAPI[index].id);
                datosVivienda.equipmentIds = listAux;
            } else {
                var index2 = datosVivienda.equipmentIds.indexOf(value);
                if (index2 !== -1) {
                    datosVivienda.equipmentIds.splice(index2, 1);
                }
            }
            
        });
        
    });
});






onUpdateField('title', event => {
    const value = event.target.value;
    datosGenerales = {
      ...datosGenerales,
      title: value,
    };
  
    formValidationGeneral.validateField('title', datosGenerales.title).then(result => {
      onSetError('title', result);
    });
});

onUpdateField('notes', event => {
    const value = event.target.value;
    datosGenerales = {
      ...datosGenerales,
      notes: value,
    };
  
    formValidationGeneral.validateField('notes', datosGenerales.notes).then(result => {
      onSetError('notes', result);
    });
});

onUpdateField('email', event => {
    const value = event.target.value;
    datosGenerales = {
      ...datosGenerales,
      email: value,
    };
  
    formValidationGeneral.validateField('email', datosGenerales.email).then(result => {
      onSetError('email', result);
    });
});

onUpdateField('phone', event => {
    const value = event.target.value;
    datosGenerales = {
      ...datosGenerales,
      phone: value,
    };
  
    formValidationGeneral.validateField('phone', datosGenerales.phone).then(result => {
      onSetError('phone', result);
    });
});

onUpdateField('price', event => {
    const value = event.target.value;
    datosGenerales = {
      ...datosGenerales,
      price: value,
    };
  
    formValidationGeneral.validateField('price', datosGenerales.price).then(result => {
      onSetError('price', result);
    });
});


//DATOS VIVIENDA
onUpdateField('address', event => {
    const value = event.target.value;
    datosVivienda = {
      ...datosVivienda,
      address: value,
    };
  
    formValidationVivienda.validateField('address', datosVivienda.address).then(result => {
      onSetError('address', result);
    });
});

onUpdateField('city', event => {
    const value = event.target.value;
    datosVivienda = {
      ...datosVivienda,
      city: value,
    };
  
    formValidationVivienda.validateField('city', datosVivienda.city).then(result => {
      onSetError('city', result);
    });
});

onUpdateField('province', event => {
    const value = event.target.value;
    datosVivienda = {
      ...datosVivienda,
      provinceId: value,
    };
  
    formValidationVivienda.validateField('province', datosVivienda.provinceId).then(result => {
      onSetError('province', result);
    });
});

onUpdateField('squareMeter', event => {
    const value = event.target.value;
    datosVivienda = {
      ...datosVivienda,
      squareMeter: value,
    };
  
    formValidationVivienda.validateField('squareMeter', datosVivienda.squareMeter).then(result => {
      onSetError('squareMeter', result);
    });
});

onUpdateField('rooms', event => {
    const value = event.target.value;
    datosVivienda = {
      ...datosVivienda,
      rooms: value,
    };
  
    formValidationVivienda.validateField('rooms', datosVivienda.rooms).then(result => {
      onSetError('rooms', result);
    });
});

onUpdateField('bathrooms', event => {
    const value = event.target.value;
    datosVivienda = {
      ...datosVivienda,
      bathrooms: value,
    };
  
    formValidationVivienda.validateField('bathrooms', datosVivienda.bathrooms).then(result => {
      onSetError('bathrooms', result);
    });
});

onUpdateField('locationUrl', event => {
    const value = event.target.value;
    datosVivienda = {
      ...datosVivienda,
      locationUrl: value,
    };
  
    formValidationVivienda.validateField('locationUrl', datosVivienda.locationUrl).then(result => {
      onSetError('locationUrl', result);
    });
});


var buttonFeature = document.getElementById("insert-feature-button");

buttonFeature.addEventListener("click", event => addFeature());


onAddFile("add-image", value => {
    onAddImage(value);
    datosFotos.content.push(value);
});

function addFeature(){
    var feature = document.getElementById("newFeature").value;
    onAddFeature(feature);

    var listAux = [];
    if(datosVivienda.mainFeatures.length > 0) {
        var listAux = datosVivienda.mainFeatures;
    } 
    
    listAux.push(feature);
    datosVivienda.mainFeatures = listAux;

}




onSubmitForm('save-button', () => {
    formValidationGeneral.validateForm(datosGenerales).then(resultGeneral => {
        
        if(resultGeneral.succeeded == true){
            formValidationVivienda.validateForm(datosVivienda).then(resultVivienda => {
                
                if(resultVivienda.succeeded == true){
                    //TODO VA BIEN
                    const apiProperty = mapPropertyFromViewModelToApi(
                        datosGenerales,
                        datosVivienda,
                        datosFotos
                    );

                    insertProperty(apiProperty).then(response => {
                        history.back();
                    });
                }


                onSetFormErrors(resultVivienda);
            });
        }
        onSetFormErrors(resultGeneral);
    });
    
});