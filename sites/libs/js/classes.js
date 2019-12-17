// let variableDansClasses = "Azerty";

// function myFunc(){
//     console.log("Fonction dans classes.js")
// }

//Classe Product
class Product{
    constructor(id, nom, description, prix, category_id){
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.category_id = category_id;
    }

    //Converti un objet json en objet de type Product
    static fromJsonObj(jsonObj){
        return new Product(jsonObj.id, jsonObj.nom, jsonObj.description, jsonObj.prix, jsonObj.category_id)
    }
    //converti un tableau d'objets json en tableau d'objets Product
    static fromJsonObjArray(jsonObjArray){
        return jsonObjArray.map(elt => Product.fromJsonObj(elt))
    }

}
//Création de 6 objets de type (de la classe) Product :
let prod1 = new Product(1, "Prise 220V", "...", 19.5, 1);
let prod2 = new Product(2, "Raccord en cuivre diam 50", "...", 5, 2);
let prod3 = new Product(3, "Bobine de fil bleu, long : 20m", "", 27.8, 1);
let prod4 = new Product(4, "Bobine de fil rouge, long : 20m", "", 27.8, 1);
let prod5 = new Product(5, "Robinet style", "...", 77.5, 2);
let prod6 = new Product(6, "tuyau PER, diam 45, long 2m", "...", 25, 2);
//Création d'un tableau contenant mes 6 objets Product
let products = [];
products.push(prod1, prod2, prod3, prod4, prod5, prod6);
//Conversion de mon tableau products en string json
let productsJson = JSON.stringify(products);
//Envoi d'une requette ajax post vers req.php 
//pour écrire le fichier json sur le serveur
let dataToPostProducts = {
    table: "products",
    data: productsJson
}
$.post("../templates/req.php", dataToPostProducts).done(function(resp){
    //resp = reponse du serveur (ce que req.php renvoi)
    let bp;
});
//Je vide le tableau products
products = undefined;
//Envoi d'une requette ajax post vers get_table.php
//pour lire le fichier products.json
$.post("../templates/get_table.php",{table:"products"}).done(function(resp){
    //resp = reponse du serveur (ce que get_table.php renvoi)
    products = JSON.parse(resp);//Convertion du texte contenu dans resp en Json
    products = Product.fromJsonObjArray(products); //Voir classe Products
    let bp;
})

//Classe Category
class Category{
    constructor(id, nom){
        this.id = id;
        this.nom = nom;
    }

    //Converti un objet json en objet de type Category
    static fromJsonObj(jsonObj){
        return new Category(jsonObj.id, jsonObj.nom)
    }
    //converti un tableau d'objets json en tableau d'objets Category
    static fromJsonObjArray(jsonObjArray){
        return jsonObjArray.map(elt => Category.fromJsonObj(elt))
    }

}
//Création de 2 objets de type (de la classe) Category :
let cat1 = new Category(1, "Electricité");
let cat2 = new Category(2, "Plomberie");
//Création d'un tableau contenant mes 2 objets Category
let categories = [];
categories.push(cat1, cat2);
//Conversion de mon tableau categories en string json
let categoriesJson = JSON.stringify(categories);
//Envoi d'une requette ajax post vers req.php 
//pour écrire le fichier json sur le serveur
let dataToPostCategory = {
    table: "categories",
    data: categoriesJson
}
$.post("../templates/req.php", dataToPostCategory).done(function(resp){
    //resp = reponse du serveur (ce que req.php renvoi)
    let bp;
});
//Je vide le tableau categories
categories = undefined;
//Envoi d'une requette ajax post vers get_table.php
//pour lire le fichier categories.json
$.post("../templates/get_table.php",{table:"categories"}).done(function(resp){
    //resp = reponse du serveur (ce que get_table.php renvoi)
    categories = JSON.parse(resp);//Convertion du texte contenu dans resp en Json
    categories = Category.fromJsonObjArray(categories); //Voir classe Category
    let bp;
})





let bp;














