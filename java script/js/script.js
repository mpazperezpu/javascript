let apellidoDeLaReserva = "Perez Puentes";
let numeroDeReserva = "45869";
let infoReserva = "Usted tiene un vuelo a Madrid el dia 12/12/2023 desde Ezeiza . \nVuelo aa3856.\nOperador Aerolineas Argentinas";
let buscar = {
    Apellido:apellidoDeLaReserva,
    Numero:numeroDeReserva,
};
var json = JSON.stringify(buscar);
localStorage.setItem(numeroDeReserva,json);
localStorage.setItem(apellidoDeLaReserva,json);
console.log("buscando")
function Buscador(){
    let ingreso= false
    const ingresarApellido = document.getElementById("Apellido").value;
    const ingresoNumeroDeReserva = document.getElementById("Numero").value;
    ingreso=3
    for (i=ingreso; i >= 1; i--){
   if(ingresarApellido === apellidoDeLaReserva && ingresoNumeroDeReserva === numeroDeReserva) {
    console.log(ingresarApellido,ingresoNumeroDeReserva)
    window.location.href="panel.html"
    localStorage.apellidocliente = ingresarApellido
    ingreso= true;
    }else{
        alert("Los datos son incorrectos pruebe de nuevo")
    }
}
    return ingreso;
        
}
function redireccionar(){
    window.location.href="gestionar.html"
}
const button = document.querySelector('#gestionar');
button.addEventListener("click",redireccionar);
    
    

