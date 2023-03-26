// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

var WORK_HOURS2 = [
    "07:00 - 08:00",
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
];

function initialize(){
    myTeam.forEach(employee => {
        console.log("Disponibilidad de " + employee.name + ": ");
        employee.availability.forEach((range, index) => {
            var getRandomNumber = (a,b) => (Math.random() < 0.5 ? a : b);
            var random = getRandomNumber(false, true);

            employee.availability[index] = random;

            console.log(WORK_HOURS[index] + " " +printAvailability(random));
        });



    });
}

function printAvailability(availability){
    if(availability == true){
        return "Si";
    } else {
        return "No";
    }
}

function getAvailability(){
    var result = null;

    WORK_HOURS.forEach((range, index) => {
        var free = true;
        myTeam.forEach(employee => {
            var value = employee.availability[index];
            
            if(value == false){
                free = false;
            }
        });

        if(free == true && result == null){
            result = range;
        }
    });

    console.log();
    console.log();
    console.log();
    if(result != null){

        console.log("Primera hora disponible: " + result);
    } else{
        console.log("No hay horas disponibles");
    }

    
}

initialize();
getAvailability();