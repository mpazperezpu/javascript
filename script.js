
alert("Bienvenido a su Buscador de Vuelo");
let apellidoDeLaReserva = "Perez Puentes";
let numeroDeReserva = "45869";
let infoReserva = "Usted tiene un vuelo a Madrid el dia 12/12/2023 desde Ezeiza . \nVuelo aa3856.\nOperador Aerolineas Argentinas";
    
function Buscador(){
    let ingreso= false
    
    let ingresos = 10;
        for (i=ingresos; i >= 1; i--){
            let ingresarApellido = prompt("Ingresa aqui el Apellido del Pasajero");
            let ingresoNumeroDeReserva = prompt("Ingrese por favor su Numero de Reserva");
        if (apellidoDeLaReserva === ingresarApellido, numeroDeReserva ===ingresoNumeroDeReserva) {
        alert(infoReserva);
        ingreso= true
        break;

        } else { 
        alert ("No pudimos encontrar su vuelo, vuelva a intentar");
    
            }
        }
        return ingreso;
}
class Vuelo{
    constructor(aerolinea,destino,fecha,horarioSalida,horarioLlegada,precio){
        this.aerolinea = aerolinea
        this.destino = destino
        this.horarioSalida = horarioSalida
        this.horarioLlegada = horarioLlegada
        this.precio = precio
        this.fecha= fecha
    }
    mostrarInfo(){
        return`
        Aerolinea: ${this.aerolinea}
        Destino: ${this.destino}
        Fecha: ${this.fecha}
        Horario de Salida: ${this.horarioSalida}
        Horario de Llegada: ${this.horarioLlegada}
        Precio: ${this.precio}
        `;
        
    
    }

}
opcion1 = new Vuelo ( "Airfrance" , "Madrid", "10/05/2024","23.05 hs" , "15.00 hs +1" , "$200");
opcion2 = new Vuelo( "Ita","Roma", "11/05/2024", "12.04 hs","05.00 hs +1","$222");
opcion3 = new Vuelo ( "Aireuropa", "Barcelona" , "12/05/2024","12.15 hs", "07.22 hs +1","$315");

if (Buscador()){
    
    let gestionar = prompt("Gestione su Reserva: \n Opcion 1- Cambios.\n Opcion 2- Cancelacion.\n Opcion 3- Comunicarse con un Agente");
     switch(gestionar){
           case "1":
                alert(`Usted dispone de los sigueintes vuelos para realizar su cambio:
                ${opcion1.mostrarInfo()}
                ${opcion2.mostrarInfo()}
                ${opcion3.mostrarInfo()}
                `);
                break;
            case "2" :
                alert("Si desea cancelar el vuelo y recibir su correspondiente reintegro , tenga en cuenta que este puede verse afectado por los cargos de servicios por parte de la empresa. \n Cancelacion anterior a los 30 dias de la fecha de salida: cargos del 20% del valor abonado  . \n Cancelacion a 30 dias o menos de la fecha de salida:  cargos del 35% del valor abonado")
                let reintegro = alert("Calcular el reintegro teniendo en cuenta que el valor de su vuelo es de $485. \n 1- Cancelacion anterior a los 30 dias de la fecha de salida . \n 2- Cancelacion a 30 dias o menos de la fecha de salida"); 
                const cantidadDeDias = () =>{
                    let fechaActual = new Date();
                    let fechaVuelo = new Date (2023, 11, 12)
                    let diferencia = fechaVuelo - fechaActual;
                    let diferenciadedias = Math.ceil(diferencia/(1000*60*60*24));
                    return diferenciadedias;
                }
                let diasfaltantes= cantidadDeDias(); 
                let precioVuelo= 485
                if(`${diasfaltantes}`> 30){
                    let penalidad=(precioVuelo * 0.2) ;
                    let reintegro = (precioVuelo - penalidad);
                    alert(`Su reintegro sera de $ ${reintegro} ya que se encuentra a ${diasfaltantes} dias de su viaje `);
                }
                if(`${diasfaltantes}` <= 30){
                    let penalidad1 =(precioVuelo * 0.35);
                    let reintegro1 = (precioVuelo - penalidad1);
                    alert (`Su reintegro sera de $ ${reintegro1} ya que se encuentra a ${diasfaltantes} dias de su vuelo`);
                }
                break;
                case "3":
                    let contactos = ["\nInstagram : Su Buscador de Vuelo","\nFacebook: Su Buscador de Vuelo", " \nTwitter: Su Buscador de Vuelo", " \nTelefono: 11589687"]
                    contactos.push( " \nMail: contacto@subuscadordeviaje.com");
                    contactos.sort();
                    
                    alert(`${contactos}`);
                    
                    break;
                default:
                    alert("elegiste una opcion invalida");
                    break;

            
        }
}

    








