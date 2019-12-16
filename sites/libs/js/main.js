// //synchrone, asyncrone
// function boucle(max){
//     console.log("Début Boucle")
//     for (let i = 0; i<max;i++){
//         let j = i;
//     }
//     console.log("Fin Boucle")
// }
// console.log("Début Code");
// //boucle(5000000000);
// setTimeout(boucle,1000,5000000000)
// console.log("Fin Code");

//js ajax get ou post
//syncrone
function syncAjax(){
    let method = "GET";
    let url = "../templates/req.php";
    let async = false;
    let data = null;
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.send(data);
    $("#content-foot").html(xhr.responseText);
}

// console.log("Début Code");
// syncAjax();
// console.log("Fin Code");

//asyncrone
function asyncAjax(){
    let method = "GET";
    let url = "../templates/req.php";
    let async = true;
    let data = null;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(evt) { 
        if (xhr.readyState == 4 && xhr.status == 200){
            $("#content-foot").html(xhr.responseText);
            let bp;
        }
    }
    xhr.open(method, url, async);//3 ème paramètre optionnel en asynchrone
    xhr.send(data);
    $("#content-foot").html(xhr.responseText);
}
//asyncAjax();

function asyncAjaxWithData(){
    let method = "GET";
    let url = "../templates/req.php";
    let async = true;
    let data = "?param1=Hello&param2=World"
    url += data;
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(evt) { 
        if (xhr.readyState == 4 && xhr.status == 200){
            $("#content-foot").html(xhr.responseText);
            let bp;
        }
    }
    xhr.open(method, url);
    xhr.send();
}
//asyncAjaxWithData();

//POST
function asyncAjaxWithDataPost(){
    let method = "POST";
    let url = "../templates/req.php";
    let async = true;
    let data = "param1=Hello&param2=World";
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(evt) { 
        if (xhr.readyState == 4 && xhr.status == 200){
            $("#content-foot").html(xhr.responseText);
            let bp;
        }
    }
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}
// asyncAjaxWithDataPost();

let data = {param1: "Hello", param2: "World"};
$.get("../templates/req.php", data).done(function(response){
    //$("#content-foot").html(response);
});
$.post("../templates/req.php", data).done(function(response){
    //$("#content-foot").html(response);
});
let header;
let home;
let footer;
let loader = "<div></div>";
$( loader ).load( "../templates/head.html", function(resp){
    header = resp;
    $('#content-head').append(header);
});
$( loader ).load( "../templates/home.html", function(resp){
    home = resp;
    $('#content-page').append(home);
});
$( loader ).load( "../templates/foot.html", function(resp){
    footer = resp;
    $('#content-foot').append(footer);
});

for(let i=0; i<100; i++){
    $.post("../templates/req.php", data).done(function(response){
        console.log(i);
    });
}



$.getScript("../libs/js/classes.js", function(){
    console.log(variableDansClasses);
    myFunc();
});
//console.log(variableDansClasses);






