//Portée des variables
//les variables créées par let ou const  
//ne peuvent être vues ou utilisées
//qu'à l'intérieur du bloc {} dans lequel elles sont déclarées.

//différence let et var :
//https://putaindecode.io/articles/es6-es2015-la-declaration-de-variables-avec-const-let-et-var/

let L1 = "Let1";
const C1 = "Const1";
if(true){
    let L2 = "Let2";
    const C2 = "Const2";
    //déclarées dans le bloc parent donc accessibles
    console.log(L1,C1);
    //déclarées dans ce bloc donc accéssibles
    console.log(L2,C2);//
}
//déclarées dans ce bloc donc accessibles
console.log(L1,C1);
//non déclarées dans ce bloc donc non-accéssibles
//console.log(L2,C2);

/* LES OBJECTS */

let emptyObject = {} //Object vide

//Création d'un object (en littéral)
let personne = { 
    firstName : "Bill",
    lastName : "Gates",
    age : 0,
    last_param : "toto",

    fullName : function(){
        return this.firstName + " " + this.lastName; 
        //this represente l'object personne
    }
}
console.log(personne); //JSON : { key : value, ... }
console.log(typeof(personne));

//Accès aux propriétés
console.log(personne.age); //ou
console.log(personne['age']);
//Modifiction d'une propriété
personne.age = 30; //ou
personne['age'] = 30;
console.log(personne.age);
//Utilisation d'une fonction
personne.fullName();
//Création d'une nouvelle propriété
personne.gender = "M";
//Création d'une nouvelle fonction
personne.parle = function(text){
    text = this.fullName() + " a dit : " + text;
    console.log(text);
}

//Utilisation d'une fonction constructeur
function Personne(firstName, lastName, age){
    this.firstName = firstName;//this represente l'object personne
    this.lastName = lastName;
    this.age = age;

    this.fullName = function(){
        return this.firstName + " " + this.lastName; 
    }
}
//Création d'un nouvel object Personne dans une variable bill
let bill = new Personne("Bill", "Gates", 0);
//Accès aux propriétés
bill.age;
bill['age'];
//modification d'une propriété
bill.age = 30;
//utilisation d'une fonction
bill.fullName();
//Création d'une nouvelle propriété
bill.gender = "M";
//Création d'une nouvelle fonction
bill.parle = function(text){
    text = this.fullName() + " a dit : " + text;
    console.log(text);
}
//Création d'un nouvel object Personne dans une variable steve
let steve = new Personne("Steve", "Jobs", 0);
//steve et bill sont 2 object Personne différents
//Si je modifie une propriété de steve, 
//la propriété de bill correspondante n'est pas modifiée
steve.age = 50;
bill.age;
//steve ne possède ni la propriété gender ni la fonction parle 
//que nous avons créé pour bill
steve.gender;
//steve.parle();

//Si je souhaite créer une propriété pour tous les object Personne,
//je dois le faire via le prototype de Personne
Personne.prototype.height = 0;
bill.height = 170;
steve.height = 180;
//Si je souhaite créer une nouvelle fonction pour tous les object Personne,
//je dois le faire via le prototype de Personne
Personne.prototype.grandir = function(taille){
    this.height += taille;
}
bill.grandir(5);

//Utilisation d'une classe
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.date = new Date();
    }
    fullName(){
        return this.firstName + " " + this.lastName; 
    }
}
let pers = new Person("Robert", "Redford", 99);
Person.prototype.gender = "M";
Person.prototype.vieillir = function(year){
    this.age += year;
}

//Héritage : Tous les objets créés en js héritent de la classe Object, 
//ils partagent le même prototype, voir la propriété __proto__
//ils héritent donc des propriétés et fonctions de la classe Object
class Child extends Person{
    constructor(firstName, lastName, age, prop){
        super(firstName, lastName, age);
        //Autres propriétés
        this.prop = prop;
    }
    jouer(jeu){
        console.log(this.fullName() + " joue à " + jeu)
    }
}

let enfant = new Child("Nicolas", "Lepetit", 5, "prop");
//Accès aux fonctions et propriétés de la classe mère 
//(via le prototype)
enfant.vieillir(1);

let enfant2 = new Child("Sophie", "Lagrande", 10);
//Destruction d'une propriété d'un object (pas d'une classe):
delete enfant.prop;

//Exercice :
//Créer une class Vehicule avec les propriétés longueur, poid, distance

class Vehicule{
    constructor(longueur, poid, distance){
        this.longueur = longueur;
        this.poid = poid;
        this.distance = ( (distance) ? distance : 0 );
    }
}

let monVehicule1 = new Vehicule(4.5, 1569, 0);
let monVehicule2 = new Vehicule(4.2, 1359);

//Créer une class Car avec les propriérés 
//longueur, poid, distance, marque, couleur 
//et la fonction rouler(vitesse, temps)

class Car extends Vehicule{

    constructor (longueur, poid, distance,marque,couleur)
    {
        super(longueur, poid, distance);
        this.marque = marque;
        this.couleur = couleur;
    }

    rouler(vitesse,temps)
    {
    return this.distance += vitesse / 60 * temps;
   }

}
let voiture = new  Car(5,1000,undefined,"Peugeot","red");
voiture.rouler(100,60);
//Créer une classe Plane avec les propriétés 
//longueur, poid, distance (en km), maxPassager 
//et la fonction voler(vitesse, temps)
//vitesse en noeuds (1.852 km/h) et temps en minutes

class Plane extends Vehicule{
    constructor(longueur, poid, distance, maxPassager) {
        super(longueur, poid, distance);
        this.maxPassager = maxPassager ? maxPassager : 0;
}
    voler(vitesse,temps)
    {
    return this.distance += vitesse / 1.852 / 60 * temps;
   }
}

let boNavion = new Plane (30, 48000);

boNavion.voler(500, 100);
boNavion.maxPassager = 600;

let bp;






















