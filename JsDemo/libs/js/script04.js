//Les Fonctions

writeHelloInConsole(); //Appel de la fonction writeHelloInConsole (éxécution)

function writeHelloInConsole(){ //Définition de la fonction writeHelloInConsole
    console.log("Hello");
}

let retour = writeHelloInConsole(); //Appel de la fonction writeHelloInConsole (éxécution)
type = typeof(retour);
console.log(type); //undefined, la fonction n'a pas de valeur de retour


type = typeof(writeHelloInConsole);
console.log(type); //function

writeInConsole("mon message", false);
//Fonction avec paramètres et sans valeur de retour
function writeInConsole(msg, test){
    //test ? console.warn(msg) : console.log(msg); //Opérateur ternaire equivalent à :
    if(test){
        console.warn(msg);
    }
    else{
        console.log(msg);
    }
}
writeInConsole("warning", true);

function add(a, b, write){ //Fonction avec paramètres et valeur de retour number
    let result = a + b;
    write ? console.log(result) : null; 
    return result; 
}

let addition = add(0.1, 0.2, true);

add(1, 2); //le 3ème paramètre est absent, il vaut undefined


let bp;