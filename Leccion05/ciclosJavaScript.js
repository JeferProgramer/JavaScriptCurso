/*let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
}
do {
    console.log(contador);
    contador++;
} while (contador < 3);
*/
inicio:
for (let index = 0; index <= 10; index++){
    if(index % 2 !== 0){
        continue inicio; //ir a la siguiente iteracion
    }else{
        console.log(index);
    }
}