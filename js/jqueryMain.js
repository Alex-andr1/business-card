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

/*калькулятор денег*/
/*        (function() {
            document.querySelectorAll('.box-select').forEach(e => {
                e.querySelector('.select').insertAdjacentHTML('afterBegin', `<option disabled selected style="background-color: #cccaca;">Выберите пункт...</option>`);
/*                [...e.querySelector('.select').children].forEach((e,i) => e.dataset.id = i + 1 );
            });
        })();
         
        /*считаем деньги*/
/*        function calc(e) {
            let target = e.target.selectedOptions[0];
            if (target.parentElement.classList.contains('select')) {
                let summ = this.parentElement.querySelector('.summ');
                let new_div = `<div class="position">${target.outerHTML.replace(/option/g,'span')}<span class="close">X</span></div>`;
                target.disabled = true;
                this.children[0].selected = true;
                this.parentElement.querySelector('.list').insertAdjacentHTML('beforeEnd', new_div);
                summ.textContent = +summ.textContent + +target.dataset.price; /*см. price/time*/
/*            }
            total();
        }
        /*считаем дни*/ /*
        function calcDay(e) {
            let target = e.target.selectedOptions[0];
            if (target.parentElement.classList.contains('select')) {
                let summ = this.parentElement.querySelector('.summ-day');
                let new_div = `<div class="position-day">${target.outerHTML.replace(/option/g,'span')}<span class="close">X</span></div>`;
                target.disabled = true;
                this.children[0].selected = true;
                this.parentElement.querySelector('.list-day').insertAdjacentHTML('beforeEnd', new_div);
                summ.textContent = +summ.textContent + +target.dataset.time; /*см. price/time*//*
            }
            totalDay();
        }*/
         
        /*удаляем деньги*/
/*        function del(e) {
            if (e.target.classList.contains('close')) {
                let data_id = +e.target.previousElementSibling.dataset.id;
                let parent = e.currentTarget.parentElement;
                parent.querySelector(`.select [data-id="${data_id}"]`).disabled = false;
                parent.querySelector(`.select`).children[0].selected = true;
                parent.querySelector('.summ').textContent = +parent.querySelector('.summ').textContent - +e.target.previousElementSibling.dataset.price;
                e.target.closest('.position').remove();
            }
            total();
        }
        /*удаляем дни*/ /*
        function delDay(e) {
            if (e.target.classList.contains('close')) {
                let data_id = +e.target.previousElementSibling.dataset.id;
                let parent = e.currentTarget.parentElement;
                parent.querySelector(`.select [data-id="${data_id}"]`).disabled = false;
                parent.querySelector(`.select`).children[0].selected = true;
                parent.querySelector('.summ-day').textContent = +parent.querySelector('.summ-day').textContent - +e.target.previousElementSibling.dataset.time;
                e.target.closest('.position-day').remove();
            }
            totalDay();
        }*/
         
        /*общая сумма денег*/
/*        function total() {
            document.querySelector('.total_span').textContent = [...document.querySelectorAll('.summ')].map(e => +e.textContent).reduce((a,b) => a + b);
        }
         
        document.querySelectorAll('.box-select .select').forEach(e => e.addEventListener('change', calc) );
        document.querySelectorAll('.box-select .list').forEach(e => e.addEventListener('click', del) );

        /*общая сумма дней*/ /*
        function totalDay() {
            document.querySelector('.total_span-day').textContent = [...document.querySelectorAll('.summ-day')].map(e => +e.textContent).reduce((a,b) => a + b);
        }
         
        document.querySelectorAll('.box-select .select').forEach(e => e.addEventListener('change', calcDay) );
        document.querySelectorAll('.box-select .list-day').forEach(e => e.addEventListener('click', delDay) );
        */

/*
// перебор класса active в Navbar
$(document).ready(function(){

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) => {

            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                $("nav a").each((e, el) => {
                    if ($(el).hasClass("active")){
                        $(el).removeClass("active");
                    }
                });
                $('nav li:eq('+ i +')').find('a').addClass('active');
            }
        });
    });
});

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});

/*
//слайдер нижний
$(function(){
    var tolerance = 100;
    var speed = 650;
    var interactiveElements = $('input, button, a');
    var itemsLength = $('.panel').length;
    var active = 1;
    for (i=1; i<=itemsLength; i++){
        var $layer = $(".panel:nth-child("+i+")");
        var bgImg = $layer.attr("img");
        $layer.css({
            "background": "url("+bgImg+") no-repeat center / cover"
        });
    };
    setTimeout(function() {
        $(".panel").css({
            "transition": "cubic-bezier(.4,.95,.5,1.5) "+speed+"ms"
        });
    }, 200);
    $(".panel:not(:first)").addClass("right");
    function swipeScreen() {
        $('.swipe').on('mousedown touchstart', function(e) {
            
            var touch = e.originalEvent.touches;
            var start = touch ? touch[0].pageX : e.pageX;
            var difference;
            $(this).on('mousemove touchmove', function(e) {
                var contact = e.originalEvent.touches,
                end = contact ? contact[0].pageX : e.pageX;
                difference = end-start;
            });
            $(window).one('mouseup touchend', function(e) {
                e.preventDefault();
                // Переход вправо:
                if (active < itemsLength && difference < -tolerance) {
                    $(".panel:nth-child("+active+")").addClass("left");
                    $(".panel:nth-child("+(active+1)+")").removeClass("right");
                    active += 1;
                    btnDisable();
                };
                // Переход влево:
                if (active > 1 && difference > tolerance) {
                    $(".panel:nth-child("+(active-1)+")").removeClass("left");
                    $(".panel:nth-child("+active+")").addClass("right");
                    active -= 1;
                    btnDisable();
                };
                $('.swipe').off('mousemove touchmove');
            });
        });
    };
    swipeScreen();
    interactiveElements.on('touchstart touchend touchup', function(e) {
        e.stopPropagation();
    });
    // Кнопки:
    $(".btn-prev").click(function(){
        // Переход влево:
        if (active > 1) {
            $(".panel:nth-child("+(active-1)+")").removeClass("left");
            $(".panel:nth-child("+active+")").addClass("right");
            active -= 1;
            btnDisable();
        };
    });
    $(".btn-next").click(function(){
        // Переход вправо:
        if (active < itemsLength) {
            $(".panel:nth-child("+active+")").addClass("left");
            $(".panel:nth-child("+(active+1)+")").removeClass("right");
            active += 1;
            btnDisable();
        };
    });
    function btnDisable() {
        if (active >= itemsLength) {
            $(".btn-next").prop("disabled", true);
            $(".btn-prev").prop("disabled", false);
        }
        else if (active <= 1) {
            $(".btn-prev").prop("disabled", true);
            $(".btn-next").prop("disabled", false);
        }
        else {
            $(".btn-prev, .btn-next").prop("disabled", false);
        };
    };
});
*/