//Les Tableaux
let names = [];//Déclaration d'un tableau vide
console.log(names);
console.log(typeof(names));//object
names = ["Alain","Bernard","Coralie"];//Affectation de 3 valeurs dans le tableau
console.log(names);
//accès aux éléments d'un tableau par l'index
let name1 = names[0]; //le 1er élément à pour index 0 
let name2 = names[1];
let name3 = names[2];
let name4 = names[3]; //N'existe pas !
console.log(name1, name2, name3, name4);
//nb éléments dans le tableau
let longueur = names.length;
console.log(longueur);
console.log(names[longueur]);//Index maximum = longueur - 1

//ajout d'un élément avec l'index
names[3] = "Denise";
console.log(names);
console.log(names.length);
//remplacement d'un élément avec l'index
names[2] = "Christine";
console.log(names);

//Parcours des éléments d'un tableau
for(let i = 0; i < names.length; i++){
    let name = names[i];
    console.log(name);
}

//fonctions sur les tableaux : map, slice, sort, etc ...
//https://www.w3schools.com/js/js_array_methods.asp
//fonctions sur les string : split, 
//https://www.w3schools.com/js/js_string_methods.asp

//Exercice
//Créer 5 tableaux [nom, prenom, birth]
// ex : let tab1 = ["Laurent", "Bedu", "YYYY-MM-DD"]
//Créer un tableau contenant ces 5 tableaux
//Créer une fonction permettant d'afficher dans la console 
//le nom et le prenom et l'age de chaque personne sur une ligne différente
//Voir Date : https://www.w3schools.com/js/js_dates.asp
// https://www.w3schools.com/jsref/jsref_obj_date.asp

let tableau = [
    ["François","Premier","1980-01-01"],
    ["Jack","Ryan","1950-06-06"],
    ["James","Bond","1940-07-07"],
    ["Thomas","Cook","1960-08-08"],
    ["Jean-Pierre","Papin","1970-09-09"]
]

function getAge(birthday) {
    let birth = new Date(birthday);
    let ageDifMs = Date.now() - birth.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function execute(){
    for(let i = 0; i < tableau.length; i++){
        let msg = tableau[i][0] + " " + tableau[i][1] +
            " " + getAge(tableau[i][2]);
        console.log(msg);
    }
}
execute();

//Exercice :
let phrase = "Oui, j'aime a faire apprendre un nombre utile aux sages.";
let mots = phrase.split(" ");
console.log(mots);
//écrire une fonction qui à partir d'une phrase passée en paramètre 
//renvoi le tableau des mots qui la composent 
//sans utiliser la fonction split
//indices :
//une chaine est un tableau de caractères
//utiliser une boucle for pour parcourir la chaine
//utiliser la methode push pour ajouter un élément dans un tableau
function isChar(char){
    let isChar = false;
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-";
    isChar = alphabet.indexOf(char) >= 0;
    return isChar;
}
function getWords(text){
    let result = [];
    let mot = "";
    // //for classique
    // for(let i=0; i<text.length; i++){
    //     let char = text[i];
    //     if(isChar(char)){
    //         mot += char;
    //     }
    //     else{
    //         mot != "" ? result.push(mot) : null;
    //         mot = "";
    //     }
    // }
    // mot != "" ? result.push(mot) : null;

    // for(let i in text){
    //     let char = text[i];
    //     if(isChar(char)){
    //         mot += char;
    //     }
    //     else{
    //         mot != "" ? result.push(mot) : null;
    //         mot = "";
    //     }
    // }
    // mot != "" ? result.push(mot) : null;

    for(let char of text){
        if(isChar(char)){
            mot += char;
        }
        else{
            mot != "" ? result.push(mot) : null;
            mot = "";
        }
    }
    mot != "" ? result.push(mot) : null;

    return result;
}

//Exercice
//Ecrire un programme qui demande à l'utilisateur de saisir un nombre
//tant que ce nombre n'est pas compris entre 0 et 20 (note à un examen)
//et affiche à l'utilisateur la mention correspondante à la note saisie
// <10 : Non reçu
// >=10 et <12 : Passable
// >=12 et <14 : Assez Bien
// >=14 et <16 : Bien
// >=16 et <18 : Très Bien
// >=18 et <20 : Excellent
// 20 : Parfait !
//indices : 2 fonctions
//voir le switch
function demandeNote(){
    let saisie;
    //...
    let note = parseInt(saisie);
    //...
    return note;
}
function afficheMention(note){
    //...
}

function main(){
    let note = demandeNote();
    afficheMention(note);
}

getWords(phrase);






































































