const listaReservas = [
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 3
    },
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 4
    },
    {
        tipoHabitacion: "suite",
        desayuno: true,
        pax: 2,
        noches: 1
    }
];


class Reservas {

    listaReservas;
    subtotal;
    total;

    constructor(listaReservas) {
        this.listaReservas = listaReservas;
        this.subtotal = 0;
        this.total = 0;
    }

    set setListaReservas(listaReservas) {
        this.listaReservas = listaReservas;
    }

    get getListaReservas() {
        return this.listaReservas;
    }

    set setSubTotal(subtotal) {
        this.subtotal = subtotal;
    }

    get getSubtotal() {
        return this.subtotal;
    }

    set setTotal(total) {
        this.total = total;
    }

    get getTotal() {
        return this.total;
    }
}

class ReservasParticular extends Reservas {
    constructor(listaReservas) {
        super(listaReservas);
    }

    calculateSubTotal() {
        let aux = 0;

        this.listaReservas.forEach(reserva => {
            let tipoHabitacion = 0;
            if (reserva.tipoHabitacion == "standard") {
                tipoHabitacion = 100;
            } else {
                tipoHabitacion = 150;
            }

            let cargoDesayuno = 0;
            if (reserva.desayuno == true) {
                cargoDesayuno = reserva.pax * 15;
            }

            let numPersonas = (reserva.pax * 40);

            aux += (tipoHabitacion + numPersonas + cargoDesayuno) * reserva.noches;
        });

        this.subtotal = aux;
    }

    calculateTotal() {
        let impuesto = this.subtotal * 0.21;
        this.total = impuesto + this.subtotal;
    }
}

class ReservasOperador extends Reservas {
    constructor(listaReservas) {
        super(listaReservas);
    }

    calculateSubTotal() {
        let aux = 0;
        this.listaReservas.forEach(reserva => {
            let tipoHabitacion = 100;

            let cargoDesayuno = 0;
            if (reserva.desayuno == true) {
                cargoDesayuno = reserva.pax * 15;
            }
            let numPersonas = reserva.pax * 40;

            aux += (tipoHabitacion + numPersonas + cargoDesayuno) * reserva.noches;
        
        });
        this.subtotal = aux;
    }

    calculateTotal() {
        let impuesto = this.subtotal * 0.21;
        let descuento = this.subtotal * 0.15;
        this.total = this.subtotal + impuesto - descuento;
    }
}

//TESTING
//Caso 1
let ReservasParticulares = new ReservasParticular(listaReservas);
ReservasParticulares.calculateSubTotal();
ReservasParticulares.calculateTotal();


let subtotalCaso1 = ReservasParticular.getSubtotal;
let totalCaso1 = ReservasParticular.getTotal;
console.log("CASO 1");
console.log("Subtotal de la reserva Particulares: " + subtotalCaso1);
console.log("Total de la reserva Particulares: " + totalCaso1);

//Caso 2
let ReservasOperadores = new ReservasOperador(listaReservas);
ReservasOperadores.calculateSubTotal();
ReservasOperadores.calculateTotal();


let subtotalCaso2 = ReservasOperadores.getSubtotal;
let totalCaso2 = ReservasOperadores.getTotal;
console.log("CASO 2");
console.log("Subtotal de la reserva de Operadores: " + subtotalCaso2);
console.log("Total de la reserva de Operadores: " + totalCaso2);


