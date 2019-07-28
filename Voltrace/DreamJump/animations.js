"use strict";
$(document).ready(function(){
    
    
    $(window).load(function(){
        var w = $(window).width();
        $(".info").css('font-size',w <= 1024 ? "1em" : "3em");
        $(".parallax-window h1").css('font-size',w <= 1024 ? "1.6em" : "3em");
    });
    
    $(window).ready(function(){
        var w = $(window).width();
        $(".info").css('font-size',w <= 1024 ? "1em" : "3em");
        $(".parallax-window h1").css('font-size',w <= 1024 ? "1.6em" : "3em");
    });
	
	$(window).resize(function(){
        var w = $(window).width();
        $(".info").css('font-size',w < 1024 ? "1em" : "3em");
        $(".parallax-window h1").css('font-size',w <= 1024 ? "1.6em" : "3em");
    });
   
   $("#crate").click(function(){
       $("#crate").animate({opacity: 0}, 800);
       $("#jawbreaker").delay(1000).animate({opacity: "1"}, 2000, "swing");
       $("#jawbreaker").toggleClass("animateJB");
       $("#cookie1").toggleClass("animate1");
       $("#cookie2").toggleClass("animate2");
       $("#cookie3").toggleClass("animate3");
       $("#gummy").toggleClass("gummyAnimate");
       $(".info").toggleClass("animate3");
       $("#crate").delay(1000).hide(0);
   });

});