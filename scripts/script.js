$(function() {
    
    /* ** Make the navigation sticky ** */

    // When the user scrolls the page, execute makeSticky 
    window.onscroll = function() {makeSticky()};

    // Get the navbar
    let header = document.getElementById("s_header");

    // Get the offset position of the navbar
    let sticky = header.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function makeSticky() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    /* ** Dropdown for navigation ** */

    // $('#drop_home').hover(function(){
    //     $('.drop_menu_h').toggle().style.visibility = "visible";
    // });

    /* ** Back to top function ** */

    // getting the button
    let btn = $('#top_btn');
    
    // adding an event listener for scrolling to the window
    $(window).on('scroll', function() {
        //grabbing the window element
        let position = $(this), 
            //getting the height which won't change unless the window would be resized
            height = position.height(),
            //getting the difference between the top and users current position
            top = position.scrollTop();
        // When the user scrolls down and the top becomes greater then the height, show the button
        if(top > height) {
            btn.show();
        } else {
            btn.hide();
        }  
    });
});


