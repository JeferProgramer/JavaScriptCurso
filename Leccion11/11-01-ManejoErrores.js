let resultado = -1;

try{
    if( isNaN(resultado)) throw 'No es Numero';
    else if (resultado === '') throw 'Es Cadena Vacia';
    else if (resultado >= 0 ) throw 'Es Valor Positivo';
    else if (resultado < 0) throw 'Valor Negativo';
}catch(error){
    console.error(error);
    //console.log(error.name);
    //console.log(error.message);
}finally{
    console.log('Termina revision de errores');
}