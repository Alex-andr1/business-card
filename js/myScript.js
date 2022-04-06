"use strict"

$(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });

// 43.00


$(document).ready(function(){

    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver (onEntry, options);
    let elements = $('.center');
    elements.each((i,el) => {
        observer.observe(el);
    });

});

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){

            //change.target.classlist.add('show-animation');
            change.target.src = change.target.dataset.src;

        }
    });
}

//30.30


/*
// 20.30 - 25.30 постепенная загрузка изображения
$(document).ready(function(){

    let options = {threshold: [0.5]};
    let observer = new IntersectionObserver (onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);
    });

});

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classlist.add('show-animation');
        }
    });
}
























/*
// перебор класса active в Navbar
$(document).ready(function(){

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) => {

            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){ //
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
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"}); //
});
*/