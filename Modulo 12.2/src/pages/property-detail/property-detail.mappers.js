export const mapPropertyFromApiToViewModel = (property, equipmentList) => {
    console.log(property);
    return {
        id: property.id,
        title: property.title, 
        notes: `${property.notes}`,
        price:`${property.price.toLocaleString()}€`,
        city: property.city,
        squareMeter: `${property.squareMeter}m2`,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        bathrooms: `${property.bathrooms} ${getRoomWord(property.bathrooms)}`,
        locationUrl: property.locationUrl,
        mainFeatures: property.mainFeatures,
        equipments: getEquipmentsToMap(property.equipmentIds, equipmentList),
        mainImage: Array.isArray(property.images) ? property.images[0] : '',
        images: property.images
    };
}

const getRoomWord = rooms => {
    return rooms > 1 ? 'habitaciones' : 'habitación';
}

const getEquipmentsToMap = (equipmentIds, equipmentList) => {
    let result = [];
    equipmentList.forEach(equipment => {
        console.log(equipmentIds);
        if(equipmentIds.includes(equipment.id)){
            result.push(equipment.name);
        };
    });
    return result;
}