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
/*var factura : number = 50 ;
var tip : number;
var cont : number = 0;
while(cont >= 50 && cont <= 300){
}*/

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
    var charit = list[i].charAt(posicion+1).toUpperCase();*/
    list[i] = list[i].substring(0,posicion) + list[i].charAt(posicion+1).toUpperCase() + list[i].substring(posicion+2);
    console.log(list[i]);
 }
