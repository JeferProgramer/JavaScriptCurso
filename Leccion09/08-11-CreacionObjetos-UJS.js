let persona1 = {
    nombre: 'juan',
    apellido: 'perez',
    nombreCompleto: function(titulo, tel){
        return  titulo + ':' + this.nombre + ' ' + this.apellido + this.tel;
    }
}

let persona2 ={
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de apply
console.log(persona1.nombreCompleto());

let arreglo = ['Ing', '337474774'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

