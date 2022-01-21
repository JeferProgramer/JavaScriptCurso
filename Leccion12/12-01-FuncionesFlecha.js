let  miFuncion = function(){
    console.log('Saludos desde mi funcion');
}

//let miFuncionFlecha = () => {
//    console.log('Saludos desde mi funcion flecha');
//}

//const miFuncionFlecha = () => {console.log('saludos desde mi funcion flecha')};

//miFuncionFlecha();

const saludar =  () => {return 'Saludos desde la funcion con retorno';}

console.log(saludar());

const regresarObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresarObjeto());

const funcionConParametros2 =  function(mensaje) {
    console.log(mensaje);   
}

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos con parametros');

const funcionConParametros3 = (op1, op2) => op1 + op2;
console.log(funcionConParametros3(2,3));
