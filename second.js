var obtenerLista=document.getElementById("lista")
var listaclick=document.getElementById("listaMostrar")
var totLike=0
var info=document.getElementById("info")
var tabla=document.getElementById("tabla")
var cont=0
listaclick.addEventListener("click", 
function (){
    obtenerLista.innerHTML="<ol>"
    for(var i=0; i<=10; i++)
    {
        cont++
        obtenerLista.innerHTML+="<li>"+cont+".-" +"Elemeto de la lista</li>"
    }
    obtenerLista.innerHTML+="</ol>"
}
)

function like(){
    totLike++
    info.innerHTML=totLike+"  Me gusta"
}
var producto=[]
var precio=[]
var cantidad=[]
function compra() {
    var productoElemeto=document.getElementById("producto")
    var precioElemeto=document.getElementById("precio")
    var cantidadElemeto=document.getElementById("cantidad")
    tabla.innerHTML="<tr><th>Producto</th><th>Precio</th><th>Cantidad</th></tr>"

    producto.push(productoElemeto.value)
    precio.push(precioElemeto.value)
    cantidad.push(cantidadElemeto.value)
    for(var i=0; i<producto.length; i++)
    {
        tabla.innerHTML+="<tr><td>"+producto[i]+"</td><td>"+precio[i]+"</td><td>"+cantidad[i]+"</td></tr>"
    } 
    
}
function opcion(n){
    switch(n){
        case 1:
            document.getElementById("elementos").style.background="#F5A9E1"
        case 2:
            document.getElementById("process").style.background="#FA8258"
        case 3:
            document.getElementById("relleno").style.background="#E6E6E6"
    }
   

}