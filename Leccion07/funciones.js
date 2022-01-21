
//declaracion de la funcion
/*function miFuncion(a, b) {
    console.log(arguments.length);
    return a + b;
}

//Llamando a la funcion
let resultado = miFuncion(2, 3);
console.log(resultado);

console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
*/

//Declaracion Funcion de tipo Expresion
/*let sumar = function( a = 4, b = 5, c = 3){ 
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);    
    return a + b + c
};

resultado = sumar(3, 6, 7);
console.log(resultado);*/

//los argumentos son los a y b
//const sumarFuncionTipoFlecha = (a, b) => a + b;
//los parametros son el 3 y el 5
/*resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);*/
// let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11, 3);
// console.log(resultado);
// function sumarTodo(){
//     let suma = 0;
//     for(let i = 0; i < arguments.length; i++){
//         suma += arguments[i]; // suma = suma + arguments[i] 
//     }
//     return suma;
// }
//tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20
}

//pasa por valor
cambiarValor(x); //10
console.log(x);

const persona = {
    nombre: 'juan',
    apellido: 'Perez'
}
function CambiarValorObjeto(p1) {
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara'; 
}
//Paso por referencia
CambiarValorObjeto(persona);
console.log(persona)