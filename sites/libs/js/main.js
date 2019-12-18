
let Application = {};
let productRequest = $.post("../templates/get_table.php", {table:"products"})
let categoryRequest = $.post("../templates/get_table.php", {table:"categories"})
$.when(productRequest,categoryRequest).then(function(productResp, categoryResp){
    Application.datas = {
        products : Product.fromJsonObjArray(JSON.parse(productResp[0])),
        categories : Category.fromJsonObjArray(JSON.parse(categoryResp[0]))
    };
    Application.datas.products;
    Application.datas.categories;
    let bp;
})


$("#newCategory").on('click', function(){
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
                            
                            //click valider

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