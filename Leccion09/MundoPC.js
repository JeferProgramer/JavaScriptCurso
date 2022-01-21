class DispositivoEntrada{
    constructor(tipoEntrada, Marca){
        this._tipoEntrada = tipoEntrada;
        this._Marca = Marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get Marca(){
        return this._Marca;
    }

    set Marca(Marca){
        this._Marca = Marca;
    }
}
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada,Marca){
        super(tipoEntrada,Marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton : ${this._idRaton}, tipoEntrada : ${this._tipoEntrada}, Marca: ${this._Marca}]`
    }
}
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada,Marca){
        super(tipoEntrada,Marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado : ${this._idTeclado}, tipoEntrada : ${this._tipoEntrada}, Marca: ${this._Marca}]`
    }
}
class Monitor{
    static contadorMonitores = 0;

    constructor(marca,tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño; 
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `Monitor: [idMonitor : ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`
    }

}
class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}
class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadoraOrden = ' ';
        for(let computadora of this._computadoras){
            computadoraOrden += ` \n ${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadoraOrden}`);
    }
}

let dispostivoEntrada1 = new DispositivoEntrada("Manual","Intel");
console.log(dispostivoEntrada1);

let raton1 = new Raton("USB","HP");
console.log(raton1.toString());
let raton2 = new Raton("Bluetooth","Dell");
raton2.Marca = "HP";
console.log(raton2.toString());

let teclado1 = new Teclado("Bluetooth", "MSI");
let teclado2  = new Teclado("USB", "Acer");
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new Monitor("HP",15);
let monitor2 = new Monitor("Dell", 27);
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora("HP", monitor1, raton1, teclado1);
console.log(`${computadora1}`)
let computadora2 = new Computadora("Armada", monitor2, raton2, teclado2);
console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();