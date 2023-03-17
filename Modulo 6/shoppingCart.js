
// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const cart = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 2,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

var products = document.getElementById("products");
//dupla (product, i) por cada iteracion tendremos el product y su i
cart.forEach((product, i) => {
  var div = document.createElement("div");
  div.setAttribute("class", "row");

  var div1 = document.createElement("div");
  div1.setAttribute("class", "col-25");

  var index = document.createElement("p");
  index.innerHTML = i;
  div1.appendChild(index);

  var div2 = document.createElement("div");
  div2.setAttribute("class", "col-50");

  var productName = document.createElement("p");
  productName.innerHTML = product.description + " - " + product.price + "€/ud";
  productName.setAttribute("class", "productName");
  div2.appendChild(productName);


  var div3 = document.createElement("div");
  div3.setAttribute("class", "col-25");
  var input = document.createElement("input");
  input.setAttribute("class", "input1")
  input.setAttribute("type", "number");
  input.setAttribute("value", product.units);
  input.setAttribute("id", i)
  div3.appendChild(input);

  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(div3);

  products.appendChild(div);
});


//Segunda parte :
//  -subtotal (producto.price * product.units)
//  -IVA  (switch)
//  -Total (subtotal + IVA)

function getSubTotal() {
  let subTotal = 0;
  for (i = 0; i < cart.length; i++) {
    subTotal += (cart[i].price * cart[i].units);

  }
  console.log(subTotal);
  return subTotal;
}

function getIVA() {
  let IVA = 0;
  for (i = 0; i < cart.length; i++) {
    switch (cart[i].tax) {
      case REGULAR_TYPE:
        IVA += getSubTotal() * 0.21;
        break;
      case LOWER_TYPE:
        IVA += getSubTotal() * 0.04;
        break;
      default:
        IVA += getSubTotal();
        break;

        IVA += (cart[i].price * cart[i].units);
    }
  }
  console.log(IVA);
  return IVA;
}

function getTotal() {
  return getSubTotal() + getIVA();
}

function calcular() {
  //update de carrito
  //calc total, subt, iva
  updateCarrito();
  refreshTotal();
}

function updateCarrito() {

  cart.forEach((product, i) => {
    product.units = document.getElementById(i).value;
  });
}

function refreshTotal() {

  subAmount.innerHTML = getSubTotal();
  
  ivaAmount.innerHTML = getIVA();
  
  totalAmount.innerHTML = getTotal();

}

var total = document.getElementById("total");

var button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("class", "buutton")
button.addEventListener("click", event => calcular());
button.innerHTML = "Calcular";

var div4 = document.createElement("div");
div4.setAttribute("class", "buton")

var div5 = document.createElement("div");
div5.setAttribute("class", "row2");

var div6 = document.createElement("div");
div6.setAttribute("class", div6);
var div7 = document.createElement("div");
div6.setAttribute("class", div6);

var paragraphSub = document.createElement("p");
paragraphSub.innerHTML = "Subtotal: ";

var paragraphIva = document.createElement("p");
paragraphIva.innerHTML = "IVA:";

var paragraphTotal = document.createElement("p");
paragraphTotal.innerHTML = "Total:";

var subAmount = document.createElement("p");
subAmount.innerHTML = getSubTotal();
var ivaAmount = document.createElement("p");
ivaAmount.innerHTML = getIVA();
var totalAmount = document.createElement("p");
totalAmount.innerHTML = getTotal();


div6.appendChild(paragraphSub);
div6.appendChild(paragraphIva);
div6.appendChild(paragraphTotal);

div7.appendChild(subAmount);
div7.appendChild(ivaAmount);
div7.appendChild(totalAmount);

div4.appendChild(button);
div5.appendChild(div6);
div5.appendChild(div7);


total.appendChild(div4);
total.appendChild(div5);











