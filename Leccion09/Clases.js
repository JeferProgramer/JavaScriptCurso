class Persona{

    static contadorPersona = 0;

    static get MAX_OBJ(){
        return 5;
    }
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;   
        }
        else{
            console.log("se han superado el maximo de objetos permitidos");
        }
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido; 
    }
    nombreCompleto(){
        return this.idPersona+ ' '+ this._nombre + ' ' + this._apellido
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(persona){
        console.log('saludos desde el metodo estatico' + persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido); //llamar al constructor de la casa padre
        this._departamento = departamento;
    } 
    
    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = this.departamento;
    }
    //Sobrescritura
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido + ' , ' + this._departamento
    }
} 

let Persona1 = new Persona('Juan','Perez');
console.log(Persona1.toString());

let empleado1 = new Empleado('Maria','Jimenez', 'Sistemas');
console.log(empleado1.toString());

let persona2 = new Persona('Mariana', 'Lara');
let persona3 = new Persona('Karla', 'Ramirez');
let persona4 = new Persona('Carla', 'Melo');
let persona6 = new Persona('arroz','Hola')
let persona5 = new Persona('Karla','oTRA VEZ');

console.log(Persona.contadorPersona);
console.log(Persona.MAX_OBJ);

