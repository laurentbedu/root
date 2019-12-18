
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
    $.post("../templates/category.html", null).done(function(resp){
        $("#content-page").html(resp);
        $("#btnValid").on('click', function(){
            
            //récupérer les données du formulaire
            let nom = $('[data-field="nom"]').val();
            //créer un nouvel objet category,
            let categ = new Category(0, nom).insert().done(function(resp){
                $.post("../templates/categories.html").done(function(resp){
                    $("#content-page").html(resp);
                    //...
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