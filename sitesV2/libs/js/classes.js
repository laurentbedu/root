class Application{
    constructor(){}

    static loadDatas(){
        let productRequest = $.post("../templates/get_table.php", {table:"products"})
        let categoryRequest = $.post("../templates/get_table.php", {table:"categories"})
        let usersReq = $.post("../templates/get_table.php", {table:"users"})
        
        return $.when(productRequest,categoryRequest,usersReq);
    }

    static navigate(page, obj){
        $.post("../templates/"+page+".html").done(function(resp){
            localStorage.setItem('page',page);
            localStorage.setItem('obj',obj);
            //Affichage du contenu de la page
            $("#content-page").html(resp);
            //
            let newObj;
            switch(page){
                case 'category' : 
                    newObj = new Category(); break;
                case 'product' : 
                    newObj = new Product(); break;
                case 'user' : 
                    newObj = new User(); break;
                default :
                    newObj =new Object();
            }

            obj = obj  =! null ?  
                Object.assign(newObj, obj) :
                newObj;

            //Initialisation des events
            $('[data-action]').each(function(){
                $(this).on('click', function(){
                    let currentTable, currentList, currentId, currentFilter,currentObj;

                    switch ($(this).attr("data-action")){
                        case "insertOrUpdate" :
                            obj.insertOrUpdate();
                            break;
                        case "delete" :
                            currentTable = $(this).closest('[data-table]').attr('data-table')
                            currentList = $(this).closest('[data-display]').attr('data-display')
                            currentId = $(this).closest('[data-table]').find('[data-field="id"]').text();
                            currentFilter = Application.datas[currentList]
                                .filter(item => item.id == currentId);
                            currentObj = currentFilter.length == 1 ? currentFilter[0] : null;
                            //Application.navigate(currentTable, currentObj)
                            currentObj.delete(); 
                            break;
                        case "edit" : 
                             currentTable = $(this).closest('[data-table]').attr('data-table')
                             currentList = $(this).closest('[data-display]').attr('data-display')
                             currentId = $(this).closest('[data-table]').find('[data-field="id"]').text();
                             currentFilter = Application.datas[currentList]
                                .filter(item => item.id == currentId);
                             currentObj = currentFilter.length == 1 ? currentFilter[0] : null;
                            Application.navigate(currentTable, currentObj)
                            break;
                    }
                })
            })
            //Affichage des données
            if(Application.datas[page]){
                //page de type liste
                for(let elt of Application.datas[page]){
                    let table = $('[data-model]').attr('data-model')
                    let tableLine = $('[data-model="'+table+'"]').clone(true);
                    $(tableLine).removeAttr('data-model');
                    $(tableLine).find('[data-field]').each(function(i, v){
                        $(this).text(elt[$(this).attr('data-field')])
                    })
                    $('[data-display="'+page+'"]').append($(tableLine));
                }
            } else if(obj.id > 0){
                //objet existant donc update
                $('h3').text("Editer " + obj.line);
                $('[data-field]').each(function(){
                    $(this).val(obj[$(this).attr("data-field")]);
                    $(this).on('change', function(){
                        obj[$(this).attr("data-field")] = $(this).val();
                    })
                })
            } else {
                //nouvel objet donc insert
                $('[data-field]').each(function(){
                    $(this).val(obj[$(this).attr("data-field")]);
                    $(this).on('change', function(){
                        obj[$(this).attr("data-field")] = $(this).val();
                    })
                })
            }

        })
    }
}

class Table{
    constructor(table, line){
        this.table = table;
        this.line = line;
    }

    
    static sendRequest(currentObj, list){
        let dataToPost = {
            table: currentObj.table,
            data: JSON.stringify(list)
        }
        $.post("../templates/set_table.php", dataToPost).done(function(resp){
            if(resp == 1){
                Application.datas[dataToPost.table] = list;
                Application.navigate(dataToPost.table);
            }
        }).fail(function(error){
            //try again ?
        });
    }

    insertOrUpdate(){
        let list = Object.assign([],Application.datas[this.table]);
        let exists = list.filter(line => line.id == this.id).length == 1;
        if(!exists){//insert
            let maxId = Math.max.apply(Math, list.map(line => line.id))
            this.id = maxId <= 0 ? 1 : maxId + 1;
            list.push(this);
        }
        else{//update
            list = list.map(line => {return line.id ==  this.id ? this : line});
        }
        Table.sendRequest(this, list);
        // let dataToPost = {
        //     table: this.table,
        //     data: JSON.stringify(list)
        // }
        // $.post("../templates/set_table.php", dataToPost).done(function(resp){
        //     if(resp == 1){
        //         Application.datas[dataToPost.table] = list;
        //         Application.navigate(dataToPost.table);
        //     }
        // }).fail(function(error){
        //     //try again ?
        // });

    }

    delete(){
        let list = Object.assign([],Application.datas[this.table]);
        let exists = list.filter(line => line.id == this.id).length == 1;
        if(exists){
            list = list.filter(line => line.id != this.id);
        }
        Table.sendRequest(this, list);
        // let dataToPost = {
        //     table: this.table,
        //     data: JSON.stringify(list)
        // }
        // $.post("../templates/set_table.php", dataToPost).done(function(resp){
        //     if(resp == 1){
        //         Application.datas[dataToPost.table] = list;
        //         Application.navigate(dataToPost.table);
        //     }
        // }).fail(function(error){
        //     //try again ?
        // });
    }

}

class User extends Table{
    constructor(id, nom, prenom, age){
        super("users","user")
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        //this.category_id = category_id;
    }

    //Converti un objet json en objet de type Product
    static fromJsonObj(jsonObj){
        return new User(jsonObj.id, jsonObj.nom, jsonObj.prenom, jsonObj.age)
    }
    //converti un tableau d'objets json en tableau d'objets Product
    static fromJsonObjArray(jsonObjArray){
        return jsonObjArray.map(elt => User.fromJsonObj(elt))
    }
}

//Création de 2 objets de type (de la classe) User :
let user1 = new User(1, "aaa","",10);
let user2 = new User(2, "bbb", "",20);
//Création d'un tableau contenant mes 2 objets User
let users = [];
users.push(user1, user2);
//Conversion de mon tableau users en string json
let usersJson = JSON.stringify(users);
//Envoi d'une requette ajax post vers set_table.php 
//pour écrire le fichier json sur le serveur
let dataToPostUsers = {
    table: "users",
    data: usersJson
}
$.post("../templates/set_table.php", dataToPostUsers).done(function(resp){
    //resp = reponse du serveur (ce que set_table.php renvoi)
    let bp;
});

//Classe Product
class Product extends Table{
    constructor(id, nom, description, prix, category_id){
        super("products","product")
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
//Envoi d'une requette ajax post vers set_table.php 
//pour écrire le fichier json sur le serveur
let dataToPostProducts = {
    table: "products",
    data: productsJson
}
$.post("../templates/set_table.php", dataToPostProducts).done(function(resp){
    //resp = reponse du serveur (ce que set_table.php renvoi)
    let bp;
});
/*
//Je vide le tableau products
products = undefined;
//Envoi d'une requette ajax post vers get_table.php
//pour lire le fichier products.json
$.post("../templates/get_table.php",{table:"products"}).done(function(resp){
    //resp = reponse du serveur (ce que get_table.php renvoi)
    products = JSON.parse(resp);//Convertion du texte contenu dans resp en Json
    products = Product.fromJsonObjArray(products); //Voir classe Products
    console.log(products)//products est un tableau contenant 6 objets Product
    let bp;
})
*/

//Classe Category
class Category extends Table{
    constructor(id, nom){
        super("categories","category")
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

    static byId(id){
        let tab = Application.datas.categories.filter(item => item.id == id);
        return tab.length == 1 ? tab[0] : null;
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
//Envoi d'une requette ajax post vers set_table.php 
//pour écrire le fichier json sur le serveur
let dataToPostCategory = {
    table: "categories",
    data: categoriesJson
}
$.post("../templates/set_table.php", dataToPostCategory).done(function(resp){
    //resp = reponse du serveur (ce que set_table.php renvoi)
    let bp;
});
/*
//Je vide le tableau categories
categories = undefined;
//Envoi d'une requette ajax post vers get_table.php
//pour lire le fichier categories.json
$.post("../templates/get_table.php",{table:"categories"}).done(function(resp){
    //resp = reponse du serveur (ce que get_table.php renvoi)
    categories = JSON.parse(resp);//Convertion du texte contenu dans resp en Json
    categories = Category.fromJsonObjArray(categories); //Voir classe Category
    console.log(categories)//categories est un tableau contenant 2 objets Category
    let bp;
})
*/

let bp;














