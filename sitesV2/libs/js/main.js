
Application.loadDatas().then(function(productResponse, categoryResponse, userResp){
    Application.datas = {
        products : Product.fromJsonObjArray(JSON.parse(productResponse[0])), 
        categories : Category.fromJsonObjArray(JSON.parse(categoryResponse[0])),
        users : User.fromJsonObjArray(JSON.parse(userResp[0]))
    }
})


$("#newCategory").on('click', function(){
    Application.navigate("category");
    return;
    //Je "navigue" verss la page category.html 
    $.post("../templates/category.html", null).done(function(resp){
        //je récupère le contenu de category.html
        //pour l'afficher dans mon #content-page
        $("#content-page").html(resp);
        $("#btnValid").on('click', function(){
            //récupérer les données du formulaire
            let nom = $('[data-field="nom"]').val();
            //créer un nouvel objet category, puis l'insérer dans le fichier json
            let categ = new Category(0, nom).insert().done(function(resp){
                //une fois l'insertion de ma nouvelle catégorie je "navigue"
                //vers une page affichant la liste des catégories
                $.post("../templates/categories.html").done(function(resp){
                    //je récupère le contenu de categories.html
                    //pour l'afficher dans mon #content-page
                    $("#content-page").html(resp);
                    $('[data-model="category"] [data-action="edit"]').on('click',function(){
                        let currentId = $(this).closest('[data-table="category"]').find('[data-field="id"]').text();
                        $.post("../templates/category.html",null).done(function(resp){
                            $("#content-page").html(resp);
                            //afficher les données de la catégorie
                            $("h3").text("Modifier Catégorie");
                            $('[data-field="id"]').val(currentId);
                            $('[data-field="nom"]').val(Category.byId(currentId).nom);
                            //click valider
                            $("#btnValid").on('click', function(){
                                let obj = {};
                                $( "[data-field]" ).each(function(){//serialiser
                                    let name  = $(this).attr("data-field");
                                    obj[name] = $(this).val();
                                })
                                Category.byId(currentId).update(obj).done(function(){
                                    $.post("../templates/categories.html").done(function(resp){
                                        //to be continued ...
                                    })
                                });

                            })
                            //Ds Update :
                            //-ecrire le json
                            //-modifier app.datas.cat ...
                        })
                    })
                    // for(let i = 0; i<Application.datas.categories.length;i++)
                    for(let category of Application.datas.categories){
                        let tableLine = $('[data-model="category"]').clone(true);
                        $(tableLine).removeAttr('data-model');
                        $(tableLine).find('[data-field="id"]').text(category.id);
                        $(tableLine).find('[data-field="nom"]').text(category.nom);
                        $('[data-display="categories"]').append(tableLine);

                    }

                })
            });
            

        })
    })
})

$('#newProduct').on('click', function(){
    Application.navigate("product");
    return;
})

$('#newUser').on('click', function(){
    Application.navigate("user");
    return;
})

$('#users').on('click', function(){
    Application.navigate("users");
    return;
})

$('#categories').on('click', function(){
    Application.navigate("categories");
    return;
})
$('#products').on('click', function(){
    Application.navigate("products");
    return;
})

// //JQuery get
// let data = {param1: "Hello", param2: "World"};
// $.get("../templates/req.php", data).done(function(response){
//     //Code executé si la requette s'est bien passé
//     console.log(response);
// }).fail(function(error){
//     //Code executé en cas d'erreur
//     console.log("Ajax Error : " + error)
// }).always(function(){
//     //Code toujours executé
// });
// //idem
// $.ajax(
//     {
//         url : "../templates/req.php",
//         type : "GET",//Pour $.post : "POST"
//         dataType : "text",
//         data : data
//     }
// ).done(function(response){
//     //Code executé si la requette s'est bien passé
//     console.log(response);
// }).fail(function(error){
//     //Code executé en cas d'erreur
//     console.log("Ajax Error : " + error)
// }).always(function(){
//     //Code toujours executé
// });