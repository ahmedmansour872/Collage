$(document).ready(function() { 
    $(".toggle").click(function() { 
        $(".navbar-top .en").toggleClass("show")
    });

    $(".nav_toggle .icon").click(function() { 
        $(".navbar .main_menu .super_menu").toggleClass("show")
    });

    $(window).on("scroll",function(){
        if($(window).scrollTop()>600){
            $("header .navbar").addClass("fixed")
            $(".scroll_top").show()
        }
        else{
            $("header .navbar").removeClass("fixed")
            $(".scroll_top").hide()
        }
    })
});

let x=document.getElementById("super_menu")
let scrolling=document.getElementById("scroll")

function scrollToTop() { 
    $(window).scrollTop(0); 
} 

setInterval(function(){
    if(window.innerWidth>991){
        if(x.classList.contains("show")){
            x.classList.remove("show")
    }
    }
})

window.onscroll = function(){
    if(window.pageYOffset >= 1600){
        $('.timer').countTo({form:0,to:35000,speed:2000,refreshInterval: 10,});
        $('.timer1').countTo({form:0,to:1000,speed:2000,refreshInterval: 10,});
        $('.timer2').countTo({form:0,to:5000,speed:2000,refreshInterval: 10,});
        $('.timer3').countTo({form:0,to:3675,speed:2000,refreshInterval: 10,});
    }else{
        $('.timer').countTo({form:0,to:0,speed:2000,refreshInterval: 10,});
        $('.timer1').countTo({form:0,to:0,speed:2000,refreshInterval: 10,});
        $('.timer2').countTo({form:0,to:0,speed:2000,refreshInterval: 10,});
        $('.timer3').countTo({form:0,to:0,speed:2000,refreshInterval: 10,});
    }
}