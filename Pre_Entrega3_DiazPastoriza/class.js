//Objetos, Class

class Item{
    nombre;
    codigo;
    precio;
    color;
    unidades;
    disponibilidad;

    constructor(codigo,nombre,precio,color,unidades,disponibilidad)
    {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
        this.unidades = unidades;
        this.disponibilidad = disponibilidad;
    }
   
  
    precioMinorista()
    {
        return this.precio * 1.21 * 1.80;
    }
   
}