function abrirMapa(){
    var mapa = document.getElementById("mapa");
    mapa.hidden=false;
    var abrir= document.getElementById("btnMapsAbrir");
    abrir.hidden=true;
    var cerrar= document.getElementById("btnMapsCerrar");
    cerrar.hidden= false;
}
function cerrarMapa(){
    var mapa = document.getElementById("mapa");
    mapa.hidden= true;
    var cerrar= document.getElementById("btnMapsCerrar");
    cerrar.hidden= true;
    var abrir= document.getElementById("btnMapsAbrir");
    abrir.hidden=false;

}
