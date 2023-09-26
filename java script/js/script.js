
alert("Bienvenido a su Buscador de Vuelo");
let apellidoDeLaReserva = "Perez Puentes" ;
let numeroDeReserva = "45869";
let infoReserva = ("Usted tiene un vuelo a Madrid el dia 12/12/2023 desde Ezeiza . Vuelo aa3856 . Operador Aerolineas Argentinas");
    
function Buscador(){
    let ingreso= false
    
    let ingresos = 10;
        for (i=ingresos; i >= 1; i--){
            let ingresarApellido = prompt("Ingresa aqui el Apellido del Pasajero");
            let ingresoNumeroDeReserva = prompt("Ingrese por favor su Numero de Reserva");
        if (apellidoDeLaReserva === ingresarApellido, numeroDeReserva ===ingresoNumeroDeReserva) {
        alert(infoReserva)
        ingreso= true
        break;

        } else { 
        alert ("No pudimos encontrar su vuelo, vuelva a intentar");
    
            }
        }
        return ingreso
}

if (Buscador()){
    
    let gestionar = prompt("Gestione su Reserva: \n Opcion 1- Cambios.\n Opcion 2- Cancelacion.\n Opcion 3- Comunicarse con un Agente");
     switch(gestionar){
           case "1":
                alert( "- Si compró su ticket directamente en Aerolíneas Argentinas Ud. podra :Cambiar la fecha de su ticket sin costo, siempre que finalice su nuevo viaje antes del 15/12/2021 y respete la temporada de su ticket original. Solicitar la devolución sin costo de penalidad completando el siguiente formulario Aquí.Si se encuentra en destino y necesita regresar le pedimos complete el siguiente formulario Aquí para que podamos contactarlo con prioridad")
                break;
            case "2" :
                alert( "Si deseas cambiar o cancelar un vuelo, te recomiendo comunicarte directamente con la aerolínea o la agencia de viajes en línea con la que reservaste para obtener ayuda1. Google no puede brindar asistencia directa con los cambios ni las cancelaciones1. Asegúrate de revisar la política de cancelación de tu aerolínea para estar al tanto de los plazos y las penalizaciones relacionados con la cancelación, y saber si recibirás un reembolso1. Los correos electrónicos de confirmación que recibiste después de reservar el vuelo suelen contener el número de confirmación y la información de contacto de la aerolínea o la agencia de viajes")
                break;
            case "3":
                alert ("telefono de contacto : 54911856987");
                break;
            
        }
}
    
    








