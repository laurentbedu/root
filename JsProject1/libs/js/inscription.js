$('#boutonSend').on('click', function(event, target){
    checkEmptyInputs();
    //let dt = $("#form1").serialize();
})

// $(document).on('submit', function(event, target){
//     event.preventDefault();
//     checkEmptyInputs();
// })

function checkEmptyInputs(){
    
    $(".notempty").each(function (i, elt){
        if(elt.value == ""){
            toggleInputStatus("#" + elt.id);
            $(elt).one('focusin', function(){
                toggleInputStatus("#" + elt.id)
            })
        }
        else if(elt.id == "email"){
            checkMailFormat("#email");
            $(elt).one('focusin', function(){
                toggleInputStatus("#" + elt.id)
            })
        }
        else if(elt.id == "passconfirm"){
            checkPasswords();
            $(elt).one('focusin', function(){
                toggleInputStatus("#" + elt.id)
            })
        }
        let bp;
    })
    
}



function checkMailFormat(selector){
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let saisie = $(selector)[0].value;
    ! saisie.match(pattern) ? 
    toggleInputStatus(selector, "Votre adresse email n'est pas une adresse valide !") 
        : null;
}

function toggleInputStatus(selector, message){
    $(selector).toggleClass("border-danger");
    $(selector).next().toggleClass("d-none");
    message ? $(selector).next()[0].textContent = message : null;
}

function checkPasswords(){
    if($("#password")[0].value != $("#passconfirm")[0].value)
    {
        toggleInputStatus("#passconfirm", "Saississez le même mot de passe !")
    }
}

