//Funcion
function Presentacion() {
    let IngreseSuNombre =  prompt("Hola extraño! ingresa tu nombre asi dejas de serlo")
    alert("Ah! eres tú "+ IngreseSuNombre + " Bienvenido!")
}
Presentacion();



//Arrays
let conjuntos = [];

function cargarProductos() {
    
        const NuevoItem = new productos();
        NuevoItem.nombre = prompt("Ingrese el nombre del producto");
        NuevoItem.codigo = prompt("Ingrese el codigo de " + NuevoItem.nombre );
        NuevoItem.precio = Number(prompt("Ingrese el precio"));
        NuevoItem.color = prompt("Ingrese el color");
        NuevoItem.unidades = Number(prompt("Cuantas unidades de "+ NuevoItem.nombre + " hay?"));

        conjuntos.push(NuevoItem);
}

//doWhile
const cargarMasProductos = () => {
        let seguir;
        do{
            cargarProductos();
            seguir = prompt("Queres seguir cargando productos? si/no").toLocaleLowerCase();
        }
        while (seguir == "si" ); 
}
   
//forEach
const producto = []

function mostrarItems(){
    conjuntos.forEach((producto)=> {
        console.log(producto.nombre);
        console.log("Precio con IVA: $"+ producto.sumarIVA());
        console.log("COD: " + producto.codigo);
        console.log("Color: "+ producto.color);
        console.log("Precio Minorista: $"+ producto.precioMinorista());
    
            if(producto.unidades < 1 ){
                console.log("sin stock")
            }
            else{ 
                if(producto.unidades > 1)
                 console.log("stock: "+ producto.unidades)
            }    
    
        console.log(conjuntos)
    });    
    
//FOS Reduce    

    const totalStock = conjuntos.reduce((acumulador, producto) => { return acumulador + producto.unidades;}, 0);
        console.log("El total de unidades fisicas es: "+  totalStock);

    const totalCapital = conjuntos.reduce((acumulador, producto) => { return acumulador + (producto.precio* producto.unidades);}, 0);
        console.log("El capital total sin IVA es : $"+  totalCapital);
}
    
cargarMasProductos();
   
mostrarItems();
  

