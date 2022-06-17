"use strict"

$(document).ready(function() {
    new WOW().init();
});

$(document).ready(function() {
    $("#phone_2").mask("+7(999) 999-9999");
    
    $('form').submit(function(event)/*событие*/{
        if ($("#phone_2").val()== "" || $("inputEmail3").val()== ""){
        // если телефон = ничего или почта = ничего, то...
            event.preventDefault(); /*сброс события и не отправка на сервер*/
            alert("Некорректное заполнение полей!");
        }
    });
});