/**
 * Created by mlocher on 5/19/2015.
 */
(function() {
    $(document).ready(function () {
        // Register Navigation event
        // Bind an event to window.onhashchange that, when the history state changes,
        // gets the url from the hash and displays either our cached content or fetches
        // new content to be displayed.
        $(window).bind('hashchange', function (e) {

            // Get the hash (fragment) as a string
            var pageName = $.param.fragment();

            if(pageName && pageName != "") {
                setActiveLink(pageName);
                LoadContent(pageName);
            }
        });

        //Remove page loader
        setTimeout(function(){
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website
            $(window).trigger('hashchange');
        }, 750);


    });

    function LoadContent(page){
        $('#content').slideUp( 1500, function(){
            //Load the content
            $('#content').load(page + ".php", function( response, status, xhr ) {
                var content = $('#content');

                if ( status == "error" ) {
                    var msg = "Sorry but there was an error: ";
                    content.html('<h1>' + msg + xhr.status + " " + xhr.statusText + '</h1>');
                    content.addClass('error');
                }
                else {
                    content.removeClass('error');
                    content.slideDown(1500);
                }
            });
        });
    }

    function setActiveLink(page) {

        //Remove current active link
        $("#navbar .active").removeClass("active");

        //Set active link
        $("#" + page).addClass("active");
    }

})();
