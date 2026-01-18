
const usuario = {
    nombre: "Saul",
    apellido: "Odan",
    edad: "22",
    estaActivo: true
}

usuario.estaActivo=false;
console.log(usuario.nombre + " " + usuario.apellido);
console.log(usuario.estaActivo);


const carrito = {
    productos:["Laptop", "Mouse", "Teclado"],
    listarProductos(){
        for(let i of this.productos){
        console.log(i)
            
    }
    
},
    total:453,
    aplicarDescuento(total){
        const nuevoTotal = this.total-(this.total*0.10);
        return nuevoTotal;
    }
}
console.log(carrito.productos.length);
console.log(carrito.aplicarDescuento());


let pelicula ={
    titulo:"panda",
    director:"Juanito",
    genero:"fantasia",
    alquilada:false,
    alquilar(titulo, alquilada){
        this.alquilada=true;
        return console.log("La pelicula " + this.titulo + " ha sido alquilada");
    },
    devolver(){
        if(this.alquilada==false){
            return console.log("La pelicula "+ this.titulo + "ya se encuentra en estanteria")
        } else{
            this.alquilada=false;
            return console.log("Gracias por devolver el titulo");
        }
    }

    

}