'use strict'

var greenl = {
    hero: "Hal Jordan", power: "Magic ring", city: "Central"
}

var superheroes = [
{
    hero: "Superman", power: "Fly, strength", city: "Metropolis"
},
{
    hero: "Batman", power: "Martial arts, gadgets", city: "Gothic"
},
{
    hero: "Wonder Woman", power: "Fly, strength", city: "Temisclira"
},

    greenl
// va sin los {} para que cuente como objeto
]

console.log(superhero)

greenl.tituto = "Jon Stewart";

console.log(superheroes)

var superhero;

for (superhero in superheroes){
    var parrafo = document.createElement("p")
    var texto = document.createTextNode(`He/She is ${superheroes[superhero].hero} his/her superpower is ${superheroes[superhero].power} and protect ${superheroes[superhero].city}`)
    parrafo.appendChild(texto)
    document.querySelector("#div").appendChild(parrafo)

}