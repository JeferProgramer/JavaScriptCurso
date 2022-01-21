//let autos = new Array("bmw", "Mercedes Benz", "Volvo");
//recomendacion en array
const autos = ["bmw", "Mercedes Benz", "Volvo"];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + " : " + autos[i]);
}

autos[1] = "MerecedesBenz"
console.log(autos[1]);

autos.push("Audi");
console.log(autos);

console.log(autos.length);
autos[autos.length] = "cadillad";
console.log(autos);

autos[5] = "porshe";
console.log(autos);

console.log(typeof autos);
console.log(Array.isArray(autos));
console.log( autos instanceof Array)