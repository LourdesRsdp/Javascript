const listaReservas = [
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 3
    },
    {
        tipoHabitacion: "standard",
        pax: 1,
        noches: 4
    },
    {
        tipoHabitacion: "suite",
        pax: 2,
        noches: 1
    }
];


class Reservas{

    listaReservas;
    subtotal;
    total;

    constructor(listaReservas) {
        this.listaReservas = listaReservas;
        this.subtotal = 0;
        this.total = 0;
    }

    set setSubTotal (listaReservas){
        let aux = 0;
        
        listaReservas.forEach(reserva => {
            let tipoHabitacion = 0;
            if (reserva.tipoHabitacion == "standard") {
                tipoHabitacion = 100;
            } else {
                tipoHabitacion = 150;
            }

            let numPersonas = reserva.pax * 40;

            aux += (tipoHabitacion + numPersonas) * reserva.noches;
        });

        this.subtotal = aux;
    }
    
    get GetSubtotal(){
        
        return this.subtotal;
    } 
}

//TESTING

let ReservasTitoPaco = new Reservas(listaReservas);
ReservasTitoPaco.setSubTotal = listaReservas;

let subtotal = ReservasTitoPaco.GetSubtotal;

console.log(subtotal);











/* class reservaParticular extends reservasHotel{

        habitacion;
        adicional;
        iva;

        constructor();

        constructor(habitacion, adicional, iva) {
            this.habitacion = habitacion;
            this.adicional = adicional;
            this.iva = iva;
        }

        function getSubtotal() {

            let result = 0;
            let preResult = 0;

            if (this.habitacion == "standard") {
                this.habitacion = 100;
            } else {
                this.habitacion = 150;
            }

            preResult = this.habitacion * listaReservas.noches;
            result = preResult + this.iva;
            return result;
        }
    } */