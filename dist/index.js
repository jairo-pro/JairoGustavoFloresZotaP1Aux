"use strict";
//PREGUNTA 1 
/*const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
date: 'Nov 9th, 2037',
odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};
var jugadores1: String[] =
    [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
    ];
    var jugadores2: String[] =
    [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
    ];
     var gk ='Neuer';
     var fieldplayers: String[] =
     [
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
     ];
     var allplayers : String[] =
     [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
     ];
     var players1Final: String[] =
     [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        'Thiago',
        'Coutinho',
        'Perisic',
     ];
     var equipo1
    */
//PREGUNTA2
var factura = 275;
var tip;
factura >= 50 && factura <= 300 ? tip = factura * 0.15 : tip = factura * 0.20;
console.log("Propina : " + tip);
console.log("Factura : " + factura + ", Propina: " + tip + ", Total : " + (factura + tip));
function calctip(fact) {
    tip = fact * 0.15;
    return fact >= 50 && fact <= 300 ? tip : fact * 0.20;
}
console.log("Funcion propina : " + calctip(factura));
/*  if(factura >= 50 && factura <= 300){
    console.log(tip = factura*0.15);
}
else{
    console.log(tip = factura*0.20);
}*/
var facturas = [22, 259, 176, 440, 37, 105, 10, 1100, 86, 52];
const Arrayvacio = [];
for (var i = 0; i < facturas.length; i++) {
    Arrayvacio.push("propina : " + calctip(facturas[i]) + "   ;   " + "Total : " + (calctip(facturas[i]) + facturas[i]));
}
console.log("Array de Propinas y Totales :");
console.log(Arrayvacio);
/*
//PREGUNTA3
var list : String[] =
[
    'underscore_case',
    'first_name',
    'Some_Variable',
    'calculate_AGE',
    'delayed_departure'
];
 for(var i=0;i<list.length;i++){
     list[i]= list[i].toLowerCase();
     //console.log(list[i].length);
    var posicion = list[i].indexOf('_');
    /*var newitem = list[i].substring(0,posicion);
    var subitem = list[i].substring(posicion+1);
    var charit = list[i].charAt(posicion+1).toUpperCase();
    list[i] = list[i].substring(0,posicion) + list[i].charAt(posicion+1).toUpperCase() + list[i].substring(posicion+2);
    console.log(list[i]);
 }*/
