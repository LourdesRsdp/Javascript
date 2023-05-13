export const mapPropertyFromViewModelToApi = (datosGenerales, datosVivienda, datosFotos) => {
    return {
        address: datosVivienda.address,
        bathrooms: datosVivienda.bathrooms,
        city: datosVivienda.city,
        email: datosGenerales.email,
        equipmentIds: datosVivienda.equipmentIds,
        id: '',
        images: datosFotos.content,
        locationUrl: datosVivienda.locationUrl,
        mainFeatures: datosVivienda.mainFeatures,
        notes: datosGenerales.notes,
        phone: datosGenerales.phone,
        price: datosGenerales.price,
        provinceId: datosVivienda.provinceId,
        rooms: datosVivienda.rooms,
        squareMeter: datosVivienda.squareMeter,
        title: datosGenerales.title,
        saleTypeIds: datosGenerales.saleTypeIds
    };
}