import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder: SanduicheBuilder = new SanduicheBuilder();
const director: Director = new Director(builder);

director.constructFrango();
const frango: Sanduiche = builder.getSanduiche();
console.log("Criando saduiche: " + frango.sanduicheType);
console.log("Pão: " + frango.bread);
console.log("Proteina: " + frango.protein.nome);
console.log("Salada: " + frango.salad);
console.log("Quantidade de molhos: " + frango.sauces.length);
console.log("Tipos de moolh:");
frango.sauces.forEach(function(sauce){
    console.log(sauce.nome);
});
console.log("----------------------------------------");

director.constructBacon();
const bacon: Sanduiche = builder.getSanduiche();
console.log("Criando sanduiche: " + bacon.sanduicheType);
console.log("Pão: " + bacon.bread);
console.log("Proteina: " + bacon.protein.nome);
console.log("Salada: " + bacon.salad);
console.log("Quantidade de molhos: " + bacon.sauces.length);
bacon.sauces.forEach(function(sauce){
    console.log(sauce.nome);
});
console.log("----------------------------------------");

director.constructSteak();
const steak: Sanduiche = builder.getSanduiche();
console.log("Criando sanduiche: " + steak.sanduicheType);
console.log("Pão: " + steak.bread);
console.log("Proteina: " + steak.protein.nome);
console.log("Salada: " + steak.salad);
console.log("Quantidade de molhos: " + steak.sauces.length);
steak.sauces.forEach(function(sauce){
    console.log(sauce.nome);
});
console.log("----------------------------------------");