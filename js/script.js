$(document).ready(function () {
    //onepagenav
    $('#main_nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
    //smoothscroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true,
        easing: "Linear"
    });
    //mixitup
    var mixer = mixitup('.filteritem');
    //scrollToTop
    var $button = $.backToTop({
        // background color
        backgroundColor: '#c8342d',
        // text color
        color: '#fff',
        // width/height of the back to top button
        height: 40,
        width: 40,
    });
});