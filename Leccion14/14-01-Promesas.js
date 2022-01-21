let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver('Resuelto Correcto');
    else
        rechazar('Se produjo un Error')
});

//miPromesa.then( valor => console.log(valor),error => console.log(error) );
//miPromesa.then( valor => console.log(valor)).catch((error => console.log(error)));

let promesa = new Promise((resolver) => {
    //console.log('Inicio Promesa');
    setTimeout(() => resolver('saludos con promesa y timeout'),3000);
    //console.log('Fin Promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que una funcion regresa una promesa
async function miFuncionPromesa() {
    return 'saludos con promesa y async';
}

//miFuncionPromesa().then(valor => console.log(valor));
//async y await
async function FuncionPromesaAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await')
    });

    console.log(await miPromesa);
}

//FuncionPromesaAwait();
//promesas,await,async y setTimeout

async function FuncionPromesaAwaitTimeout() {
    console.log('Inicio funcion')
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('promesa con await y timeout'), 3000);
    });
    console.log( await miPromesa);
}

FuncionPromesaAwaitTimeout();