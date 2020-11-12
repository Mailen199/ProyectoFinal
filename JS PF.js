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
setInterval(cambiarImagen,3000);
var foto=1;
function cambiarImagen(){
    if(foto===1){
        document.getElementById("1").hidden = true;
        document.getElementById("2").hidden = false;
        foto++;
    }else if(foto===2){
        document.getElementById("2").hidden = true;
        document.getElementById("3").hidden = false;
        foto++;
    }else if(foto===3){
        document.getElementById("3").hidden = true;
        document.getElementById("4").hidden = false;
        foto++;
    }else if(foto===4){
        document.getElementById("4").hidden = true;
        document.getElementById("5").hidden = false;
        foto++;
    }else if(foto===5){
        document.getElementById("5").hidden = true;
        document.getElementById("6").hidden = false;
        foto++;
    }else if(foto===6){
        document.getElementById("6").hidden = true;
        document.getElementById("7").hidden = false;
        foto++;
    }else if(foto===7){
        document.getElementById("7").hidden = true;
        document.getElementById("8").hidden = false;
        foto++;
    }else if(foto===8){
        document.getElementById("8").hidden = true;
        document.getElementById("9").hidden = false;
        foto++;
    }else if(foto===9){
        document.getElementById("9").hidden = true;
        document.getElementById("1").hidden = false;
        foto=1;
    }
    
}
setInterval(slider,3000);
var fotos=1;
function slider(){
    if(fotos===1){
        document.getElementById("guille1").hidden = true;
        document.getElementById("guille2").hidden = false;
        fotos++;
    }else if(fotos===2){
        document.getElementById("guille2").hidden = true;
        document.getElementById("guille3").hidden = false;
        fotos++;
    }else if(fotos===3){
        document.getElementById("guille3").hidden = true;
        document.getElementById("guille4").hidden = false;
        fotos++;
    }else if(fotos===4){
        document.getElementById("guille4").hidden = true;
        document.getElementById("guille5").hidden = false;
        fotos++;
    }else if(fotos===5){
        document.getElementById("guille5").hidden = true;
        document.getElementById("guille6").hidden = false;
        fotos++;
    }else if(fotos===6){
        document.getElementById("guille6").hidden = true;
        document.getElementById("guille7").hidden = false;
        fotos++;
    }else if(fotos===7){
        document.getElementById("guille7").hidden = true;
        document.getElementById("guille1").hidden = false;
        fotos=1;
    }
    
}