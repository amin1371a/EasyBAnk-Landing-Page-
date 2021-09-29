const body = document.querySelector("body");
const btnHumberger = document.querySelector('#btnHamburger');
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade")


btnHumberger.addEventListener('click',function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){
        body.classList.remove("noscroll");
        header.classList.remove('open');
        fadeElements.forEach(function(element){
            element.classList.add("fade-out");
            element.classList.remove("fade-in");
        });

    }
    else {
        body.classList.add("noscroll");
        header.classList.add('open');
        fadeElements.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in")
        });


    }

});
