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

    faitQqch(){
        return this;
    }

    static staticFaitQqch(){
        return "je suis une fonction static";
    }

    static fromJsonObj(jsonObj){
        return new Product(jsonObj.id, jsonObj.nom, jsonObj.description, jsonObj.prix, jsonObj.category_id)
    }
    static fromJsonObjArray(jsonObjArray){
        return jsonObjArray.map(elt => Product.fromJsonObj(elt))
    }

}

function convertJsonToProduct(jsonObj){

    return new Product()
}

let prod = new Product(1, "Prise 220V", "...", 19.5, 1);
let obj = prod//.faitQqch();
let val = Product.staticFaitQqch();
//Classe Category avec :
class Category{
    constructor(id, nom){
        this.id = id;
        this.nom = nom;
    }
}
//Objets :
let cat1 = new Category(1, "Electricité");
let cat2 = new Category(2, "Plomberie");
let prod1 = new Product(1, "Prise 220V", "...", 19.5, 1);
//prod1.category_id = 1 donc Electricité
let prod2 = new Product(2, "Raccord en cuivre diam 50", "...", 5, 2);
//prod2.category_id = 2 donc Plomberie
let prod3 = new Product(3, "Bobine de fil bleu, long : 20m", "", 27.8, 1);
let prod4 = new Product(4, "Bobine de fil rouge, long : 20m", "", 27.8, 1);
let prod5 = new Product(5, "Robinet style", "...", 77.5, 2);
let prod6 = new Product(6, "tuyau PER, diam 45, long 2m", "...", 25, 2);

let products = [];
products.push(prod1, prod2, prod3, prod4, prod5, prod6);
let categories = [];
categories.push(cat1, cat2);
let productsJson = JSON.stringify(products);
let categoriesJson = JSON.stringify(categories);

console.log(productsJson);
console.log(categoriesJson);

let dataToPost = {
    table: "products",
    data: productsJson
}
$.post("../templates/req.php", dataToPost).done(function(resp){
    let bp;
});

products = undefined;
$.post("../templates/get_table.php",{table:"products"}).done(function(resp){
    products = JSON.parse(resp);
    products = Product.fromJsonObjArray(products); 
    let bp;
})



let bp;














