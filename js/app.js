/* app.js
* main script file for our little application
* */

"use strict";

$(document).ready(function() {
    //selector: all hyperlink
    $('p a[href!="#top"]').attr('target', '_blank');
    //selector only apply to section 1 and not section 2
    $('#sec1').hide().fadeIn(1000);

    //smooth scroll
    $('nav a, p a[href="#top"]').click(function(eventObject) {
        console.log(this.hash);
        var targetElement = $(this.hash);
        $('html,body').animate({
            scrollTop: targetElement.offset().top - navHeight
        }, 700);

        event.preventDefault();
    });

    var nav = $('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var navPlaceholder = $('.nav-placeholder');
    navPlaceholder.height(navHeight);

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        //console.log(scrollPos);
        if (scrollPos > navTop) {
            nav.addClass('nav-fixed');
            navPlaceholder.show();
        } else {
            nav.removeClass('nav-fixed');
            navPlaceholder.hide();
        }
    });

    //let me go
    $('#exit-button').click(function() {
        $('#confirm-exit-modal').modal();
    });

    $('#confirm-exit-button').click(function() {
        window.location = 'http://students.washington.edu/phansiri/info343/layout-challenge/';
    });
});

