"use strict"

//pop up (слайдер)
$(document).ready(function() {
    $('.image-popup').magnificPopup({type:'image'});
});

//pop up (в начале)
let delay_popup = 20000; //время появления в милисек
setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);

//стрелка на телефон
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 100);
        return false;
    });

});

//маска на телефон
$(document).ready(function() {
    $("#phone_2").mask("+7(999) 999-9999");
    
    $('form').submit(function(event)/*событие*/{
        if ($("#phone_2").val()== "" || $("popup-mail").val()== ""){
        // если телефон = ничего или почта = ничего, то...
            event.preventDefault(); /*сброс события и не отправка на сервер*/
            alert("Некорректное заполнение полей!");
        }
    });
});

//отложенная анимация WOW
$(document).ready(function() {
    new WOW().init();
});

 //Анимация активных ссылок в меню (перебор класса в Navbar)
 $(window).scroll(() => {
     let scrollDistance = $(window).scrollTop();

     $('.section').each((i, el) => {
         if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
             $('nav a').each((i, el) => {
                 if ($(el).hasClass('active')) {
                     $(el).removeClass('active');
                 }
             });
             $('nav li:eq(' + i + ')').find('a').addClass('active');
         }
     });
 });

//Калькулятор    
function calculate(){
    let sum = parseInt($("#selectSite option:selected").attr("data-price")) + parseInt($("#selectDesign option:selected").attr("data-price")) + parseInt($("#selectAdaptive option:selected").attr("data-price"));
    let days = parseInt($("#selectSite option:selected").attr("data-time")) + parseInt($("#selectDesign option:selected").attr("data-time")) + parseInt($("#selectAdaptive option:selected").attr("data-time"));
     $(".price-calc .total_span").text(sum);
     $(".price-calc .total_span-day").text(days);
 }
 calculate();
    $("select").on("change", function(){
    calculate();
});

//Бегающие цифры статистики
let optionsStat = {
    threshold: [0.5]
};
let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
let elementsStat = $('.statAnimation');

elementsStat.each((i, el) => {
    observerStat.observe(el);
});


function onEntryStat(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            if(!$('.statAnimation').hasClass("done")){
                $('.statAnimation').addClass("done");
                $('.statAnimation').spincrement({
                 thousandSeparator: "",
                 duration: 3000
            });
          }
        }
    });
}