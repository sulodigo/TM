
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

function mostrarDiv() {
    document.getElementById("contenedorPrincipal").style.display = "block";
}
 
function ocultarDiv() {
    //document.getElementById("contenedorPrincipal").onclick = null;  esto no me funcionó para ocultar el div
    document.getElementById("contenedorPrincipal").style.display = "none";
}

function limpiar(){
    // alert("Estoy borrando info...");
    // const producto = document.getElementById("producto");
    // producto.value="";

    document.getElementById("producto").value="";
    document.getElementById("marca").value="0";
    document.getElementById("precio").value="";

    ocultarDiv();
}

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

function imprimirTablaEnHTML(){

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

function imprimirTarjetasEnHTML(){

const tarjetas1=document.getElementById("tarjetas1");
let htmlTarjetas = '';
        htmlTarjetas +=  '<div class="row">';

        for (let i = 0; i < productosDeTabla.length; i++) {
            htmlTarjetas += '<div class="col-sm-3 tarjeta">'
            htmlTarjetas += '   <div class="card text-center">';
            htmlTarjetas += '       <div class="card-header">';
            //htmlTarjetas += '<img src="./img/jgp.png" class="card-img-top" alt="...">';
            htmlTarjetas += '           <div class="card-body">' +  productosDeTabla[i].Producto + '</div>';
            htmlTarjetas += '           <h5 class="card-tittle">' +  productosDeTabla[i].Marca + '</h5>';
            htmlTarjetas += '           <div class="card-body">' +  productosDeTabla[i].Cantidad + '</div>';
            htmlTarjetas += '           <div class="card-footer">' +  productosDeTabla[i].Valor + '</div>';
            htmlTarjetas += '               <a href="#" class="btn btn-secondary">Comprar aquí! </a>';
            htmlTarjetas += '       </div>';
            htmlTarjetas += '   </div>';
            htmlTarjetas += '</div>';
        }

        htmlTarjetas += '</div>';
  
        tarjetas1.innerHTML = htmlTarjetas; 

}

function consultar(){
    mostrarDiv();
    imprimirTablaEnHTML();
    imprimirTarjetasEnHTML();
};
   
window.addEventListener("load", function(){

    // const btnPrueba = document.getElementById("btnPrueba");
    // btnPrueba.addEventListener("click", saludar);
    //document.getElementById("btnPrueba").addEventListener("click", saludar);

    // document.getElementById("prueba").onclick=saludar;

    document.getElementById("btnLimpiar").addEventListener("click", limpiar);

    document.getElementById("btnConsultar").addEventListener("click", consultar);

    //document.getElementById("btnTabla").addEventListener("click", imprimirTablaEnHTML);

    //document.getElementById("btnTarjetas").addEventListener("click", imprimirTarjetasEnHTML);

    // imprimirTablaEnHTML();

})