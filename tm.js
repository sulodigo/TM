<<<<<<< HEAD
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

function imprimirTablaEnHTML(){

const productosDeTabla=[
    {Producto: "Alimento seco", Marca: "MasterCat", Cantidad: "15 kilos", Valor: "$34.890"},
    {Producto: "Alimento seco", Marca: "Meowi", Cantidad: "6 kilos", Valor: "$25.990"},
    {Producto: "Alimento seco", Marca: "Meowi", Cantidad: "3 kilos", Valor: "$10.990"},
    {Producto: "Alimento húmedo", Marca: "MasterCat", Cantidad: "1 sachet", Valor: "$1.500"},
    {Producto: "Snacks", Marca: "Gati", Cantidad: "1 sachet", Valor: "$990"},
    {Producto: "Snacks", Marca: "Michi", Cantidad: "1 sachet", Valor: "$890"},
    {Producto: "Juguetes", Marca: "Michi", Cantidad: "3 pelotas de colores", Valor: "$1.690"},
    {Producto: "Arena sanitaria", Marca: "Gati", Cantidad: "10 kilos", Valor: "$23.990"},
    {Producto: "Arena sanitaria", Marca: "MasterCat", Cantidad: "6 kilos", Valor: "$15.990"},
    {Producto: "Arena sanitaria", Marca: "Meowi", Cantidad: "4 kilos", Valor: "$9.990"},
]

const tabla1=document.getElementById("tabla1");
let htmlTabla = '';
        htmlTabla += '<table>';
        
        htmlTabla += '   <tr>'
        htmlTabla += '       <th>Producto</th>'
        htmlTabla += '       <th>Marca</th>'
        htmlTabla += '       <th>Cantidad</th>'
        htmlTabla += '       <th>Valor</th>'
        htmlTabla += '   </tr>'

        for (let i = 0; i < productosDeTabla.length; i++) {
            htmlTabla += '   <tr>'
            htmlTabla += '       <td>' +  productosDeTabla[i].Producto + '</td>'
            htmlTabla += '       <td>' +  productosDeTabla[i].Marca + '</td>'
            htmlTabla += '       <td>' +  productosDeTabla[i].Cantidad + '</td>'
            htmlTabla += '       <td>' +  productosDeTabla[i].Valor + '</td>'
            htmlTabla += '   </tr>'    
        }  
        
        htmlTabla += '</table>';
  
        tabla1.innerHTML = htmlTabla;
}
    
window.addEventListener("load", function(){

    // const btnPrueba = document.getElementById("btnPrueba");
    // btnPrueba.addEventListener("click", saludar);
    document.getElementById("btnPrueba").addEventListener("click", saludar);

    // document.getElementById("prueba").onclick=saludar;

    document.getElementById("btnLimpiar").addEventListener("click", limpiar);

    imprimirTablaEnHTML();
=======
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

>>>>>>> d81edaa6cbb5fd318e220ec672bc6bc6d24b0ed3
});