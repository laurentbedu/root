//JQuery get
let data = {param1: "Hello", param2: "World"};
$.get("../templates/req.php", data).done(function(response){
    //Code executé si la requette s'est bien passé
    console.log(response);
}).fail(function(error){
    //Code executé en cas d'erreur
    console.log("Ajax Error : " + error)
}).always(function(){
    //Code toujours executé
});
//idem
$.ajax(
    {
        url : "../templates/req.php",
        type : "GET",//Pour $.post : "POST"
        dataType : "text",
        data : data
    }
).done(function(response){
    //Code executé si la requette s'est bien passé
    console.log(response);
}).fail(function(error){
    //Code executé en cas d'erreur
    console.log("Ajax Error : " + error)
}).always(function(){
    //Code toujours executé
});