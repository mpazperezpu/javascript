let apellidoDeLaReserva = "Perez Puentes";
let numeroDeReserva = "45869";
let infoReserva = "Usted tiene un vuelo a Madrid el dia 12/12/2023 desde Ezeiza . \nVuelo aa3856.\nOperador Aerolineas Argentinas";
let buscar = {
    Apellido :apellidoDeLaReserva,
    Numero :numeroDeReserva
};
let json = JSON.stringify(buscar);
localStorage.setItem(numeroDeReserva,json);
localStorage.setItem(apellidoDeLaReserva,json);
let datosincorrectos= document.getElementById("info")
function Buscador(){
    console.log("click")
    let ingreso= false
    const ingresarApellido = document.getElementById("Apellido").value;
    const ingresoNumeroDeReserva = document.getElementById("Numero").value;
    ingreso=3
    for (i=ingreso; i >= 1; i--){
   if(ingresarApellido === apellidoDeLaReserva && ingresoNumeroDeReserva === numeroDeReserva) {
    window.location.href="panel.html"
    localStorage.apellidocliente = ingresarApellido
    ingreso= true;
    }else{
       datosincorrectos.innerHTML = "Datos incorrectos,intente nuevamente";
       datosincorrectos.classList.add("aviso")
     }
}return ingreso;
}
const boton = document.querySelector("#Buscar")
boton.addEventListener("click", {
 handleEvent: function(event) {
    Buscador();
  }
});

    

