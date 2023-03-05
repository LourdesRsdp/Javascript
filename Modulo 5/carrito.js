 const carrito = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 25,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 10,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 10,
        count: 2,
        premium: false
    }
];

//Estructura carrito
const table = document.createElement('table');

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

const idHeader = document.createElement('th');
idHeader.textContent = 'ID';
headerRow.appendChild(idHeader);

const nameHeader = document.createElement('th');
nameHeader.textContent = 'Name';
headerRow.appendChild(nameHeader);

const priceHeader = document.createElement('th');
priceHeader.textContent = 'Price';
headerRow.appendChild(priceHeader);

const countHeader = document.createElement('th');
countHeader.textContent = 'Count';
headerRow.appendChild(countHeader);

const premiumHeader = document.createElement('th');
premiumHeader.textContent = 'Premium';
headerRow.appendChild(premiumHeader);

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

carrito.forEach(item => {
  const dataRow = document.createElement('tr');

  const idData = document.createElement('td');
  idData.textContent = item.id;
  dataRow.appendChild(idData);

  const nameData = document.createElement('td');
  nameData.textContent = item.name;
  dataRow.appendChild(nameData);

  const priceData = document.createElement('td');
  priceData.textContent = item.price;
  dataRow.appendChild(priceData);

  const countData = document.createElement('td');
  countData.textContent = item.count;
  dataRow.appendChild(countData);

  const premiumData = document.createElement('td');
  premiumData.textContent = item.premium ? 'Yes' : 'No';
  dataRow.appendChild(premiumData);

  tbody.appendChild(dataRow);
});

table.appendChild(tbody);
document.body.appendChild(table);

//Mostrar estructura carrito
function showProduct(carrito) {
    console.log("Nombre de producto: " + carrito.name + " ID: " + carrito.id + " Precio: " + carrito.price);
}

//Listar todos los productos
function showShoppingCart() {
    console.log("Carrito: ");
    console.log(carrito);
    carrito.forEach(product => {
        showProduct(product);
    });
}
showShoppingCart();

//Eliminar un producto del carrito de la compra
function removeProduct(id) {
    carrito.forEach(product => {
        if (product.id == id) {
            var index = carrito.indexOf(product);

            carrito.splice(index, 1);
        }
    });
}

// (Quiero eliminar la Tinta)
//removeProduct(75621);


//Funcion que calcula el total de un carrito de la compra
function getTotal(){
    let total = 0;
    carrito.forEach(product => {
        total += product.price * product.count;
    });

    return total;
}
console.log(getTotal());

//Funcion que filtra los productos prime del carrito
function prime(){

    carrito.forEach(product => {
        if(product.premium == true){
            console.log(product);
        }
    });
}

//Funcion que deja gastos de envio gratis si todos los productos son prime
function deliveryCost(){
    freeDelivery = true;
    carrito.forEach(product => {
        if(product.premium == false){
            freeDelivery = false;
        } 
    });

    if(freeDelivery == true){
        console.log("Gastos de envio gratis");
    } else {
        console.log("Toca pagar");
    }
}
deliveryCost();


