//Les Opérateurs

//numériques et d'affectation : + - * / ++ -- += -= *= /=
let age = 10;
age += 5; //15
let resultat = 5/0;
console.log(resultat); //infinity
console.log(typeof(resultat)); //number

//de comparaison : < > <= >= != == !== ===
let test = "10" == 10;
console.log(test); //égalité de valeur
test = "10" === 10;
console.log(test); //égalité de valeur et de type

//logiques : && || !
let vrai = true, faux = false;
console.log(vrai && faux); //false
console.log(vrai || faux); //true
console.log(!vrai); //false

let expr = (vrai || vrai) && faux;//Attention aux priorités

let bp;













