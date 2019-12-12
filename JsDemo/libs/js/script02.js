//Les Types js


let age, isMajor = false, nom = undefined, prenom = "Laurent";

let type = typeof(age);
console.log(type);//undefined
type = typeof(prenom);
console.log(type);//string
type = typeof(isMajor);
console.log(type);//boolean

prenom = 20; //typage dynamique
type = typeof(prenom);
console.log(type);//number

age = 20.5;
type = typeof(age);
console.log(type);//number

age = "20.5";
type = typeof(age);
console.log(type);//string

let integer = parseInt(age);//Convertion d'une chaine en entier
console.log(typeof(integer));//number

let real = parseFloat(age);//Convertion d'une chaine en réél
console.log(typeof(real));//number

integer = parseInt("Hello");
console.log(integer);// NaN
console.log(typeof(integer));//NaN est de type number
let isNotNumber = isNaN(integer);//La fonction isNaN permet de vérifier 
//si une variable est NaN
console.log(isNotNumber);//true

isNotNumber = isNaN(10.2);
console.log(isNotNumber);//false, car 10.2 est un nombre

isNotNumber = isNaN(true);
console.log(isNotNumber);//false, pourtant true n'est pas un nombre


















let bp;