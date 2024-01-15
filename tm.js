// window.addEventListener('load', function() {

//     const prueba = document.querySelector(".prueba");
    
    

//     prueba.addEventListener("click", saludar);
   
// });

// function saludar(){
//     alert("Hola, ¿cómo estás?");
// }

function saludar(){
    alert("Hola");
}

function limpiar(){
    // alert("Estoy borrando info...");
    // const producto = document.getElementById("producto");
    // producto.value="";

    document.getElementById("producto").value="";
    document.getElementById("marca").value="0";
    document.getElementById("precio").value="";
}

window.addEventListener("load", function(){

    // const btnPrueba = document.getElementById("btnPrueba");
    // btnPrueba.addEventListener("click", saludar);
    document.getElementById("btnPrueba").addEventListener("click", saludar);

    // document.getElementById("prueba").onclick=saludar;

    document.getElementById("btnLimpiar").addEventListener("click", limpiar);

});