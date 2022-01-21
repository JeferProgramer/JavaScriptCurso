

let persona = {
    Nombre : 'Juan',
    Apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    idioma: 'Español',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
     get nombreCompleto () {
        return this.Nombre + ' ' + this.Apellido
    }
}

console.log(persona.lang);

persona.lang = "en";
console.log(persona.lang)
console.log(persona.idioma)

