//Commentaire sur une ligne
/*
Commentaire multiligne
*/

//Exercice 
//Ecrire une fonction qui écrit un message (passé en paramètre) dans la console
// function writeInConsole(message){
//     console.log(message);
// }

// //J'utilise ma fonction :
// writeInConsole("Bonjour");
// writeInConsole("Hello ...");

//Exercice : écrire une fonction qui vérifie qu'une variable est bien un nombre
//(on a vu que isNaN ne fonctionnait pas pour tout, ex : isNaN(true) vaut false)
//La fonction renvoi true si la variable qui lui est passée 
//en paramètre est un "vrai" nombre
function isNumber(expr){
    //indice : utiliser les fonctions parseFloat() et isNaN()
    let valeur = parseFloat(expr);
    return !isNaN(valeur);
    // if(isNaN(valeur) == true){
    //     return false;
    // }else{
    //     return true;
    // }
}
//Tests
let test = isNumber("text");
test = isNumber(true);
test = isNumber(10);
test = isNumber(10.2);

//Exercice
//Ecrire un programme qui demande à l'utilisateur de saisir un texte
//(utiliser la fonction prompt)
//et affiche le nombre de caractères composant ce texte à l'utilisateur
//(utiliser la fonction alert)
//indice : 
//Créer une fonction qui renvoi le nombre de caractère d'un texte (passé en paramètre)
// function countChar(text){
//     let count;
//     count = text.length;
//     return count;
// }

// function main(){
//     let texteSaisi = prompt("Bonjour, veuillez saisir un texte.");
//     let resultat = countChar(texteSaisi);
//     alert("Votre texte contient " + resultat + " caractère(s)");
//     //idem :
//     alert( "Votre texte contient " + countChar(prompt("Bonjour, veuillez ...")));
// }
// main();



//Exercice
//Ecrire une programme qui demande à l'utilisateur de saisir un nombre
//Tant que la saisie n'est pas un nombre, lui redemander
//(fonction prompt)
//et affiche à l'utilisateur si le nombre saisi est positif (ou égale à 0) ou négatif 
//(fonction alert)
//indice :
//Créer une fonction qui renvoi true si le nombre est >= 0, false si le nombre est <0
function isPositif(nombre){
    let retour;
    if(nombre >= 0){
        retour = true;
    }else{
        retour = false;
    }
    return retour;
}
let res = isPositif(-1);
res = isPositif(0);
res = isPositif(1);

function main2(){
    let saisie = prompt("Saisir un nombre");
    //utiliser while
    while(isNumber(saisie) == false){
        saisie = prompt("Saisir un nombre");
    }
    let condition = isPositif(saisie);
    if(condition == true){
        alert("Votre nombre est positif ou égale à 0");
    }
    else{
        alert("Votre nombre est négatif");
    }
}
main2();



let bp = "Mon point d'arrêt !";



























