//Rappel sur les Variables

let lastName; //Déclaration d'une variable lastName (let depuis ES6, auparavant var)
//Compatibilité navigateurs ? https://caniuse.com

let firstName = "Bill"; //Déclaration d'une variable firstName avec initialisation
lastName = "Gates"; //Affectation d'une valeur à une variable
console.log(firstName, lastName);

//Déclaration d'une constante fullName avec initialisation obligatoire
const fullName = firstName + " " + lastName; 
console.log(fullName);

lastName = "Jobs";
firstName = "Steve";
console.log(fullName);

try{ //Bloc try catch pour gérer les erreurs
    fullName = "Steve Jobs";
    //const constante;
    //Une constante doit obligatoirement être initialisée lors de sa déclaration

}
catch (error) {
    console.log(error); //La valeur d'une constante ne peut pas être modifiée
}
finally{
    //Bloc éxécuté quoi qu'il arrive (Optionnel)
}












let bp;