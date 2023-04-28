let carrito =[];

//BOTONES
const btnCrga = document.getElementById("cargarItem");
btnCrga.addEventListener("click", cargarUnItem);

const btnVacio = document.getElementById("vaciar");
btnVacio.addEventListener("click",()=>{
    carrito = [];
    localStorage.clear();
    mostrarItemsCarrito();
});

//evento DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () =>{
    carrito = JSON.parse (localStorage.getItem("carrito")) || []; 
    if (carrito.length >0){
    mostrarItemsCarrito();
    }
});

//FUNCION DE CARGA
function cargarUnItem(){
    const nuevoItem = new Item();
    nuevoItem.codigo = prompt("Ingrese un codigo");
    nuevoItem.nombre = prompt("Ingrese un nombre");
    nuevoItem.precio = Number(prompt("Ingrese un precio"));
    nuevoItem.color = prompt("Ingrese el color del artículo");
    nuevoItem.unidades = prompt("Ingrese la cantidad");
   
    carrito.push(nuevoItem);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarItemsCarrito();
}

//FUNCION MOSTRAR ITEMS
function mostrarItemsCarrito(){
    const tabla = document.getElementById("items");
    tabla.innerHTML = "";
    let counter = 1;

    carrito.forEach((Item) =>{
        tabla.innerHTML +=`
        <tr>
          <th scope="row">${counter}</th>
          <td> ${Item.codigo} </td>
          <td> ${Item.nombre} </td>
          <td> ${Item.precio} </td>
          <td> ${Item.color} </td>
          <td> ${Item.unidades} </td>
          </tr>
          
          `;
        counter++;
        console.log(tabla.innerHTML);
    });

//TOTAL
        tr =document.createElement("tr");
        tr.innerHTML = `
        <tr>
          <th scope="row"></th>
          <td></td>
          <td> </td>
          <td></td>
          <td></td>
          <td></td>
          <td>${carrito.reduce((total,Item) => total + Item.precio* Item.unidades, 0)}</td>
          </tr>
          
          `;
          tabla.appendChild(tr);



function TotalCI(...Item){
    Item.forEach((Item)=> console.log(Item.precio*1.21));
}
TotalCI(...carrito);

function precioMinorista(...Item){
    Item.forEach((Item)=> console.log(Item.precio*1.21*1.80));
}
precioMinorista(...carrito);

}