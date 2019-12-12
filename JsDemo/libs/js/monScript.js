


// Le BOM
//L'object window
console.log(window);
console.log(window.screen);
console.log(window.screen.width);

console.log(window.location);
//window.location.href = "http://www.google.com"

// On a dèjà utilisé des objects
let table = [];
let tab = new window.Array();
// new Array();
tab[0] = "elt1";
console.log(tab);

let strObj = new window.String("chaine");
// new String("chaine");
console.log(strObj);
console.log(strObj.valueOf());
let str = "chaine"; //écriture raccourcie

let numObj = new window.Number(10);
//new Number(10);
console.log(numObj);
console.log(numObj.valueOf());
let num = 10; //écriture raccourcie

//Le DOM
//L'obect window.document 
console.log(window.document);
console.log(document);

let elt1 = document.getElementById("divTwo");
let elt1JQ = $('#divTwo');//JQ Attention Tableau

let elts2 = document.getElementsByClassName("cls1");//Tableau
let elt2JQ = $('.cls1');//JQ Attention Tableau

let elts3 = document.getElementsByName("div3");//Tableau
let elt3JQ = $('[name=div3]');//JQ Attention Tableau

let elts4 = document.getElementsByTagName("p");//Tableau
let elt4JQ = $('p');//JQ Attention Tableau

let elt5 = document.querySelector("#p22");
let elt5JQ = $('#p22');//JQ Attention Tableau
elt5JQ[0].append("TOTO");
let elt6 = document.querySelector("div .cls1");
let elt7 = document.querySelectorAll("p.cls1");//Tableau

let bp;

