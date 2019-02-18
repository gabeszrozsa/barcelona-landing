import $ from "jquery";

const LINKS = 'a[href^="#"]';
const NAVBAR_HEIGHT = 70;
const DURATION = 1000;

const scrollToTarget = function(event) {
    const target = $(this.getAttribute('href'));

    if(target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - NAVBAR_HEIGHT
        }, DURATION);
    }

};

$(LINKS).on('click', scrollToTarget);
