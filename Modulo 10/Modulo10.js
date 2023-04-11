//Ejercicio 1
function hasId(obj) {

    const { id } = obj;

    if (id == undefined) {
        return false;
    } else {
        return true;
    }
}
const planta = {
    id: 6
};

//console.log(hasId(planta));

//Ejercicio 2

function head(array) {
    const [firstItem, ...restItems] = array;
    return firstItem;
}

const array = [1, 2, 3, 4];
//head(array);

//Ejercicio 3

function tail(array) {
    const [firstItem, ...restItems] = array;
    return restItems;
}

const arrayTest = [1, 2, 3, 4];
//console.log(tail(arrayTest));

//Ejercicio 4
function swapFirstToLast(array) {
    const [firstItem, ...restItems] = array;
    const result = [...restItems, firstItem];

    return result;
}

/* console.log(swapFirstToLast(arrayTest)); */

//Ejercicio 5
function excludeId(obj) {
    if (hasId(obj)) {
        const { id, ...rest } = obj;
        return rest;
    } else {
        return obj;
    }
}

const casa = {
    dimension: 400,
    id: 5,
    año: 1992
};
console.log(excludeId(casa));

//ejercicio 6

function wordsStartingWithA(array) {
    const re = /^a\w*/;
    const result = array => array.filter(word => re.test(word));
    return result(array);

}
const words = ["afgano", "italiano", "aleman", "danes"];

/* console.log(wordsStartingWithA(words)); */

//Ejercicio 7

function concat(string1, string2, string3) {
    const array = [string1, string2, string3];
    return array.join("|");
}
/* console.log(concat("hola", "buenos", "dias")); */


//ejercicio 8

function multArray(array, x) {

    const getMultresult = (array, x) => array.map(number => number * x);

    return getMultresult(array, x);
}

const array8 = [1, 2, 3, 4];
const array9 = [1, 2, 3, 4, 5, 6];
const array10 = [1, 2, 3, 4, 5];
//console.log(multArray(array8, 2));

//Ejercicio 9

function calcMult(x, y, k) {

    const array = [x, y, k];

    const getTotal = array => array.reduce((result, number) => result*number, 1);

    return getTotal(array);
}

//console.log(calcMult(1, 2, 3));

//Ejercicio 10
function swapFirstSecond(array) {
    if(array.length < 2){
        return array;
    } else {
        const [firstItem, secondItem, ...restItems] = array;
        const result = [secondItem, firstItem, ...restItems];

        return result;
    }
}

//console.log(swapFirstSecond(array8));

//Ejercicio 11
function firstEqual(char, ...strings) {
    return strings.every(str => str.startsWith(char));
}

//Ejercicio 12
function longest(...arrays) {
    return arrays.sort().pop();
}

//console.log(longest(array8, array9, array10));

//Ejercicio 13
function searchInStringV1(str, char) {
    return Array.from(str).filter(c => c === char).length;
}
//console.log(searchInStringV1("Holaaa que pasa", 'a'));

//Ejercicio 14
function searchInStringV2(str, char) {
    return Array.from(str).reduce((count, c) => count + (c === char ? 1 : 0), 0);
}
  
//Ejercicio 15
function sortCharacters(str) {
    return Array.from(str).sort().join('');
}

//Ejercicio 16
function shout(...words) {
    return words.map(word => word.toUpperCase() + '!').join(' ');
}

//Ejercicio 17
const shoppingCart = [
    {
      category: "Frutas y Verduras",
      product: "Lechuga",
      price: 0.8,
      units: 1
    },
    {
      category: "Carne y Pescado",
      product: "Pechuga pollo",
      price: 3.75,
      units: 2
    },
    {
      category: "Droguería",
      product: "Gel ducha",
      price: 1.15,
      units: 1
    },
    {
      category: "Droguería",
      product: "Papel cocina",
      price: 0.9,
      units: 3
    },
    {
      category: "Frutas y Verduras",
      product: "Sandía",
      price: 4.65,
      units: 1
    },
    {
      category: "Frutas y Verduras",
      product: "Puerro",
      price: 4.65,
      units: 2
    },
    {
      category: "Carne y Pescado",
      product: "Secreto ibérico",
      price: 5.75,
      units: 2
    },
  ];
  
  // A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
  const cartWithIVA = shoppingCart.map(item => {
    return {
      ...item,
      IVA: item.price * item.units * 0.21
    };
  });
  
  // B. Ordena la lista de más a menos unidades.
  const sortedCart = shoppingCart.sort((a, b) => b.units - a.units);
  
  // C. Obtén el subtotal gastado en droguería.
  const subtotalDrogueria = shoppingCart.filter(item => item.category === 'Droguería')
                                          .reduce((acc, item) => acc + item.price * item.units, 0);
  
  // D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
  const sortedCartByCategory = shoppingCart.sort((a, b) => a.category.localeCompare(b.category));
  sortedCartByCategory.forEach(item => console.log(`${item.product} -> ${item.price * item.units} €`));
  //
  