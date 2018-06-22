// JavaScript source code
$(document).ready(function () {

    jQuery('body').css('display', 'none');
    jQuery(document).ready(function () {
        jQuery('body').fadeIn(); // Fades in the body
        jQuery('nav a').on('click', function (event) {
            var target = this.getAttribute('target');
            if (target != "_blank") {
                var href = this.getAttribute('href')
                event.preventDefault();
                jQuery('body').fadeOut(function () {
                    window.location = href;
                });
            }
        });
    });
    setTimeout(function () {
        jQuery('body').fadeIn();
    }, 2000);

});

$(document).ready(function () {

    /*All Pages */
    var imgIndex = newFunction(); // Sets array to the first image
    var i;
    var x = document.getElementsByClassName("logoSwitch");

    function fadeImg() {

        for (i = 0; i < x.length; i++) {  //Creates a loop for the logos
            x[i].style.opacity = "0"; 
        }
        imgIndex++;
        if (imgIndex === x.length) {
            imgIndex = 0;
        }
        x[imgIndex].style.opacity = "1";

        setTimeout(fadeImg, 6000); // Set the timer in 6 seconds to fade in the logo
    }
    fadeImg(); // Callsback the fadeImg function
    console.log(imgIndex);

}); //ends document

function newFunction() {
    var imgIndex = 0; // Sets array to the first image
    return imgIndex;
}





